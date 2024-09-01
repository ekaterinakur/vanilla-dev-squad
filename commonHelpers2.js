import{c as E,s as x,a as p,b as q,d as L,h as C,t as w,e as b,f as k,g as I,i as T}from"./assets/renderExercises-7cec0547.js";import"./assets/vendor-c65b4e60.js";const h=document.querySelector(".scrollup-btn"),_=function(){window.scrollY<300?h.classList.add("visually-hidden"):h.classList.remove("visually-hidden")};window.addEventListener("scroll",_);h.addEventListener("click",B);function B(){window.scrollTo({top:0,behavior:"smooth"})}async function F(r){var t,e;try{return(await E.post("subscription",{email:r})).data}catch(s){throw new Error(((e=(t=s.response)==null?void 0:t.data)==null?void 0:e.message)||s.message)}}const S=document.querySelector(".subscribe__form"),v=S.querySelector('[name="email"]');async function H(r){if(r.preventDefault(),!!v.value)try{const t=v.value,e=await F(t);x(e.message),S.reset()}catch(t){p(t.message)}}async function W({page:r=1,limit:t=12,bodypart:e,muscles:s,equipment:o,keyword:i}){var a,l;try{return(await E.get("exercises",{params:{page:r,limit:t,bodypart:e,muscles:s,equipment:o,keyword:i}})).data}catch(d){throw new Error(((l=(a=d.response)==null?void 0:a.data)==null?void 0:l.message)||d.message)}}async function D({page:r,limit:t,bodypart:e,muscles:s,equipment:o,keyword:i}){q();try{const a=await W({page:r,limit:t,bodypart:e,muscles:s,equipment:o,keyword:i});return a.results.length>0?(L(a.results),{results:a.results,totalPages:a.totalPages}):(L([]),p("No exercises found for the selected category."),{results:[],totalPages:1})}catch(a){return p("Error fetching exercises"),console.error("Error fetching exercises:",a),{results:[],totalPages:1}}finally{C()}}function P({currentPage:r,totalPages:t,paginationContainer:e,updateExercises:s,currentBodypart:o,currentMuscles:i,currentEquipment:a,currentKeyword:l}){e.innerHTML="";let d,c;r===1?(d=1,c=Math.min(3,t)):r===t?(d=Math.max(1,t-2),c=t):(d=r-1,c=r+1);for(let n=d;n<=c;n++){const u=document.createElement("button");u.textContent=n,u.classList.add("pagination-btn"),n===r&&u.classList.add("pagination-current"),u.addEventListener("click",()=>{s({currentPage:n,currentBodypart:o,currentMuscles:i,currentEquipment:a,currentKeyword:l,paginationContainer:e,totalPages:t});const m=document.querySelector(".main-title");window.scrollTo({top:m.offsetTop,behavior:"smooth"})}),e.appendChild(u)}}async function f({currentPage:r,currentBodypart:t,currentMuscles:e,currentEquipment:s,currentKeyword:o,paginationContainer:i,totalPages:a}){try{const l=await D({page:r,limit:8,bodypart:t||void 0,muscles:e||void 0,equipment:s||void 0,keyword:o||void 0});l&&l.totalPages&&(a=l.totalPages,P({currentPage:r,totalPages:a,paginationContainer:i,updateExercises:f,currentBodypart:t,currentMuscles:e,currentEquipment:s,currentKeyword:o}))}catch{p("Error fetching exercises")}}function M(r,t,e,s,o,i,a,l){const d=r.target.closest("button");if(!d)return;const c=d.dataset.filter.toLowerCase(),n=d.dataset.name,u=document.querySelector(".filter-wrapper");u&&u.classList.add("hidden");const m=document.querySelector(".exercise-wrapper");m&&m.classList.remove("hidden"),document.querySelector(".main-title");const g=document.getElementById("selected-category"),y=document.getElementById("search-container");return c?y.classList.remove("hidden"):y.classList.add("hidden"),n?g.innerHTML=`
                <span class="category__slash"> / </span>
                <span class="category__selected">${n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()}</span>
            `:g.innerHTML="",c==="bodypart"?(e=n,s="",o=""):c==="muscles"?(s=n,e="",o=""):c==="equipment"&&(o=n,e="",s=""),t=1,a({currentPage:t,currentBodypart:e,currentMuscles:s,currentEquipment:o,currentKeyword:i,paginationContainer:l,totalPages:1}),{currentPage:t,currentBodypart:e,currentMuscles:s,currentEquipment:o,currentKeyword:i}}function N(r,t,e,s,o,i,a,l){r.preventDefault();const d=document.getElementById("search-input");return t=1,i=d.value.trim(),console.log("Filter applied:",{currentBodypart:e,currentMuscles:s,currentEquipment:o,currentKeyword:i}),a({currentPage:t,currentBodypart:e,currentMuscles:s,currentEquipment:o,currentKeyword:i,paginationContainer:l,totalPages:1}),{currentPage:t,currentBodypart:e,currentMuscles:s,currentEquipment:o,currentKeyword:i}}const z=document.querySelector(".main-nav"),A=document.querySelector(".pagination-section"),$=document.querySelector(".subscribe__form");window.addEventListener("resize",()=>{w(),b()});w();b();k();z.addEventListener("click",I);A.addEventListener("click",T);$.addEventListener("submit",H);document.addEventListener("DOMContentLoaded",()=>{let r=1,t=1,e="",s="",o="",i="";document.getElementById("selected-category");const a=document.getElementById("search-form"),l=document.getElementById("pagination-container");document.querySelector(".filter-list").addEventListener("click",c=>{const n=M(c,r,e,s,o,i,f,l);r=n.currentPage,e=n.currentBodypart,s=n.currentMuscles,o=n.currentEquipment,i=n.currentKeyword}),a.addEventListener("submit",c=>{const n=N(c,r,e,s,o,i,f,l);r=n.currentPage,e=n.currentBodypart,s=n.currentMuscles,o=n.currentEquipment,i=n.currentKeyword}),document.querySelectorAll(".nav-btn").forEach(c=>{c.addEventListener("click",n=>{const u=document.querySelector(".exercise-wrapper");u&&u.classList.add("hidden");const m=document.querySelector(".filter-wrapper");m&&m.classList.remove("hidden")})}),document.querySelector(".main-nav").addEventListener("click",()=>{const c=document.getElementById("search-container");c&&c.classList.add("hidden");const n=document.getElementById("selected-category");n&&(n.innerHTML="")}),f({currentPage:r,currentBodypart:e,currentMuscles:s,currentEquipment:o,currentKeyword:i,paginationContainer:l,totalPages:t})});
//# sourceMappingURL=commonHelpers2.js.map
