import RTLArabic from "./src/RTLArabic";

function process(sentence) {
    const options = {
        harakat: true,
        numbers: true,
    };

    return new RTLArabic(sentence, options).convert();
}

export {process}
