(()=>{"use strict";(function(){const e=document.querySelector("nav button"),t=document.querySelector(".menu");t.querySelectorAll("li a").forEach((n=>{n.addEventListener("click",(()=>{const c=window.location.pathname;n.id!==c&&(e.classList.remove("active"),t.classList.remove("active"))}))})),e.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("active")}))})(),function(){const e=document.querySelector(".theme-toggle"),t=document.querySelector(".fa-sun");e.addEventListener("click",(function(){document.documentElement.classList.toggle("light-mode"),"fa-sun"===t.classList[1]?(t.classList.remove("fa-sun"),t.classList.add("fa-moon")):(t.classList.remove("fa-moon"),t.classList.add("fa-sun"))}))}(),function(){const e=document.querySelectorAll("ul a");function t(){const{pathname:e}=window.location;"/projetos"===e?function(){const e=document.querySelectorAll(".projects-items li"),t=document.querySelectorAll(".active-item article"),n="active";e[0].classList.add(n),e.length&&t.length&&(t[0].classList.add(n),e.forEach(((e,c)=>{e.addEventListener("click",(()=>{const o=document.querySelector("li.active");o.classList.length>0&&o.classList.remove(n),e.classList.add(n),function(e){t.forEach((e=>{e.classList.remove(n)})),t[e].classList.add(n)}(c)}))})))}():"/contato"===e&&(function(e){const t=document.querySelector(".job");t.classList.remove("employed"),t.innerHTML="Estou disponível para contratação!"}(),function(){const e=document.querySelector(".email"),t=document.querySelector(".modal-container"),n=document.querySelector("nav"),c=document.querySelector(".links"),o=document.querySelector(".button-copy"),s="active";e.addEventListener("click",(e=>{e.preventDefault(),t.classList.add(s),n.style.zIndex="-1",c.style.zIndex="-1"})),t.addEventListener("click",(e=>{"button-close"!==e.target.classList[0]&&"modal-container"!==e.target.classList[0]||(t.classList.remove(s),n.style.zIndex="1",c.style.zIndex="1")})),o.addEventListener("click",(()=>{t.classList[1]===s&&(document.querySelector("#email").select(),document.execCommand("copy"),o.innerHTML="Copiado =D",o.style.background="#70e000",setTimeout((()=>{o.style.background="var(--text)",o.innerHTML="Copiar"}),2e3))}))}())}async function n(e){document.querySelector("#root").innerHTML='\n      <div class="lds-ellipsis">\n        <div></div><div></div><div></div><div></div>\n      </div>';const n=await fetch(e);!function(e){const t=document.querySelector("#root"),n=document.querySelector(".title-container"),c=document.createElement("div");c.innerHTML=e;const o=c.querySelector("#root"),s=c.querySelector(".title-container");t.innerHTML=o.innerHTML,n.innerHTML=s.innerHTML,document.title=c.querySelector("title").innerText}(await n.text()),t()}window.addEventListener("popstate",(()=>{let{pathname:e}=window.location;"/sobre"!==e&&"/projetos"!==e&&"/contato"!==e||(e=`/pages${e}.html`),n(e)})),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const{pathname:c}=window.location;e.id!==c&&function(e){let t=e.target.href;"/"!==t.slice(-1)&&(t=`pages/${e.target.pathname}.html`),n(t),window.history.pushState(null,null,t.replace("pages/","").replace(".html","").replace("index",""))}(t)}))}))}()})();