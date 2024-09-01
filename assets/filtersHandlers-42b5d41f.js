import{a as R,i as y,b as C,h as P}from"./vendor-478dae0d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const p=R.create({baseURL:"https://your-energy.b.goit.study/api/",timeout:3e3});async function k(e){var t,s;try{return(await p.get(`exercises/${e}`)).data}catch(i){throw new Error(((s=(t=i.response)==null?void 0:t.data)==null?void 0:s.message)||i.message)}}function g(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const u="/vanilla-dev-squad/assets/sprite-45ef4b9c.svg";function T(e,t){return`
    <svg id="dialogIconClose" class="dialog-icon-close" width="28" height="28">
      <use href="${u}#icon-close"></use>
    </svg>
    <div class="exercise-dialog">    
      <div class="exercise-image-container">
        <img class="exercise-image" src="${e.gifUrl}" alt="Exercise GIF">
      </div>
      <div class="exercise-content">
        <div class="exercise-name">${g(e.name)}</div>
        <div class="exercise-rating">
          ${e.rating}${D(e.rating)}
        </div>
        <div class="exercise-details">
          <div class="exercise-details-item"><span>Target</span> ${g(e.target)}</div>
          <div class="exercise-details-item"><span>Body Part</span> ${g(e.bodyPart)}</div>
          <div class="exercise-details-item"><span>Equipment</span> ${g(e.equipment)}</div>
          <div class="exercise-details-item"><span>Popular</span> ${e.popularity}</div>
          <div class="exercise-details-item"><span>Burned calories</span> ${e.burnedCalories}/${e.time} min</div>
        </div>
        <div class="exercise-description">${e.description}</div>
      </div>
    </div>
    <div class="exercise-actions">
      ${N(t)}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>
  `}function D(e){let t="";for(let s=1;s<=5;s++){const i=s<=Math.floor(e);t+=`
      <svg class="exercise-icon-star${i?" checked":""}" width="18" height="18">
        <use href="${u}#icon-star"></use>
      </svg>
    `}return t}function N(e){return`
    <button id="favoritesBtn" class="base-btn favorites-btn" type="button">
      ${e?"Remove from favorites":"Add to favorites"}
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${u}#${e?"trash":"icon-heart"}"></use>
      </svg>
    </button>
  `}function A(e){const t=document.getElementById("favoritesBtn");e?t.innerHTML=`
      Add to favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${u}#icon-heart"></use>
      </svg>
    `:t.innerHTML=`
      Remove from favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${u}#trash"></use>
      </svg>
    `}async function O(e,{email:t,rate:s,review:i}){var n,a;try{return(await p.patch(`exercises/${e}/rating`,{email:t,rate:s,review:i})).data}catch(o){throw new Error(((a=(n=o.response)==null?void 0:n.data)==null?void 0:a.message)||o.message)}}document.getElementById("giveRatingBtn");document.getElementById("closeRatingModal");document.getElementById("closeExerciseModal");const d=document.getElementById("ratingModal");document.getElementById("exerciseModal");const w=document.querySelector("#ratingModal .modal-content"),H=()=>{d.style.display="block",d.classList.remove("modal-closing")},I=()=>{w.classList.add("dispersing"),d.classList.add("modal-closing"),setTimeout(()=>{d.style.display="none",w.classList.remove("dispersing"),d.classList.remove("modal-closing")},600)},K=e=>{const t=document.getElementById("currentRating");t.textContent=`${e}.0`};y.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function Z(){document.getElementById("loader").classList.remove("hidden")}function ee(){document.getElementById("loader").classList.add("hidden")}function U(e){y.success({message:e,backgroundColor:"#0C7611"})}function F(e){y.error({message:e,backgroundColor:"#EF4040"})}let v=null;function x(e){v=e,H(),_()}const _=()=>{const e=document.getElementById("closeRatingModal"),t=document.getElementById("ratingForm");e.addEventListener("click",I),t.addEventListener("submit",j),document.querySelectorAll(".stars input").forEach(s=>{s.addEventListener("change",i=>K(i.target.value))})},j=async e=>{e.preventDefault();const t=e.target,s=t.querySelector('input[name="rating"]:checked'),i=t.elements.email.value.trim(),n=t.elements.description.value.trim(),a=parseFloat(s.value||"");if(!a){F("Failed to submit rating.");return}const o={email:i,rate:a,review:n};try{await O(v,o),U("Rating submitted successfully!"),v=null,I()}catch{F("Failed to submit rating.")}};let m;const h="favorites";let c=[],l;async function te(e){l=await k(e),c=localStorage.getItem(h)?JSON.parse(localStorage.getItem(h)):[];const s=c.findIndex(n=>n._id===l._id)!==-1,i=T(l,s);m=C.create(i,{closable:!0,onClose:()=>z()}),m.show(),J()}function J(){document.getElementById("dialogIconClose").addEventListener("click",f),document.addEventListener("keydown",f),document.getElementById("favoritesBtn").addEventListener("click",q),document.getElementById("giveRatingBtn").addEventListener("click",()=>x(l._id))}function z(){document.getElementById("dialogIconClose").removeEventListener("click",f),document.removeEventListener("keydown",f),document.getElementById("favoritesBtn").removeEventListener("click",q),document.getElementById("giveRatingBtn").addEventListener("click",x)}function q(){const e=c.findIndex(t=>t._id===l._id);e!==-1?c.splice(e,1):c.push(l),localStorage.setItem(h,JSON.stringify(c)),A(e!==-1)}function f(e){e instanceof PointerEvent&&m.close(),e instanceof KeyboardEvent&&e.key==="Escape"&&!(e.ctrlKey||e.altKey||e.shiftKey)&&m.close()}const Q=document.querySelector(".quote-text-wrapper"),S=document.querySelector(".filter-list"),b=document.querySelector(".pagination-section");function L(e){const t=e.results.map(s=>`
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
      `).join("");S.insertAdjacentHTML("beforeend",t)}function M(e){let t="";for(let s=1;s<=e.totalPages;s++)t+=`
      <button type="button" class="pagination-btn untreated${s===1?" active":""}" data-page=${s}>${s}</button>
    `;b.insertAdjacentHTML("beforeend",t)}function $(e){const t=`
    <p class="quote-text">${e.quote}</p>
    <p class="quote-author">${e.author}</p>
  `;Q.insertAdjacentHTML("beforeend",t)}function W(e){document.querySelectorAll(".nav-btn").forEach(s=>s.classList.remove("decorated")),e.target.classList.add("decorated")}function B(e){S.innerHTML="",e&&(b.innerHTML="")}function G(e){b.querySelectorAll(".pagination-btn").forEach(s=>s.classList.remove("active")),e.classList.add("active"),window.scrollTo(0,800)}async function E({page:e=1,limit:t=12,filter:s}){var i,n;try{return(await p.get("filters",{params:{page:e,limit:t,filter:s}})).data}catch(a){throw new Error(((n=(i=a.response)==null?void 0:i.data)==null?void 0:n.message)||a.message)}}async function V(){var e,t;try{return(await p.get("quote")).data}catch(s){throw new Error(((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||s.message)}}const r={filter:"Muscles",page:1,limit:null};async function se(e){if(e.target.classList.contains("nav-btn")){W(e),B(!0),r.page=1,r.filter=e.target.dataset.filter;const t=await E(r);L(t),M(t)}}async function ne(){const e=P().format("L"),t=JSON.parse(localStorage.getItem("quote-data"));if(!t||t.date!==e){const s=await V();$(s);const i={};i.date=e,i.quote=s.quote,i.author=s.author,localStorage.clear("quote-data"),localStorage.setItem("quote-data",JSON.stringify(i))}else $(t)}async function ie(){const e=window.innerWidth;let t=null;if(e>1439?t=12:t=9,t!==r.limit){B(!0),r.page=1,r.limit=t;const s=await E(r);L(s),M(s)}}async function ae(e){if(e.target.classList.contains("pagination-btn")){B();const t=e.target;r.page=t.dataset.page;const s=await E(r);L(s),G(t)}}export{F as a,u as b,p as c,Z as d,ie as e,ne as f,se as g,ee as h,ae as i,te as o,U as s};
//# sourceMappingURL=filtersHandlers-42b5d41f.js.map
