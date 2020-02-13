!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports["react-alert-confirm"]=t(require("react"),require("react-dom")):e["react-alert-confirm"]=t(e.react,e["react-dom"])}(window,(function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.type,n=e.children,o=e.onClick,r=e.style;return i.createElement("button",{style:r,onClick:o,className:"alert-confirm-button "+(t||"default")},n)},t}(i.Component);t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(3);var o=n(0),r=n(4),i=n(1);function a(e,t){if(void 0===t&&(t={}),"string"==typeof e||o.isValidElement(e))t.content=e;else{if("object"!=typeof e)throw new Error("options required type is object or and React.ReactNode!");Object.assign(t,e)}return new r.default(t)}t.Button=i.default,t.alert=function(e){return a(e,{type:"alert"})},t.asyncConfirm=function(e){return a(e).async()},t.default=function(e){return a(e)}},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(5),i=n(6),a=n(1),c=n(7),s=function(){function e(e){var t,n,r=this,i=e.title,s=e.content,u=e.footer,l=e.language,f=void 0===l?"zh":l,p=e.zIndex,d=e.closeBefore,m=e.type,y=void 0===m?"confirm":m,h=e.onOk,v=e.onCancel,b=e.okText,_=e.cancelText;this.zIndex=1e3,this.type="confirm",this.status="mount",this.action=null,this.container=null,this.closeBefore=null,this.dispatch=function(e){var t,n,o,i;r.action=e;var a=r,c=a.closeBefore,s=a.onOk,u=a.onCancel,l=a.resolve,f=a.reject;c?c.call(r,e,r.closePopup.bind(r)):("ok"===e&&(null===(t=s)||void 0===t||t(),null===(n=l)||void 0===n||n(r)),"cancel"!==e&&"close"!==e||(null===(o=u)||void 0===o||o(),null===(i=f)||void 0===i||i(r)),r.closePopup())},this.closePopup=function(){r.status="unmount",r.render()},this.async=function(){return new Promise((function(e,t){r.resolve=e,r.reject=t}))};var C=document.createElement("div");if(C.className="alert-confirm-container",document.body.appendChild(C),Number.isNaN(p)||"number"!=typeof p||(C.style.zIndex=String(p),this.zIndex=p),this.container=C,this.title=i,this.content=s,u){var O=Object.prototype.toString.call(u);this.footer="[object Function]"===O?u.call(this,this.dispatch):u}else{var j=c.default[f];this.footer=o.createElement(o.Fragment,null,"alert"!==y&&o.createElement(a.default,{onClick:function(){return r.dispatch("cancel")}},_||(null===(t=j)||void 0===t?void 0:t.cancel)),o.createElement(a.default,{type:"primary",onClick:function(){return r.dispatch("ok")}},b||(null===(n=j)||void 0===n?void 0:n.ok)))}this.type=y,this.onOk=h,this.onCancel=v,d&&(this.closeBefore=d),this.render()}return e.prototype.render=function(){var e=this,t=e.container,n=e.title,a=e.content,c=e.footer,s=e.type,u=e.status,l=e.dispatch;r.unmountComponentAtNode(t),r.render(o.createElement(i.default,{type:s,title:n,content:a,footer:c,dispatch:function(e){return l(e)},status:u,onClosePopup:function(){r.unmountComponentAtNode(t),document.body.removeChild(t)}}),t)},e}();t.default=s},function(e,n){e.exports=t},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={maskClassName:"",mainClassName:""},t.animationEnd=function(){t.setState({maskClassName:"",mainClassName:""});var e=t.props,n=e.status,o=e.onClosePopup;"unmount"===n&&o()},t}return r(t,e),t.prototype.componentDidMount=function(){"mount"===this.props.status?this.setState({maskClassName:"fadeIn",mainClassName:"zoomIn"}):this.setState({maskClassName:"fadeOut",mainClassName:"zoomOut"})},t.prototype.render=function(){var e=this.state,t=e.maskClassName,n=e.mainClassName,o=this.props,r=o.title,a=o.content,c=o.footer,s=o.dispatch,u=o.type;return i.createElement("div",{className:"alert-confirm-mask "+t},i.createElement("div",{className:"alert-confirm-main "+n+" "+u,onAnimationEnd:this.animationEnd},i.createElement("div",{className:"alert-confirm-header"},r),"alert"!==u&&i.createElement("div",{className:"alert-confirm-header-close"},i.createElement("span",{className:"icon",onClick:function(){return s("close")}},"✕")),i.createElement("div",{className:"alert-confirm-content"},a),i.createElement("div",{className:"alert-confirm-footer"},c)))},t}(i.Component);t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={zh:{ok:"确 认",cancel:"取 消"},en:{ok:"OK",cancel:"Cancel"}}}])}));