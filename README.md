## Overview

This repository contains everything for building, running and deploying dev.jonbrownm.com/<repoSlug>.

*Latest version running on <http://dev.jonbrownm.com>/<repoSlug>*

## Installation
To get the project up and running, and view the project in the browser, complete the following steps:

1. Clone this repo: `git@github.com:jonbrownm/init-project.git`
2. cd `init-project`
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

This will publish the contents of `dist` to <http://dev.jonbrownm.com>/<repoSlug>.
This is defined in the package.json and should be set when the project is replicated.

## Repository structure
The following information details the structure of the codebase…

```
/
├─ src/
│  │
│  ├─ css/				# CSS
│  │  ├─ components/	# Components (scss)
│  │  ├─ app.min.css	# Compiled (css)
│  │  └─ app.scss 		# Global (scss)
│  │
│  ├─ js/				# Static files
│  │  ├─ components/	# Components (js)
│  │  ├─ app.js 		# Compiled (js)
│  │  └─ app.min.js 	# Global (js)
│  │
│  ├─ index.html		# Main page (html)
│  └─ …					# Other pages (html)
│
├─ .ftpauth 			# FTP authorisation file (ignored by GIT)
├─ .gitignore 			# Files and folders not tracked by Git
├─ Gruntfile.js        	# Gruntfile config
├─ package-lock.js      # Package lock config
├─ package.json 		# Project manifest
└─ README.md 			# This file
```
