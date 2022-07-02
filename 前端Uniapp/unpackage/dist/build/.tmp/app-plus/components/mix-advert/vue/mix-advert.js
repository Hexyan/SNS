(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mix-advert/vue/mix-advert"],{"08af":function(t,e,n){"use strict";n.r(e);var r=n("166d5"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=u.a},"166d5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("439e"));function u(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{advertState:0,interval:null,timer:8}},props:{timedown:{type:Number,default:8},imageUrl:{type:String,default:"/static/advert.jpg"},url:{type:String,default:"/pages/test1/test1"}},created:function(){this.timer=this.timedown},methods:{initAdvert:function(){this.clickEvent;var t={timer:this.timer,imageUrl:this.imageUrl,url:this.url};r.default.initAdvert(t)}}};e.default=i},"43e7":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r})},ae5f:function(t,e,n){"use strict";n.r(e);var r=n("43e7"),u=n("08af");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("ce7e");var a,c=n("f0c5"),f=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=f.exports},ce7e:function(t,e,n){"use strict";var r=n("dcb8"),u=n.n(r);u.a},dcb8:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mix-advert/vue/mix-advert-create-component',
    {
        'components/mix-advert/vue/mix-advert-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("ae5f"))
        })
    },
    [['components/mix-advert/vue/mix-advert-create-component']]
]);
