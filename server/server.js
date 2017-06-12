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


app.get('/component/:demo/:number', (req, res, next) => {
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

    return {
        "examples": examples,
        "documentation": docs
    };

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