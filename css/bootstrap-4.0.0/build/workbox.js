"use strict";const fs=require("fs"),path=require("path"),swBuild=require("workbox-build"),config=require("./workbox.config.json"),buildPrefix="_gh_pages/",workboxSWSrcPath=require.resolve("workbox-sw"),wbFileName=path.basename(workboxSWSrcPath),workboxSWDestPath="_gh_pages/assets/js/vendor/"+wbFileName,workboxSWSrcMapPath=workboxSWSrcPath+".map",workboxSWDestMapPath=workboxSWDestPath+".map";fs.createReadStream(workboxSWSrcPath).pipe(fs.createWriteStream(workboxSWDestPath)),fs.createReadStream(workboxSWSrcMapPath).pipe(fs.createWriteStream(workboxSWDestMapPath));const updateUrl=e=>e.map((e=>{if(e.url.startsWith(buildPrefix)){const r=new RegExp(buildPrefix,"g");e.url=e.url.replace(r,"")}return e}));config.manifestTransforms=[updateUrl],swBuild.injectManifest(config).then((()=>{const e=/{fileName}/g;fs.readFile(config.swDest,"utf8",((r,t)=>{if(r)throw r;const a=t.replace(e,wbFileName);fs.writeFile(config.swDest,a,(()=>{console.log("Pre-cache Manifest generated.")}))}))}));
