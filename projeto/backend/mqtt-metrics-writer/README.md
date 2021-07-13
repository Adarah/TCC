[![CI](https://github.com/Adarah/typescript-template/actions/workflows/CI.yaml/badge.svg)](https://github.com/Adarah/typescript-template/actions/workflows/CI.yaml)
[![CodeQL](https://github.com/Adarah/typescript-template/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Adarah/typescript-template/actions/workflows/codeql-analysis.yml)

# Typescript template

This repository is a template with a lot boilerplate already pre-configured.

Configured utilities:

- eslint
- prettier
- jest
- test and linting hooks
- conventional commit message hooks
- standard-version releases
- dockerfile
- basic github CI workflow
- dependabot

# React support

Install these extra packages if using this template on a React project.

source: https://www.npmjs.com/package/eslint-config-airbnb-typescript

```bash
npm install eslint-plugin-jsx-a11y@^6.3.1 \
            eslint-plugin-react@^7.20.3 \
            eslint-plugin-react-hooks@^4.0.8 \
            --save-dev
```
