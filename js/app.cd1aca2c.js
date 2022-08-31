(function(e){function t(t){for(var a,o,s=t[0],c=t[1],i=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);b&&b(t);while(p.length)p.shift()();return l.push.apply(l,i||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},l=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/iqrpg-trinket-generator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var b=c;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("7a23");const n={class:"container"},l={class:"row justify-content-center"},o={class:"col-12 col-sm-12 col-md-10 col-lg-8"},s=Object(a["f"])("div",{class:"alert alert-info mt-3 mb-5"},[Object(a["f"])("b",null,"This is a work-in-progress"),Object(a["g"])(". This tool demonstrates the relationship between all the different factors for determining trinket modifications, but this does not simulate realistic trinkets, yet. ")],-1);function c(e,t,r,c,i,b){const d=Object(a["n"])("TheHeader"),p=Object(a["n"])("Main"),u=Object(a["n"])("TheFooter");return Object(a["l"])(),Object(a["e"])("div",n,[Object(a["f"])("div",l,[Object(a["f"])("div",o,[s,Object(a["h"])(d),Object(a["h"])(p)])]),Object(a["h"])(u)])}const i={class:"h3 border-bottom my-3"};function b(e,t,r,n,l,o){return Object(a["l"])(),Object(a["e"])("div",i,Object(a["o"])(l.title),1)}var d={name:"TheHeader",data(){return{title:"IQRPG Trinket Generator"}}},p=r("6b0d"),u=r.n(p);const m=u()(d,[["render",b]]);var f=m;const j={class:"row"},O=Object(a["f"])("div",{class:"col-3 h4 p-3 text-end"},"Type",-1),h={class:"col"},y={class:"row"},g=Object(a["f"])("div",{class:"col-3 h4 p-3 text-end"},"Rarity",-1),v={class:"col"},w={class:"row"},T=Object(a["f"])("div",{class:"col-3 h4 p-3 text-end"},"Tier",-1),x={class:"col"},k={class:"row mb-3"},B={class:"col"},M=Object(a["f"])("div",{class:"col"},[Object(a["f"])("button",{class:"w-100 btn btn-success btn-lg fw-bold disabled"}," Reroll ")],-1),S={key:0},R={class:"mb-5"},P={class:"text-start d-none"};function G(e,t,r,n,l,o){const s=Object(a["n"])("TypeSelect"),c=Object(a["n"])("RaritySelect"),i=Object(a["n"])("TierSelect"),b=Object(a["n"])("ModBar");return Object(a["l"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",j,[O,Object(a["f"])("div",h,[Object(a["h"])(s,{onSetType:t[0]||(t[0]=e=>o.setType(e))})])]),Object(a["f"])("div",y,[g,Object(a["f"])("div",v,[Object(a["h"])(c,{onSetRarity:t[1]||(t[1]=e=>o.setRarity(e))})])]),Object(a["f"])("div",w,[T,Object(a["f"])("div",x,[Object(a["h"])(i,{onSetTier:t[2]||(t[2]=e=>o.setTier(e)),limit:o.rarityTierLimit,updateValue:l.tier},null,8,["limit","updateValue"])])]),Object(a["f"])("div",k,[Object(a["f"])("div",B,[Object(a["f"])("button",{class:"w-100 btn btn-primary btn-lg fw-bold",onClick:t[3]||(t[3]=e=>o.rollMods())}," Generate New ")]),M]),l.rolls.length?(Object(a["l"])(),Object(a["e"])("div",S,[(Object(a["l"])(!0),Object(a["e"])(a["a"],null,Object(a["m"])(o.modsByRarity,(e,t)=>(Object(a["l"])(),Object(a["c"])(b,Object(a["i"])({key:e.id},e,{rollTotal:o.rollsByRarity[t].total,rollBase:o.rollsByRarity[t].base}),null,16,["rollTotal","rollBase"]))),128))])):Object(a["d"])("",!0),Object(a["f"])("div",R,[Object(a["f"])("pre",P,Object(a["o"])(l.modsJson),1)])],64)}const V={class:"alert alert-dark p-2"},_={class:"btn-group bg-white w-100 rounded",role:"group"},L=Object(a["f"])("label",{class:"btn btn-outline-secondary fw-bold",for:"battling"},"Battling Trinket",-1),N=Object(a["f"])("label",{class:"btn btn-outline-secondary fw-bold",for:"gathering"},"Gathering Trinket",-1);function q(e,t,r,n,l,o){return Object(a["l"])(),Object(a["e"])("div",V,[Object(a["f"])("div",_,[Object(a["r"])(Object(a["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.type=e),type:"radio",class:"btn-check",name:"btnradio2",id:"battling",autocomplete:"off",value:"battling"},null,512),[[a["p"],l.type]]),L,Object(a["r"])(Object(a["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.type=e),type:"radio",class:"btn-check",name:"btnradio2",value:"gathering",id:"gathering",autocomplete:"off"},null,512),[[a["p"],l.type]]),N])])}var D={name:"TypeSelect",emits:["setType"],data(){return{type:"battling"}},watch:{type(e){this.$emit("setType",e)}}};const J=u()(D,[["render",q]]);var U=J;const H={class:"alert alert-dark p-2"},I={class:"btn-group bg-white w-100 rounded",role:"group"},A=Object(a["f"])("label",{class:"btn btn-outline-primary fw-bold",for:"rare"},"Rare",-1),E=Object(a["f"])("label",{class:"btn btn-outline-info fw-bold",for:"epic"},"Epic",-1),F=Object(a["f"])("label",{class:"btn btn-outline-warning fw-bold",for:"legendary"},"Legendary",-1),C=Object(a["f"])("label",{class:"btn btn-outline-danger fw-bold",for:"mythic"},"Mythic",-1);function Q(e,t,r,n,l,o){return Object(a["l"])(),Object(a["e"])("div",H,[Object(a["f"])("div",I,[Object(a["r"])(Object(a["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.type=e),type:"radio",class:"btn-check",name:"btnradio",id:"rare",autocomplete:"off",value:"rare"},null,512),[[a["p"],l.type]]),A,Object(a["r"])(Object(a["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.type=e),type:"radio",class:"btn-check",name:"btnradio",value:"epic",id:"epic",autocomplete:"off"},null,512),[[a["p"],l.type]]),E,Object(a["r"])(Object(a["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.type=e),type:"radio",class:"btn-check",name:"btnradio",value:"legendary",id:"legendary",autocomplete:"off"},null,512),[[a["p"],l.type]]),F,Object(a["r"])(Object(a["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.type=e),type:"radio",class:"btn-check",name:"btnradio",value:"mythic",id:"mythic",autocomplete:"off"},null,512),[[a["p"],l.type]]),C])])}var $={name:"TypeSelect",emits:["setRarity"],data(){return{type:"rare"}},watch:{type(e){this.$emit("setRarity",e)}}};const K=u()($,[["render",Q]]);var Y=K;const z={class:"alert alert-dark p-2"},W={class:"btn-group w-100 bg-white rounded",role:"group"},X=["id","value","disabled"],Z=["for"];function ee(e,t,r,n,l,o){return Object(a["l"])(),Object(a["e"])("div",z,[Object(a["f"])("div",W,[(Object(a["l"])(),Object(a["e"])(a["a"],null,Object(a["m"])(10,e=>Object(a["f"])("span",{class:Object(a["j"])(["btn-group w-100",{"bg-dark":e>r.limit}]),style:Object(a["k"])({"border-radius: 0; !important":e>r.limit}),key:e},[Object(a["r"])(Object(a["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),type:"radio",class:"btn-check",name:"btnradio3",id:e,autocomplete:"off",value:e,disabled:e>r.limit},null,8,X),[[a["p"],l.value]]),Object(a["f"])("label",{class:"btn btn-outline-secondary fw-bold",for:e},Object(a["o"])(e),9,Z)],6)),64))])])}var te={name:"TierSelect",emits:["setTier"],data(){return{value:1}},props:{limit:Number,updateValue:Number},watch:{value(e){this.$emit("setTier",e)},updateValue(e){console.log("updateBalue"),this.value=e}}};const re=u()(te,[["render",ee]]);var ae=re;const ne={class:"alert alert-dark mb-3"},le={class:"text-light row"},oe={class:"col-6 col-sm-3"},se={class:"bg-white rounded"},ce={class:"w-100 btn-sm btn btn-outline-secondary fw-bold"},ie={class:"col-6 col-sm-3 text-center"},be={class:"badge bg-secondary"},de=Object(a["f"])("br",null,null,-1),pe={class:"badge bg-white text-light"},ue={class:"col-12 col-sm-6"},me={class:"d-flex"},fe={class:"me-3"},je={class:"badge bg-secondary"},Oe={class:"badge bg-white text-light"},he=["min","max","value"],ye={class:"ms-3"},ge={class:"badge bg-secondary"},ve={class:"badge bg-white text-light"};function we(e,t,r,n,l,o){return Object(a["l"])(),Object(a["e"])("div",ne,[Object(a["f"])("div",le,[Object(a["f"])("div",oe,[Object(a["f"])("div",se,[Object(a["f"])("button",ce,Object(a["o"])(r.label),1)])]),Object(a["f"])("div",ie,[Object(a["f"])("span",be,[Object(a["g"])(Object(a["o"])(r.rollTotal),1),Object(a["r"])(Object(a["f"])("span",null,"%",512),[[a["q"],r.percent]])]),de,Object(a["f"])("span",pe,[Object(a["g"])(Object(a["o"])(r.rollBase),1),Object(a["r"])(Object(a["f"])("span",null,"%",512),[[a["q"],r.percent]])])]),Object(a["f"])("div",ue,[Object(a["f"])("div",me,[Object(a["f"])("div",fe,[Object(a["f"])("span",je,[Object(a["g"])(Object(a["o"])(r.min),1),Object(a["r"])(Object(a["f"])("span",null,"%",512),[[a["q"],r.percent]])]),Object(a["f"])("span",Oe,[Object(a["g"])(Object(a["o"])(r.minBase),1),Object(a["r"])(Object(a["f"])("span",null,"%",512),[[a["q"],r.percent]])])]),Object(a["f"])("input",{type:"range",class:"form-range",min:r.min,max:r.max,step:"0.1",value:r.rollTotal,disabled:"",id:"customRange3"},null,8,he),Object(a["f"])("div",ye,[Object(a["f"])("span",ge,[Object(a["g"])(Object(a["o"])(r.max),1),Object(a["r"])(Object(a["f"])("span",null,"%",512),[[a["q"],r.percent]])]),Object(a["f"])("span",ve,[Object(a["g"])(Object(a["o"])(r.maxBase),1),Object(a["r"])(Object(a["f"])("span",null,"%",512),[[a["q"],r.percent]])])])])])])])}var Te={name:"ModBar",props:{label:String,max:Number,maxBase:Number,min:Number,minBase:Number,percent:Boolean,rollTotal:Number,rollBase:Number}};const xe=u()(Te,[["render",we]]);var ke=xe,Be=r("be66"),Me={name:"Main",components:{TypeSelect:U,RaritySelect:Y,TierSelect:ae,ModBar:ke},data(){return{modsJson:Be,type:"battling",rarity:"rare",tier:1,rolls:[]}},computed:{modsByType(){let e=[...this.modsJson],t=e.filter(e=>e.type==this.type||"both"==e.type);return t},rarityMod(){switch(this.rarity){case"epic":return 1.15;case"legendary":return 1.35;case"mythic":return 1.6}return 1},rarityTierLimit(){switch(this.rarity){case"epic":return 8;case"legendary":return 9;case"mythic":return 10}return 7},rarityModLimit(){switch(this.rarity){case"epic":return 4;case"legendary":return 5;case"mythic":return 6}return 3},modsByRarity(){let e=[...this.modsByType],t=e.map(e=>{let t={...e};return t.minBase=t.min,t.maxBase=t.max,t.min=t.minBase*this.rarityMod*this.tier,t.max=t.maxBase*this.rarityMod*this.tier,t.minBase=Math.round(100*t.minBase)/100,t.maxBase=Math.round(100*t.maxBase)/100,t.min=Math.round(100*t.min)/100,t.max=Math.round(100*t.max)/100,t});return t},rollsByRarity(){let e=[...this.rolls],t=e.map(e=>{let t=e*this.rarityMod*this.tier;return t=Math.round(100*t)/100,{total:t,base:e}});return t}},methods:{setType(e){this.type=e,this.rolls=[]},setRarity(e){this.rarity=e,this.tier>this.rarityTierLimit&&(this.tier=this.rarityTierLimit)},setTier(e){console.log("TIER",e),this.tier=e},rollMods(){this.modsJson=this.shuffle(this.modsJson);let e=[...this.modsByType];this.rolls=e.map(e=>{let t=10*e.max,r=10*e.min,a=Math.floor(Math.random()*(t-r+1)+r);return a/=10,1==e.step&&(a=Math.round(a)),a})},generateTrinket(){},setSkillLevel(e){this.skillLevel=e},setClanDropTotem(e){this.clanDropTotem=e},setPremiumDrop(e){this.premiumDrop=e},setTreasureHunterLevel(e){this.treasureHunterLevel=e},addTrinket(){this.trinkets.push({resourceBase:0,resourceBoost:0,dropBoost:0})},updateTrinket(e,t){console.log("Trinket Update",e,t),this.trinkets[e]=t},removeTrinket(e){console.log("Remove Trinket",e),this.trinkets.splice(e,1)},setActions(e){this.actions=e},shuffle(e){for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}}};const Se=u()(Me,[["render",G]]);var Re=Se;const Pe={class:"row justify-content-center text-center"},Ge={class:"col-lg-6 col-md-8 mt-5"},Ve={class:"footer border-top border-secondary mb-5 pt-3"},_e=Object(a["f"])("p",{class:"m-0"},[Object(a["g"])(" Disclaimer: "),Object(a["f"])("a",{rel:"noopener",target:"_blank",href:"https://iqrpg.com"},"IQRPG"),Object(a["g"])(" is developed by Carl McKie. ")],-1),Le={class:"m-0"},Ne=Object(a["g"])(" is "),qe=Object(a["f"])("a",{rel:"noopener",target:"_blank",href:"https://github.com/SlybootsStudio/iqrpg-trinket-calculator"},"open-source",-1),De=Object(a["g"])(" and developed by "),Je=Object(a["f"])("a",{rel:"noopener",target:"_blank",href:"https://slyboots.studio"},"Slyboots Studio",-1),Ue=Object(a["g"])(". "),He=Object(a["f"])("p",{class:"m-0"},[Object(a["g"])(" You can support with "),Object(a["f"])("a",{rel:"noopener",target:"_blank",href:"https://www.patreon.com/slybootsstudio"},"Patreon"),Object(a["g"])(" or "),Object(a["f"])("a",{rel:"noopener",target:"_blank",href:"https://ko-fi.com/slybootsstudio"},"Ko-Fi"),Object(a["g"])(". ")],-1);function Ie(e,t,r,n,l,o){return Object(a["l"])(),Object(a["e"])("div",Pe,[Object(a["f"])("div",Ge,[Object(a["f"])("div",Ve,[_e,Object(a["f"])("p",Le,[Object(a["f"])("strong",null,Object(a["o"])(l.title),1),Ne,qe,De,Je,Ue]),He])])])}var Ae={name:"TheFooter",data(){return{title:"IQRPG Trinket Generator"}}};const Ee=u()(Ae,[["render",Ie]]);var Fe=Ee,Ce={name:"App",components:{TheHeader:f,Main:Re,TheFooter:Fe}};const Qe=u()(Ce,[["render",c]]);var $e=Qe,Ke=r("bc3a"),Ye=r.n(Ke);r("f9e3"),r("cd74"),r("2486"),r("f33e");const ze=Object(a["b"])($e);ze.config.globalProperties.axios=Ye.a,ze.mount("#app")},be66:function(e){e.exports=JSON.parse('[{"id":"dropboost","label":"Drop Boost","type":"both","percent":true,"min":0.4,"max":0.9},{"id":"resourceboost","label":"Resource Boost","type":"gathering","percent":true,"min":0.4,"max":0.9},{"id":"baseresource","label":"Base Resource","type":"gathering","percent":false,"min":1.5,"max":2.5,"step":0.1},{"id":"basegold","label":"Base Gold","type":"battling","percent":false,"min":4,"max":8,"step":1},{"id":"doubleitem","label":"Double Items","type":"gathering","percent":true,"min":0.1,"max":0.3,"step":0.1},{"id":"itemrarity","label":"Item Rarity","type":"gathering","percent":true,"min":0.2,"max":0.4,"step":0.1},{"id":"gatheringshard","label":"Gathering Shard Boost","type":"gathering","percent":true,"min":0.9,"max":1.8,"step":0.1},{"id":"attributeboost","label":"Attribute Boost","type":"battling","percent":true,"min":0.9,"max":1.8,"step":0.1},{"id":"goldboost","label":"Gold Boost","type":"battling","percent":true,"min":0.9,"max":1.8,"step":0.1},{"id":"battlingexpboost","label":"Battling Exp Boost","type":"battling","percent":true,"min":0.9,"max":1.8,"step":0.1},{"id":"gatheringexpboost","label":"Gathering Exp Boost","type":"gathering","percent":true,"min":0.9,"max":1.8,"step":0.1},{"id":"masteryboost","label":"Mastery Boost","type":"both","percent":true,"min":0.9,"max":1.8,"step":0.1},{"id":"attack","label":"Attack","type":"battling","percent":false,"min":50,"max":75,"step":1},{"id":"health","label":"Health","type":"battling","percent":false,"min":50,"max":75,"step":1},{"id":"defence","label":"Defence","type":"battling","percent":false,"min":50,"max":75,"step":1}]')},f33e:function(e,t,r){}});
//# sourceMappingURL=app.cd1aca2c.js.map