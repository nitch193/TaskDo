(()=>{"use strict";var e={d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){this.name=e.toLowerCase(),this.Tasks=t}function n(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].name.toLowerCase());return t}function l(e){localStorage.setItem("allProjects",JSON.stringify(e))}function o(e,t,n){this.taskName=e,this.due=t,this.priority=n}function a(e){const t=document.createElement("div");t.className="task";const a=document.createElement("div");a.className="task-name";const i=document.createElement("div");i.className="task-control";const r=document.createElement("button");r.className="edit-task-btn",r.textContent="✍",r.onclick=function(){!function(e,t){d.classList.add("show-edit-task");let[a,i,r]=e.parentNode.previousSibling.textContent.split("/");d.children[0].value=a,d.children[1].value=i,d.children[2].value=r,d.children[3].onclick=function(){d.classList.remove("show-edit-task"),d.children[2].value&&d.children[1].value&&d.children[1].value&&(a=d.children[0].value,i=d.children[1].value,r=d.children[2].value,function(e,t,o){let a=t.parentNode.previousSibling.textContent.split("/")[0],i=t.parentNode.parentNode.parentNode.firstChild.textContent,r=n(o).indexOf(i);for(let t=0;t<o[r].Tasks.length;t++)o[r].Tasks[t].taskName===a&&(o[r].Tasks[t]=e);l(o),c(i,o)}(new o(a,i,r),e,t))}}(this,e)};const s=document.createElement("button");return s.className="delete-task",s.textContent="X",s.onclick=function(){!function(e,t){let o=e.parentNode.parentNode.parentNode.firstChild.textContent,a=n(t).indexOf(o),i=t[a].Tasks,r=e.parentNode.previousSibling.textContent.split("/")[0],s=i.map((e=>e.taskName)).indexOf(r);i.splice(s,1),t[a].Tasks=i,l(t),c(o,t)}(this,e)},i.appendChild(r),i.appendChild(s),t.appendChild(a),t.appendChild(i),t}function c(e,t){if(n(t).includes(e)){!function(e){for(;e.childNodes.length>1;)e.removeChild(e.lastChild)}(s);let l=function(e,t){return e[n(e).indexOf(t)]}(t,e);s.firstChild.textContent=l.name;for(let e=0;e<l.Tasks.length;e++){let n=a(t);n.firstChild.textContent=l.Tasks[e].taskName+"/"+l.Tasks[e].due+"/"+l.Tasks[e].priority,s.appendChild(n)}}}function i(e,t){const o=document.createElement("div");o.className="project";const a=document.createElement("div");a.className="project-name",a.onclick=function(){e=this.firstChild.textContent,console.log(e),c(e,t)};const i=document.createElement("div");i.className="project-control";const s=document.createElement("button");return s.textContent="X",s.className="delete-project",s.onclick=function(){"defaultproject"!==this.parentNode.previousSibling.textContent&&function(e,t){let o=e.parentNode.previousSibling.textContent,a=n(t).indexOf(o);t.splice(a,1),l(t),r(e.parentNode.parentNode.parentNode,t,"defaultproject"),c("defaultproject",t)}(this,t)},o.appendChild(a),i.appendChild(s),o.appendChild(i),o}function r(e,t,n){!function(e){e.innerHTML=""}(e);for(let l=0;l<t.length;l++){let o=i(n,t);o.firstChild.textContent=t[l].name,e.append(o)}}e.d({},{Z:()=>d,T:()=>s});const s=document.querySelector(".tasks"),d=document.querySelector(".edit-task");!function(){const e=document.querySelector(".close-sidebar"),a=document.querySelector(".menu"),i=document.querySelector(".sidebar"),d=document.querySelector(".project-btn"),u=document.querySelector(".edit-project"),p=document.querySelector(".add-task"),m=document.querySelector(".new-task"),h=document.querySelector(".all-projects");let f="defaultproject";let k=[];null===localStorage.getItem("allProjects")?(k.push({name:"defaultproject",Tasks:[]}),localStorage.setItem("allProjects",JSON.stringify(k))):k=[...JSON.parse(localStorage.getItem("allProjects"))],function(e,t,n){e.addEventListener("click",(()=>{t.style.width="250px"})),n.addEventListener("click",(()=>{t.style.width="0"}))}(a,i,e),function(e,t,a,i){e.addEventListener("click",(()=>{t.style.transform="translateY(200px)",i=s.firstChild.textContent})),t.children[3].addEventListener("click",(()=>{t.style.transform="translateY(800px)";let e=new o(t.children[0].value,t.children[1].value,t.children[2].value),r=n(a).indexOf(i);a[r].Tasks.push(e),l(a),c(i,a)}))}(p,m,k,f),r(h,k,f),c(f,k),function(e,o,a){let c=o.children[1];e.addEventListener("click",(()=>{o.style.transform="translateY(300px)"})),c.addEventListener("click",(()=>{let c=o.children[0];if(!c.value.length)return;if(n(a).includes(c.value.toLowerCase()))return;let i=new t(c.value,[]);a.push(i),r(e.nextElementSibling,a),l(a),o.style.transform="translateY(-300px)"}))}(d,u,k)}()})();