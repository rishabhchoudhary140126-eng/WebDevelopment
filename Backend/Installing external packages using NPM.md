```json
npm install chalk
```
above command will install chalk package from the internet, and store it locally into our working directory, and we can then use objects and methods provided in that package.

#### We can import those packages by using require attribute as:

```json
const package = require("package_name")
```

**but for modern packages like chalk, we use newer way**

here we create index.mjs file instead of .js, and we can import them as
```js
import chalk from 'chalk'

console.log(chalk.blue("Hello, World!!"));
console.log(chalk.red.bold("This text will appear in red, bold color in terminal"));
```

running this .mjs file should be like
```json
npm --experimental-modules index.mjs
```

read more about chalk library on: https://www.npmjs.com/package/chalk

