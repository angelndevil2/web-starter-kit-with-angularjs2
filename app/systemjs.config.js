/**
 * Created by k on 16. 5. 14.
 */
(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        'scripts', // 'dist',
        'rxjs':                       'scripts/rxjs',
        'angular2-in-memory-web-api': 'scripts/angular2-in-memory-web-api',
        '@angular/common': 'scripts/@angular/common/common.umd.js',
        '@angular/compiler': 'scripts/@angular/compiler/compiler.umd.js',
        '@angular/core': 'scripts/@angular/core/core.umd.js',
        '@angular/http': 'scripts/@angular/http/http.umd.js',
        '@angular/platform-browser': 'scripts/@angular/platform-browser/platform-browser.umd.js',
        '@angular/router': 'scripts/@angular/router/router.umd.js',
        '@angular/router-deprecated': 'scripts/@angular/router-deprecated/router-deprecated.umd.js',
        '@angular/upgrade': 'scripts/@angular/upgrade/upgrade.umd.js',
        '@angular/platform-browser-dynamic': 'scripts/@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
    };

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
