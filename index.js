import RTLArabic from "./src/RTLArabic";

function process(sentence) {
    const options = {
        harakat: true,
        numbers: false,
    };

    return new RTLArabic(sentence, options).convert();
}

export {process}
