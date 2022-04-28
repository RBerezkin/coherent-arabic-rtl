const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "index.js"),

    optimization: {
        minimize: true
    },

    output: {
        clean: true,
        globalObject: 'this',

        path: path.resolve(__dirname, "dist"),
        filename: "gameface-arabic-rtl.min.js",
        
        library: {
            type: "umd",
            name: "GamefaceArabicRtl",
            umdNamedDefine: true,
        },
    }
};