# Contributing
- Please create pull request to `main` branch.

## Prepare
- Node >= 18
- PNPM >= 8
- vscode eslint on

## Command
```bash
# install dependencies
pnpm install

# open vitepress dev
pnpm run docs:dev

# build vitepress docs
pnpm run docs:build

#build components and styles
pnpm run build:awwui
```

## Components
If you want to create a new component, please follow the format.
`./packages/components/src/**`
`./packages/theme/src/**`