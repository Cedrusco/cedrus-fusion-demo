// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
let fs = require('fs');
let cheerio = require('cheerio');
let nodemailer = require('nodemailer');
let twilio = require('twilio');



const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const rootPath = path.join(__dirname, '../');
const appPath = path.join(rootPath, 'src');

// Get our API routes
const api = require('./routes/api');

// Point static path to dist
app.use(express.static(path.join(rootPath, 'dist')));

// Set our api routes
app.use('/api', api);
app.use('/assets', express.static(path.join(rootPath, 'src/app/assets')));


app.get('/component/:demo/:number/:files', (req, res, next) => {
    let componentsPath = path.join(appPath, 'app');
    res.json(getSource(req, componentsPath));
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(rootPath, 'dist/index.html'));
});

function getSource(req, folderPath) {

    var examples = [];
    console.log('REQUEST');
    console.log('req.params', req.params);
    // let [name, number] = req.params.demo.split('-');

    let encoding = {
        encoding: 'UTF8'
    };

    let name = '',
        docName = '',
        docsName = '',
        number = '',
        demoName = req.params.demo.split('-'),
        length = parseInt(req.params.number);

    for (var k = 1; k <= length; k++) {

        name = '';
        docName = '';
        docsName = '';
        number = '';
        demoName = req.params.demo.split('-');

        for (var i = 0; i < demoName.length; i++) {
            if (isNaN(demoName[i])) {
                name = (name !== '') ? name + ('-' + demoName[i]) : name + demoName[i];
                docsName = (docsName !== '') ? docsName + ('_' + demoName[i]) : docsName + demoName[i];
                docName = docName + demoName[i];
            } else {
                number = number + demoName[i];
            }
        };

        let tsContents = fs.readFileSync(path.join(folderPath, 'demos', name, `demo.${name}-${k}.ts`), encoding);
        let htmlContents = fs.readFileSync(path.join(folderPath, 'demos', name, `demo.${name}-${k}.html`), encoding);
        let sassContents = fs.readFileSync(path.join(folderPath, 'demos', name, `demo.${name}-${k}.scss`), encoding);

        let indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), encoding);
        let systemJsConfig = fs.readFileSync(path.join(__dirname, 'systemjs.config.js'), encoding);
        let mainTs = fs.readFileSync(path.join(__dirname, 'main.ts'), encoding);

        let plunkrTs = tsContents.replace(/export class .* \{/, 'export class Demo {');
        plunkrTs = plunkrTs.replace(/export class .*\{/, 'export class Demo {');
        plunkrTs = plunkrTs.replace('moduleId: module.id,', '');
        plunkrTs = plunkrTs.replace(/selector: .*,/, 'selector: \'demo\',');
        plunkrTs = plunkrTs.replace(/templateUrl: .*,/, 'templateUrl: \'demo.html\',');
        plunkrTs = plunkrTs.replace(/styleUrls: .*\]/, 'styleUrls: [\'demo.css\'],');

        let sourceObject = {
            ts: tsContents,
            html: htmlContents,
            sass: sassContents,
            plunkr: {
                indexHtml: indexHtml,
                systemJs: systemJsConfig,
                mainTs: mainTs,
                plunkrTs: plunkrTs
            }
        };

        examples.push(sourceObject);
    }

    let finalObject = {
        "examples": examples,
        "documentation": [],
        "stylingModel": ""
    }

    //Get the styles from main.css for the documents
    let stylesPath = 'docs/assets/css';
    let styles = '';

    let cssfilename = `main.css`;

    styles = fs.readFileSync(path.join(appPath, '..', stylesPath, cssfilename), encoding);
    styles = styles + " section div a { pointer-events: none; cursor: default; color: black;}";

    //Get the Styling Model common for all
    let stylingModelFile = `_src_lib_src_models_style_styling_model_.stylingmodel.html`;
    let $4 = prepareAPIDocuments(stylingModelFile, styles, "model", appPath, encoding);
    finalObject["stylingModel"] = $4.html();

    //Get the names of the requested files, if no files were requested, get the normal docsName
    var names = [];
    if (req.params.files != 'undefined')
        names = req.params.files.split(',');
    else {
        names = [docsName];
    }

    for (var i = 0; i < names.length; i++) {
        let name = names[i];
        names[i] = names[i].replace("-", "_");
        let componentFile = `_src_lib_src_components_${names[i]}_${names[i]}_component_.cf${names[i].replace("_","")}component.html`;
        let modelFile = `_src_lib_src_models_${names[i].split("_")[0]}_${names[i]}_model_.${names[i].replace("_","")}model.html`;
        let modeStylingFile = `_src_lib_src_models_${names[i].split("_")[0]}_${names[i]}_styling_model_.${names[i].replace("_","")}stylingmodel.html`;

        let $1 = prepareAPIDocuments(componentFile, styles, "component", appPath, encoding);
        let $2 = prepareAPIDocuments(modelFile, styles, "model", appPath, encoding);
        let $3 = prepareAPIDocuments(modeStylingFile, styles, "model", appPath, encoding);

        reorganizeDocuments($1);

        finalObject["documentation"].push({
            "name": capitalizeFirstLetter(name),
            "componentDocs": $1.html(),
            "modelDocs": $2.html(),
            "modelStylingDocs": $3.html(),
        })
    }

    return finalObject;

}


function prepareAPIDocuments(file, styles, type, appPath, encoding) {
    let docsPath = 'docs/classes';
    let docs = '';
    try {
        docs = fs.readFileSync(path.join(appPath, '..', docsPath, file), encoding);
    } catch (err) {
        docs = "";
    }
    let $ = cheerio.load(docs);
    $('head').append('<style>' + styles + '</style>');
    $('header').remove();
    if (type == "component") {
        $('link').remove();
        $('.col-menu').remove();
        $('.tsd-sources').remove();
        $('.tsd-generator').remove();
        $('.tsd-hierarchy').parents('section').remove();
        $('.tsd-index-group').remove();
        $('Implements').remove();
        $('.tsd-kind-constructor').parents('section').remove();
    } else {
        $('.tsd-generator').remove();
        $('.col-menu').remove();
        $('.tsd-sources').remove();
        $('.tsd-hierarchy').remove();
        $('.tsd-index-group').remove();
        $('.tsd-kind-constructor').parents('section').remove();
    }
    $('footer').remove();
    $('.col-8').addClass('col-12');
    $('.col-8').removeClass('col-8');
    return $;
}

function reorganizeDocuments($) {
    let $Inherited = $('.tsd-is-inherited');
    $($Inherited).remove();
    let $properties = $("section.tsd-member").find("h3:contains('properties')").parent();
    $($properties).remove();
    let $styling = $("section.tsd-member").find("h3:contains('styling')").parent();
    $($styling).remove();
    let $rest = $('.tsd-member');
    $($rest).remove();
    $("h2:contains('Properties')").remove();

    $('.tsd-member-group').append('<h1>Inputs</h1>');
    $('.tsd-member-group').append('<p>To configure the component, a user can pass a properties object as an input to the component</p>');
    $('.tsd-member-group').append($properties);
    $('.tsd-member-group').append('<p>To override any of the attributes defined in the properties object, the user can pass the inputs defined below:</p>');
    $('.tsd-member-group').append($Inherited);
    $('.tsd-member-group').append($rest);
    $('.tsd-member-group').append('<h2>Styling the Component:</h2>');
    $('.tsd-member-group').append('<p>To style the component, the user must pass as an input the styling object defined below:</p>');
    $('.tsd-member-group').append($styling);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '2000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));