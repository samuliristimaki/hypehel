# Ionic Boilerplate

A simple ionic boilerplate for starting new projects.

This boilerplate will follow the best practices for fast ionic development.

## Features

- [Ionic 3](http://ionicframework.com/)
- [Angular 5](https://angular.io)
- [Node.js](https://nodejs.org/)
- [Contentful](https://www.contentful.com/)
- [Heroku](https://www.heroku.com/)

## Quick Start

```sh
# Make sure you have latest Node and NPM versions
$ npm install
$ npm run serve
```

### NPM Scripts Commands

| Task              | Description                                            |
|-------------------|--------------------------------------------------------|
| `start`           | Run node index.js                                      |
| `clean`           | Run ionic clean                                        |
| `build`           | Run ionic basic build                                  |
| `lint`            | Run ionic tslint                                       |
| `serve`           | Run ionic serve                                        |
| `prod`            | Full production build                                  |

## Ionic CLI

```bash
# iOS build example
$ sudo npm install -g ionic cordova
$ ionic cordova platform add ios
$ ionic cordova run ios
```

## Project structure

```
.
├── docs                # Project documentation
├── resources           # Cordova resources
├── src                 # Uncompiled source code
│   ├── app
│   ├── assets
│   ├── pages
│   ├── services
│   ├── theme
│   ├── index.html      # Main entry point
│   └── ...
├── www                 # Compiled files
│   ├── assets
│   ├── build
│   |   ├── main.js     # Concatenated app file
│   |   └── ...
│   └── ...
└── ...                 # Config files etc.
```

## License

Copyright (c) 2017 Samuli Ristimäki [@frc](https://github.com/frc)
Source code is open source and released under the MIT license.
