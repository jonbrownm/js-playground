## Overview
* * *

This repository contains everything for building, running and deploying dev.jonbrownm.com.

*Latest version running on <http://dev.jonbrownm.com>*

## Installation
To get the project up and running, and view the project in the browser, complete the following steps:

1. Clone this repo: `git@github.com:jonbrownm/init-project.git`
2. cd `init-project`
3. Install Node.js: <https://nodejs.org/>
4. Install node dependancies: `npm i`
5. Start the development environment: `grunt`
6. Open your browser and visit <http://localhost:8080>

## Development
When developing the project all tasks will need to be running. To do this, run the following task:

* `grunt`

## Deployment
To deploy this to the current production environment, you can deploy a static instance by running the following task:

* `grunt prod`

This will publish the contents of `dist` to <http://dev.jonbrownm.com>.

## Repository structure
The following information details the structure of the codebase…

```
/
├─ develop/
│  │
│  ├─ components/		# Components (html)
│  │
│  ├─ fonts/			# Fonts (eot, svg, ttf, woff)
│  │
│  ├─ icons/			# Icons (svg, png)
│  │
│  ├─ images/			# Images (png)
│  │
│  ├─ js/				# Javascript (js)
│  │
│  ├─ pages/			# Pages for build
│  │
│  ├─ scss/				# SASS
│  │  ├─ components/	# Components (scss)
│  │  └─ …				# Global (scss)
│  │
│  └─ static/			# Static files
│     ├─ downloads/		# Downloads folder
│     └─ …				# Root files
│   
├─ dist/				# Public build (ignored by Git)
│
├─ .ftpauth 			# FTP authorisation file (ignored by GIT)
├─ .gitignore 			# Files and folders not tracked by Git
├─ bower.json 			# Bower config
├─ Gruntfile.js        	# Gruntfile config
├─ package-lock.js      # Package lock config
├─ package.json 		# Project manifest
└─ README.md 			# This file
```
