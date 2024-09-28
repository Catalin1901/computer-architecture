"use strict";(self.webpackChunkcomputer_architecture=self.webpackChunkcomputer_architecture||[]).push([[8349],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var a=t(6540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),c=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(o.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(t),s=i,g=m["".concat(o,".").concat(s)]||m[s]||d[s]||n;return t?a.createElement(g,l(l({ref:r},p),{},{components:t})):a.createElement(g,l({ref:r},p))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=s;var u={};for(var o in r)hasOwnProperty.call(r,o)&&(u[o]=r[o]);u.originalType=e,u[m]="string"==typeof e?e:i,l[1]=u;for(var c=2;c<n;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},887:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>c});var a=t(8168),i=(t(6540),t(5680));const n={},l="Rulare exemple practice Verilog",u={unversionedId:"Tutoriale/Rulare exemple practice/README",id:"Tutoriale/Rulare exemple practice/README",title:"Rulare exemple practice Verilog",description:"Exemple practice necesit\u0103 aplica\u021bia Vivado 2022.1 (urm\u0103re\u0219te tutorialul de instalare sau cel pentru docker) \u0219i utlitarul make. Directoarele au o structur\u0103 asem\u0103n\u0103toare (eq. alu):",source:"@site/docs/Tutoriale/Rulare exemple practice/README.md",sourceDirName:"Tutoriale/Rulare exemple practice",slug:"/Tutoriale/Rulare exemple practice/",permalink:"/computer-architecture/Tutoriale/Rulare exemple practice/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Programarea FPGA-ului \xeen Vivado",permalink:"/computer-architecture/Tutoriale/Programare FPGA Vivado/"},next:{title:"Laboratoare",permalink:"/computer-architecture/Laboratoare/"}},o={},c=[],p={toc:c},m="wrapper";function d(e){let{components:r,...t}=e;return(0,i.yg)(m,(0,a.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"rulare-exemple-practice-verilog"},"Rulare exemple practice Verilog"),(0,i.yg)("p",null,"Exemple practice necesit\u0103 aplica\u021bia Vivado 2022.1 (urm\u0103re\u0219te tutorialul de instalare sau cel pentru docker) \u0219i utlitarul make. Directoarele au o structur\u0103 asem\u0103n\u0103toare (eq. ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cs-pub-ro/computer-architecture/tree/main/chapters/microprogramable_cpu/arithmetic-logic-unit/drills/alu/support"},"alu"),"):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"director ",(0,i.yg)("inlineCode",{parentName:"li"},"tcl_files")," unde sunt prezente scripturi ajut\u0103toare",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"build.tcl")," pentru crearea proiectului ",(0,i.yg)("inlineCode",{parentName:"li"},".xpr")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"run.tcl")," pentru rularea simul\u0103rii \u0219i crearea fi\u0219ierului de unde ",(0,i.yg)("inlineCode",{parentName:"li"},"test.vcd")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"simulation.tcl")," pentru vizionarea rezultatului simul\u0103rii \xeen interfa\u021b\u0103 grafic\u0103."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"test_*.v")," fi\u0219ierul ce con\u021bine detaliile pentru simulare"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"*.v")," fi\u0219iere verilog necesare implement\u0103rii"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"*.xdc")," fi\u0219ierul ce con\u021bine constr\xe2ngerile de pini pentru FPGA folosit \xeen cadrul laboratorului (Nexys 4 Arty-A7-100T)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Makefile")," fi\u0219ierul Makefile ce con\u021bine re\u021betele pentru principale comenzi")),(0,i.yg)("p",null,"Comenzile prezente \xeen ",(0,i.yg)("inlineCode",{parentName:"p"},"Makefile")," sunt:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"make build")," creaz\u0103 proiectul Vivado necesar."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"make run")," dup\u0103 crearea proiectului putem rula simularea"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"make simulation")," dup\u0103 rularea simul\u0103rii putem \xeenc\u0103rca grafic simularea."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"make vivado")," deschiderea proeictului Vivado 2022.1 pentru modific\u0103ri sau \xeenc\u0103rcarea pe FPGA conform ghidului Programare Vivado FPGA."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"make clean")," \u0219tergerea fi\u0219ierelor generate de comenzile anterioare")),(0,i.yg)("p",null,"Dac\u0103 lucr\u0103m \xeen Visual Studio Code sau alt editor text dec\xe2t Vivado dup\u0103 fiecare modificare pentru a vedea rezultate noi va trebuie s\u0103 rul\u0103m ",(0,i.yg)("inlineCode",{parentName:"p"},"make clean && make build"),"."))}d.isMDXComponent=!0}}]);