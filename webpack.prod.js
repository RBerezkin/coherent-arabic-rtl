const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "index.js"),

    output: {
        clean: true,

        path: path.resolve(__dirname, "dist"),
        filename: "gameface-arabic-rtl.min.js",
        
        library: {
            type: "umd",
            name: "GamefaceArabicRtl",
        },
    },
};