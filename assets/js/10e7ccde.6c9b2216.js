"use strict";(self.webpackChunkcomputer_architecture=self.webpackChunkcomputer_architecture||[]).push([[7671],{5680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>g});var a=t(6540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||n;return t?a.createElement(g,l(l({ref:r},s),{},{components:t})):a.createElement(g,l({ref:r},s))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=d;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2759:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=t(8168),i=(t(6540),t(5680));const n={},l="Testare",o={unversionedId:"Lab2 - Verilog/Testare/Lectura/README",id:"Lab2 - Verilog/Testare/Lectura/README",title:"Testare",description:"Pentru testarea unui modul folosind simulatorul se creeaz\u0103 module speciale de test, \xeen care, printre altele, se vor atribui valori intr\u0103rilor. Simularea permite detec\u021bia rapid\u0103 a erorilor de implementare \u0219i corectarea acestora.",source:"@site/docs/Lab2 - Verilog/Testare/Lectura/README.md",sourceDirName:"Lab2 - Verilog/Testare/Lectura",slug:"/Lab2 - Verilog/Testare/Lectura/",permalink:"/computer-architecture/Lab2 - Verilog/Testare/Lectura/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Testare",permalink:"/computer-architecture/Lab2 - Verilog/Testare/"},next:{title:"Practice: Testing simulation",permalink:"/computer-architecture/Lab2 - Verilog/Testare/Exercitii/"}},u={},c=[{value:"Blocul initial",id:"blocul-initial",level:2},{value:"Sincronizarea prin \xeent\xe2rziere",id:"sincronizarea-prin-\xeent\xe2rziere",level:2},{value:"Afi\u0219are",id:"afi\u0219are",level:2}],s={toc:c},p="wrapper";function m(e){let{components:r,...n}=e;return(0,i.yg)(p,(0,a.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"testare"},"Testare"),(0,i.yg)("p",null,"Pentru testarea unui modul folosind simulatorul se creeaz\u0103 module speciale de test, \xeen care, printre altele, se vor atribui valori intr\u0103rilor. Simularea permite detec\u021bia rapid\u0103 a erorilor de implementare \u0219i corectarea acestora. "),(0,i.yg)("p",null,"Pentru a creea un modul de test \u0219i a-l simula pute\u021bi urma tutorialul de simulare [","[https:_ocw.cs.pub.ro/courses/ac-is/tutoriale/2-ise-simulare|aici]","], iar aceast\u0103 sec\u021biune va prezenta c\xe2teva din construc\u021biile de limbaj pe care le pute\u021bi folosi \xeentr-un astfel de modul. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Diagrama testare circuit",src:t(4345).A,width:"400",height:"267"})),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Figure: Diagrama testare circuit")),(0,i.yg)("h2",{id:"blocul-initial"},"Blocul initial"),(0,i.yg)("p",null,"Blocurile ",(0,i.yg)("em",{parentName:"p"},"initial")," descriu un comportament executat o singur\u0103 dat\u0103 la \xeenceperea/activarea simul\u0103rii \u0219i sunt folosite pentru ini\u021bializ\u0103ri \u0219i \xeen module de test. Instruc\u021biunile sale trebuie \xeencadrate \xeentre cuvintele cheie ",(0,i.yg)("em",{parentName:"p"},"begin")," \u0219i ",(0,i.yg)("em",{parentName:"p"},"end")," \u0219i sunt executate secven\u021bial."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-verilog"},"initial begin \n    a = 0; \n    b = 1; \n    #10; _ delay 10 unit\u0103\u021bi de timp de simulare \n    a = 1; \n    b = 0; \nend \n")),(0,i.yg)("p",null,"Blocurile ''initial'' nu sunt sintetizabile, fiind folosite doar \xeen simul\u0103ri."),(0,i.yg)("h2",{id:"sincronizarea-prin-\xeent\xe2rziere"},"Sincronizarea prin \xeent\xe2rziere"),(0,i.yg)("p",null,"Folosind operatorul ",(0,i.yg)("em",{parentName:"p"},"#")," se poate specifica o durat\u0103 de timp \xeentre apari\u021bia instruc\u021biunii \u0219i momentul execut\u0103rii acesteia. Aceasta este util\u0103 pentru a separa temporal diversele atribuiri ale intr\u0103rilor. Durata de timp este reprezentat\u0103 prin unit\u0103\u021bi de timp de simulare. De exemplu, dac\u0103 simularea folose\u0219te un ",(0,i.yg)("em",{parentName:"p"},"timescale")," \xeen nanosecunde, ",(0,i.yg)("em",{parentName:"p"},"#n")," va reprezenta n nanosecunde."),(0,i.yg)("h2",{id:"afi\u0219are"},"Afi\u0219are"),(0,i.yg)("p",null,"At\xe2t \xeen modulele de test c\xe2t \u0219i \xeen modulele testate se pot folosi construc\u021bii pentru afi\u0219are \xeen interiorul blocurilor ",(0,i.yg)("em",{parentName:"p"},"initial")," \u0219i ",(0,i.yg)("em",{parentName:"p"},"always"),". Una dintre aceste instruc\u021biuni este ''display'':"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-verilog"},"$display(arguments);\n")),(0,i.yg)("p",null,"Argumentele acestei comenzi sunt similare cu cele ale func\u021biei ",(0,i.yg)("em",{parentName:"p"},"printf")," din C, ca \xeen exemplul de mai jos, iar specifica\u021bia complet\u0103 o pute\u021bi g\u0103si ",(0,i.yg)("img",{parentName:"p",src:"https://www.chipverify.com/verilog/verilog-display-tasks",alt:"aici"}),". ",(0,i.yg)("em",{parentName:"p"},"$display")," adaug\u0103 o linie nou\u0103, iar dac\u0103 nu se dore\u0219te acest lucru se poate folosi comanda ",(0,i.yg)("em",{parentName:"p"},"$write"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-verilog"},'a = 1; b = 4;\n\n$display("suma=%d", a+b);\n')))}m.isMDXComponent=!0},4345:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/circuit_tb-900e62a6d1650c8e2669d6f2b10d4d28.png"}}]);