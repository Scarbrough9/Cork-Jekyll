# Cork Theme - Jekyll Edition
[![devDependency Status](https://david-dm.org/ScarbroughStudios/cork-jekyll/dev-status.svg)](https://david-dm.org/ScarbroughStudios/cork-jekyll#info=devDependencies)



## Features

A [Jekyll](http://jekyllrb.com/) starter theme for developers. The theme includes/utilizes the following features, or opinions, if you want to look at it that way.

- [Jekyll](http://jekyllrb.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)
- [libSass](http://libsass.org/)
- [BrowserSync](http://www.browsersync.io/)

Please note that all of this is not required to develop a Jekyll site locally, these tools simply offer a slightly opinionated, but fairly solid local development work flow. This documentation aims to provide some insight regarding the choices made while outlining how to get started.

### Styles

Cork uses the gulp-sass package to handle CSS compiling. This package is a wrapper for node-sass, which is itself a wrapper for libSass. This was chosen because of the speed with which compilation is executed. gulp-sass has recently updated and is now using the updated version of libSass which supports nearly all of the capabilities of ruby Sass.

Autoprefixer
Sourcemaps
Minification of production styles
Bourbon
Bourbon Neat

### Scripts



## Getting Started

1. First, you need to install [Jekyll](http://jekyllrb.com/) by running:
    ``` bash
    gem install jekyll 
    ```

2. Now you need to make sure that you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) properly installed. There are several ways to do this, here are some opinions, I'll leave you to decide...
    * [Installing Node and npm](https://www.joyent.com/blog/installing-node-and-npm/)
    * [Installing Node.js via package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
    * [How to Install Node.js and NPM on a Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)
    * [Installing Node.js](https://www.araport.org/docs/science-apps-configuring-development-environment/installing-nodejs)

3. Next, navigate to the directory where you want to keep the project, i.e., ` cd ~/Sites/Jekyll `. Now you can pull down the latest version of the theme. There are number of methods that you can choose to do this. I prefer to use the ` wget ` command. If you have [Homebrew](http://brew.sh/) installed, you can use the ` wget ` command after running ` brew install wget `. If you prefer grabbing the theme this way, you can run:
    ``` bash

    # Grab the latest version of the theme
    wget https://github.com/ScarbroughStudios/Cork-Jekyll/archive/0.2.tar.gz

    # unpack the tar file
    tar -xvf 0.2.tar.gz

    # Remove the tar
    rm -rf 0.2.tar.gz

    # rename the directory
    mv 0.2.tar.gz YOUR_PROJECT_NAME

    ```
    Other methods would be simply going to the repo on GitHub, downloading the tar.gz or .zip file for the release you would like to install, or you can simple clone or fork the repo as you please.

4. Regardless of how you grabbed the theme files, you should now have a project directory to worok from. Navigate to that directory ( ` cd YOUR_PROJECT_NAME` ). Now its time to let Node and npm do their thing. Run the following command to fire the project up:
    ``` bash
    npm run start
    ```
    This task will take a minute or two to setup your theme and run through the gulp tasks that are set to run 
    Right now, npm "start" simple runs ` npm install `, however, you may find it useful and/or necessary to do more to the files prior to building. Therefore, I have created a "start" task in the [package.json](https://github.com/ScarbroughStudios/Cork-Jekyll/blob/master/package.json) file to allow for some flexibility.

5. Finally, lets make sure this bad boy is working. All of the tasks will be discussed in detail below, but for now, here is what you need to know about developing your project:
    * Gulp is used for file streams
    * Sass is used to compile CSS
    * Concat is used to concatenate vendor js plugins
    * Browserify is used to transpile custom js
    * BrowserSync is used for live reloading capabilities

    There are other items working behind the scenes, but the tasks listed above represent what will be used most during development. To get started, just run:
    ``` bash
    gulp
    ```
    This will run through the development tasks, open the browser, load your project, and watch for files changes that merit a page reload or CSS injection.


#### That's it!

You're all set to start developing a custom Jekyll theme!

# About the Theme
