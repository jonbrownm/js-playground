## Overview

This repository contains everything for building, running and deploying dev.jonbrownm.com/js-playground.

*Latest version running on <http://dev.jonbrownm.com/js-playground>*

## Installation
To get the project up and running, and view the project in the browser, complete the following steps:

1. Clone this repo: `git@github.com:jonbrownm/js-playground.git`
2. cd `js-playground`
3. Install Node.js: <https://nodejs.org/>
4. Install Grunt: `npm install grunt`
5. Install node dependancies: `npm i`
6. Start the development environment: `grunt`
7. Open your browser and visit <http://localhost:8080>

## Development
When developing the project all tasks will need to be running. To do this, run the following task:

* `grunt`

## Deployment
To deploy this to the current production environment, you can deploy a static instance by running the following task:

* `grunt prod`

This will publish the contents of `dist` to <http://dev.jonbrownm.com/js-playground>.

## Foundation

The Foundation framework is available in this project and it can be customised as required. It is a responsive front-end framework that make it simple to develop websites and applications. The HTML, CSS & Javascript can be fully customised. The full documentation for Foundation can be found at <https://foundation.zurb.com/sites/docs/>.

* `npm i`

## Repository structure
The following information details the structure of the codebase…

```
/
├─ src/
│  │
│  ├─ css/            # CSS
│  │  ├─ components/  # Components (scss)
│  │  ├─ app.scss     # Global (scss)
│  │  └─ app.min.css  # Global app (compiled css)
│  │
│  ├─ js/             # JS
│  │  ├─ components/  # Components (js)
│  │  ├─ app.js       # Global (js)
│  │  └─ app.min.js   # Global app (compiled js)
│  │
│  ├─ index.html      # Main page (html)
│  └─ …               # Additional pages (html)
│
├─ .ftpauth           # FTP authorisation file (ignored by GIT)
├─ .gitignore         # Files and folders not tracked by Git
├─ Gruntfile.js       # Gruntfile config
├─ package-lock.js    # Package lock config
├─ package.json       # Project manifest
└─ README.md          # This file
```

## Components
To following components can be found in this repository:

* <http://dev.jonbrownm.com/js-playground/card-selector.html>
* <http://dev.jonbrownm.com/js-playground/category-article-selector.html>
* <http://dev.jonbrownm.com/js-playground/country-search.html>
