(()=>{"use strict";var e={d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){this.name=e.toLowerCase(),this.Tasks=t}function n(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].name.toLowerCase());return t}function l(e,t,n){this.taskName=e,this.due=t,this.priority=n}function o(e){localStorage.setItem("allProjects",JSON.stringify(e))}function d(e){const t=document.createElement("div");t.className="task",t.classList.add("border","border-5");const d=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),r=document.createElement("p"),p=document.createElement("p"),u=document.createElement("p"),m=document.createElement("input"),h=document.createElement("div");h.className="task-number",m.type="text",m.style.display="none";const y=document.createElement("input");y.type="number",y.style.display="none";const f=document.createElement("input");f.type="date",f.style.display="none",i.appendChild(r),i.appendChild(m),c.appendChild(p),c.appendChild(y),s.appendChild(u),s.appendChild(f),d.appendChild(i),d.appendChild(c),d.appendChild(s),d.classList.add("task-detail");const C=document.createElement("div");C.className="task-control";const k=document.createElement("div"),N=document.createElement("button");N.textContent="OK",N.style.display="none";const v=document.createElement("button");v.className="edit-task-btn",v.innerHTML="&#9997",k.appendChild(v),k.appendChild(N),v.onclick=function(){r.style.display="none",m.style.display="block",p.style.display="none",y.style.display="block",u.style.display="none",f.style.display="block",v.style.display="none",N.style.display="block",N.onclick=function(){let d=m.value,i=y.value,c=new l(d,f.value,i),s=r.textContent,p=t.parentNode.firstChild.textContent,u=n(e).indexOf(p);for(let t=0;t<e[u].Tasks.length;t++)e[u].Tasks[t].taskName===s&&(e[u].Tasks[t]=c);o(e),a(p,e)}};const E=document.createElement("button");return E.className="delete-task",E.innerHTML="&#128465",E.onclick=function(){!function(e,t){let l=e.parentNode.parentNode.parentNode.firstChild.textContent,d=n(t).indexOf(l),i=t[d].Tasks,c=e.parentNode.previousSibling.textContent.split("/")[0],s=i.map((e=>e.taskName)).indexOf(c);i.splice(s,1),t[d].Tasks=i,o(t),a(l,t)}(this,e)},C.appendChild(k),C.appendChild(E),t.appendChild(h),t.appendChild(d),t.appendChild(C),t}function a(e,t){if(n(t).includes(e)){!function(e){for(;e.childNodes.length>0;)e.removeChild(e.lastChild)}(s);let l=function(e,t){return e[n(e).indexOf(t)]}(t,e);const o=document.createElement("div");s.appendChild(o),o.textContent=e;for(let e=0;e<l.Tasks.length;e++){let n=d(t);n.firstChild.textContent=`${e+1}`,n.childNodes[1].firstChild.firstChild.textContent=l.Tasks[e].taskName,n.childNodes[1].childNodes[1].firstChild.textContent=`Priority: ${l.Tasks[e].priority}`,n.childNodes[1].childNodes[2].firstChild.textContent=`Due-Date: ${l.Tasks[e].due}`,s.appendChild(n)}}}function i(e,l,d){const i=document.createElement("div");i.className="project",i.classList.add("border","border-5");const s=document.createElement("div"),r=document.createElement("p");r.className="project-name",r.onclick=function(){a(e=this.textContent,l)},s.appendChild(r);const p=document.createElement("input");p.type="text",p.id=`p-input${d}`,p.style.display="none",s.appendChild(p),i.appendChild(s);const u=document.createElement("div");u.className="project-control";const m=document.createElement("div"),h=document.createElement("button");h.innerHTML="&#9997",m.appendChild(h);const y=document.createElement("button");y.innerHTML="ok",y.style.display="none",m.appendChild(y),u.appendChild(m),h.onclick=function(){let d=r.textContent;"defaultproject"!==d&&(r.style.display="none",p.style.display="block",h.style.display="none",y.style.display="block",y.onclick=function(){const a=n(l).indexOf(d);if(!p.value.length)return;if(n(l).includes(p.value.toLowerCase()))return;let i=new t(p.value,l[a].Tasks);y.style.display="none",h.style.display="block",r.style.display="block",p.style.display="none",l[a]=i,o(l),c(s.parentNode.parentNode,l,e)})};const f=document.createElement("button");return f.innerHTML="&#128465",f.className="delete-project",f.onclick=function(){"defaultproject"!==this.parentNode.previousSibling.textContent?function(e,t){let l=e.parentNode.previousSibling.textContent,d=n(t).indexOf(l);t.splice(d,1),o(t),c(e.parentNode.parentNode.parentNode,t,"defaultproject"),a("defaultproject",t)}(this,l):alert("Can not delete default project")},u.appendChild(f),i.appendChild(u),i}function c(e,t,n){!function(e){e.innerHTML=""}(e);for(let l=0;l<t.length;l++){let o=i(n,t,l);o.firstChild.firstChild.textContent=t[l].name,e.append(o)}}e.d({},{TC:()=>s});const s=document.querySelector(".tasks");document.querySelector(".edit-task"),document.querySelector(".edit-project"),function(){const e=document.querySelector(".new-project"),d=document.querySelector(".new-task-form"),i=document.querySelector(".all-projects");let r="defaultproject";let p=[];null===localStorage.getItem("allProjects")?(p.push({name:"defaultproject",Tasks:[]}),localStorage.setItem("allProjects",JSON.stringify(p))):p=[...JSON.parse(localStorage.getItem("allProjects"))],function(e,t,d){e.children[6].addEventListener("click",(()=>{d=s.childNodes[0].textContent;let i=new l(e.children[1].value,e.children[3].value,e.children[5].value),c=n(t).indexOf(d);t[c].Tasks.push(i),o(t),a(d,t)}))}(d,p,r),c(i,p,r),a(r,p),function(e,l,d){l.children[2].addEventListener("click",(()=>{let a=l.children[1];if(!a.value.length)return;if(n(d).includes(a.value.toLowerCase()))return;let i=new t(a.value,[]);d.push(i),c(e,d),o(d)}))}(i,e,p)}()})();