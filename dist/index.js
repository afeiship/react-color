!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("classnames"),require("noop"),require("react-dom"),require("object-assign")):"function"==typeof define&&define.amd?define(["prop-types","react","classnames","noop","react-dom","object-assign"],t):"object"==typeof exports?exports.BoilerplateReactComponent=t(require("prop-types"),require("react"),require("classnames"),require("noop"),require("react-dom"),require("object-assign")):e.BoilerplateReactComponent=t(e["prop-types"],e.react,e.classnames,e.noop,e["react-dom"],e["object-assign"])}(window,function(e,t,r,n,o,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=(r(4),r(0)),u=r.n(a),c=r(2),i=r.n(c),l=r(3),s=r.n(l);r(5);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=e.value;return(r=m(this,v(t).call(this,e)))._onClick=function(e){var t=e.target.dataset.color;r.change(t)},r.state={value:n},r}var r,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),r=t,(a=[{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&this.change(t)}},{key:"change",value:function(e){var t=this.props.onChange,r={value:e};this.setState(r,function(){t({target:r})})}},{key:"render",value:function(){var e=this,t=this.props,r=t.className,n=t.items,a=(t.value,t.template,t.onChange,y(t,["className","items","value","template","onChange"])),u=this.state.value;return o.a.createElement("div",f({"data-component":"react-color",className:i()("react-color",r)},a),n.length>0&&n.map(function(t){return o.a.createElement("span",{onClick:e._onClick,"data-color":t.value,className:i()("".concat("react-color","__item"),{"is-active":t.value===u}),style:{background:t.value},key:t.value})}))}}])&&b(r.prototype,a),u&&b(r,u),t}();g.displayName="react-color",g.propTypes={className:u.a.string,value:u.a.string,items:u.a.array,template:u.a.func,onChange:u.a.func},g.defaultProps={items:[],onChange:s.a};t.default=g}])});