import{a as Z,i as A,b as ee,h as te}from"./vendor-c65b4e60.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const R=document.querySelector(".js-header-menu"),K=document.querySelector(".overlay"),se=getComputedStyle(document.documentElement),ne=parseInt(se.getPropertyValue("--breakpoint-md").trim());function ie(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.removeEventListener("click",U)})}function oe(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.addEventListener("click",U)})}function U(){R.classList.toggle("open"),K.classList.toggle("open"),document.body.classList.toggle("no-scroll"),document.documentElement.style.overflow=R.classList.contains("open")?"hidden":""}function Te(){window.innerWidth>=ne?(R.classList.remove("open"),K.classList.remove("open"),document.body.classList.remove("no-scroll"),document.documentElement.style.overflow="",ie()):oe()}const re=document.querySelector(".quote-text-wrapper"),V=document.querySelector(".filter-list"),P=document.querySelector(".pagination-section");function H(e){const t=e.results.map(s=>`
        <li class="filter-item filter-btn untreated" data-filter=${s.filter} data-name=${s.name}>
          <div class="filter-container">
            <img class="filter-img" src="${s.imgURL}" alt="${s.name}" width=335 height=225>
            <div class="filter-overlay"></div>
            <p class="filter-name">${s.name}</p>
            <p class="filter-filter">${s.filter}</p>
          </div>
        </li>
      `).join("");V.insertAdjacentHTML("beforeend",t)}function J(e){let t="";for(let s=1;s<=e.totalPages;s++)t+=`
      <button type="button" class="pagination-btn untreated${s===1?" active":""}" data-page=${s}>${s}</button>
    `;P.insertAdjacentHTML("beforeend",t)}function O(e){const t=`
    <p class="quote-text">${e.quote}</p>
    <p class="quote-author">${e.author}</p>
  `;re.insertAdjacentHTML("beforeend",t)}function ae(e){document.querySelectorAll(".nav-btn").forEach(s=>s.classList.remove("decorated")),e.target.classList.add("decorated")}function D(e){V.innerHTML="",e&&(P.innerHTML="")}function ce(e){P.querySelectorAll(".pagination-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active");const s=document.querySelector(".main-title");window.scrollTo({top:s.offsetTop,behavior:"smooth"})}const $=Z.create({baseURL:"https://your-energy.b.goit.study/api/",timeout:3e3});async function _({page:e=1,limit:t=12,filter:s}){var n,i;try{return(await $.get("filters",{params:{page:e,limit:t,filter:s}})).data}catch(o){throw new Error(((i=(n=o.response)==null?void 0:n.data)==null?void 0:i.message)||o.message)}}async function le(){var e,t;try{return(await $.get("quote")).data}catch(s){throw new Error(((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||s.message)}}async function de({page:e=1,limit:t=12,bodypart:s,muscles:n,equipment:i,keyword:o}){var r,c;try{return(await $.get("exercises",{params:{page:e,limit:t,bodypart:s,muscles:n,equipment:i,keyword:o}})).data}catch(a){throw new Error(((c=(r=a.response)==null?void 0:r.data)==null?void 0:c.message)||a.message)}}async function ue(e){var t,s;try{return(await $.get(`exercises/${e}`)).data}catch(n){throw new Error(((s=(t=n.response)==null?void 0:t.data)==null?void 0:s.message)||n.message)}}function I(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const g="/vanilla-dev-squad/assets/sprite-45ef4b9c.svg";function ge(e,t){return`
    <svg id="dialogIconClose" class="dialog-icon-close" width="28" height="28">
      <use href="${g}#icon-close"></use>
    </svg>
    <div class="exercise-dialog">    
      <div class="exercise-image-container">
        <img class="exercise-image" src="${e.gifUrl}" alt="Exercise GIF">
      </div>
      <div class="exercise-content">
        <div class="exercise-name">${I(e.name)}</div>
        <div class="exercise-rating">
          ${e.rating}${me(e.rating)}
        </div>
        <div class="exercise-details">
          <div class="exercise-details-item"><span>Target</span> ${I(e.target)}</div>
          <div class="exercise-details-item"><span>Body Part</span> ${I(e.bodyPart)}</div>
          <div class="exercise-details-item"><span>Equipment</span> ${I(e.equipment)}</div>
          <div class="exercise-details-item"><span>Popular</span> ${e.popularity}</div>
          <div class="exercise-details-item"><span>Burned calories</span> ${e.burnedCalories}/${e.time} min</div>
        </div>
        <div class="exercise-description">${e.description}</div>
      </div>
    </div>
    <div class="exercise-actions">
      ${fe(t)}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>
  `}function me(e){let t="";for(let s=1;s<=5;s++){const n=s<=Math.floor(e);t+=`
      <svg class="exercise-icon-star${n?" checked":""}" width="18" height="18">
        <use href="${g}#icon-star"></use>
      </svg>
    `}return t}function fe(e){return`
    <button id="favoritesBtn" class="base-btn favorites-btn" type="button">
      ${e?"Remove from favorites":"Add to favorites"}
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${g}#${e?"trash":"icon-heart"}"></use>
      </svg>
    </button>
  `}function pe(e){const t=document.getElementById("favoritesBtn");e?t.innerHTML=`
      Add to favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${g}#icon-heart"></use>
      </svg>
    `:t.innerHTML=`
      Remove from favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${g}#trash"></use>
      </svg>
    `}async function he(e,{email:t,rate:s,review:n}){var i,o;try{return(await $.patch(`exercises/${e}/rating`,{email:t,rate:s,review:n})).data}catch(r){throw new Error(((o=(i=r.response)==null?void 0:i.data)==null?void 0:o.message)||r.message)}}document.getElementById("giveRatingBtn");document.getElementById("closeRatingModal");document.getElementById("closeExerciseModal");const B=document.getElementById("ratingModal");document.getElementById("exerciseModal");const j=document.querySelector("#ratingModal .modal-content"),ve=()=>{B.style.display="block",B.classList.remove("modal-closing")},Q=()=>{j.classList.add("dispersing"),B.classList.add("modal-closing"),setTimeout(()=>{B.style.display="none",j.classList.remove("dispersing"),B.classList.remove("modal-closing")},600)},G=e=>{const t=document.getElementById("currentRating");t.textContent=`${e}.0`};A.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function ye(){document.getElementById("loader").classList.remove("hidden")}function Ee(){document.getElementById("loader").classList.add("hidden")}function Le(e){A.success({message:e,backgroundColor:"#4DC274"})}function x(e){A.error({message:e,backgroundColor:"#EF4040"})}let T=null;function Y(e,t){T=e,ve(),be(t)}const be=e=>{const t=document.getElementById("closeRatingModal"),s=document.getElementById("ratingForm");t.addEventListener("click",Q),s.addEventListener("submit",n=>we(n,e)),document.querySelectorAll(".stars input").forEach(n=>{n.addEventListener("change",i=>G(i.target.value))})},we=async(e,t)=>{e.preventDefault();const s=e.target,n=s.querySelector('input[name="rating"]:checked'),i=s.elements.email.value.trim(),o=s.elements.description.value.trim(),r=parseFloat(n.value||"");if(!r){x("Failed to submit rating.");return}const c={email:i,rate:r,review:o};try{await he(T,c),Le("Rating submitted successfully!"),s.reset(),G(0),T=null,t&&t(),Q()}catch{x("Failed to submit rating.")}},k="favorites";let S,p=[],v;async function Be(e,t){v=await ue(e),p=localStorage.getItem(k)?JSON.parse(localStorage.getItem(k)):[];const n=p.findIndex(o=>o._id===v._id)!==-1,i=ge(v,n);S=ee.create(i,{closable:!0,onClose:()=>$e()}),S.show(),xe(t)}function xe(e){document.getElementById("dialogIconClose").addEventListener("click",q),document.addEventListener("keydown",q),document.getElementById("favoritesBtn").addEventListener("click",()=>X(e)),document.getElementById("giveRatingBtn").addEventListener("click",()=>Y(v._id,e))}function $e(){document.getElementById("dialogIconClose").removeEventListener("click",q),document.removeEventListener("keydown",q),document.getElementById("favoritesBtn").removeEventListener("click",X),document.getElementById("giveRatingBtn").addEventListener("click",Y)}function X(e){const t=p.findIndex(s=>s._id===v._id);t!==-1?p.splice(t,1):p.push(v),localStorage.setItem(k,JSON.stringify(p)),pe(t!==-1),e&&e()}function q(e){e instanceof PointerEvent&&S.close(),e instanceof KeyboardEvent&&e.key==="Escape"&&!(e.ctrlKey||e.altKey||e.shiftKey)&&S.close()}function Fe(e,t=!1){let s;return t?s=`
      <button id="deleteFavorite" class="list-item-header-button-delete" data-id="${e._id}">
        <svg class="list-item-header-icon" width="16" height="16">
          <use href="${g}#icon-trash"></use>
        </svg>
      </button>
    `:s=`
      <p class="exercise-card-ret">${Math.round(e.rating).toFixed(1)}</p>
      <svg class="exercize-icon-star" width="18" height="18">
        <use href="${g}#icon-star"></use>
      </svg>
    `,`
    <div class="exercise-card">
      <div class="exercise-card-rating">
        <div class="exercise-card-wrapper">
          <span class="exercise-card-workout">workout</span>
          ${s}
        </div>
        <button class="start-btn" data-id="${e._id}">
          Start
          <svg class="exercize-icon-arrow" width="16" height="16">
            <use href="${g}#arrow"></use>
          </svg>
        </button>
      </div>
      <div class="exercise-card-name">
        <svg class="exercize-icon-cross" width="24" height="24">
          <use href="${g}#running-stick-figure-border"></use>
        </svg>
        <h6 class="exercise-card-name-title">${e.name}</h6>
      </div>
      <div class="exercise-card-info">
        <p class="exercise-card-info-cal"><span class="exercises-card-span">Burned calories:</span> ${e.burnedCalories} / ${e.time} min </p>
        <p class="exercise-card-info-body"><span class="exercises-card-span">Body part:</span> ${e.bodyPart}</p>
        <p class="exercise-card-info-terget"><span class="exercises-card-span">Target:</span> ${e.target}</p>
      </div>
    </div>
  `}function z(e){const t=document.getElementById("exercise-list");if(!Array.isArray(e)){console.error("Expected exercises to be an array, but received:",e);return}t.innerHTML=e.map(n=>Fe(n)).join(""),document.querySelectorAll(".start-btn").forEach(n=>{n.addEventListener("click",i=>{const o=i.target.dataset.id;Be(o)})})}async function Ie({page:e,limit:t,bodypart:s,muscles:n,equipment:i,keyword:o}){ye();try{const r=await de({page:e,limit:t,bodypart:s,muscles:n,equipment:i,keyword:o});return r.results.length>0?(z(r.results),{results:r.results,totalPages:r.totalPages}):(z([]),x("No exercises found for the selected category."),{results:[],totalPages:1})}catch(r){return x("Error fetching exercises"),console.error("Error fetching exercises:",r),{results:[],totalPages:1}}finally{Ee()}}function Se({currentPage:e,pageLimit:t,totalPages:s,paginationContainer:n,updateExercises:i,currentBodypart:o,currentMuscles:r,currentEquipment:c,currentKeyword:a}){n.innerHTML="";let d,u;e===1?(d=1,u=Math.min(3,s)):e===s?(d=Math.max(1,s-2),u=s):(d=e-1,u=e+1);for(let l=d;l<=u;l++){const f=document.createElement("button");f.textContent=l,f.classList.add("pagination-btn"),l===e&&f.classList.add("pagination-current"),f.addEventListener("click",()=>{i({currentPage:l,pageLimit:t,currentBodypart:o,currentMuscles:r,currentEquipment:c,currentKeyword:a,paginationContainer:n,totalPages:s});const F=document.querySelector(".main-title");window.scrollTo({top:F.offsetTop,behavior:"smooth"})}),n.appendChild(f)}}async function M({currentPage:e,pageLimit:t,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:o,paginationContainer:r,totalPages:c}){try{const a=await Ie({page:e,limit:t,bodypart:s||void 0,muscles:n||void 0,equipment:i||void 0,keyword:o||void 0});a&&a.totalPages&&(c=a.totalPages,Se({currentPage:e,pageLimit:t,totalPages:c,paginationContainer:r,updateExercises:M,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:o}))}catch{x("Error fetching exercises")}}function qe({event:e,pageLimit:t,currentPage:s,currentBodypart:n,currentMuscles:i,currentEquipment:o,currentKeyword:r,updateExercises:c,paginationContainer:a}){const d=e.target.closest("li");if(!d)return{};const u=d.dataset.filter.toLowerCase(),l=d.dataset.name,f=document.querySelector(".filter-wrapper");f&&f.classList.add("hidden");const F=document.querySelector(".exercise-wrapper");F&&F.classList.remove("hidden");const W=document.getElementById("selected-category"),N=document.getElementById("search-container");return u?N.classList.remove("hidden"):N.classList.add("hidden"),l?W.innerHTML=`
        <span class="category__slash"> / </span>
        <span class="category__selected">${l.charAt(0).toUpperCase()+l.slice(1).toLowerCase()}</span>
    `:W.innerHTML="",u==="bodypart"?(n=l,i="",o=""):u==="muscles"?(i=l,n="",o=""):u==="equipment"&&(o=l,n="",i=""),s=1,c({currentPage:s,pageLimit:t,currentBodypart:n,currentMuscles:i,currentEquipment:o,currentKeyword:r,paginationContainer:a,totalPages:1}),{currentPage:s,currentBodypart:n,currentMuscles:i,currentEquipment:o,currentKeyword:r}}function Me({event:e,currentPage:t,pageLimit:s,currentBodypart:n,currentMuscles:i,currentEquipment:o,currentKeyword:r,updateExercises:c,paginationContainer:a}){e.preventDefault();const d=document.getElementById("search-input");return t=1,r=d.value.trim(),c({currentPage:t,pageLimit:s,currentBodypart:n,currentMuscles:i,currentEquipment:o,currentKeyword:r,paginationContainer:a,totalPages:1}),{currentPage:t,currentBodypart:n,currentMuscles:i,currentEquipment:o,currentKeyword:r}}let C="filters",h=1,y=10,Ce=1,E="",L="",b="",w="";function ke(){const e=document.getElementById("search-form"),t=document.getElementById("pagination-container"),s=document.querySelector(".filter-list");y=window.innerWidth>767?10:8,s.addEventListener("click",n=>{C="exercises";const i=qe({event:n,currentPage:h,pageLimit:y,currentBodypart:E,currentMuscles:L,currentEquipment:b,currentKeyword:w,updateExercises:M,paginationContainer:t});h=i.currentPage,E=i.currentBodypart,L=i.currentMuscles,b=i.currentEquipment,w=i.currentKeyword}),e.addEventListener("submit",n=>{const i=Me({event:n,currentPage:h,pageLimit:y,currentBodypart:E,currentMuscles:L,currentEquipment:b,currentKeyword:w,updateExercises:M,paginationContainer:t});h=i.currentPage,E=i.currentBodypart,L=i.currentMuscles,b=i.currentEquipment,w=i.currentKeyword}),document.querySelectorAll(".nav-btn").forEach(n=>{n.addEventListener("click",i=>{C="filters";const o=document.querySelector(".exercise-wrapper");o&&o.classList.add("hidden");const r=document.querySelector(".filter-wrapper");r&&r.classList.remove("hidden");const c=document.getElementById("search-container");c&&c.classList.add("hidden");const a=document.getElementById("selected-category");a&&(a.innerHTML="")})})}async function Ae(){if(C==="filters")return;const e=window.innerWidth;let t=null;if(e>767?t=10:t=8,t!==y){const s=document.getElementById("pagination-container");h=1,y=t,M({currentPage:h,pageLimit:y,currentBodypart:E,currentMuscles:L,currentEquipment:b,currentKeyword:w,paginationContainer:s,totalPages:Ce})}}const m={filter:"Muscles",page:1,limit:null};async function Pe(e){if(e.target.classList.contains("nav-btn")){ae(e),D(!0),m.page=1,m.filter=e.target.dataset.filter;const t=await _(m);H(t),J(t)}}async function He(){const e=te().format("L"),t=JSON.parse(localStorage.getItem("quote-data"));if(!t||t.date!==e){const s=await le();O(s);const n={};n.date=e,n.quote=s.quote,n.author=s.author,localStorage.clear("quote-data"),localStorage.setItem("quote-data",JSON.stringify(n))}else O(t)}async function De(){if(C==="exercises")return;const e=window.innerWidth;let t=null;if(e>1439?t=12:t=9,t!==m.limit){D(!0),m.page=1,m.limit=t;const s=await _(m);H(s),J(s)}}async function _e(e){if(e.target.classList.contains("pagination-btn")){D();const t=e.target;m.page=t.dataset.page;const s=await _(m);H(s),ce(t)}}export{k as F,x as a,De as b,$ as c,Pe as d,Ae as e,He as f,_e as h,ke as i,Be as o,Fe as r,Le as s,Te as t};
//# sourceMappingURL=filtersHandlers-cf0c2258.js.map
