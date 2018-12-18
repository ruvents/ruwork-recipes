var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    /*
     * ENTRY CONFIG
     */
    .addEntry('app', './assets/js/app.js')

    /*
     * FEATURE CONFIG
     */
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader(() => {
    }, {
        resolveUrlLoader: false
    })
    .enableVueLoader()
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
