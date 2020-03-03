import n from"react";import t,{css as e,keyframes as r,ThemeProvider as o}from"styled-components";import{Transition as i}from"react-transition-group";import{rgba as a,darken as c}from"polished";function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function s(n,t,e){return t&&l(n.prototype,t),e&&l(n,e),n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(){return(p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function d(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&m(n,t)}function h(n){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function m(n,t){return(m=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function v(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}function b(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function C(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?b(n):t}function y(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function k(){var n=y(["\n    background: ",";\n\n    &::before,\n    &::after {\n      background: ",";\n    }\n\n    &:hover {\n      &::before,\n      &::after {\n        background: ",";\n      }\n    }\n  "]);return k=function(){return n},n}function g(){var n=y(["\n  border: 0;\n  padding: 0;\n  appearance: none;\n  position: absolute;\n  right: 0;\n  top: calc(50% - 15px);\n  transform: translateX(0);\n  height: 30px;\n  width: 36px;\n  border-radius: 0 9999px 9999px 0;\n  backface-visibility: hidden;\n  cursor: pointer;\n  outline: none;\n  transition: transform .3s cubic-bezier(.25,0,.6,1.4) 1s,-webkit-transform .3s cubic-bezier(.25,0,.6,1.4) 1s;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    right: calc(50% - 3.5px);\n    top: calc(50% - 8px);\n    height: 16px;\n    width: 2px;\n    border-radius: 9999px;\n    transition: background 0.3s ease-in-out;\n  }\n\n  &::before {\n    transform: rotate(45deg);\n  }\n\n  &::after {\n    transform: rotate(-45deg);\n  }\n\n  ","\n"]);return g=function(){return n},n}var x=t.button(g(),(function(n){var t=n.theme,r=(t.primaryColor,t.secondaryColor);return e(k(),a(r,.1),r,c(.1,r))})),w={entered:function(){return{transform:"translateX(calc(100% - 5px))",transitionDelay:"0s"}},exiting:function(n){var t=n.isClicked;return{transitionDuration:t?"0.25s":"0.3s",transitionDelay:t?"0s":"0.7s"}}},O=function(t){var e=t.in,r=v(t,["in"]);return n.createElement(i,{in:e,timeout:{enter:400}},(function(t){return n.createElement(x,p({style:w[t]&&w[t](r)},r))}))};function T(){var n=y(["\n  position: relative;\n  z-index: 2;\n"]);return T=function(){return n},n}function E(){var n=y(["\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n"]);return E=function(){return n},n}var j=t.div(E()),R=t.div(T()),z=function(t){function e(){var n,t;u(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return f(b(t=C(this,(n=h(e)).call.apply(n,[this].concat(o)))),"state",{displayClear:!1}),f(b(t),"onClick",(function(){t.state.displayClear&&t.setState({displayClear:!1})})),f(b(t),"mouseMove",(function(){t.state.displayClear||t.setState({displayClear:!0})})),f(b(t),"mouseLeave",(function(){t.state.displayClear&&t.setState({displayClear:!1})})),t}return d(e,n.Component),s(e,[{key:"render",value:function(){var t=this,e=this.props,r=e.children,o=e.isClicked,i=e.onClickClear,a=this.state.displayClear;return n.createElement(j,{onMouseLeave:this.mouseLeave,onClick:function(n){t.state.isClicked=!0,setTimeout((function(){t.state.isClicked=!1}),100)}},n.createElement(R,{onMouseMove:this.mouseMove,onClick:this.onClick},r),n.createElement(O,{onClick:i,in:a&&o,isClicked:this.state.isClicked}))}}]),e}();function S(){var n=y(["\n    fill: ",";\n    stroke: ",";\n    stroke-width: ",";\n  "]);return S=function(){return n},n}function P(){var n=y(["\n  width: 33px;\n\n  ",";\n"]);return P=function(){return n},n}var M=t.svg(P(),(function(n){var t=n.isClicked,r=n.theme.secondaryColor;return e(S(),t?r:"none",t?"white":r,t?"1px":"2px")})),H=n.createElement("path",{d:"M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z"}),_=n.createElement("path",{d:"M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9"});function B(){var n=y(["\n    width: ","px;\n    height: ","px;\n    border: 1px solid ",";\n\n    &::after {\n      width: ","px;\n      height: ","px;\n      border-color: ",";\n      color: ",";\n      fill: ",";\n    }\n\n    &:hover, &:focus {\n      border: 1px solid ",";\n    }\n  "]);return B=function(){return n},n}function L(){var n=y(["\n    &::after {\n      animation: "," 2s infinite;\n    }\n  "]);return L=function(){return n},n}function N(){var n=y(["\n  position: relative;\n  outline: 1px solid transparent;\n  border-radius: 50%;\n  background: #fff;\n  transition: border 0.1s ease-in;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 50%;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ","\n\n  ","\n"]);return N=function(){return n},n}function D(){var n=y(["\n0%{\n     box-shadow:0 0\n }\n 70%{\n     box-shadow:0 0 5px 10px rgba(255,255,255,0)\n }\n 100%{\n     box-shadow:0 0 0 0 rgba(255,255,255,0)\n }\n"]);return D=function(){return n},n}var I=function(n){n.theme.secondaryColor;return r(D())},X=t.button(N(),(function(n){return n.isHover&&e(L(),I)}),(function(n){var t=n.theme,r=t.primaryColor,o=t.secondaryColor,i=t.size;return e(B(),i,i,r,i-1,i-1,o,o,o,o)}));function q(){var n=y(["\n  font-size: 0.8rem;\n  user-select: none;\n  pointer-events: none;\n  position: absolute;\n"]);return q=function(){return n},n}var A=e(q());function F(){var n=y(["\n\n      height: ",";\n      width: ",";\n      line-height: ",";\n      top: -",";\n      left: ","px;\n      background: ",";\n    "]);return F=function(){return n},n}function G(){var n=y(["\n  color: white;\n  border-radius: 50%;\n  backface-visibility: hidden;\n  ","\n\n  ","\n"]);return G=function(){return n},n}var J=t.span(G(),A,(function(n){var t=n.theme,r=t.secondaryColor,o=t.size,i="".concat(3*o/4,"px");return e(F(),i,i,i,i,o/8,r)}));function K(){var n=y(["\n    top: -","px;\n    color: ",";\n    width: ","px;\n  "]);return K=function(){return n},n}function Q(){var n=y(["\n  transform: scale(1);\n  text-align: center;\n  left: 0;\n  ","\n\n  ","\n"]);return Q=function(){return n},n}var U=t.span(Q(),A,(function(n){var t=n.theme,r=t.primaryColor,o=t.size;return e(K(),3+o/3,r,o)})),V={primaryColor:"rgb(189, 195, 199)",secondaryColor:"rgb(39, 174, 96)",size:40},W=function(t){function e(t){var r;return u(this,e),(r=C(this,h(e).call(this,t))).state={unclicked:!0,count:r.props.count,countTotal:r.props.countTotal,isClicked:t.count>0,isHover:!1},r.onClick=r.onClick.bind(b(r)),r.onClickClear=r.onClickClear.bind(b(r)),r.clapButtonRef=n.createRef(),r.clapIconRef=n.createRef(),r.clapCountRef=n.createRef(),r.clapCountTotalRef=n.createRef(),r}return d(e,n.Component),s(e,[{key:"componentDidMount",value:function(){var n=require("mo-js"),t=new n.Html({el:this.clapCountRef.current,isShowStart:!1,isShowEnd:!0,y:{0:-30},opacity:{0:1},duration:300}).then({opacity:{1:0},y:-80,delay:150}),e=(this.props.count>0&&this.state.unclicked,new n.Html({el:this.clapButtonRef.current,duration:300,scale:{1.3:1},easing:n.easing.out}));this.clapButtonRef.current.style.transform="scale(1, 1)",this.animationTimeline=new n.Timeline,this.animationTimeline.add([t,e])}},{key:"getTheme",value:function(){var n=this.props.theme,t=void 0===n?{}:n;return Object.assign({},V,t)}},{key:"onClick",value:function(){var n=this.props,t=n.maxCount,e=n.onCountChange;this.animationTimeline.replay(),this.setState((function(n){var r=n.count,o=n.countTotal;if(r<t)return e({count:r+1,countTotal:o+1}),{unclicked:!1,count:r+1,countTotal:o+1,isClicked:!0}}))}},{key:"onClickClear",value:function(){var n=this.props.onCountChange;this.setState((function(t){var e=t.count,r=t.countTotal;return n({count:0,countTotal:r-e}),{isClicked:!1,countTotal:r-e,count:0}}))}},{key:"render",value:function(){var t=this,e=this.state,r=e.count,i=e.countTotal,a=e.isClicked,c=e.isHover,u=this.props.iconComponent;return n.createElement(o,{theme:this.getTheme()},n.createElement(z,{isClicked:a,onClickClear:this.onClickClear},n.createElement(X,{ref:this.clapButtonRef,className:"clap",onClick:this.onClick,onMouseEnter:function(n){return t.setState({isHover:!0})},onMouseLeave:function(n){return t.setState({isHover:!1})},isHover:c&&0===r},n.createElement(u,{ref:this.clapIconRef,className:"clap--icon",isClicked:a}),n.createElement(J,{ref:this.clapCountRef,className:"clap--count"},r),n.createElement(U,{ref:this.clapCountTotalRef,className:"clap--count-total"},Number(i).toLocaleString()))))}}]),e}();W.defaultProps={countTotal:0,count:0,maxCount:999,isClicked:!1,onCountChange:function(){},iconComponent:function(t){return n.createElement(M,p({xmlns:"http://www.w3.org/2000/svg",viewBox:"-549 338 100.1 125"},t),H,_)}};export default W;
//# sourceMappingURL=react-clap-button.m.js.map
