(()=>{"use strict";var e={d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){this.name=e.toLowerCase(),this.Tasks=t}function n(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].name.toLowerCase());return t}function l(e){localStorage.setItem("allProjects",JSON.stringify(e))}function o(e,t,n){this.taskName=e,this.due=t,this.priority=n}function c(e){const t=document.createElement("div");t.className="task";const c=document.createElement("div");c.className="task-name";const i=document.createElement("div");i.className="task-control";const a=document.createElement("button");a.className="edit-task-btn",a.innerHTML="&#x1F589",a.onclick=function(){!function(e,t){d.classList.add("show-edit-task");let[c,i,a]=e.parentNode.previousSibling.textContent.split("/");d.children[0].value=c,d.children[1].value=i,d.children[2].value=a,d.children[3].onclick=function(){d.classList.remove("show-edit-task"),d.children[2].value&&d.children[1].value&&d.children[1].value&&(c=d.children[0].value,i=d.children[1].value,a=d.children[2].value,function(e,t,o){let c=t.parentNode.previousSibling.textContent.split("/")[0],i=t.parentNode.parentNode.parentNode.firstChild.textContent,a=n(o).indexOf(i);for(let t=0;t<o[a].Tasks.length;t++)o[a].Tasks[t].taskName===c&&(o[a].Tasks[t]=e);l(o),r(i,o)}(new o(c,i,a),e,t))}}(this,e)};const s=document.createElement("button");return s.className="delete-task",s.innerHTML="&#128465",s.onclick=function(){!function(e,t){let o=e.parentNode.parentNode.parentNode.firstChild.textContent,c=n(t).indexOf(o),i=t[c].Tasks,a=e.parentNode.previousSibling.textContent.split("/")[0],s=i.map((e=>e.taskName)).indexOf(a);i.splice(s,1),t[c].Tasks=i,l(t),r(o,t)}(this,e)},i.appendChild(a),i.appendChild(s),t.appendChild(c),t.appendChild(i),t}function r(e,t){if(n(t).includes(e)){!function(e){for(;e.childNodes.length>1;)e.removeChild(e.lastChild)}(s);let l=function(e,t){return e[n(e).indexOf(t)]}(t,e);s.firstChild.textContent=l.name;for(let e=0;e<l.Tasks.length;e++){let n=c(t);n.firstChild.textContent=l.Tasks[e].taskName+"/"+l.Tasks[e].due+"/"+l.Tasks[e].priority,s.appendChild(n)}}}function i(e,o){const c=document.createElement("div");c.className="project";const i=document.createElement("div");i.className="project-name",i.onclick=function(){r(this.firstChild.textContent,o)};const s=document.createElement("div");s.className="project-control";const d=document.createElement("button");d.className="edit-project-btn",d.innerHTML="&#x1F589",d.onclick=function(){let e=this.parentNode.previousSibling.textContent;"defaultproject"!==e&&(u.classList.add("show-edit-project"),u.children[0].value=e,u.children[1].onclick=function(){u.classList.remove("show-edit-project");const c=n(o).indexOf(e);if(console.log(c),!u.children[0].value.length)return;if(n(o).includes(u.children[0].value.toLowerCase()))return;let r=new t(u.children[0].value,o[c].Tasks);o[c]=r,l(o),a(d.parentNode.parentNode.parentNode,o)})};const p=document.createElement("button");return p.innerHTML="&#128465",p.className="delete-project",p.onclick=function(){"defaultproject"!==this.parentNode.previousSibling.textContent&&function(e,t){let o=e.parentNode.previousSibling.textContent,c=n(t).indexOf(o);t.splice(c,1),l(t),a(e.parentNode.parentNode.parentNode,t),r("defaultproject",t)}(this,o)},c.appendChild(i),s.appendChild(d),s.appendChild(p),c.appendChild(s),c}function a(e,t,n){!function(e){e.innerHTML=""}(e);for(let n=0;n<t.length;n++){let l=i(0,t);l.firstChild.textContent=t[n].name,e.append(l)}}e.d({},{pk:()=>u,Zr:()=>d,TC:()=>s});const s=document.querySelector(".tasks"),d=document.querySelector(".edit-task"),u=document.querySelector(".edit-project");!function(){const e=document.querySelector(".close-sidebar"),c=document.querySelector(".menu"),i=document.querySelector(".sidebar"),d=document.querySelector(".project-btn"),u=document.querySelector(".new-project"),p=document.querySelector(".add-task"),h=document.querySelector(".new-task"),m=document.querySelector(".all-projects");let f="defaultproject";let v=[];null===localStorage.getItem("allProjects")?(v.push({name:"defaultproject",Tasks:[]}),localStorage.setItem("allProjects",JSON.stringify(v))):v=[...JSON.parse(localStorage.getItem("allProjects"))],function(e,t,n){e.addEventListener("click",(()=>{t.classList.add("show")})),n.addEventListener("click",(()=>{t.classList.remove("show")}))}(c,i,e),function(e,t,c,i){e.addEventListener("click",(()=>{t.style.transform="translateY(200px)",i=s.firstChild.textContent})),t.children[3].addEventListener("click",(()=>{t.style.transform="translateY(800px)";let e=new o(t.children[0].value,t.children[1].value,t.children[2].value),a=n(c).indexOf(i);c[a].Tasks.push(e),l(c),r(i,c)}))}(p,h,v,f),a(m,v),r(f,v),function(e,o,c){let r=o.children[1];e.addEventListener("click",(()=>{o.style.transform="translateY(300px)"})),r.addEventListener("click",(()=>{let r=o.children[0];if(!r.value.length)return;if(n(c).includes(r.value.toLowerCase()))return;let i=new t(r.value,[]);c.push(i),a(e.nextElementSibling,c),l(c),o.style.transform="translateY(-300px)"}))}(d,u,v)}()})();