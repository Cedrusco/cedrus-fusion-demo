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


app.get('/component/:demo/:number', (req, res, next) => {
    let componentsPath = path.join(appPath, 'app');
    res.json(getSource(req, componentsPath));
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

        let indexHtml = fs.readFileSync(path.join(rootPath, 'server/index.html'), encoding);
        let systemJsConfig = fs.readFileSync(path.join(rootPath, 'server/systemjs.config.js'), encoding);
        let mainTs = fs.readFileSync(path.join(rootPath, 'server/main.ts'), encoding);

        let plunkrTs = tsContents.replace(/export class .* \{/, 'export class Demo {');
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

    let stylesPath = 'docs/assets/css';
    let styles = '';

    let cssfilename = `main.css`;

    styles = fs.readFileSync(path.join(appPath, '..', stylesPath, cssfilename), encoding);
    styles = styles + " section div a { pointer-events: none; cursor: default; color: black;}";

    let docsPath = 'docs/classes';
    let componentDocs = '';
    let modelDocs = '';
    let modelStylingDocs = '';
    let stylingModel = '';

    let componentFile = `_src_lib_src_components_${docsName}_${docsName}_component_.cf${docName}component.html`;
    let modelFile = `_src_lib_src_models_${docsName}_${docsName}_model_.${docName}model.html`;
    let modeStylingFile = `_src_lib_src_models_${docsName}_${docsName}_styling_model_.${docName}stylingmodel.html`;
    let stylingModelFile = `_src_lib_src_models_style_styling_model_.stylingmodel.html`;

    try {
        componentDocs = fs.readFileSync(path.join(appPath, '..', docsPath, componentFile), encoding);
    } catch (err) {
        componentDocs = "";
    }
    try {
        modelDocs = fs.readFileSync(path.join(appPath, '..', docsPath, modelFile), encoding);
    } catch (err) {
        modelDocs = "";
    }
    try {
        modelStylingDocs = fs.readFileSync(path.join(appPath, '..', docsPath, modeStylingFile), encoding);
    } catch (err) {
        modelStylingDocs = "";
    }
    try {
        stylingModel = fs.readFileSync(path.join(appPath, '..', docsPath, stylingModelFile), encoding);
    } catch (err) {
        stylingModel = "";
    }
    let $1 = cheerio.load(componentDocs);
    let $2 = cheerio.load(modelDocs);
    let $3 = cheerio.load(modelStylingDocs);
    let $4 = cheerio.load(stylingModel);

    $1('head').append('<style>' + styles + '</style>');
    $1('header').remove();
    $1('link').remove();
    $1('.col-menu').remove();
    $1('.tsd-sources').remove();
    $1('footer').remove();
    $1('.tsd-generator').remove();
    $1('.tsd-hierarchy').parents('section').remove();
    $1('.tsd-index-group').remove();
    $1('Implements').remove();
    $1('.col-8').addClass('col-12');
    $1('.col-8').removeClass('col-8');

    $2('head').append('<style>' + styles + '</style>');
    $2('header').remove();
    $2('.tsd-generator').remove();
    $2('.col-menu').remove();
    $2('.tsd-sources').remove();
    $2('.tsd-hierarchy').remove();
    $2('.tsd-index-group').remove();
    $2('.tsd-kind-constructor').parents('section').remove();
    $2('footer').remove();
    $2('.col-8').addClass('col-12');
    $2('.col-8').removeClass('col-8');

    $3('head').append('<style>' + styles + '</style>');
    $3('header').remove();
    $3('.tsd-generator').remove();
    $3('.col-menu').remove();
    $3('.tsd-sources').remove();
    $3('.tsd-hierarchy').remove();
    $3('.tsd-index-group').remove();
    $3('.tsd-kind-constructor').parents('section').remove();
    $3('footer').remove();
    $3('.col-8').addClass('col-12');
    $3('.col-8').removeClass('col-8');

    $4('head').append('<style>' + styles + '</style>');
    $4('header').remove();
    $4('.tsd-generator').remove();
    $4('.col-menu').remove();
    $4('.tsd-sources').remove();
    $4('.tsd-hierarchy').remove();
    $4('.tsd-index-group').remove();
    $4('.tsd-kind-constructor').parents('section').remove();
    $4('footer').remove();
    $4('.col-8').addClass('col-12');
    $4('.col-8').removeClass('col-8');


    return {
        "examples": examples,
        "documentation": {
            "componentDocs": $1.html(),
            "modelDocs": $2.html(),
            "modelStylingDocs": $3.html(),
            "stylingModel": $4.html()
        }
    };

}

app.listen(PORT, () => console.log(`Service running on port ${PORT}`));