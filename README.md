# Combinate

[![Build Status](https://travis-ci.org/nas5w/combinate.svg?branch=master)](https://travis-ci.org/nas5w/combinate) [![Codecov Status](https://codecov.io/gh/nas5w/combinate/branch/master/graph/badge.svg)](https://codecov.io/gh/nas5w/combinate/branch/master)

The perfect helper for generating all possible combinations of values.

## Installation

Install with `npm`:

```bash
npm i combinate
```

Install with `yarn`:

```bash
yarn add combinate
```

## Usage

Using `combinate` is fairly simple: create an object whose keys have all possible combinations in an array. Pass that object to `combinate` and your various permutations are returned.

```javascript
import combinate from "combinate";

const values = {
  color: ["red", "blue", "green"],
  admin: [true, false],
  mode: ["light", "dark"],
};

const combinations = combinate(values);

console.log(combinations);

/*
[
  {"admin": true, "color": "red", "mode": "light"},
  {"admin": true, "color": "blue", "mode": "light"},
  {"admin": true, "color": "green", "mode": "light"},
  {"admin": false, "color": "red", "mode": "light"},
  {"admin": false, "color": "blue", "mode": "light"},
  {"admin": false, "color": "green", "mode": "light"},
  {"admin": true, "color": "red", "mode": "dark"},
  {"admin": true, "color": "blue", "mode": "dark"},
  {"admin": true, "color": "green", "mode": "dark"},
  {"admin": false, "color": "red", "mode": "dark"},
  {"admin": false, "color": "blue", "mode": "dark"},
  {"admin": false, "color": "green", "mode": "dark"}
]
*/
```

# MIT License

Copyright (c) 2021 Nick Scialli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
