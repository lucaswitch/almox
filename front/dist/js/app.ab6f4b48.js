(function(){"use strict";var e={4515:function(e,t,r){var o=r(9242),n=r(2483);const a=()=>Promise.all([r.e(489),r.e(62),r.e(876),r.e(161),r.e(0),r.e(631)]).then(r.bind(r,5631)),i=()=>Promise.all([r.e(489),r.e(62),r.e(876),r.e(161),r.e(0),r.e(478)]).then(r.bind(r,3478)),d=()=>Promise.all([r.e(489),r.e(62),r.e(876),r.e(161),r.e(528),r.e(0),r.e(139),r.e(84)]).then(r.bind(r,6084)),s=()=>Promise.all([r.e(489),r.e(62),r.e(876),r.e(161),r.e(365)]).then(r.bind(r,1365)),u=()=>Promise.all([r.e(489),r.e(62),r.e(876),r.e(841)]).then(r.bind(r,3841)),l=()=>Promise.all([r.e(489),r.e(62),r.e(876),r.e(528),r.e(139),r.e(629)]).then(r.bind(r,8629)),m=()=>Promise.all([r.e(489),r.e(62),r.e(876),r.e(528),r.e(139),r.e(8)]).then(r.bind(r,1008)),c=()=>Promise.all([r.e(489),r.e(876),r.e(795)]).then(r.bind(r,6402)),f=()=>Promise.all([r.e(489),r.e(876),r.e(479)]).then(r.bind(r,8251)),p=()=>Promise.all([r.e(489),r.e(876),r.e(945)]).then(r.bind(r,2268)),b=()=>Promise.all([r.e(489),r.e(62),r.e(161),r.e(528),r.e(466)]).then(r.bind(r,8220)),h=()=>Promise.all([r.e(489),r.e(62),r.e(161),r.e(528),r.e(207)]).then(r.bind(r,1549)),v=()=>Promise.all([r.e(62),r.e(835)]).then(r.bind(r,8385)),g=(0,n.p7)({history:(0,n.PO)(),routes:[{path:"/",redirect:"/login"},{path:"/inicio",name:"home",component:a},{path:"/agenda",name:"agenda",component:i},{path:"/agenda/reservar",name:"reservas",component:d},{path:"/materiais",name:"materiais",component:s,props:!0},{path:"/materiais/:id",name:"materiais ",component:u,props:!0},{path:"/materiais/devolver",name:"devolver",component:l},{path:"/materiais/registrar-materiais",name:"registrarMateriais",component:m},{path:"/relatorio",name:"#",component:c},{path:"/professores",name:"professores",component:f},{path:"/administradores",name:"admins",component:p},{path:"/login",name:"login",component:b},{path:"/signin",name:"signin",component:h},{path:"/:notFound(.*)",name:"notfound",component:v}]});var y=g,P=r(65),w={},A={},N={professores(e){return e.professores},temProfessores(e){return e.professores&&e.professores.length>0},administradores(e){return e.administradores},temAdministradores(e){return e.administradores&&e.administradores.length>0}},O={namespaced:!0,state(){return{professores:[{id:"p1",primeiroNome:"Julia",ultimoNome:"Carvalho"},{id:"p2",primeiroNome:"Alice",ultimoNome:"Cavalcanti"},{id:"p3",primeiroNome:"Isaac",ultimoNome:"Lima"},{id:"p4",primeiroNome:"Pedro",ultimoNome:"Miguel"},{id:"p5",primeiroNome:"Raquel",ultimoNome:"Cardoso"}],administradores:[{id:"adm1",primeiroNome:"Fernando",ultimoNome:"Mendes"},{id:"adm2",primeiroNome:"Gustavo",ultimoNome:"Henrique"}]}},mutations:w,actions:A,getters:N},k={},C={},j={materiais(e){return e.materiais},temMateriais(e){return e.materiais&&e.materiais.length>0},alertas(e){return e.alertas},temAlertas(e){return e.alertas&&e.alertas.length>0}},_={namespaced:!0,state(){return{materiais:[{id:"m1",nome:"Ácido Enzimático",lote:"A1B41C423",formulaQuimica:"C4H3",concentracao:"14g/cm",pesoMolecular:"13u",marca:"Aleator",validade:"13/12/2022",quantidade:"2",unidadeMedida:"gramas",estoque:"12",situacao:"Completo",dataEntrada:"27/11/2022",observacoes:"Nenhuma observação."},{id:"m2",nome:"Ácido Clorídrico",lote:"A14AA1466",formulaQuimica:"C4H3",concentracao:"14g/cm",pesoMolecular:"13u",marca:"Aleator",validade:"13/12/2022",quantidade:"10",unidadeMedida:"quilos",estoque:"12kg",situacao:"Completo",dataEntrada:"15/06/2022",observacoes:"Nenhuma observação."},{id:"m3",nome:"Glicose Enzimática",lote:"A44444466",formulaQuimica:"C4H3",concentracao:"14g/cm",pesoMolecular:"13u",marca:"Aleator",validade:"13/12/2022",quantidade:"10",unidadeMedida:"gramas",estoque:"12kg",situacao:"Completo",dataEntrada:"03/01/2022",observacoes:"Nenhuma observação."}],alertas:[{id:"a1",nome:"Glicose Enzimática",tipoAlerta:"Produto próximo do vencimento.",lote:"A41244466"},{id:"a2",nome:"Ácido Clorídrico",tipoAlerta:"Produto acabando.",lote:"A44444466"}]}},mutations:k,actions:C,getters:j},E={},W={},S={laboratorios(e){return e.laboratorios},temLaboratorios(e){return e.laboratorios&&e.laboratorios.length>0},agora(e){return e.agora},temAgora(e){return e.agora&&e.agora.length>0},reservas(e){return e.reservas},temReservas(e){return e.reservas&&e.reservas.length>0}},M={namespaced:!0,state(){return{laboratorios:[{id:"l1",nome:"Laboratório de Manipulação 1"},{id:"l2",nome:"Laboratório de Saúde"},{id:"l3",nome:"Laboratório de Nutrição 1"}],agora:[{id:"a1",laboratorio:"Laboratório de Nutrição",hora:"15:00"}],reservas:[{id:"r1",laboratorio:"Laboratório de Nutrição",data:"17 de outubro",hora:"15:00"},{id:"a2",laboratorio:"Laboratório de Manipulação 1",data:"18 de outubro",hora:"17:00"}]}},mutations:E,actions:W,getters:S};const L=(0,P.MT)({modules:{pessoas:O,materiais:_,agenda:M}});var q=L,T=r(3396),x=r(7718),R=r(3140);const I={key:0};function F(e,t,r,o,n,a){const i=(0,T.up)("side-bar"),d=(0,T.up)("router-view");return(0,T.wg)(),(0,T.j4)(x.q,null,{default:(0,T.w5)((()=>[n.loginPage?(0,T.kq)("",!0):((0,T.wg)(),(0,T.iD)("div",I,[(0,T.Wm)(i)])),(0,T.Wm)(R.O,{class:"mx-5 my-5"},{default:(0,T.w5)((()=>[(0,T.Wm)(d)])),_:1})])),_:1})}var U=r(4075),B=r(6145),H=r(7754),J=r(8777),D=r(9657);function z(e,t){return(0,T.wg)(),(0,T.j4)(D.V,{color:"teal-lighten-5",permanent:"",border:"0",width:"360"},{default:(0,T.w5)((()=>[(0,T.Wm)(B.i,{nav:""},{default:(0,T.w5)((()=>[(0,T.Wm)(H.b,{class:"my-2"},{default:(0,T.w5)((()=>[(0,T.Uk)("PRINCIPAL")])),_:1}),(0,T.Wm)(J.l,{"prepend-icon":"mdi-home",title:"Início",value:"inicio",rounded:"pill",router:"",to:"/inicio"}),(0,T.Wm)(J.l,{"prepend-icon":"mdi-calendar",title:"Agenda",value:"agenda",rounded:"pill",router:"",to:"/agenda"}),(0,T.Wm)(U.J),(0,T.Wm)(H.b,{class:"my-2"},{default:(0,T.w5)((()=>[(0,T.Uk)("MATERIAIS")])),_:1}),(0,T.Wm)(J.l,{"prepend-icon":"mdi-flask-empty",title:"Todos",value:"todos",rounded:"pill",router:"",to:"/materiais"}),(0,T.Wm)(J.l,{"prepend-icon":"mdi-flask-empty-minus",title:"Devolver",value:"devolver",rounded:"pill",router:"",to:"/materiais/devolver"}),(0,T.Wm)(U.J),(0,T.Wm)(H.b,{class:"my-2"},{default:(0,T.w5)((()=>[(0,T.Uk)("FORMULÁRIOS")])),_:1}),(0,T.Wm)(J.l,{"prepend-icon":"mdi-pencil",title:"Relatório",value:"relatorio",rounded:"pill",router:"",to:"/relatorio"}),(0,T.Wm)(U.J),(0,T.Wm)(H.b,{class:"my-2"},{default:(0,T.w5)((()=>[(0,T.Uk)("PESSOAS")])),_:1}),(0,T.Wm)(J.l,{"prepend-icon":"mdi-account",title:"Professores",value:"professores",rounded:"pill",router:"",to:"/professores"}),(0,T.Wm)(J.l,{"prepend-icon":"mdi-account-cog",title:"Administradores",value:"administradores",rounded:"pill",router:"",to:"/administradores"})])),_:1}),(0,T.Wm)(U.J),(0,T.Wm)(H.b,{class:"my-2"},{default:(0,T.w5)((()=>[(0,T.Uk)("     AÇÕES")])),_:1}),(0,T.Wm)(J.l,{"prepend-icon":"mdi-exit-to-app",title:"Sair",rounded:"pill",router:"",to:"/login"})])),_:1})}var G=r(89);const Q={},Z=(0,G.Z)(Q,[["render",z]]);var K=Z,V={components:{SideBar:K},data(){return{loginPage:!1}},watch:{"$route.name"(e){"login"!==e&&"signin"!==e||(this.loginPage=!0)}},computed:{notLoged(){return"login"!==this.router.name}}};const $=(0,G.Z)(V,[["render",F]]);var X=$,Y=(r(9773),r(8957)),ee=r(3504),te=(0,Y.Rd)({icons:{defaultSet:"mdi",aliases:ee.j,sets:{mdi:ee.t}}});async function re(){const e=await r.e(461).then(r.t.bind(r,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}re();const oe=(0,o.ri)(X);oe.use(te),oe.use(y),oe.use(q),oe.mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],n=e[l][1],a=e[l][2];for(var d=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[s])}))?o.splice(s--,1):(d=!1,a<i&&(i=a));if(d){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,n,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var d=2&n&&o;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((function(e){i[e]=function(){return o[e]}}));return i["default"]=function(){return o},r.d(a,i),a}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+(461===e?"webfontloader":e)+"."+{0:"f4037270",8:"7567d69f",62:"d1eb16ec",84:"3550930d",139:"8376c58b",161:"f160e45a",207:"e91ebb2a",365:"8cdf1627",461:"42346552",466:"e65df415",478:"343b7092",479:"c84aa2ed",489:"d2535a97",528:"f5ef975c",629:"fd99771f",631:"2c1cdada",795:"15a48d78",835:"df4d640b",841:"cdb979d4",876:"2522fd0a",945:"f582df04"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{62:"2eacd50f",84:"1cb26117",139:"4e1c03d5",207:"94b9ed43",365:"0ff99827",466:"94b9ed43",478:"0ff99827",479:"5515d0b3",528:"83e5555a",631:"0ff99827",795:"5b95e4f9",876:"2cbb0965",945:"5515d0b3"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pi8proj:";r.l=function(o,n,a,i){if(e[o])e[o].push(n);else{var d,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var m=u[l];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+a){d=m;break}}d||(s=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.setAttribute("data-webpack",t+a),d.src=o),e[o]=[n];var c=function(t,r){d.onerror=d.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(c.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=c.bind(null,d.onerror),d.onload=c.bind(null,d.onload),s&&document.head.appendChild(d)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(r){if(a.onerror=a.onload=null,"load"===r.type)o();else{var i=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=d,a.parentNode.removeChild(a),n(s)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=function(o){return new Promise((function(n,a){var i=r.miniCssF(o),d=r.p+i;if(t(i,d))return n();e(o,d,null,n,a)}))},n={143:0};r.f.miniCss=function(e,t){var r={62:1,84:1,139:1,207:1,365:1,466:1,478:1,479:1,528:1,631:1,795:1,876:1,945:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else if(876!=t){var a=new Promise((function(r,o){n=e[t]=[r,o]}));o.push(n[2]=a);var i=r.p+r.u(t),d=new Error,s=function(o){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}};r.l(i,s,"chunk-"+t,t)}else e[t]=0},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,i=o[0],d=o[1],s=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in d)r.o(d,n)&&(r.m[n]=d[n]);if(s)var l=s(r)}for(t&&t(o);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},o=self["webpackChunkpi8proj"]=self["webpackChunkpi8proj"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(4515)}));o=r.O(o)})();
//# sourceMappingURL=app.ab6f4b48.js.map