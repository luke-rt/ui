# UI components library built for Penn Labs

## Setup
```sh
# install dependencies
yarn

# run storybook
yarn storybook
```

## Debugging

### Package hoisting error

If you encounter the following error while running `yarn storybook`

```sh
yarn run v1.22.21
$ storybook dev -p 6006
🔴 Error: It looks like you are having a known issue with package hoisting.
Please check the following issue for details and solutions: https://github.com/storybookjs/storybook/issues/22431#issuecomment-1630086092


/Users/luke/dev/pennlabs/ui/node_modules/cli-table3/src/utils.js:1
const stringWidth = require('string-width');
                    ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/luke/dev/pennlabs/ui/node_modules/string-width/index.js from /Users/luke/dev/pennlabs/ui/node_modules/cli-table3/src/utils.js not supported.
Instead change the require of index.js in /Users/luke/dev/pennlabs/ui/node_modules/cli-table3/src/utils.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/Users/luke/dev/pennlabs/ui/node_modules/cli-table3/src/utils.js:1:21) {
  code: 'ERR_REQUIRE_ESM'
}

Node.js v21.7.3
error Command failed with exit code 7.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Run `yarn upgrade` first.