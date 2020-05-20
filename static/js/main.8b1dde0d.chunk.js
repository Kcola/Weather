(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{37:function(e,t,a){e.exports=a(90)},42:function(e,t,a){},44:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),c=a.n(o),i=(a(42),a(15)),l=a.n(i),s=a(19),u=a(18),m=(a(44),a(45),a(12)),p=a(16),h=a(31),d=a.n(h),f=a(11);var y=function(e){var t=e.id,a=e.children,n=e.height,o=e.colClass,c=e.backgroundColor;return r.a.createElement(f.a,{id:t,style:{height:n,backgroundColor:c}},r.a.createElement("div",{className:"col ".concat(o," ml-auto mr-auto my-auto")},a))};var g=function(e){var t=e.props,a=e.setUnit;return r.a.createElement(m.a,t,r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{as:p.b,to:"/"},"Home")),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{as:p.b,to:"/timemachine"},"Time Machine")),r.a.createElement(m.a.Item,{bsPrefix:"ml-auto mr-3"},r.a.createElement(y,{height:"100%",colClass:"col-auto"},r.a.createElement(d.a,{offlabel:"\xb0C",onlabel:"\xb0F",size:"sm",onstyle:"primary",offstyle:"secondary",checked:!0,onChange:function(){"F"===sessionStorage.unit?a("C"):a("F")}}))))},E=a(8);var v=function(e){var t=e.style,a=e.location;return r.a.createElement("div",{style:t,className:"location"},a)},b=a(34);var w=function(e){var t=e.options;return Object(n.useEffect)((function(){var e=new b.Skycons({color:t.color});e.add("icon".concat(t.instance),t.icon),e.play()})),r.a.createElement("canvas",{id:"icon".concat(t.instance),width:t.iconWidth,height:t.iconHeight})};var S=function(e){var t=e.style,a=e.tempC,n=e.tempF;return"C"===e.unit?r.a.createElement("div",{style:t,className:"temp-c"},a):r.a.createElement("div",{style:t,className:"temp-f"},n)};var x=function(e){var t=e.style,a=e.description;return r.a.createElement("div",{style:t,className:"description"},a)},C=a(36);function k(e){return 5*(e-32)/9}function O(e){var t=new Date(0);return t.setUTCSeconds(e),t}var j=function(e){var t=e.day,a=e.precipitation,n=e.high,o=e.icon,c=e.low,i=e.unit,l=Math.round(k(c)),s=Math.round(k(n)),u={textAlign:"left",margin:"0.2vw"};return r.a.createElement(f.a,{style:Object(C.a)({},u)},r.a.createElement(E.a,{bsPrefix:"col col-3 my-auto"},"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()])),r.a.createElement(E.a,{style:{paddingRight:"0px"},bsPrefix:"col col-3 my-auto precipitation"},"".concat(Math.round(100*a),"%")),r.a.createElement(E.a,{style:{paddingLeft:"0px"},bsPrefix:"col my-auto"},r.a.createElement(w,{options:{color:"white",icon:o,iconHeight:40,iconWidth:40,instance:t.getDay()+2}})),r.a.createElement(E.a,{bsPrefix:"col my-auto"},r.a.createElement(S,{style:u,tempC:l,tempF:c,unit:i})),r.a.createElement(E.a,{bsPrefix:"col my-auto"},r.a.createElement(S,{style:u,tempC:s,tempF:n,unit:i})))};var F=function(e){var t=e.id,a=e.unit;if(sessionStorage.weather){var n=JSON.parse(sessionStorage.weather).daily.data;return n.pop(),r.a.createElement(f.a,{id:t,style:{padding:"15px"}},r.a.createElement(E.a,{bsPrefix:"col col-xs-auto col-lg-6 mr-auto ml-auto"},n.map((function(e,t){return r.a.createElement(j,{day:O(e.time),high:Math.round(e.temperatureHigh),icon:e.icon,low:Math.round(e.temperatureLow),precipitation:e.precipProbability,key:t,unit:a})}))))}return r.a.createElement("div",null)};var M=function(e){return r.a.createElement("div",{className:"main"},r.a.createElement(y,{id:"home",colClass:"col-xs-auto col-lg-6",height:"100%"},r.a.createElement(f.a,{style:{margin:"40px 0 60px 0"}},r.a.createElement(E.a,null,r.a.createElement(y,{colClass:"col-auto",height:"100%"},r.a.createElement(v,{style:{fontSize:"2.7em"},location:e.location}))),r.a.createElement(E.a,null,r.a.createElement(y,{colClass:"col-auto",height:"100%"},r.a.createElement(w,{options:e})))),r.a.createElement(f.a,{style:{margin:"0 0 60px 0"}},r.a.createElement(E.a,null,r.a.createElement(y,{colClass:"col-auto",height:"100%"},r.a.createElement(S,{style:{textAlign:"center",fontSize:"3rem"},tempC:e.tempC,tempF:e.tempF,unit:sessionStorage.unit}),r.a.createElement(x,{style:{fontSize:"1rem"},description:e.description}))))),r.a.createElement(F,{id:"forecast",unit:sessionStorage.unit}))},N=a(3);var P=function(){return r.a.createElement(y,{height:"100vh",colClass:"col-auto"},r.a.createElement("div",{style:{fontSize:"2rem",textAlign:"center"}},"Coming Soon"))};function I(e){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9ab479cdd941d8bb66332fa8f81551b9/".concat(t.lat,",").concat(t.long),{});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=a(35),W=a.n(J);var H=function(e){var t=e.name,a=e.color;return r.a.createElement(y,{backgroundColor:"rgb(36,36,36)",height:"100vh",colClass:"col-auto loading"},r.a.createElement(W.a,{name:t,color:a}))};function A(){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(JSON.parse(sessionStorage.position));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(){var e={color:"white",iconHeight:128,iconWidth:128,instance:1,description:"rain"},t=Object(n.useState)(e),a=Object(s.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(s.a)(i,2),u=l[0],m=l[1],h=Object(n.useState)("F"),d=Object(s.a)(h,2),f=d[0],y=d[1];return sessionStorage.setItem("unit",f),Object(n.useEffect)((function(){u||(sessionStorage.positon?function(e,t){A().then((function(a){e((function(e){var n=Object.assign({},e);return n.location=a.timezone.split("/")[1].replace("_"," "),n.tempF=Math.round(a.currently.temperature),n.tempC=Math.round(k(a.currently.temperature)),n.icon=a.currently.icon,n.description=a.currently.summary,sessionStorage.setItem("weather",JSON.stringify(a)),t(!0),n}))}))}(c,m):function(e,t,a){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){e.long=n.coords.longitude,e.lat=n.coords.latitude,sessionStorage.setItem("position",JSON.stringify(e)),A().then((function(e){t.location=e.timezone.split("/")[1].replace("_"," "),t.tempF=Math.round(e.currently.temperature),t.tempC=Math.round(k(e.currently.temperature)),t.icon=e.currently.icon,t.description=e.currently.summary,sessionStorage.setItem("weather",JSON.stringify(e)),a(!0)}))}),(function(){alert("Error getting location")})):alert("Sorry, your browser does not support geolocation services.")}({},e,m))}),[u,f,e]),u?r.a.createElement(p.a,null,r.a.createElement(g,{setUnit:y,props:{variant:"tabs",defaultActiveKey:"/home"}}),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:function(){return r.a.createElement(M,o)}}),r.a.createElement(N.a,{exact:!0,path:"/timemachine",component:P}))):r.a.createElement(H,{name:"rotating-plane",color:"white"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.8b1dde0d.chunk.js.map