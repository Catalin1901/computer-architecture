"use strict";(self.webpackChunkcomputer_architecture=self.webpackChunkcomputer_architecture||[]).push([[9240],{5680:(e,a,r)=>{r.d(a,{xA:()=>m,yg:()=>g});var t=r(6540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=t.createContext({}),c=function(e){var a=t.useContext(u),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},m=function(e){var a=c(e.components);return t.createElement(u.Provider,{value:a},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,g=p["".concat(u,".").concat(d)]||p[d]||s[d]||i;return r?t.createElement(g,l(l({ref:a},m),{},{components:r})):t.createElement(g,l({ref:a},m))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2971:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(8168),n=(r(6540),r(5680));const i={},l="Practice: Debouncer",o={unversionedId:"Laboratoare/4 Verilog Secven\u021bial/Debouncer/Practic\u0103/README",id:"Laboratoare/4 Verilog Secven\u021bial/Debouncer/Practic\u0103/README",title:"Practice: Debouncer",description:'- Se dore\u0219te proiectarea unui automat finit capabil s\u0103 recunoasc\u0103 secven\u021be de tip "ba". Automatul prime\u0219te la intrare \xeen mod continuu caractere codificate printr-un semnal de un bit (caracterele posibile sunt "a" \u0219i "b"). Ie\u0219irea automatului va consta dintr-un semnal care va fi activat (valoarea 1) atunci c\xe2nd la intrare am avut prezent un \u0219ir care se potrive\u0219te cu tiparul de c\u0103utare.',source:"@site/docs/Laboratoare/4 Verilog Secven\u021bial/Debouncer/Practic\u0103/README.md",sourceDirName:"Laboratoare/4 Verilog Secven\u021bial/Debouncer/Practic\u0103",slug:"/Laboratoare/4 Verilog Secven\u021bial/Debouncer/Practic\u0103/",permalink:"/computer-architecture/Laboratoare/4 Verilog Secven\u021bial/Debouncer/Practic\u0103/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Debouncer",permalink:"/computer-architecture/Laboratoare/4 Verilog Secven\u021bial/Debouncer/Teorie/"},next:{title:"5 Verilog Secven\u021bial",permalink:"/computer-architecture/Laboratoare/5 Verilog Secven\u021bial/"}},u={},c=[],m={toc:c},p="wrapper";function s(e){let{components:a,...r}=e;return(0,n.yg)(p,(0,t.A)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"practice-debouncer"},"Practice: Debouncer"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Se dore\u0219te proiectarea unui automat finit capabil s\u0103 recunoasc\u0103 secven\u021be de tip "ba". Automatul prime\u0219te la intrare \xeen mod continuu caractere codificate printr-un semnal de un bit (caracterele posibile sunt "a" \u0219i "b"). Ie\u0219irea automatului va consta dintr-un semnal care va fi activat (valoarea 1) atunci c\xe2nd la intrare am avut prezent un \u0219ir care se potrive\u0219te cu tiparul de c\u0103utare.',(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Implementa\u021bi automatul \xeen Verilog.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Hint"),": Realiza\u021bi pe h\xe2rtie schema automatului de st\u0103ri, pentru a o folosi ulterior ca referin\u021b\u0103. "))),(0,n.yg)("li",{parentName:"ul"},"Simula\u021bi automatul folosind modulul de test din scheletul de cod. Elimina\u021bi semnalele nerelevante (",(0,n.yg)("em",{parentName:"li"},"is")," \u0219i ",(0,n.yg)("em",{parentName:"li"},"count"),") din diagrama de semnale. Ad\u0103uga\u021bi starea automatului \u0219i starea urm\u0103toare a automatului la diagrama de semnale.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Hint"),": Semnalele pot fi eliminate din diagrama de semnale cu ",(0,n.yg)("em",{parentName:"li"},"click dreapta->Delete")," pe semnalul care se dore\u0219te a fi eliminat."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Hint"),": Semnale noi pot fi ad\u0103ugate la diagrama de semnale prin ",(0,n.yg)("em",{parentName:"li"},"drag-and-drop")," din fereastra ",(0,n.yg)("em",{parentName:"li"},"Simulation Objects for ..."),", care con\u021bine toate semnalele modulului selectat \xeen fereastra ",(0,n.yg)("em",{parentName:"li"},"Instance and Process Name"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Hint"),": Simularea trebuie repornit\u0103 prin ",(0,n.yg)("em",{parentName:"li"},"Simulation->Restart")," urmat de ",(0,n.yg)("em",{parentName:"li"},"Simulation->Run")," pentru a vedea comportamentul semnalelor ad\u0103ugate."))),(0,n.yg)("li",{parentName:"ul"},"Urm\u0103ri\u021bi diagrama de semnale \u0219i codul automatului \u0219i explica\u021bi comportamentul. Urm\u0103ri\u021bi \u0219i explica\u021bi func\u021bionarea modulului de test."))),(0,n.yg)("li",{parentName:"ul"},"Se dore\u0219te realizarea unei treceri de pietoni semaforizate. Duratele de timp pentru cele 2 culori vor fi: ro\u0219u - 60 sec, verde - 30 sec.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Implementa\u021bi \u0219i simula\u021bi \xeen Verilog automatul necesar. Ce rol are modulul ",(0,n.yg)("em",{parentName:"li"},"trecere")," din fi\u0219ierul ",(0,n.yg)("em",{parentName:"li"},"trecere.v"),"?"),(0,n.yg)("li",{parentName:"ul"},"Explica\u021bi codul num\u0103r\u0103torului din fi\u0219ierul ",(0,n.yg)("em",{parentName:"li"},"counter.v"),".",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"Hint"),": Urm\u0103ri\u021bi comportarea acestuia pe diagrama de semnale.")))))))}s.isMDXComponent=!0}}]);