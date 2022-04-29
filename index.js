import RTLArabic from "./src/RTLArabic";

function process(sentence, translateNumbers) {
    let num = false;

    if (typeof translateNumbers === "boolean" && translateNumbers === true) {
        num = true;
    } else {
        throw new Error("[GamefaceArabicRtl] Second parameter must be boolean");
    }

    const options = {
        harakat: true,
        numbers: num,
    };

    return new RTLArabic(sentence, options).convert();
}

export {process}
