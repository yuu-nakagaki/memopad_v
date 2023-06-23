(function(){"use strict";var e={5539:function(e,t,o){var n=o(9242),r=o(3396);function i(e,t){const o=(0,r.up)("router-link"),n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(o,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("メモ一覧")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/new"},{default:(0,r.w5)((()=>[(0,r.Uk)("新規追加")])),_:1})]),(0,r.Wm)(n)],64)}var u=o(89);const s={},l=(0,u.Z)(s,[["render",i]]);var c=l,a=o(2483),m=o(7139);const d={class:"home"},f={key:0},p={key:1};function h(e,t,o,n,i,u){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",d,[u.hasMemos?((0,r.wg)(),(0,r.iD)("ul",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.memos,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},[(0,r.Wm)(s,{to:{name:"edit",params:{id:e.id}},style:(0,m.j5)(u.getHusenStyle(e))},{default:(0,r.w5)((()=>[(0,r.Uk)((0,m.zw)(e.title),1)])),_:2},1032,["to","style"])])))),128))])):((0,r.wg)(),(0,r.iD)("p",p,"メモはまだありません。「新規追加」よりメモを追加できます。"))])}var v={name:"HomeView",computed:{hasMemos(){return this.$store.getters.getCount},memos(){return this.$store.getters.getAll}},methods:{getHusenStyle(e){const t={yellow:"#f7eaa0",green:"#a0f7ac"},o=t[e.color]||"";return{borderLeft:`30px solid ${o}`}}}};const g=(0,u.Z)(v,[["render",h],["__scopeId","data-v-9dacc21e"]]);var w=g;function y(e,t,o,n,i,u){const s=(0,r.up)("MemoForm");return(0,r.wg)(),(0,r.j4)(s,{memo:""})}const b=e=>((0,r.dD)("data-v-5dc8289f"),e=e(),(0,r.Cn)(),e),k={class:"center"},_=b((()=>(0,r._)("span",null,"保存",-1))),C=b((()=>(0,r._)("span",null,"ふせん色変更",-1)));function M(e,t,o,i,u,s){const l=(0,r.up)("MyButton");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>u.title=e),class:(0,m.C_)([s.husenColorClass])},null,2),[[n.nr,u.title]])]),(0,r._)("div",null,[(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>u.content=e)},null,512),[[n.nr,u.content]])]),(0,r._)("div",k,[(0,r.Wm)(l,{onClick:s.save,class:"save"},{default:(0,r.w5)((()=>[_])),_:1},8,["onClick"]),(0,r.Wm)(l,{onClick:s.changeColor,class:"change"},{default:(0,r.w5)((()=>[C])),_:1},8,["onClick"]),o.memo.id?((0,r.wg)(),(0,r.j4)(l,{key:0,onClick:s.remove,class:"delete",bgcolor:"#E8421E",forecolor:"#fff"},{default:(0,r.w5)((()=>[(0,r.Uk)("削除")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])],64)}o(7658);var O=o(7487),j={name:"MemoForm",computed:{husenColorClass(){return"green"===this.color?"green":""}},components:{MyButton:O.Z},props:["memo"],data(){return{title:this.memo.title,content:this.memo.content,color:this.memo.color||"yellow"}},methods:{save(){let e={title:this.title,content:this.content,color:this.color};this.memo.id&&(e.id=this.memo.id),this.$store.commit("save",e),this.$router.push("/")},remove(){this.$store.commit("delete",this.memo.id),this.$router.push("/")},changeColor(){const e="yellow"===this.color?"green":"yellow";this.color=e,this.$store.commit("changeHusenColor",{id:this.memo.id,color:e})}}};const E=(0,u.Z)(j,[["render",M],["__scopeId","data-v-5dc8289f"]]);var T=E,S={name:"NewView",components:{MemoForm:T}};const $=(0,u.Z)(S,[["render",y]]);var D=$;const U={key:1};function I(e,t,o,n,i,u){const s=(0,r.up)("MemoForm");return u.memo?((0,r.wg)(),(0,r.j4)(s,{key:0,memo:u.memo},null,8,["memo"])):((0,r.wg)(),(0,r.iD)("p",U,"指定されたメモはありません"))}var x={name:"EditView",components:{MemoForm:T},computed:{memo(){const e=parseInt(this.$route.params.id);return this.$store.getters.getMemoById(e)}}};const A=(0,u.Z)(x,[["render",I]]);var H=A;const Z=[{path:"/",name:"home",component:w},{path:"/new",name:"new",component:D},{path:"/edit/:id",name:"edit",component:H},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,1966))}],F=(0,a.p7)({history:(0,a.r5)(),routes:Z});var W=F,B=o(65),N=o(5103);const P=new N.Ew({storage:localStorage});var V=(0,B.MT)({state:{count:0,memos:[],color:{}},getters:{getCount:e=>e.memos.length,getAll:e=>e.memos,getMemoById:e=>t=>e.memos.find((e=>e.id===t))},mutations:{RESTORE_MUTATION:P.RESTORE_MUTATION,save(e,t){if(t.id){let o=e.memos.find((e=>e.id===t.id));o.title=t.title,o.content=t.content}else t.id=++e.count,e.memos.unshift(t)},delete(e,t){e.memos=e.memos.filter((e=>e.id!==t))},changeHusenColor(e,{id:t,color:o}){const n=e.memos.find((e=>e.id===t));n&&(n.color=o)}},actions:{},modules:{},plugins:[P.plugin]});(0,n.ri)(c).use(V).use(W).mount("#app")},7487:function(e,t,o){o.d(t,{Z:function(){return c}});var n=o(3396),r=o(7139);function i(e,t,o,i,u,s){return(0,n.wg)(),(0,n.iD)("button",{class:"btn",style:(0,r.j5)({"background-color":o.bgcolor,color:o.forecolor})},[(0,n._)("span",null,[(0,n.WI)(e.$slots,"default",{},(()=>[(0,n.Uk)("ボタン")]),!0)])],4)}var u={name:"MyButton",props:{bgcolor:{type:String,default:"#fff"},forecolor:{type:String,default:"#333"}}},s=o(89);const l=(0,s.Z)(u,[["render",i],["__scopeId","data-v-62226250"]]);var c=l}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var u=1/0;for(a=0;a<e.length;a++){n=e[a][0],r=e[a][1],i=e[a][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||u>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,i<u&&(u=i));if(s){e.splice(a--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.41311b22.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="memopad_vue:";o.l=function(n,r,i,u){if(e[n])e[n].push(r);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var m=c[a];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==t+i){s=m;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[r];var d=function(t,o){s.onerror=s.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=i);var u=o.p+o.u(t),s=new Error,l=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",s.name="ChunkLoadError",s.type=i,s.request=u,r[1](s)}};o.l(u,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,u=n[0],s=n[1],l=n[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var a=l(o)}for(t&&t(n);c<u.length;c++)i=u[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(a)},n=self["webpackChunkmemopad_vue"]=self["webpackChunkmemopad_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5539)}));n=o.O(n)})();
//# sourceMappingURL=app.e957dcb1.js.map