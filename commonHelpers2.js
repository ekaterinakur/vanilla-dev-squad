import{c as w,s as C,a as p,b as f,o as I,d as $,h as T,e as S,f as _,g as F,i as M}from"./assets/filtersHandlers-4e2a642a.js";import"./assets/vendor-478dae0d.js";const h=document.querySelector(".scrollup-btn"),A=function(){window.scrollY<300?h.classList.add("visually-hidden"):h.classList.remove("visually-hidden")};window.addEventListener("scroll",A);h.addEventListener("click",H);function H(){window.scrollTo({top:0,behavior:"smooth"})}const y=document.querySelector(".js-header-menu"),x=document.querySelector(".overlay"),P=getComputedStyle(document.documentElement),W=parseInt(P.getPropertyValue("--breakpoint-md").trim());function z(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.removeEventListener("click",k)})}function D(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.addEventListener("click",k)})}function k(){y.classList.toggle("open"),x.classList.toggle("open"),document.body.classList.toggle("no-scroll"),document.documentElement.style.overflow=y.classList.contains("open")?"hidden":""}function q(){window.innerWidth>=W?(y.classList.remove("open"),x.classList.remove("open"),document.body.classList.remove("no-scroll"),document.documentElement.style.overflow="",z()):D()}async function j(s){var t,n;try{return(await w.post("subscription",{email:s})).data}catch(e){throw new Error(((n=(t=e.response)==null?void 0:t.data)==null?void 0:n.message)||e.message)}}const B=document.querySelector(".subscribe__form"),E=B.querySelector('[name="email"]');async function N(s){if(s.preventDefault(),!!E.value)try{const t=E.value,n=await j(t);C(n.message),B.reset()}catch(t){p(t.message)}}async function O({page:s=1,limit:t=12,bodypart:n,muscles:e,equipment:o,keyword:i}){var a,l;try{return(await w.get("exercises",{params:{page:s,limit:t,bodypart:n,muscles:e,equipment:o,keyword:i}})).data}catch(d){throw new Error(((l=(a=d.response)==null?void 0:a.data)==null?void 0:l.message)||d.message)}}function b(s){const t=document.getElementById("exercise-list");if(!Array.isArray(s)){console.error("Expected exercises to be an array, but received:",s);return}t.innerHTML=s.map(e=>`
        <div class="exercise-card">
            <div class="exercise-card-rating">
                <div class="exercise-card-wrapper">
                    <span class="exercise-card-workout">workout</span>
                <p class="exercise-card-ret">${Math.round(e.rating).toFixed(1)}</p>
                <svg class="exercize-icon-star" width="18" height="18">
                    <use href="${f}#icon-star"></use>
                </svg>
                </div>
                <button class="start-btn" data-id="${e._id}">
                    Start
                    <svg class="exercize-icon-arrow" width="16" height="16">
                        <use href="${f}#arrow"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-card-name">
                <svg class="exercize-icon-cross" width="24" height="24">
                    <use href="${f}#running-stick-figure-border"></use>
                </svg>
                <h3 class="exercise-card-name-title">${e.name}</h3>
            </div>
            <div class="exercise-card-info">
                <p class="exercise-card-info-cal">Burned calories: ${e.burnedCalories} / ${e.time} min </p>
                <p class="exercise-card-info-body">Body part: ${e.bodyPart}</p>
                <p class="exercise-card-info-terget">Target: ${e.target}</p>
            </div>
        </div>
    `).join(""),document.querySelectorAll(".start-btn").forEach(e=>{e.addEventListener("click",o=>{const i=o.target.dataset.id;I(i)})})}async function R({page:s,limit:t,bodypart:n,muscles:e,equipment:o,keyword:i}){$();try{const a=await O({page:s,limit:t,bodypart:n,muscles:e,equipment:o,keyword:i});return a.results.length>0?(b(a.results),{results:a.results,totalPages:a.totalPages}):(b([]),p("No exercises found for the selected category."),{results:[],totalPages:1})}catch(a){return p("Error fetching exercises"),console.error("Error fetching exercises:",a),{results:[],totalPages:1}}finally{T()}}function Q({currentPage:s,totalPages:t,paginationContainer:n,updateExercises:e,currentBodypart:o,currentMuscles:i,currentEquipment:a,currentKeyword:l}){n.innerHTML="";let d,c;s===1?(d=1,c=Math.min(3,t)):s===t?(d=Math.max(1,t-2),c=t):(d=s-1,c=s+1);for(let r=d;r<=c;r++){const u=document.createElement("button");u.textContent=r,u.classList.add("pagination-btn"),r===s&&u.classList.add("pagination-current"),u.addEventListener("click",()=>{e({currentPage:r,currentBodypart:o,currentMuscles:i,currentEquipment:a,currentKeyword:l,paginationContainer:n,totalPages:t});const m=document.querySelector(".main-title");window.scrollTo({top:m.offsetTop,behavior:"smooth"})}),n.appendChild(u)}}async function g({currentPage:s,currentBodypart:t,currentMuscles:n,currentEquipment:e,currentKeyword:o,paginationContainer:i,totalPages:a}){try{const l=await R({page:s,limit:8,bodypart:t||void 0,muscles:n||void 0,equipment:e||void 0,keyword:o||void 0});l&&l.totalPages&&(a=l.totalPages,Q({currentPage:s,totalPages:a,paginationContainer:i,updateExercises:g,currentBodypart:t,currentMuscles:n,currentEquipment:e,currentKeyword:o}))}catch{p("Error fetching exercises")}}function U(s,t,n,e,o,i,a,l){const d=s.target.closest("button");if(!d)return;const c=d.dataset.filter.toLowerCase(),r=d.dataset.name,u=document.querySelector(".filter-wrapper");u&&u.classList.add("hidden");const m=document.querySelector(".exercise-wrapper");m&&m.classList.remove("hidden"),document.querySelector(".main-title");const v=document.getElementById("selected-category"),L=document.getElementById("search-container");return c?L.classList.remove("hidden"):L.classList.add("hidden"),r?v.innerHTML=`
                <span class="category__slash"> / </span>
                <span class="category__selected">${r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}</span>
            `:v.innerHTML="",c==="bodypart"?(n=r,e="",o=""):c==="muscles"?(e=r,n="",o=""):c==="equipment"&&(o=r,n="",e=""),t=1,a({currentPage:t,currentBodypart:n,currentMuscles:e,currentEquipment:o,currentKeyword:i,paginationContainer:l,totalPages:1}),{currentPage:t,currentBodypart:n,currentMuscles:e,currentEquipment:o,currentKeyword:i}}function V(s,t,n,e,o,i,a,l){s.preventDefault();const d=document.getElementById("search-input");return t=1,i=d.value.trim(),console.log("Filter applied:",{currentBodypart:n,currentMuscles:e,currentEquipment:o,currentKeyword:i}),a({currentPage:t,currentBodypart:n,currentMuscles:e,currentEquipment:o,currentKeyword:i,paginationContainer:l,totalPages:1}),{currentPage:t,currentBodypart:n,currentMuscles:e,currentEquipment:o,currentKeyword:i}}const Y=document.querySelector(".main-nav"),G=document.querySelector(".pagination-section"),J=document.querySelector(".subscribe__form");window.addEventListener("resize",()=>{q(),S()});q();S();_();Y.addEventListener("click",F);G.addEventListener("click",M);J.addEventListener("submit",N);document.addEventListener("DOMContentLoaded",()=>{let s=1,t=1,n="",e="",o="",i="";document.getElementById("selected-category");const a=document.getElementById("search-form"),l=document.getElementById("pagination-container");document.querySelector(".filter-list").addEventListener("click",c=>{const r=U(c,s,n,e,o,i,g,l);s=r.currentPage,n=r.currentBodypart,e=r.currentMuscles,o=r.currentEquipment,i=r.currentKeyword}),a.addEventListener("submit",c=>{const r=V(c,s,n,e,o,i,g,l);s=r.currentPage,n=r.currentBodypart,e=r.currentMuscles,o=r.currentEquipment,i=r.currentKeyword}),document.querySelectorAll(".nav-btn").forEach(c=>{c.addEventListener("click",r=>{const u=document.querySelector(".exercise-wrapper");u&&u.classList.add("hidden");const m=document.querySelector(".filter-wrapper");m&&m.classList.remove("hidden")})}),document.querySelector(".main-nav").addEventListener("click",()=>{const c=document.getElementById("search-container");c&&c.classList.add("hidden");const r=document.getElementById("selected-category");r&&(r.innerHTML="")}),g({currentPage:s,currentBodypart:n,currentMuscles:e,currentEquipment:o,currentKeyword:i,paginationContainer:l,totalPages:t})});
//# sourceMappingURL=commonHelpers2.js.map
