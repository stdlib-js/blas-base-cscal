// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-base-mul@v0.1.0-esm/index.mjs";function s(e,t,s,n,d){var i,o;if(e<=0)return s;for(i=d,o=0;o<e;o++)s.set(r(t,s.get(i)),i),i+=n;return s}function n(e,r,n,d){return s(e,r,n,d,t(e,d))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
