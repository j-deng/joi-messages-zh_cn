# joi-messages-zh_cn

Joi validation messages translation of Simplified Chinese(zh-cn)

**Support joi version from 17**

## Setup

### Install

```sh
yarn add joi-messages-zh_cn
```

### Usage

```js
import cnMessages from "joi-messages-zh_cn";

Joi.string()
  .min(10)
  .prefs({
    messages: {
      // The language key is zh-cn
      ...cnMessages,
    },
  })
  .validate("a string", {
    errors: {
      // label: false,
      language: "zh-cn",
    },
  });
```
