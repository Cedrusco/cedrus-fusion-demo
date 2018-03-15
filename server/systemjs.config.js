/** Add Transpiler for Typescript */
System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true,
    },
    packages: {
        '.': {
            defaultExtension: 'ts'
        },
        'vendor': {
            defaultExtension: 'js'
        }
    }
});

System.config({
    map: {
        'main': 'main.js',

        // Angular specific mappings.
        '@angular/core': 'https://unpkg.com/@angular/core@4.4.4/bundles/core.umd.js',
        '@angular/animations': 'https://unpkg.com/@angular/animations@4.4.4/bundles/animations.umd.js',
        '@angular/common': 'https://unpkg.com/@angular/common@4.4.4/bundles/common.umd.js',
        '@angular/common/http': 'https://unpkg.com/@angular/common@4.4.4/bundles/common-http.umd.js',
        '@angular/compiler': 'https://unpkg.com/@angular/compiler@4.4.4/bundles/compiler.umd.js',
        '@angular/http': 'https://unpkg.com/@angular/http@4.4.4/bundles/http.umd.js',
        '@angular/forms': 'https://unpkg.com/@angular/forms@4.4.4/bundles/forms.umd.js',
        '@angular/router': 'https://unpkg.com/@angular/router@4.4.4/bundles/router.umd.js',
        '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser@4.4.4/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic@4.4.4/bundles/platform-browser-dynamic.umd.js',
        '@angular/animations/browser': 'https://unpkg.com/@angular/animations@4.4.4/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'https://unpkg.com/@angular/platform-browser@4.4.4/bundles/platform-browser-animations.umd.js',
        '@angular/material': 'https://unpkg.com/@angular/material@2.0.0-beta.7/bundles/material.umd.js',
        '@angular/cdk': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk.umd.js',

        // external libs
        '@swimlane/ngx-datatable': 'https://unpkg.com/@swimlane/ngx-datatable@9.3.0/release/index.js',

        'd3-array': 'https://npmcdn.com/d3-array',
        'd3-brush': 'https://npmcdn.com/d3-brush',
        'd3-shape': 'https://npmcdn.com/d3-shape',
        'd3-selection': 'https://npmcdn.com/d3-selection',
        'd3-color': 'https://npmcdn.com/d3-color',
        'd3-drag': 'https://npmcdn.com/d3-drag',
        'd3-transition': 'https://npmcdn.com/d3-transition',
        'd3-format': 'https://npmcdn.com/d3-format',
        'd3-force': 'https://npmcdn.com/d3-force',
        'd3-dispatch': 'https://npmcdn.com/d3-dispatch',
        'd3-path': 'https://npmcdn.com/d3-path',
        'd3-ease': 'https://npmcdn.com/d3-ease',
        'd3-timer': 'https://npmcdn.com/d3-timer',
        'd3-quadtree': 'https://npmcdn.com/d3-quadtree',
        'd3-interpolate': 'https://npmcdn.com/d3-interpolate',
        'd3-scale': 'https://npmcdn.com/d3-scale',
        'd3-time': 'https://npmcdn.com/d3-time',
        'd3-collection': 'https://npmcdn.com/d3-collection',
        'd3-time-format': 'https://npmcdn.com/d3-time-format',
        'd3-hierarchy': 'https://npmcdn.com/d3-hierarchy',
        '@swimlane/ngx-charts': 'https://npmcdn.com/@swimlane/ngx-charts@5.2.1/release/index.js',

        //'ngx-gallery': 'https://unpkg.com/ngx-gallery/lib/',
        //'angular2-fullcalendar': 'https://unpkg.com/angular2-fullcalendar',
        // 'angular-tree-component': 'https://unpkg.com/angular-tree-component@5.1.2/dist/angular-tree-component.umd.js',
        'angular-tree-component': 'https://unpkg.com/angular-tree-component/dist/angular-tree-component.umd.js',
        'angular-gauge': 'https://unpkg.com/angular-gauge@2.0.0/bundles/angular-gauge.umd.js',
        'angular2-google-maps/core': 'https://unpkg.com/angular2-google-maps/core/core.umd.js',
        //'@uniprank/ng2-file-uploader': 'https://unpkg.com/@uniprank/ng2-file-uploader/bundles/ng2-file-uploader.webpack.umd.js',

        'moment': 'https://unpkg.com/moment/min/moment-with-locales.min.js',
        //'moment': 'https://unpkg.com/moment/min/moment.min.js',
        //'moment-locale-pt-br': 'https://unpkg.com/moment/locale/pt-br.js',
        'accounting': 'https://unpkg.com/accounting/accounting.js',
        'socket.io-client': 'https://unpkg.com/socket.io-client/dist/socket.io.js',
        'hammerjs': 'https://unpkg.com/hammerjs/hammer.js',
        // 'ngx-toastr': 'https://unpkg.com/ngx-toastr/toastr.umd.js',
        'ngx-toastr': 'https://unpkg.com/ngx-toastr@5.0.6/toastr.umd.js',
        'lodash': 'https://unpkg.com/lodash/lodash.js',
        'jquery': 'https://unpkg.com/jquery/dist/jquery.js',
        'md5': 'https://unpkg.com/md5/md5.js',
        'ts-md5': 'https://unpkg.com/ts-md5',
        'tslib': 'https://unpkg.com/tslib/tslib.js',
        'mobx': 'https://unpkg.com/mobx/lib/mobx.js',
        'mobx-angular': 'https://unpkg.com/mobx-angular/dist/mobx-angular.umd.js',

        // fusion bundle
        'cedrus-fusion': 'https://unpkg.com/cedrus-fusion/bundles/cedrus-fusion.umd.js',

        'typescript': 'https://unpkg.com/typescript',

        // Rxjs mapping
        'rxjs': 'https://unpkg.com/rxjs',
    },
    packages: {
        // Thirdparty barrels.
        'rxjs': { main: 'index' },
    }
});