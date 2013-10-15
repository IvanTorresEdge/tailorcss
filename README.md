tailorcss
=========

Little dumb script that adds browser name, kind, and OS as a class, for browser specific CSS rules.

##### Examples
Given the following HTML Code:
```html
<html class="no-js">
```

When browser is Chrome/Mac, it will add the classes `chrome`, `webkit`, and `mac`:
```html
<html class="js chrome wekbit mac">
```

##### Other Examples
IE/Windows:
```html
<html class="js ie trident win">
```

Firefox/Mac:
```html
<html class="js firefox gecko mac">
```

## Why?

I needed to add specific CSS rules to specific browsers. Also, I didn't wanted to
use use hacks (very often obscure and horrible). 

##### Example
```css
td { display: table-cell; }

.ie td,
.opera td { display: inline-block; }
```
