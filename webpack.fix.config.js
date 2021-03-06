const webpackConfig = require("./webpack.config");
const path = require("path");

module.exports = env => {

    /**
     * Plaftform root
     */
    env = env || {};

    env.entries = env.entries || {};

    const config = webpackConfig(env);
    const platform = env && (env.android && "android" || env.ios && "ios" || env.platform);
    if (!platform) {
        throw new Error("You need to provide a target platform!");
    }

    // if (platform === 'ios') {
    //     config.module.rules.unshift({
    //       test: /@nativescript\/core\/ui\/gestures\/gestures\.js$/,
    //       use: [{
    //         loader: 'string-replace-loader',
    //         options: {
    //           search: new RegExp("var center = recognizer\.locationInView\\(args\.view\.nativeViewProtected\\);", 'g'),
    //           replace: 'if (args.view == null) { return; }\nvar center = recognizer.locationInView(args.view.nativeViewProtected);'
    //         },
    //       }],
    //     });
    // }

    return config;
};