# xo-quick

Setup javascript formatting and linting based on `xo` and `prettier` with `husksy`.

```bash
yarn add --dev xo-quick
```

## Why ?

I am a huge fan of `prettier`, but `prettier` concerns itself only with stylistic rules. To achieve better code quality, a linter like `eslint` is a must have in your toolchain.

I mostly created this package to help setting up new packages easier.

## How ?

This package brings in necessary dependencies and uses npm `postinstall` scripts to automatically setup javascript formatting and linting.

The `postinstall` script of `xo-quick` sets `pkg.prettier`, `pkg.husky` and `pkg.xo` properties in `package.json` if they do not already exist and remove `.prettierrc` and `prettier.config.js` if these files exist.
