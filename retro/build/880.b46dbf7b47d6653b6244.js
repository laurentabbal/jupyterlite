(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{60880:(e,t,n)=>{"use strict";n.r(t);var o=n(24076),s=n(5768);n(2472);const i=[n.e(3413).then(n.t.bind(n,94376,23)),n.e(4829).then(n.t.bind(n,54829,23)),n.e(5186).then(n.t.bind(n,95186,23))],r=[n.e(1222).then(n.t.bind(n,11222,23)),n.e(267).then(n.t.bind(n,10267,23)),n.e(5219).then(n.t.bind(n,35219,23)),n.e(216).then(n.t.bind(n,10216,23))];async function a(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(n){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),n}}!async function(){const e=await Promise.all(r);let t=[n(36784),n(36484),n(75144).default.filter((({id:e})=>!["@retrolab/application-extension:logo","@retrolab/application-extension:opener"].includes(e))),n(90983),n(95289),n(76962).default.filter((({id:e})=>["@jupyterlab/application-extension:commands","@jupyterlab/application-extension:context-menu","@jupyterlab/application-extension:faviconbusy"].includes(e))),n(47576).default.filter((({id:e})=>["@jupyterlab/apputils-extension:palette","@jupyterlab/apputils-extension:settings","@jupyterlab/apputils-extension:state","@jupyterlab/apputils-extension:themes","@jupyterlab/apputils-extension:themes-palette-menu"].includes(e))),n(31808).default.filter((({id:e})=>["@jupyterlab/codemirror-extension:services","@jupyterlab/codemirror-extension:codemirror"].includes(e))),n(21480).default.filter((({id:e})=>["@jupyterlab/completer-extension:manager"].includes(e))),n(78261),n(27537).default.filter((({id:e})=>["@jupyterlab/docmanager-extension:plugin"].includes(e))),n(34845).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:factory"].includes(e))),n(4826),n(37497),n(23398).default.filter((({id:e})=>["@jupyterlab/notebook-extension:factory","@jupyterlab/notebook-extension:tracker","@jupyterlab/notebook-extension:widget-factory"].includes(e))),n(48356),n(30813),n(47402),n(47654),n(88829)];switch(s.PageConfig.getOption("retroPage")){case"tree":t=t.concat([n(34845).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with"].includes(e))),n(79450).default.filter((({id:e})=>"@retrolab/tree-extension:new-terminal"!==e))]);break;case"notebooks":t=t.concat([n(21480).default.filter((({id:e})=>["@jupyterlab/completer-extension:notebooks"].includes(e))),n(22176).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:notebooks"].includes(e)))]);break;case"consoles":t=t.concat([n(21480).default.filter((({id:e})=>["@jupyterlab/completer-extension:consoles"].includes(e))),n(22176).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:consoles"].includes(e)))]);break;case"edit":t=t.concat([n(21480).default.filter((({id:e})=>["@jupyterlab/completer-extension:files"].includes(e))),n(10620).default.filter((({id:e})=>["@jupyterlab/fileeditor-extension:plugin"].includes(e))),n(34845).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:browser"].includes(e)))])}const l=[],d=[],u=[],p=[],c=[],f=[],m=JSON.parse(s.PageConfig.getOption("federated_extensions")),b=new Set;function*h(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let n=Array.isArray(t)?t:[t];for(let e of n)s.PageConfig.Extension.isDisabled(e.id)||(yield e)}m.forEach((e=>{e.liteExtension?f.push(a(e.name,e.extension)):(e.extension&&(b.add(e.name),d.push(a(e.name,e.extension))),e.mimeExtension&&(b.add(e.name),u.push(a(e.name,e.mimeExtension))),e.style&&p.push(a(e.name,e.style)))})),(await Promise.all(t)).forEach((e=>{for(let t of h(e))l.push(t)})),(await Promise.allSettled(u)).forEach((t=>{if("fulfilled"===t.status)for(let n of h(t.value))e.push(n);else console.error(t.reason)})),(await Promise.allSettled(d)).forEach((e=>{if("fulfilled"===e.status)for(let t of h(e.value))l.push(t);else console.error(e.reason)})),(await Promise.all(i)).forEach((e=>{for(let t of h(e))c.push(t)})),(await Promise.allSettled(f)).forEach((e=>{if("fulfilled"===e.status)for(let t of h(e.value))c.push(t);else console.error(e.reason)}));const y=new o.JupyterLiteServer({});y.registerPluginModules(c),await y.start();const{serviceManager:g}=y,{RetroApp:x}=n(52823),A=new x({serviceManager:g,mimeExtensions:e});A.name=s.PageConfig.getOption("appName")||"RetroLite",A.registerPluginModules(l),"true"===(s.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=A),console.log("Starting app"),await A.start(),console.log(`${A.name} started, waiting for restore`),await A.restored,console.log(`${A.name} restored`)}()},2472:(e,t,n)=>{"use strict";n.r(t),n(30756),n(81088),n(60734),n(19285),n(41044),n(42413),n(82053),n(10139),n(583),n(45315),n(7537),n(65071),n(37990),n(27784),n(40951),n(41901),n(15619),n(58739),n(98143),n(21499),n(45074),n(43131),n(13914),n(85426),n(90040),n(20598),n(58489),n(34232),n(38527)},3472:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},88742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const a=r},49027:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/javascript-kernel-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},10196:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/retro-application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},23443:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/server-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},98143:(e,t,n)=>{var o=n(3472);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)},45074:(e,t,n)=>{var o=n(88742);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)},43131:(e,t,n)=>{var o=n(49027);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)},13914:(e,t,n)=>{var o=n(10196);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)},85426:(e,t,n)=>{var o=n(23443);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)}}]);
//# sourceMappingURL=880.b46dbf7b47d6653b6244.js.map