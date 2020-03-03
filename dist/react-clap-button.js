"use strict";function n(n){return n&&"object"==typeof n&&"default"in n?n.default:n}var e=n(require("react")),t=require("styled-components"),r=n(t),o=require("react-transition-group"),i=require("polished");function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function u(n,e,t){return e&&c(n.prototype,e),t&&c(n,t),n}function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function f(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&d(n,e)}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,e){return(d=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function h(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function v(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function m(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?v(n):e}function b(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function C(){var n=b(["\n    background: ",";\n\n    &::before,\n    &::after {\n      background: ",";\n    }\n\n    &:hover {\n      &::before,\n      &::after {\n        background: ",";\n      }\n    }\n  "]);return C=function(){return n},n}function y(){var n=b(["\n  border: 0;\n  padding: 0;\n  appearance: none;\n  position: absolute;\n  right: 0;\n  top: calc(50% - 15px);\n  transform: translateX(0);\n  height: 30px;\n  width: 36px;\n  border-radius: 0 9999px 9999px 0;\n  backface-visibility: hidden;\n  cursor: pointer;\n  outline: none;\n  transition: transform .3s cubic-bezier(.25,0,.6,1.4) 1s,-webkit-transform .3s cubic-bezier(.25,0,.6,1.4) 1s;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    right: calc(50% - 3.5px);\n    top: calc(50% - 8px);\n    height: 16px;\n    width: 2px;\n    border-radius: 9999px;\n    transition: background 0.3s ease-in-out;\n  }\n\n  &::before {\n    transform: rotate(45deg);\n  }\n\n  &::after {\n    transform: rotate(-45deg);\n  }\n\n  ","\n"]);return y=function(){return n},n}var k=r.button(y(),(function(n){var e=n.theme,r=(e.primaryColor,e.secondaryColor);return t.css(C(),i.rgba(r,.1),r,i.darken(.1,r))})),g={entered:function(){return{transform:"translateX(calc(100% - 5px))",transitionDelay:"0s"}},exiting:function(n){var e=n.isClicked;return{transitionDuration:e?"0.25s":"0.3s",transitionDelay:e?"0s":"0.7s"}}},x=function(n){var t=n.in,r=h(n,["in"]);return e.createElement(o.Transition,{in:t,timeout:{enter:400}},(function(n){return e.createElement(k,l({style:g[n]&&g[n](r)},r))}))};function w(){var n=b(["\n  position: relative;\n  z-index: 2;\n"]);return w=function(){return n},n}function O(){var n=b(["\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n"]);return O=function(){return n},n}var T=r.div(O()),E=r.div(w()),j=function(n){function t(){var n,e;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return s(v(e=m(this,(n=p(t)).call.apply(n,[this].concat(o)))),"state",{displayClear:!1}),s(v(e),"onClick",(function(){e.state.displayClear&&e.setState({displayClear:!1})})),s(v(e),"mouseMove",(function(){e.state.displayClear||e.setState({displayClear:!0})})),s(v(e),"mouseLeave",(function(){e.state.displayClear&&e.setState({displayClear:!1})})),e}return f(t,e.Component),u(t,[{key:"render",value:function(){var n=this,t=this.props,r=t.children,o=t.isClicked,i=t.onClickClear,a=this.state.displayClear;return e.createElement(T,{onMouseLeave:this.mouseLeave,onClick:function(e){n.state.isClicked=!0,setTimeout((function(){n.state.isClicked=!1}),100)}},e.createElement(E,{onMouseMove:this.mouseMove,onClick:this.onClick},r),e.createElement(x,{onClick:i,in:a&&o,isClicked:this.state.isClicked}))}}]),t}();function R(){var n=b(["\n    fill: ",";\n    stroke: ",";\n    stroke-width: ",";\n  "]);return R=function(){return n},n}function S(){var n=b(["\n  width: 33px;\n\n  ",";\n"]);return S=function(){return n},n}var z=r.svg(S(),(function(n){var e=n.isClicked,r=n.theme.secondaryColor;return t.css(R(),e?r:"none",e?"white":r,e?"1px":"2px")})),P=e.createElement("path",{d:"M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z"}),M=e.createElement("path",{d:"M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9"});function H(){var n=b(["\n    width: ","px;\n    height: ","px;\n    border: 1px solid ",";\n\n    &::after {\n      width: ","px;\n      height: ","px;\n      border-color: ",";\n      color: ",";\n      fill: ",";\n    }\n\n    &:hover, &:focus {\n      border: 1px solid ",";\n    }\n  "]);return H=function(){return n},n}function _(){var n=b(["\n    &::after {\n      animation: "," 2s infinite;\n    }\n  "]);return _=function(){return n},n}function q(){var n=b(["\n  position: relative;\n  outline: 1px solid transparent;\n  border-radius: 50%;\n  background: #fff;\n  transition: border 0.1s ease-in;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 50%;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ","\n\n  ","\n"]);return q=function(){return n},n}function B(){var n=b(["\n0%{\n     box-shadow:0 0\n }\n 70%{\n     box-shadow:0 0 5px 10px rgba(255,255,255,0)\n }\n 100%{\n     box-shadow:0 0 0 0 rgba(255,255,255,0)\n }\n"]);return B=function(){return n},n}var L=function(n){n.theme.secondaryColor;return t.keyframes(B())},N=r.button(q(),(function(n){return n.isHover&&t.css(_(),L)}),(function(n){var e=n.theme,r=e.primaryColor,o=e.secondaryColor,i=e.size;return t.css(H(),i,i,r,i-1,i-1,o,o,o,o)}));function D(){var n=b(["\n  font-size: 0.8rem;\n  user-select: none;\n  pointer-events: none;\n  position: absolute;\n"]);return D=function(){return n},n}var I=t.css(D());function X(){var n=b(["\n\n      height: ",";\n      width: ",";\n      line-height: ",";\n      top: -",";\n      left: ","px;\n      background: ",";\n    "]);return X=function(){return n},n}function A(){var n=b(["\n  color: white;\n  border-radius: 50%;\n  backface-visibility: hidden;\n  ","\n\n  ","\n"]);return A=function(){return n},n}var F=r.span(A(),I,(function(n){var e=n.theme,r=e.secondaryColor,o=e.size,i="".concat(3*o/4,"px");return t.css(X(),i,i,i,i,o/8,r)}));function G(){var n=b(["\n    top: -","px;\n    color: ",";\n    width: ","px;\n  "]);return G=function(){return n},n}function J(){var n=b(["\n  transform: scale(1);\n  text-align: center;\n  left: 0;\n  ","\n\n  ","\n"]);return J=function(){return n},n}var K=r.span(J(),I,(function(n){var e=n.theme,r=e.primaryColor,o=e.size;return t.css(G(),3+o/3,r,o)})),Q={primaryColor:"rgb(189, 195, 199)",secondaryColor:"rgb(39, 174, 96)",size:40},U=function(n){function r(n){var t;return a(this,r),(t=m(this,p(r).call(this,n))).state={unclicked:!0,count:t.props.count,countTotal:t.props.countTotal,isClicked:n.count>0,isHover:!1},t.onClick=t.onClick.bind(v(t)),t.onClickClear=t.onClickClear.bind(v(t)),t.clapButtonRef=e.createRef(),t.clapIconRef=e.createRef(),t.clapCountRef=e.createRef(),t.clapCountTotalRef=e.createRef(),t}return f(r,e.Component),u(r,[{key:"componentDidMount",value:function(){var n=require("mo-js"),e=new n.Html({el:this.clapCountRef.current,isShowStart:!1,isShowEnd:!0,y:{0:-30},opacity:{0:1},duration:300}).then({opacity:{1:0},y:-80,delay:150}),t=(this.props.count>0&&this.state.unclicked,new n.Html({el:this.clapCountTotalRef.current,isShowStart:!0,isShowEnd:!0}).then({opacity:{0:1},delay:450,duration:300,y:{3:0}})),r=new n.Html({el:this.clapButtonRef.current,duration:300,scale:{1.3:1},easing:n.easing.out});this.clapButtonRef.current.style.transform="scale(1, 1)",this.animationTimeline=new n.Timeline,this.animationTimeline.add([e,t,r])}},{key:"getTheme",value:function(){var n=this.props.theme,e=void 0===n?{}:n;return Object.assign({},Q,e)}},{key:"onClick",value:function(){var n=this.props,e=n.maxCount,t=n.onCountChange;this.animationTimeline.replay(),this.setState((function(n){var r=n.count,o=n.countTotal;if(r<e)return t({count:r+1,countTotal:o+1}),{unclicked:!1,count:r+1,countTotal:o+1,isClicked:!0}}))}},{key:"onClickClear",value:function(){var n=this.props.onCountChange;this.setState((function(e){var t=e.count,r=e.countTotal;return n({count:0,countTotal:r-t}),{isClicked:!1,countTotal:r-t,count:0}}))}},{key:"render",value:function(){var n=this,r=this.state,o=r.count,i=r.countTotal,a=r.isClicked,c=r.isHover,u=this.props.iconComponent;return e.createElement(t.ThemeProvider,{theme:this.getTheme()},e.createElement(j,{isClicked:a,onClickClear:this.onClickClear},e.createElement(N,{ref:this.clapButtonRef,className:"clap",onClick:this.onClick,onMouseEnter:function(e){return n.setState({isHover:!0})},onMouseLeave:function(e){return n.setState({isHover:!1})},isHover:c&&0===o},e.createElement(u,{ref:this.clapIconRef,className:"clap--icon",isClicked:a}),e.createElement(F,{ref:this.clapCountRef,className:"clap--count"},o),e.createElement(K,{ref:this.clapCountTotalRef,className:"clap--count-total"},Number(i).toLocaleString()))))}}]),r}();U.defaultProps={countTotal:0,count:0,maxCount:999,isClicked:!1,onCountChange:function(){},iconComponent:function(n){return e.createElement(z,l({xmlns:"http://www.w3.org/2000/svg",viewBox:"-549 338 100.1 125"},n),P,M)}},module.exports=U;
//# sourceMappingURL=react-clap-button.js.map
