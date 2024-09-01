import{t as D}from"./assets/headerHandlers-f3496e2a.js";import{a as J,h as Q,i as $,b as G}from"./assets/vendor-4a631802.js";const x=document.querySelector(".scrollup-btn"),V=function(){window.scrollY<300?x.classList.add("visually-hidden"):x.classList.remove("visually-hidden")};window.addEventListener("scroll",V);x.addEventListener("click",Y);function Y(){window.scrollTo({top:0,behavior:"smooth"})}const X=document.querySelector(".quote-text-wrapper"),N=document.querySelector(".filter-list"),q=document.querySelector(".pagination-section");function k(e){const t=e.results.map(s=>`
        <li class="filter-item">
          <button type="submit" class="filter-btn untreated" data-filter=${s.filter} data-name=${s.name}>
            <div class="filter-container">
              <img class="filter-img" src="${s.imgURL}" alt="${s.name}" width=335 height=225>
              <div class="filter-overlay"></div>
              <p class="filter-name">${s.name}</p>
              <p class="filter-filter">${s.filter}</p>
            </div>  
          </button>
        </li>
      `).join("");N.insertAdjacentHTML("beforeend",t)}function z(e){let t="";for(let s=1;s<=e.totalPages;s++)t+=`
      <button type="button" class="pagination-btn untreated${s===1?" active":""}" data-page=${s}>${s}</button>
    `;q.insertAdjacentHTML("beforeend",t)}function H(e){const t=`
    <p class="quote-text">${e.quote}</p>
    <p class="quote-author">${e.author}</p>
  `;X.insertAdjacentHTML("beforeend",t)}function Z(e){document.querySelectorAll(".nav-btn").forEach(s=>s.classList.remove("decorated")),e.target.classList.add("decorated")}function C(e){N.innerHTML="",e&&(q.innerHTML="")}function ee(e){q.querySelectorAll(".pagination-btn").forEach(s=>s.classList.remove("active")),e.classList.add("active"),window.scrollTo(0,0)}const v=J.create({baseURL:"https://your-energy.b.goit.study/api/",timeout:3e3});async function M({page:e=1,limit:t=12,filter:s}){var n,i;try{return(await v.get("filters",{params:{page:e,limit:t,filter:s}})).data}catch(a){throw new Error(((i=(n=a.response)==null?void 0:n.data)==null?void 0:i.message)||a.message)}}async function te(){var e,t;try{return(await v.get("quote")).data}catch(s){throw new Error(((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||s.message)}}const g={filter:"Muscles",page:1,limit:null};async function se(e){if(e.target.classList.contains("nav-btn")){Z(e),C(!0),g.page=1,g.filter=e.target.dataset.filter;const t=await M(g);k(t),z(t)}}async function ne(){const e=Q().format("L"),t=JSON.parse(localStorage.getItem("quote-data"));if(!t||t.date!==e){const s=await te();H(s);const n={};n.date=e,n.quote=s.quote,n.author=s.author,localStorage.clear("quote-data"),localStorage.setItem("quote-data",JSON.stringify(n))}else H(t)}async function U(){const e=window.innerWidth;let t=null;if(e>1439?t=12:t=9,t!==g.limit){C(!0),g.page=1,g.limit=t;const s=await M(g);k(s),z(s)}}async function ie(e){if(e.target.classList.contains("pagination-btn")){C();const t=e.target;g.page=t.dataset.page;const s=await M(g);k(s),ee(t)}}async function ae(e){var t,s;try{return(await v.post("subscription",{email:e})).data}catch(n){throw new Error(((s=(t=n.response)==null?void 0:t.data)==null?void 0:s.message)||n.message)}}$.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function re(){document.getElementById("loader").classList.remove("hidden")}function oe(){document.getElementById("loader").classList.add("hidden")}function W(e){$.success({message:e,backgroundColor:"#0C7611"})}function p(e){$.error({message:e,backgroundColor:"#EF4040"})}const j=document.querySelector(".subscribe__form"),P=j.querySelector('[name="email"]');async function ce(e){if(e.preventDefault(),!!P.value)try{const t=P.value,s=await ae(t);W(s.message),j.reset()}catch(t){p(t.message)}}async function le(e){var t,s;try{return(await v.get(`exercises/${e}`)).data}catch(n){throw new Error(((s=(t=n.response)==null?void 0:t.data)==null?void 0:s.message)||n.message)}}function E(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function de(e,t){return`
    <svg id="dialogIconClose" class="dialog-icon-close" width="28" height="28">
      <use href="/img/sprite.svg#icon-close"></use>
    </svg>
    <div class="exercise-dialog">    
      <div class="exercise-image-container">
        <img class="exercise-image" src="${e.gifUrl}" alt="Exercise GIF">
      </div>
      <div class="exercise-content">
        <div class="exercise-name">${E(e.name)}</div>
        <div class="exercise-rating">
          ${e.rating}${ue(e.rating)}
        </div>
        <div class="exercise-details">
          <div class="exercise-details-item"><span>Target</span> ${E(e.target)}</div>
          <div class="exercise-details-item"><span>Body Part</span> ${E(e.bodyPart)}</div>
          <div class="exercise-details-item"><span>Equipment</span> ${E(e.equipment)}</div>
          <div class="exercise-details-item"><span>Popular</span> ${e.popularity}</div>
          <div class="exercise-details-item"><span>Burned calories</span> ${e.burnedCalories}/${e.time} min</div>
        </div>
        <div class="exercise-description">${e.description}</div>
      </div>
    </div>
    <div class="exercise-actions">
      ${ge(t)}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>
  `}function ue(e){let t="";for(let s=1;s<=5;s++){const n=s<=Math.floor(e);t+=`
      <svg class="exercise-icon-star${n?" checked":""}" width="18" height="18">
        <use href="/img/sprite.svg#icon-star"></use>
      </svg>
    `}return t}function ge(e){return`
    <button id="favoritesBtn" class="base-btn favorites-btn" type="button">
      ${e?"Remove from favorites":"Add to favorites"}
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="/img/sprite.svg#${e?"trash":"icon-heart"}"></use>
      </svg>
    </button>
  `}function me(e){const t=document.getElementById("favoritesBtn");e?t.innerHTML=`
      Add to favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="/img/sprite.svg#icon-heart"></use>
      </svg>
    `:t.innerHTML=`
      Remove from favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="/img/sprite.svg#trash"></use>
      </svg>
    `}async function fe(e,{email:t,rate:s,review:n}){var i,a;try{return(await v.patch(`exercises/${e}/rating`,{email:t,rate:s,review:n})).data}catch(o){throw new Error(((a=(i=o.response)==null?void 0:i.data)==null?void 0:a.message)||o.message)}}document.getElementById("giveRatingBtn");document.getElementById("closeRatingModal");document.getElementById("closeExerciseModal");const y=document.getElementById("ratingModal");document.getElementById("exerciseModal");const _=document.querySelector("#ratingModal .modal-content"),pe=()=>{y.style.display="block",y.classList.remove("modal-closing")},F=()=>{_.classList.add("dispersing"),y.classList.add("modal-closing"),setTimeout(()=>{y.style.display="none",_.classList.remove("dispersing"),y.classList.remove("modal-closing")},600)},ve=e=>{const t=document.getElementById("currentRating");t.textContent=`${e}.0`};let S=null;function K(e){S=e,pe(),he()}const he=()=>{const e=document.getElementById("closeRatingModal"),t=document.getElementById("closeExerciseModal"),s=document.getElementById("ratingForm");e.addEventListener("click",F),t.addEventListener("click",F),s.addEventListener("submit",ye),document.querySelectorAll(".stars input").forEach(n=>{n.addEventListener("change",i=>ve(i.target.value))})},ye=async e=>{e.preventDefault();const t=e.target,s=t.querySelector('input[name="rating"]:checked'),n=t.elements.email.value.trim(),i=t.elements.description.value.trim(),a=parseFloat(s.value||"");if(!a){p("Failed to submit rating.");return}const o={email:n,rate:a,review:i};try{await fe(S,o),W("Rating submitted successfully!"),S=null,F()}catch{p("Failed to submit rating.")}};let b;const I="favorites";let m=[],f;async function Ee(e){f=await le(e),m=localStorage.getItem(I)?JSON.parse(localStorage.getItem(I)):[];const s=m.findIndex(i=>i._id===f._id)!==-1,n=de(f,s);b=G.create(n,{closable:!0,onClose:()=>be()}),b.show(),Le()}function Le(){document.getElementById("dialogIconClose").addEventListener("click",w),document.addEventListener("keydown",w),document.getElementById("favoritesBtn").addEventListener("click",O),document.getElementById("giveRatingBtn").addEventListener("click",()=>K(f._id))}function be(){document.getElementById("dialogIconClose").removeEventListener("click",w),document.removeEventListener("keydown",w),document.getElementById("favoritesBtn").removeEventListener("click",O),document.getElementById("giveRatingBtn").addEventListener("click",K)}function O(){const e=m.findIndex(t=>t._id===f._id);e!==-1?m.splice(e,1):m.push(f),localStorage.setItem(I,JSON.stringify(m)),me(e!==-1)}function w(e){e instanceof PointerEvent&&b.close(),e instanceof KeyboardEvent&&e.key==="Escape"&&!(e.ctrlKey||e.altKey||e.shiftKey)&&b.close()}async function we({page:e=1,limit:t=12,bodypart:s,muscles:n,equipment:i,keyword:a}){var o,c;try{return(await v.get("exercises",{params:{page:e,limit:t,bodypart:s,muscles:n,equipment:i,keyword:a}})).data}catch(d){throw new Error(((c=(o=d.response)==null?void 0:o.data)==null?void 0:c.message)||d.message)}}const B="/vanilla-dev-squad/assets/sprite-7027db0f.svg";function A(e){const t=document.getElementById("exercise-list");if(!Array.isArray(e)){console.error("Expected exercises to be an array, but received:",e);return}t.innerHTML=e.map(n=>`
        <div class="exercise-card">
            <div class="exercise-card-rating">
                <div class="exercise-card-wrapper">
                    <span class="exercise-card-workout">workout</span>
                <p class="exercise-card-ret">${Math.round(n.rating).toFixed(1)}</p>
                <svg class="exercize-icon-star" width="18" height="18">
                    <use href="${B}#icon-star"></use>
                </svg>
                </div>
                <button class="start-btn" data-id="${n._id}">
                    Start
                    <svg class="exercize-icon-arrow" width="16" height="16">
                        <use href="${B}#arrow"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-card-name">
                <svg class="exercize-icon-cross" width="24" height="24">
                    <use href="${B}#running-stick-figure-border"></use>
                </svg>
                <h3 class="exercise-card-name-title">${n.name}</h3>
            </div>
            <div class="exercise-card-info">
                <p class="exercise-card-info-cal">Burned calories: ${n.burnedCalories} / ${n.time} min </p>
                <p class="exercise-card-info-body">Body part: ${n.bodyPart}</p>
                <p class="exercise-card-info-terget">Target: ${n.target}</p>
            </div>
        </div>
    `).join(""),document.querySelectorAll(".start-btn").forEach(n=>{n.addEventListener("click",i=>{const a=i.target.dataset.id;Ee(a)})})}async function Be({page:e,limit:t,bodypart:s,muscles:n,equipment:i,keyword:a}){re();try{const o=await we({page:e,limit:t,bodypart:s,muscles:n,equipment:i,keyword:a});return o.results.length>0?(A(o.results),{results:o.results,totalPages:o.totalPages}):(A([]),p("No exercises found for the selected category."),{results:[],totalPages:1})}catch(o){return p("Error fetching exercises"),console.error("Error fetching exercises:",o),{results:[],totalPages:1}}finally{oe()}}function xe({currentPage:e,totalPages:t,paginationContainer:s,updateExercises:n,currentBodypart:i,currentMuscles:a,currentEquipment:o,currentKeyword:c}){s.innerHTML="";let d,l;e===1?(d=1,l=Math.min(3,t)):e===t?(d=Math.max(1,t-2),l=t):(d=e-1,l=e+1);for(let r=d;r<=l;r++){const u=document.createElement("button");u.textContent=r,u.classList.add("pagination-btn"),r===e&&u.classList.add("pagination-current"),u.addEventListener("click",()=>{n({currentPage:r,currentBodypart:i,currentMuscles:a,currentEquipment:o,currentKeyword:c,paginationContainer:s,totalPages:t})}),s.appendChild(u)}}async function L({currentPage:e,currentBodypart:t,currentMuscles:s,currentEquipment:n,currentKeyword:i,paginationContainer:a,totalPages:o}){try{const c=await Be({page:e,limit:8,bodypart:t||void 0,muscles:s||void 0,equipment:n||void 0,keyword:i||void 0});c&&c.totalPages&&(o=c.totalPages,xe({currentPage:e,totalPages:o,paginationContainer:a,updateExercises:L,currentBodypart:t,currentMuscles:s,currentEquipment:n,currentKeyword:i}))}catch{p("Error fetching exercises")}}function Fe(e,t,s,n,i,a,o,c){const d=e.target.closest("button");if(!d)return;const l=d.dataset.filter.toLowerCase(),r=d.dataset.name,u=document.querySelector(".filter-wrapper");u&&u.classList.add("hidden");const h=document.querySelector(".exercise-wrapper");h&&h.classList.remove("hidden"),document.querySelector(".main-title");const R=document.getElementById("selected-category"),T=document.getElementById("search-container");return l?T.classList.remove("hidden"):T.classList.add("hidden"),r?R.innerHTML=`
                <span class="category__slash"> / </span>
                <span class="category__selected">${r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}</span>
            `:R.innerHTML="",l==="bodypart"?(s=r,n="",i=""):l==="muscles"?(n=r,s="",i=""):l==="equipment"&&(i=r,s="",n=""),t=1,o({currentPage:t,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a,paginationContainer:c,totalPages:1}),{currentPage:t,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a}}function Se(e,t,s,n,i,a,o,c){e.preventDefault();const d=document.getElementById("search-input");return t=1,a=d.value.trim(),console.log("Filter applied:",{currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a}),o({currentPage:t,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a,paginationContainer:c,totalPages:1}),{currentPage:t,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a}}const Ie=document.querySelector(".main-nav"),$e=document.querySelector(".pagination-section"),qe=document.querySelector(".subscribe__form");window.addEventListener("resize",()=>{D(),U()});D();U();ne();Ie.addEventListener("click",se);$e.addEventListener("click",ie);qe.addEventListener("submit",ce);document.addEventListener("DOMContentLoaded",()=>{let e=1,t=1,s="",n="",i="",a="";document.getElementById("selected-category");const o=document.getElementById("search-form"),c=document.getElementById("pagination-container");document.querySelector(".filter-list").addEventListener("click",l=>{const r=Fe(l,e,s,n,i,a,L,c);e=r.currentPage,s=r.currentBodypart,n=r.currentMuscles,i=r.currentEquipment,a=r.currentKeyword}),o.addEventListener("submit",l=>{const r=Se(l,e,s,n,i,a,L,c);e=r.currentPage,s=r.currentBodypart,n=r.currentMuscles,i=r.currentEquipment,a=r.currentKeyword}),document.querySelectorAll(".nav-btn").forEach(l=>{l.addEventListener("click",r=>{const u=document.querySelector(".exercise-wrapper");u&&u.classList.add("hidden");const h=document.querySelector(".filter-wrapper");h&&h.classList.remove("hidden")})}),document.querySelector(".main-nav").addEventListener("click",()=>{const l=document.getElementById("search-container");l&&l.classList.add("hidden");const r=document.getElementById("selected-category");r&&(r.innerHTML="")}),L({currentPage:e,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a,paginationContainer:c,totalPages:t})});
//# sourceMappingURL=commonHelpers2.js.map
