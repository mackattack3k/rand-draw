(this["webpackJsonprand-draw"]=this["webpackJsonprand-draw"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(3),a=n.n(r),u=(n(10),n(1)),l=n(4),c=function(e){var t=e.observeNode,n=Object(o.useState)(),i=Object(u.a)(n,2),r=i[0],a=i[1],c=Object(o.useState)(null),v=Object(u.a)(c,2),d=(v[0],v[1],new l.a((function(e){var t=Object(u.a)(e,1)[0];a(t)})));return Object(o.useLayoutEffect)((function(){return(null===t||void 0===t?void 0:t.current)&&(null===d||void 0===d||d.observe(null===t||void 0===t?void 0:t.current)),function(){null===d||void 0===d||d.disconnect()}}),[t]),r},v=function(e){var t=e.observeNode,n=Object(o.useState)(),i=Object(u.a)(n,2),r=i[0],a=i[1],l=Object(o.useState)(),c=Object(u.a)(l,2),v=c[0],d=c[1];return Object(o.useEffect)((function(){var e,n,o,i=function(e){a(e)},r=function(){d(!0)},u=function(){d(!1)};t&&t.current&&(null===t||void 0===t||null===(e=t.current)||void 0===e||e.addEventListener("mousemove",i),null===t||void 0===t||null===(n=t.current)||void 0===n||n.addEventListener("mousedown",r),null===t||void 0===t||null===(o=t.current)||void 0===o||o.addEventListener("mouseup",u));return function(){var e,n,o;null===t||void 0===t||null===(e=t.current)||void 0===e||e.removeEventListener("mousemove",i),null===t||void 0===t||null===(n=t.current)||void 0===n||n.removeEventListener("mousedown",r),null===t||void 0===t||null===(o=t.current)||void 0===o||o.removeEventListener("mouseup",u)}}),[t]),{x:null===r||void 0===r?void 0:r.offsetX,y:null===r||void 0===r?void 0:r.offsetY,isMouseDown:v}};n(12);function d(e){for(var t="#";t.length<7;)t+=Math.round(15*e).toString(16);return t}var s=function(){var e,t=Object(o.useRef)(null),n=Object(o.useRef)(null),r=Object(o.useRef)(null),a=c({observeNode:r}),l=v({observeNode:t}),s=Object(o.useState)({val:1e-4,direction:"UP"}),f=Object(u.a)(s,2),m=f[0],b=f[1],O=Object(o.useState)({size:25,direction:"UP"}),h=Object(u.a)(O,2),j=h[0],E=h[1],g=Object(o.useState)(50),p=Object(u.a)(g,2),w=p[0],S=p[1],z=Object(o.useState)(50),y=Object(u.a)(z,2),N=y[0],P=y[1],x=(null!==a&&void 0!==a?a:{}).contentRect,L=l.isMouseDown,C=l.x,U=l.y;return Object(o.useEffect)((function(){var e;if(L&&(null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.getContext)){var n=t.current.getContext("2d");if(n){n.beginPath();var o=j.size<0?0:j.size;n.arc(C,U,o,0,2*Math.PI),n.fillStyle=d(m.val),n.fill(),function(){var e="UP"===m.direction?m.val+.01*w:m.val-.01*w,t=e>256?"DOWN":e<0?"UP":m.direction;b({val:e,direction:t})}(),function(){var e=N/100,t="UP"===j.direction?j.size+e:j.size-e,n=j.size>50?"DOWN":j.size<5?"UP":j.direction;E({direction:n,size:t})}()}}}),[L,C,U]),i.a.createElement("div",{className:"App",ref:n},i.a.createElement("div",null,i.a.createElement("div",null,"Color shift speed (",w,")",i.a.createElement("input",{type:"range",min:"10",max:"100",value:w,onChange:function(e){S(parseInt(e.target.value))}})),i.a.createElement("div",null,"Size shift speed (",N,")",i.a.createElement("input",{type:"range",min:"10",max:"100",value:N,onChange:function(e){P(parseInt(e.target.value))}})),i.a.createElement("div",null,"Current color: ",m.val," | ",d(m.val))),i.a.createElement("div",{className:"draw",ref:r},i.a.createElement("canvas",{ref:t,width:null!==(e=null===x||void 0===x?void 0:x.width)&&void 0!==e?e:-1,height:(null===x||void 0===x?void 0:x.height)-5})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.d7ba9f45.chunk.js.map