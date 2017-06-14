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

    let docsPath = 'docs/classes';
    let documentation = '';

    let filename = `_src_lib_src_components_${docsName}_${docsName}_component_.cf${docName}component.html`;

    documentation = fs.readFileSync(path.join(appPath, '..', docsPath, filename), encoding);
    let $ = cheerio.load(documentation);
    let docs = $('.container-main .col-content').html();

    let stylesPath = 'docs/assets/css';
    let styles = '';

    let cssfilename = `main.css`;

    styles = fs.readFileSync(path.join(appPath, '..', stylesPath, cssfilename), encoding);
    $('head').append('<style>' + styles + '</style>');
    $('header').remove();
    $('link').remove();
    $('.col-menu').remove();
    $('footer').remove();
    $('.tsd-generator').remove();
    $('.tsd-hierarchy').parents('section').remove();


    $('.tsd-index-group').remove();
    $('Implements').remove();
    $('.col-8').addClass('col-12');
    $('.col-8').removeClass('col-8');


    return {
        "examples": examples,
        "documentation": $.html()
    };

}

app.listen(PORT, () => console.log(`Service running on port ${PORT}`));