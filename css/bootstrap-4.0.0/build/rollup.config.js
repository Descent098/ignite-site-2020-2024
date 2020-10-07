"use strict";const path=require("path"),babel=require("rollup-plugin-babel"),resolve=require("rollup-plugin-node-resolve"),pkg=require(path.resolve(__dirname,"../package.json")),BUNDLE="true"===process.env.BUNDLE,year=(new Date).getFullYear();let fileDest="bootstrap.js";const external=["jquery","popper.js"],plugins=[babel({exclude:"node_modules/**",externalHelpersWhitelist:["defineProperties","createClass","inheritsLoose","extends"]})],globals={jquery:"jQuery","popper.js":"Popper"};BUNDLE&&(fileDest="bootstrap.bundle.js",external.pop(),delete globals["popper.js"],plugins.push(resolve())),module.exports={input:path.resolve(__dirname,"../js/src/index.js"),output:{banner:`/*!\n  * Bootstrap v${pkg.version} (${pkg.homepage})\n  * Copyright 2011-${year} ${pkg.author}\n  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n  */`,file:path.resolve(__dirname,"../dist/js/"+fileDest),format:"umd",globals:globals,name:"bootstrap"},external:external,plugins:plugins};
