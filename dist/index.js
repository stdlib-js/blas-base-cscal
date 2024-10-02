"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(z,o){
var m=require('@stdlib/complex-float32-base-mul/dist');function j(e,r,a,i,s){var t,u;if(e<=0)return a;for(t=s,u=0;u<e;u++)a.set(m(r,a.get(t)),t),t+=i;return a}o.exports=j
});var f=n(function(A,q){
var x=require('@stdlib/strided-base-stride2offset/dist'),R=v();function _(e,r,a,i){var s=x(e,i);return R(e,r,a,i,s)}q.exports=_
});var p=n(function(B,d){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),E=v();g(l,"ndarray",E);d.exports=l
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),c,y=b(O(__dirname,"./native.js"));h(y)?c=k:c=y;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
