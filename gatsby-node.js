/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = function(config, env) {
    if (env === 'build-javascript' || env === 'develop') {
        const previous = config.resolve().entry
        config._config.entry = []
        config.merge({
            entry: ['babel-polyfill'].concat(previous)
        })
    }
    return config
}

// You can delete this file if you're not using it
