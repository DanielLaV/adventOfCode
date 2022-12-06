#!/bin/bash

mkdir 2022/Day$1
touch 2022/Day$1/input.js 2022/Day$1/Day$1.js 2022/Day$1/Day$1b.js

printf 'const input = ``; \n\nmodule.exports = input;' > 2022/Day$1/input.js
printf "input = require('./input');" > 2022/Day$1/Day$1.js
printf "input = require('./input');" > 2022/Day$1/Day$1b.js
