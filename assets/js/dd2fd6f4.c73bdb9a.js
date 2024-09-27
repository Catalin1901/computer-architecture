"use strict";(self.webpackChunkcomputer_architecture=self.webpackChunkcomputer_architecture||[]).push([[3683],{5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var A=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);a&&(A=A.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,A)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,A,r=function(e,a){if(null==e)return{};var t,A,r={},n=Object.keys(e);for(A=0;A<n.length;A++)t=n[A],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(A=0;A<n.length;A++)t=n[A],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=A.createContext({}),s=function(e){var a=A.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return A.createElement(o.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return A.createElement(A.Fragment,{},a)}},g=A.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,d=u["".concat(o,".").concat(g)]||u[g]||p[g]||n;return t?A.createElement(d,i(i({ref:a},c),{},{components:t})):A.createElement(d,i({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=g;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=t[s];return A.createElement.apply(null,i)}return A.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3240:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var A=t(8168),r=(t(6540),t(5680));const n={},i="Programarea FPGA-ului \xeen Vivado",l={unversionedId:"Tutoriale/Programare FPGA Vivado/README",id:"Tutoriale/Programare FPGA Vivado/README",title:"Programarea FPGA-ului \xeen Vivado",description:"Pentru acest tutorial vom presupune c\u0103 a\u021bi parcurs deja tutorialele: Creare proiect Vivado \u0219i Simulare Vivado f\u0103r\u0103 nicio eroare \xeen timpul simul\u0103rii la tabul Messages (ignora\u021bi warning-urile momentan).",source:"@site/docs/Tutoriale/Programare FPGA Vivado/README.md",sourceDirName:"Tutoriale/Programare FPGA Vivado",slug:"/Tutoriale/Programare FPGA Vivado/",permalink:"/computer-architecture/Tutoriale/Programare FPGA Vivado/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Simulare modul \xeen Vivado",permalink:"/computer-architecture/Tutoriale/Simulare Vivado/"},next:{title:"Laboratoare",permalink:"/computer-architecture/Laboratoare/"}},o={},s=[],c={toc:s},u="wrapper";function p(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,A.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"programarea-fpga-ului-\xeen-vivado"},"Programarea FPGA-ului \xeen Vivado"),(0,r.yg)("p",null,"Pentru acest tutorial vom presupune c\u0103 a\u021bi parcurs deja tutorialele: Creare proiect Vivado \u0219i Simulare Vivado f\u0103r\u0103 ",(0,r.yg)("strong",{parentName:"p"},"nicio eroare")," \xeen timpul simul\u0103rii la tabul Messages (ignora\u021bi warning-urile momentan).\n",(0,r.yg)("img",{alt:"Messages",src:t(5587).A,width:"1526",height:"1040"})," "),(0,r.yg)("p",null,"Pentru a programa FPGA-ul \xeen Vivado trebuie s\u0103 ad\u0103ug\u0103m un Constraint File:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Click fie la Add Sources\n",(0,r.yg)("img",{alt:"Add Sources",src:t(7562).A,width:"1430",height:"953"}),"\nFie click dreapta \xeen fereastra Sources\n",(0,r.yg)("img",{alt:"Sources",src:t(1061).A,width:"780",height:"468"}),"\nSau folosim ",(0,r.yg)("strong",{parentName:"li"},"Alt+A"),"."),(0,r.yg)("li",{parentName:"ol"},"Select\u0103m Add or create constraints, apoi Next.\n",(0,r.yg)("img",{alt:"Add or create constraints",src:t(1793).A,width:"844",height:"576"})),(0,r.yg)("li",{parentName:"ol"},'Click pe "Create File", alegem un nume, de exemplu "nexys_a7", Ok, apoi Finish.\n',(0,r.yg)("img",{alt:"exemplu &quot;nexys_a7&quot;",src:t(664).A,width:"848",height:"578"})),(0,r.yg)("li",{parentName:"ol"},"Ar trebui s\u0103 vedem acum un fi\u0219ier gol cu numele nexys_a7.xdc la Sources.\n",(0,r.yg)("img",{alt:"exemplu1",src:t(4078).A,width:"1402",height:"851"}),"."),(0,r.yg)("li",{parentName:"ol"},"Vom scrie \xeen acest fi\u0219ier gol tot con\u021binutul acestui fi\u0219ier de pe GitHub: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Digilent/digilent-xdc/blob/77d88001d51ba54b33ed0b4b34bcc19c979be5ff/Nexys-A7-100T-Master.xdc"},"Nexys-A7-100T-Master.xdc"),". Cu ajutorul acestuia vom lega fiecare port al top modulului nostru (task01.v) la loca\u021bii fizice de pe FPGA. Av\xe2nd la dispozi\u021bie urm\u0103torul modul Verilog:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-verilog"},"module task01(\n    input in,\n    output out\n    );\n    \n    assign out = in;\n    \nendmodule\n")),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Ne propunem s\u0103 leg\u0103m intrarea ",(0,r.yg)("strong",{parentName:"li"},"in")," la push-button-ul ",(0,r.yg)("strong",{parentName:"li"},"N17")," (cel din centru), iar ie\u0219irea ",(0,r.yg)("strong",{parentName:"li"},"out")," la ledul H17 (cel mai din dreapta).\nPentru acest lucru vom analiza fi\u0219ierul ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Digilent/digilent-xdc/blob/77d88001d51ba54b33ed0b4b34bcc19c979be5ff/Nexys-A7-100T-Master.xdc"},"Nexys-A7-100T-Master.xdc"),": toate liniile sunt comentate. Exist\u0103 grupuri de linii comentate pentru semnalul de ceas, switches, LEDs, RGB LEDs, push-buttons, 7 segments, CPU Reset Button, Buttons etc. Ne vom concentra acum doar pe LEDs \u0219i Buttons. Vom decomenta linia 30:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tcl"},"set_property -dict { PACKAGE_PIN H17   IOSTANDARD LVCMOS33 } [get_ports { LED[0] }]; #IO_L18P_T2_A24_15 Sch=led[0]\n")),(0,r.yg)("p",null,"\u0219i linia 77:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tcl"},"set_property -dict { PACKAGE_PIN N17   IOSTANDARD LVCMOS33 } [get_ports { BTNC }]; #IO_L9P_T1_DQS_14 Sch=btnc\n")),(0,r.yg)("p",null,'apoi vom schimba parametrul primit de "get_ports" din ',(0,r.yg)("strong",{parentName:"p"},"LED","[0]")," \xeen ",(0,r.yg)("strong",{parentName:"p"},"out")," \u0219i din ",(0,r.yg)("strong",{parentName:"p"},"BTNC")," \xeen ",(0,r.yg)("strong",{parentName:"p"},"in"),".\nCele dou\u0103 linii vor deveni astfel:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tcl"},"set_property -dict { PACKAGE_PIN H17   IOSTANDARD LVCMOS33 } [get_ports { out }]; #IO_L18P_T2_A24_15 Sch=led[0]\n")),(0,r.yg)("p",null,"respectiv,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tcl"},"set_property -dict { PACKAGE_PIN N17   IOSTANDARD LVCMOS33 } [get_ports { in }]; #IO_L9P_T1_DQS_14 Sch=btnc\n")),(0,r.yg)("p",null,"Putem l\u0103sa celelalte linii comentate a\u0219a cum sunt le vom folosi \xeen viitor pentru alte module. Salva\u021bi fi\u0219ierul .xdc."),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"\xcen fereastra Flow Manager, \xeen partea de jos ap\u0103sa\u021bi pe Generate bitstream\n",(0,r.yg)("img",{alt:"Generate bitstream",src:t(6419).A,width:"1277",height:"945"})),(0,r.yg)("li",{parentName:"ol"},"\xcen col\u021bul din dreapta sus putem verifica progresul.\n",(0,r.yg)("img",{alt:"exemplu2",src:t(9973).A,width:"1919",height:"1040"}))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"exemplu3",src:t(74).A,width:"1917",height:"1033"})),(0,r.yg)("p",null,"\xcen final ar trebui s\u0103 vedem write_bitstream Complete"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"write_bitstream Complete",src:t(5283).A,width:"1919",height:"1044"})),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"Fi\u0219ierul .bit a fost scris cu succes, dar se afl\u0103 \xeenc\u0103 \xeen memoria calculatorului, acesta trebuie transferat pe FPGA."),(0,r.yg)("li",{parentName:"ol"},"Conecta\u021bi pl\u0103cu\u021ba la computer prin cablul USB-microUSB din cutie, porni\u021bi pl\u0103cu\u021ba folosind switch-ul l\xe2ng\u0103 care scrie POWER. "),(0,r.yg)("li",{parentName:"ol"},'Ap\u0103sa\u021bi "Open Target" \u0219i apoi "Auto Connect"\n',(0,r.yg)("img",{alt:"exemplu4",src:t(5623).A,width:"1226",height:"1032"})),(0,r.yg)("li",{parentName:"ol"},"Procesul de auto conectare nu ar trebui s\u0103 dureze mult\n",(0,r.yg)("img",{alt:"auto conectare",src:t(2606).A,width:"601",height:"164"})),(0,r.yg)("li",{parentName:"ol"},"Ar trebui s\u0103 vedem op\u021biunea Program device sub Hardware Manager.\n",(0,r.yg)("img",{alt:"Program device",src:t(4405).A,width:"1258",height:"957"})),(0,r.yg)("li",{parentName:"ol"},"Apoi s\u0103 ap\u0103s\u0103m Program dac\u0103 avem deja loca\u021bia fi\u0219ierului .bit la Bitstream file.\n",(0,r.yg)("img",{alt:"Program",src:t(4988).A,width:"609",height:"324"})),(0,r.yg)("li",{parentName:"ol"},'\xcen final ar trebui s\u0103 avem un mesaj \xeen consol\u0103 \u0219i ledul "Done" aprins pe pl\u0103cu\u021b\u0103.\n',(0,r.yg)("img",{alt:"Consol\u0103",src:t(4947).A,width:"1021",height:"226"})),(0,r.yg)("li",{parentName:"ol"},"Dac\u0103 to\u021bi pa\u0219ii au fost parcur\u0219i \xeen mod corespunz\u0103tor, ledul H17 ar trebui s\u0103 se aprind\u0103 c\xe2t timp butonul N17 este ap\u0103sat. ")),(0,r.yg)("p",null,"Dac\u0103 ave\u021bi sugestii de \xeembun\u0103t\u0103\u021bire a acestei pagini v\u0103 rog s\u0103 trimite\u021bi sugestiile pe mail la ",(0,r.yg)("a",{parentName:"p",href:"mailto:dosarudaniel@gmail.com"},"dosarudaniel@gmail.com"),". Sugestiile bune vor fi recompensate cu puncte bonus."))}p.isMDXComponent=!0},6419:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_0-e5be3e2158b7071d294f13f286d2aa5d.png"},1061:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_1.1-f3ca02e05a10cd16d769ce7fdcc01873.png"},7562:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_1-b8c35fa93e6aef264884152c0842f5c8.png"},1793:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_2-6cbfbf438cfcf1d764f69bc234201c5f.png"},9973:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_20-c60b704612f709419c183b79c4a2de13.png"},664:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_3-29c71bf4826eed1b48c4fb6a39e0f1c8.png"},74:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_30-6c43037e61d5631f7b5ce0f01016e197.png"},5283:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_31-e6ae3dca9f1902b3f733ef829d47112f.png"},5623:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_40-c0a39746a7efb07eee76bcd3b80afb92.png"},2606:(e,a,t)=>{t.d(a,{A:()=>A});const A="data:image/png;base64,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"},4405:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_42-57313d817f94b18401e1f5aa3bdaa56f.png"},4988:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_43-a175fc0704d2fa8320a435b4884253df.png"},4947:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_44-2c7a12939c20053cc2931da7fec0ea9f.png"},4078:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/load_to_fpga_5-495314433046f34a7ebd87154731569c.png"},5587:(e,a,t)=>{t.d(a,{A:()=>A});const A=t.p+"assets/images/messages_tab-8b4e4fbbc41f2b828acdc7957111f274.png"}}]);