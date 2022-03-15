# gameface-arabic-rtl
This is a helper function for Arabic language support in [Coherent Gameface](https://coherent-labs.com/products/coherent-gameface/). Since it [does not support](https://coherent-labs.com/Documentation/cpp-gameface/d3/d46/complex-text-layout.html) Arabic out of the box at the moment.

### Example
###### Without gameface-arabic-rtl
![Without gameface-arabic-rtl](/examples/example_wrong.png)
###### With gameface-arabic-rtl
![With gameface-arabic-rtl](/examples/example_right.png)


### Dependencies
_[unicode-bidirectional](https://github.com/bbc/unicode-bidirectional)_ - A Javascript implementation of the [Unicode 9.0.0 Bidirectional Algorithm](http://www.unicode.org/reports/tr9/) from BBC.

Also my code is based on [Abdulla Saeed's code](https://github.com/6f5/rtl-arabic). I express my deep gratitude to him.

### Usage
_gameface-arabic-rtl_ is declared as a [Universal Module](https://github.com/umdjs/umd) (UMD), meaning it can be used with all conventional Javascript module systems:

###### ES6
```
import { process } from 'gameface-arabic-rtl';

const text = 'مرحبا بالعالم';
const convertedText = process(text);
```

###### CommonJS
```
const GamefaceArabicRtl = require('gameface-arabic-rtl/dist/gameface-arabic-rtl.min.js');

const text = 'مرحبا بالعالم';
const convertedText = GamefaceArabicRtl.process(text);
```

###### RequireJS
```
require(['GamefaceArabicRtl'], (GamefaceArabicRtl) => {
    const text = 'مرحبا بالعالم';
    const convertedText = GamefaceArabicRtl.process(text);
});
```

###### HTML5 `<script>` tag
```
<script src="gameface-arabic-rtl.min.js"></script>
<script>
    const text = 'مرحبا بالعالم';
    const convertedText = GamefaceArabicRtl.process(text);
</script>
```

### Known issues
Since Coherent Gameface does not support OpenType [GSUB](https://docs.microsoft.com/en-us/typography/opentype/spec/gsub) Table lookup, the required glyphs must be present in the font. For example:
```
String.codePointAt('ﺖ'); // must NOT return undefined
```
Script was tested on __Tahoma__ font.
