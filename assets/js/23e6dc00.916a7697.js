"use strict";(self.webpackChunkcomputer_architecture=self.webpackChunkcomputer_architecture||[]).push([[9156],{5680:(e,i,r)=>{r.d(i,{xA:()=>s,yg:()=>g});var a=r(6540);function t(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function n(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?n(Object(r),!0).forEach((function(i){t(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}function c(e,i){if(null==e)return{};var r,a,t=function(e,i){if(null==e)return{};var r,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],i.indexOf(r)>=0||(t[r]=e[r]);return t}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),u=function(e){var i=a.useContext(l),r=i;return e&&(r="function"==typeof e?e(i):o(o({},i),e)),r},s=function(e){var i=u(e.components);return a.createElement(l.Provider,{value:i},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},m=a.forwardRef((function(e,i){var r=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=t,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(g,o(o({ref:i},s),{},{components:r})):a.createElement(g,o({ref:i},s))}));function g(e,i){var r=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var n=r.length,o=new Array(n);o[0]=m;var c={};for(var l in i)hasOwnProperty.call(i,l)&&(c[l]=i[l]);c.originalType=e,c[d]="string"==typeof e?e:t,o[1]=c;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4263:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var a=r(8168),t=(r(6540),r(5680));const n={},o="Verilog",c={unversionedId:"Laboratoare/1 Verilog Combina\u021bional/Limbaj Verilog/Teorie/README",id:"Laboratoare/1 Verilog Combina\u021bional/Limbaj Verilog/Teorie/README",title:"Verilog",description:"\xcen cadrul laboratorului de Arhitectura Calculatoarelor vom studia un limbaj de descriere a hardware-ului (eng. Hardware Description Language - **HDL**) numit Verilog. \xcel vom folosi pe tot parcursul laboratorului pentru a implementa no\u021biuni legate de arhitectura calculatoarelor.",source:"@site/docs/Laboratoare/1 Verilog Combina\u021bional/Limbaj Verilog/Teorie/README.md",sourceDirName:"Laboratoare/1 Verilog Combina\u021bional/Limbaj Verilog/Teorie",slug:"/Laboratoare/1 Verilog Combina\u021bional/Limbaj Verilog/Teorie/",permalink:"/computer-architecture/Laboratoare/1 Verilog Combina\u021bional/Limbaj Verilog/Teorie/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Limbaj Verilog",permalink:"/computer-architecture/Laboratoare/1 Verilog Combina\u021bional/Limbaj Verilog/"},next:{title:"Descriere structurala",permalink:"/computer-architecture/Laboratoare/1 Verilog Combina\u021bional/Descriere structurala/"}},l={},u=[{value:"De ce Verilog?",id:"de-ce-verilog",level:2},{value:"Ce tipuri de circuite putem construi?",id:"ce-tipuri-de-circuite-putem-construi",level:2}],s={toc:u},d="wrapper";function p(e){let{components:i,...n}=e;return(0,t.yg)(d,(0,a.A)({},s,n,{components:i,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"verilog"},"Verilog"),(0,t.yg)("p",null,"\xcen cadrul laboratorului de Arhitectura Calculatoarelor vom studia un limbaj de descriere a hardware-ului (",(0,t.yg)("em",{parentName:"p"},"eng. Hardware Description Language - ",(0,t.yg)("strong",{parentName:"em"},"HDL")),") numit ",(0,t.yg)("strong",{parentName:"p"},"Verilog"),". \xcel vom folosi pe tot parcursul laboratorului pentru a implementa no\u021biuni legate de arhitectura calculatoarelor.\nLimbajele de descriere a hardware-ului sunt folosite \xeen industrie pentru proiectarea \u0219i implementarea circuitelor digitale. Cele mai folosite limbaje de descriere a hardware-ului sunt ",(0,t.yg)("strong",{parentName:"p"},"Verilog")," \u0219i ",(0,t.yg)("strong",{parentName:"p"},"VHDL"),". "),(0,t.yg)("p",null,"De\u0219i din punct de vedere sintactic se aseam\u0103n\u0103 foarte mult cu un limbaj de programare de uz general (C/C++/Java), trebuie \u021binut cont c\u0103 instruc\u021biunile nu se execut\u0103 secven\u021bial, ca pe un procesor. \u021ainta unui cod scris \xeen Verilog este implementarea sa pe un ",(0,t.yg)("strong",{parentName:"p"},"FPGA")," sau dezvoltarea unui ",(0,t.yg)("strong",{parentName:"p"},"ASIC")," (Application Specific Integrated Circuit)."),(0,t.yg)("h2",{id:"de-ce-verilog"},"De ce Verilog?"),(0,t.yg)("p",null,"Un limbaj de descriere hardware con\u021bine o serie de abstractiz\u0103ri sau moduri de a genera, prin intermediul codului, por\u021bi logice. \xcen compara\u021bie cu a proiecta \u201cde m\xe2n\u0103\u201d circuitele integrate, tocmai aceste abstractiz\u0103ri sunt cele care au permis electronicii digitale s\u0103 se dezvolte \xeen ritm rapid, odat\u0103 cu progresul tehnologiei de fabrica\u021bie. Cu ajutorul lor putem descrie relativ u\u0219or structuri complexe, diviz\xe2ndu-le \xeen componentele lor comune \u0219i de baz\u0103.   "),(0,t.yg)("p",null,"\xcens\u0103 apare \xeentrebarea natural\u0103: Ce a\u0219 putea face cu un FPGA \u0219i nu a\u0219 putea face cu un procesor? Pe scurt, exist\u0103 trei r\u0103spunsuri: "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Un FPGA poate fi reconfigurat \xeentr-un timp foarte scurt. Asta \xeenseamn\u0103 c\u0103, dac\u0103 am gre\u0219it ceva \xeen design-ul nostru, dac\u0103 dorim s\u0103-l modific\u0103m sau s\u0103-l extindem, timpul \u0219i costul acestei ac\u021biuni sunt foarte mici; "),(0,t.yg)("li",{parentName:"ul"},"Un FPGA, prin construc\u021bia lui, ofer\u0103 un grad extrem de ridicat de paralelism, lucru pe care codul scris pentru un procesor (deci cod secven\u021bial) \xeel ofer\u0103 \xeentr-o m\u0103sur\u0103 mai redus\u0103 \u0219i mai greu de controlat;"),(0,t.yg)("li",{parentName:"ul"},"Un FPGA este de preferat oric\xe2nd se dore\u0219te interfa\u021barea unui dispozitiv (un senzor, un dispozitiv de afi\u0219are, etc.) care are nevoie de timpi foarte stric\u021bi \xeen protocolul de comunicatie (exemplu: a\u0219teapt\u0103 15 nanosecunde \xeenainte s\u0103 schimbi linia de ceas, apoi activeaz\u0103 linia de enable pentru 25 de nanosecunde, apoi pune datele pe linia de date \u0219i \u021bine-le cel pu\u021bin 50 de nanosecunde, etc). Pe un procesor acest lucru este iar\u0103\u0219i dificil de controlat, fiindc\u0103 majoritatea instruc\u021biunilor se execut\u0103 \xeentr-un num\u0103r diferit de cicli de ceas.")),(0,t.yg)("p",null,"\xcentruc\xe2t au fost puse \xeen discu\u021bie at\xe2t proiectarea prin por\u021bi logice a unui circuit c\xe2t \u0219i descrierea lui la un nivel mai abstract, putem clasifica alternative de descriere a unui circuit:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"descrierea structural\u0103")," - mai pu\u021bin folosit\u0103, ea reprezint\u0103 o implementare asem\u0103n\u0103toare cu o schem\u0103 logic\u0103 a unui circuit, folosind primitive \u0219i module pentru implementarea func\u021bionalit\u0103\u021bii"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"descrierea comportamental\u0103")," - divizat\u0103 \xeen descriere la nivel de flux de date \u0219i descriere la nivel procedural, folose\u0219te construc\u021bii de nivel \xeenalt, \xeent\xe2lnite \u0219i \xeen alte limbaje de programare.")),(0,t.yg)("h2",{id:"ce-tipuri-de-circuite-putem-construi"},"Ce tipuri de circuite putem construi?"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Circuitele logice combina\u021bionale")," aplic\u0103 func\u021bii logice pe intr\u0103ri pentru a ob\u021bine ie\u0219irile. Valorile de ie\u0219ire depind astfel doar de valorile curente de intrare, iar c\xe2nd starea unei intr\u0103ri se schimb\u0103, se reflect\u0103 imediat asupra ie\u0219iri."),(0,t.yg)("div",{align:"center"},(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Diagrama bloc pentru un circuit combina\u021bional cu n intr\u0103ri \u0219i m ie\u0219iri",src:r(1970).A,width:"394",height:"104"})),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Figure: Diagrama bloc pentru un circuit combina\u021bional cu n intr\u0103ri \u0219i m ie\u0219iri"))),(0,t.yg)("p",null,"Logica combina\u021bional\u0103 poate fi reprezentat\u0103 prin:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"diagrame structurale la nivel de por\u021bi logice, "),(0,t.yg)("li",{parentName:"ul"},"tabele de adev\u0103r,"),(0,t.yg)("li",{parentName:"ul"},"expresii booleene (func\u021bii logice).")),(0,t.yg)("p",null,"Spre deosebire de ",(0,t.yg)("strong",{parentName:"p"},"circuitele")," logice combina\u021bionale, cele ",(0,t.yg)("strong",{parentName:"p"},"secven\u021biale")," (eng: sequential logic) nu mai depind exclusiv de valoarea curent\u0103 a intr\u0103rilor, ci \u0219i de st\u0103rile anterioare ale circuitului. Logica secven\u021bial\u0103 poate fi de dou\u0103 tipuri: sincron\u0103 \u0219i asincron\u0103."),(0,t.yg)("div",{align:"center"},(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Schema bloc a unui circuit secven\u021bial sincron",src:r(8582).A,width:"642",height:"399"})),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"Figure: Schema bloc a unui circuit secven\u021bial sincron"))),(0,t.yg)("p",null,"\xcen primul caz, cel cu care vom lucra \u0219i la laborator, este folosit un semnal de ceas care comand\u0103 elementul/elementele de memorare, acestea schimb\xe2ndu-\u0219i starea doar la impulsurile de ceas. \xcen al doilea caz, ie\u0219irile se modific\u0103 atunci c\xe2nd se modific\u0103 \u0219i intr\u0103rile, neexist\xe2nd un semnal de ceas pentru elementele de memorare. Circuitele secven\u021biale asincrone sunt mai greu de proiectat, pot ap\u0103rea probleme de sincronizare \u0219i sunt folosite mai rar. \xcen continuare ne vom referi doar la circuitele secven\u021biale sincrone."))}p.isMDXComponent=!0},1970:(e,i,r)=>{r.d(i,{A:()=>a});const a="data:image/png;base64,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"},8582:(e,i,r)=>{r.d(i,{A:()=>a});const a=r.p+"assets/images/circuit-secv-4518f3578a8529da6e0800d39f2973fa.png"}}]);