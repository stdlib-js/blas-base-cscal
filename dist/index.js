"use strict";var n=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=n(function(z,o){
var m=require('@stdlib/complex-float32-base-mul/dist');function j(a,r,e,i,s){var t,u;if(a<=0)return e;for(t=s,u=0;u<a;u++)e.set(m(r,e.get(t)),t),t+=i;return e}o.exports=j
});var f=n(function(A,q){
var x=require('@stdlib/strided-base-stride2offset/dist'),R=v();function _(a,r,e,i){var s=x(a,i);return R(a,r,e,i,s)}q.exports=_
});var p=n(function(B,d){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),E=v();g(l,"ndarray",E);d.exports=l
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),c,y=b(O(__dirname,"./native.js"));h(y)?c=k:c=y;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
