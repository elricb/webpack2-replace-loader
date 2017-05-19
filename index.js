var loaderUtils = require("loader-utils");

module.exports = function(source) {
    const options = Object.assign(
        {},
        {
            replace: []
        },
        loaderUtils.getOptions(this) || loaderUtils.getLoaderConfig(this)
    );

    Object.keys(options.replace).map(function($_replace) {
        source = source.replace($_replace, options.replace[$_replace]);
    });

    return source;
}
