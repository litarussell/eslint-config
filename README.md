# @litarussell/eslint-config

[![npm](https://img.shields.io/npm/v/@litarussell/eslint-config?color=success&label=version)](https://npmjs.com/package/@litarussell/eslint-config)


## Usage

### Install

```bash
pnpm add -D eslint @litarussell/eslint-config-basic
```

### Config `.eslintrc`

```json
{
  "extends": [
    "@litarussell/eslint-config"
  ]
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Check Also

- [antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

MIT