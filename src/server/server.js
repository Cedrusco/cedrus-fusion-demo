'use strict';

let fs = require('fs');
let path = require('path');
let express = require('express');
let cheerio = require('cheerio');
let nodemailer = require('nodemailer');
let twilio = require('twilio');
let bodyParser = require('body-parser');
let app = express();

let PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const rootPath = path.join(__dirname, '../../');
const appPath = path.join(rootPath, 'src');


app.get('/component/:demo/:number/:files', (req, res, next) => {
    let componentsPath = path.join(appPath, 'app');
    res.json(getSource(req, componentsPath));
});


function getSource(req, folderPath) {

    var examples = [];
    console.log('\x1b[32m','REQUEST');
    console.log('\x1b[33m','req.params:','\x1b[35m',req.params);
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

        let indexHtml = fs.readFileSync(path.join(rootPath, 'server/index.html'), encoding);
        let systemJsConfig = fs.readFileSync(path.join(rootPath, 'server/systemjs.config.js'), encoding);
        let mainTs = fs.readFileSync(path.join(rootPath, 'server/main.ts'), encoding);

        let templateContents;
        try {
            templateContents = fs.readFileSync(path.join(rootPath, 'templates/default', `${name}-template.json`), encoding);
        } catch (err) {
            templateContents = "";
        }
        let configJson = fs.readFileSync(path.join(rootPath, 'server/fusion-config.json'), encoding);

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
            template: templateContents,
            plunkr: {
                indexHtml: indexHtml,
                systemJs: systemJsConfig,
                mainTs: mainTs,
                plunkrTs: plunkrTs,
                configJson: configJson
            }
        };

        examples.push(sourceObject);
    }

    let finalObject = {
        "examples": examples,
        "documentation": "",
        //"stylingModel": ""
    }

    //Get the styles from main.css for the documents
    let stylesPath = 'docs/assets/css';
    let styles = '';

    let cssfilename = `main.css`;

    styles = fs.readFileSync(path.join(appPath, '..', stylesPath, cssfilename), encoding);
    styles = styles + " section div a { pointer-events: none; cursor: default; color: black;}";

    //Get the Styling Model common for all
    //let stylingModelFile = `_src_lib_src_models_style_styling_model_.stylingmodel.html`;
    //let $4 = prepareAPIDocuments(stylingModelFile, styles, "model", appPath, encoding);
    //finalObject["stylingModel"] = $4.html();

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
        // let modelFile = `_src_lib_src_models_${names[i].split("_")[0]}_${names[i]}_model_.${names[i].replace("_","")}model.html`;
        let modelFile = `_src_lib_src_models_${names[i]}_${names[i]}_model_.${names[i].replace("_","")}model.html`;
        console.log(modelFile);
        //let modeStylingFile = `_src_lib_src_models_${names[i].split("_")[0]}_${names[i]}_styling_model_.${names[i].replace("_","")}stylingmodel.html`;

        let $1 = prepareAPIDocuments(componentFile, styles, "component", appPath, encoding);
        let $2 = null;
        if (names[i] == "selectable") {
            let checkboxComp = `_src_lib_src_components_checkbox_checkbox_component_.cfcheckboxcomponent.html`;
            $2 = prepareAPIDocuments(checkboxComp, styles, "component", appPath, encoding);
        }
        let $3 = prepareAPIDocuments(modelFile, styles, "model", appPath, encoding);
        //let $4 = prepareAPIDocuments(modeStylingFile, styles, "model", appPath, encoding);

        reorganizeDocuments($1, $2, $3);

        finalObject["documentation"] = {
            "name": capitalizeFirstLetter(name),
            "componentDocs": $1.html(),
            //"modelDocs": $2.html(),
            //"modelStylingDocs": $3.html(),
        };
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

function reorganizeDocuments($, $2, $3) {
    // let $Inherited = $('.tsd-is-inherited');
    // $($Inherited).remove();
    let $properties = $("section.tsd-member").find("h3:contains('properties')").parent();
    $($properties).remove();
    let $styling;
    if ($2 != null)
        $styling = $2("section.tsd-member").find("h3:contains('styling')").parent();
    else {
        $styling = $("section.tsd-member").find("h3:contains('styling')").parent();
        $($styling).remove();
    }

    let $eventoutputs = $("section.tsd-member").find("div").find("span:contains('EventEmitter')").parent().parent();

    //let $methods = $(".tsd-member-group").find("h2:contains('Methods')").parent().find("section.tsd-member");
    let $methodsSection = $(".tsd-member-group").find("h2:contains('Methods')").parent();
    $($methodsSection).remove();

    let $remove = $('.tsd-member');
    $($remove).remove();
    $("h2:contains('Properties')").remove();
    let $Inherited = $3('.tsd-is-inherited');
    $3($Inherited).remove();
    let $rest = $3('.tsd-member');
    $3($rest).remove();

    $('.tsd-member-group').append('<h1>Property Model</h1>');
    $('.tsd-member-group').append('<p>To configure the component, a user can pass a properties object as an input to the component</p>');
    $('.tsd-member-group').append($properties);
    $('.tsd-member-group').append('<h1>Inputs</h1>');
    $('.tsd-member-group').append('<p>To override any of the attributes defined in the properties object, the user can pass the attributes in the properties model as inputs</p>');
    $('.tsd-member-group').append('<p><pre><code><</code>cf-component attribute1="value1" attribute2="value2" ...<code>></code><code><</code>/cf-component<code>></code></pre></p>');
    $('.tsd-member-group').append('<h2>Core Inputs</h2>');
    $('.tsd-member-group').append($Inherited);
    $('.tsd-member-group').append('<h2>Component Inputs</h2>');
    $('.tsd-member-group').append($rest);
    $('.tsd-member-group').append('<h1>Outputs</h1>');
    $('.tsd-member-group').append('<p><pre><code><</code>cf-component (outputName)="myFunction($event)"<code>></code><code><</code>/cf-component<code>></code></pre></p>');
    $('.tsd-member-group').append($eventoutputs);
    $('.tsd-member-group').append('<h2>Styling Model</h2>');
    $('.tsd-member-group').append('<p>To style the component, the user must pass as an input the styling object defined below:</p>');
    $('.tsd-member-group').append($styling);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(PORT, () => console.log("\x1b[36m",`** Server for loading demos files is running on port ${PORT} **`));