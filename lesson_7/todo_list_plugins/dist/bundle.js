!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);const i="https://63a6da56f8f3f6d4ab138405.mockapi.io/api/v1/tasks",o=()=>fetch(i).then(t=>t.json());n(0);const a=document.querySelector(".list"),r=(t,e)=>t.done-e.done!=0?t.done-e.done:t.done?new Date(e.finishDate)-new Date(t.finishDate):new Date(e.createDate)-new Date(t.createDate),c=t=>{let{text:e,done:n,id:i}=t;const o=document.createElement("li");o.classList.add("list-item","list__list-item");const a=(t=>{let{done:e,id:n}=t;const i=document.createElement("input");return i.setAttribute("type","checkbox"),i.dataset.id=n,i.checked=e,i.classList.add("list-item__checkbox"),i})({done:n,id:i});n&&o.classList.add("list-item_done");const r=document.createElement("span");r.classList.add("list-item__text"),r.textContent=e;const c=document.createElement("button");return c.classList.add("list-item__delete-btn"),c.dataset.id=i,o.append(a,r,c),o},d=()=>{a.innerHTML="",o().then(t=>t.sort(r)).then(t=>t.map(c)).then(t=>a.append(...t))},s=()=>{const t=document.querySelector(".task-input"),e=t.value;if(!e)return;t.value="";(t=>fetch(""+i,{method:"POST",headers:{"Content-Type":"application/json;charset = utf-8"},body:JSON.stringify(t)}))({text:e,done:!1,createDate:(new Date).toISOString()}).then(()=>d())},l=t=>{if(!t.target.classList.contains("list-item__checkbox"))return;const e=t.target.dataset.id,{text:n,createDate:a}=o().then(e=>e.find(e=>e.id===t.target.dataset.id)),r=t.target.checked;((t,e)=>fetch(`${i}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json;charset = utf-8"},body:JSON.stringify(t)}))({text:n,createDate:a,done:r,finishDate:r?(new Date).toISOString():null},e).then(()=>o()).then(()=>d())},u=t=>{t.target.classList.contains("list-item__delete-btn")&&o().then(e=>e.find(e=>e.id===t.target.dataset.id)).then(t=>t.id).then(t=>(t=>fetch(`${i}/${t}`,{method:"DELETE"}))(t)).then(()=>o()).then(()=>d())};n(1);document.addEventListener("DOMContentLoaded",()=>{d(),(()=>{document.querySelector(".create-task-btn").addEventListener("click",s);const t=document.querySelector(".list");t.addEventListener("click",l),t.addEventListener("click",u)})()})}]);