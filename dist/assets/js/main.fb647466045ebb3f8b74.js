!function(){"use strict";var e,t={9722:function(e,t,a){var n=a(2578),l=a(6963),r=a(8428),o=(0,a(3575).xC)({reducer:{}});function c(e){var t=e.classList,a=e.text;return n.createElement("button",{className:t.join(" ")},a)}function s(){return n.createElement("div",{className:"todo__head"},n.createElement("div",{className:"todo__title"},n.createElement("h1",null,"TODO")),n.createElement(c,{classList:["todo__theme-btn"],text:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26"},n.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"}))}))}function i(){return n.createElement("label",{className:"todo__create-container"},n.createElement("input",{type:"checkbox",className:"todo__check"}),n.createElement("div",{className:"todo__false-check"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"9"},n.createElement("path",{fill:"none",stroke:"#FFF",strokeWidth:"2",d:"M1 4.304L3.696 7l6-6"}))),n.createElement("input",{type:"text",className:"todo__input",placeholder:"Create a new todo..."}))}function m(e){var t=e.text;return n.createElement("label",{className:"todo__create-container"},n.createElement("input",{type:"checkbox",className:"todo__check"}),n.createElement("div",{className:"todo__false-check"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"9"},n.createElement("path",{fill:"none",stroke:"#FFF",strokeWidth:"2",d:"M1 4.304L3.696 7l6-6"}))),n.createElement("div",{className:"todo__text"},t),n.createElement(c,{classList:["todo__delete-btn"],text:n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18"},n.createElement("path",{fill:"#494C6B",fillRule:"evenodd",d:"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"}))}))}function d(){return n.createElement("div",{className:"container"},n.createElement("div",{className:"background dark"},n.createElement("div",{className:"background__img"})),n.createElement("div",{className:"container__todo todo"},n.createElement("div",{className:"todo__block"},n.createElement(s,null),n.createElement("div",{className:"todo__main"},n.createElement("div",{className:"todo__create"},n.createElement(i,null)),n.createElement("div",{className:"todo__content"},n.createElement("ul",{className:"todo__list"},["Complete online JavaScript course","Jog around the park 3x","10 minutes meditation","Read for 1 hour","Pick up groceries","Complete Todo App on Frontend Mentor"].map((function(e,t){return n.createElement("li",{className:"todo__item",key:t},n.createElement(m,{text:e}))}))),n.createElement("div",{className:"todo__control"},n.createElement("div",{className:"todo__numb"},"5 items left"),n.createElement("div",{className:"todo__sort"},n.createElement(c,{classList:["todo__sort-all","btn","active"],text:"All"}),n.createElement(c,{classList:["todo__sort-active","btn"],text:"Active"}),n.createElement(c,{classList:["todo__sort-completed","btn"],text:"Completed"})),n.createElement("div",{className:"todo__clear"},n.createElement(c,{classList:["todo__clear-btn","btn"],text:"Clear completed"}))))),n.createElement("div",{className:"todo__foot"},"Drag and drop to reorder list"))))}var u=document.getElementById("app");(0,l.s)(u).render(n.createElement(r.zt,{store:o},n.createElement(d,null)))}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return t[e](r,r.exports,n),r.loaded=!0,r.exports}n.m=t,e=[],n.O=function(t,a,l,r){if(!a){var o=1/0;for(m=0;m<e.length;m++){a=e[m][0],l=e[m][1],r=e[m][2];for(var c=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(c=!1,r<o&&(o=r));if(c){e.splice(m--,1);var i=l();void 0!==i&&(t=i)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,l,r]},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,r,o=a[0],c=a[1],s=a[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(s)var m=s(n)}for(t&&t(a);i<o.length;i++)r=o[i],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}(),n.O(void 0,[801],(function(){return n(6005)}));var l=n.O(void 0,[801],(function(){return n(9722)}));l=n.O(l)}();