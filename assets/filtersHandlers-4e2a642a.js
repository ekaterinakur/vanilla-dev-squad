import{a as C,i as y,b as P,h as k}from"./vendor-478dae0d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const p=C.create({baseURL:"https://your-energy.b.goit.study/api/",timeout:3e3});async function T(e){var t,s;try{return(await p.get(`exercises/${e}`)).data}catch(n){throw new Error(((s=(t=n.response)==null?void 0:t.data)==null?void 0:s.message)||n.message)}}function g(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const u="/vanilla-dev-squad/assets/sprite-45ef4b9c.svg";function D(e,t){return`
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
          ${e.rating}${N(e.rating)}
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
      ${A(t)}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>
  `}function N(e){let t="";for(let s=1;s<=5;s++){const n=s<=Math.floor(e);t+=`
      <svg class="exercise-icon-star${n?" checked":""}" width="18" height="18">
        <use href="${u}#icon-star"></use>
      </svg>
    `}return t}function A(e){return`
    <button id="favoritesBtn" class="base-btn favorites-btn" type="button">
      ${e?"Remove from favorites":"Add to favorites"}
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${u}#${e?"trash":"icon-heart"}"></use>
      </svg>
    </button>
  `}function O(e){const t=document.getElementById("favoritesBtn");e?t.innerHTML=`
      Add to favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${u}#icon-heart"></use>
      </svg>
    `:t.innerHTML=`
      Remove from favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${u}#trash"></use>
      </svg>
    `}async function H(e,{email:t,rate:s,review:n}){var i,a;try{return(await p.patch(`exercises/${e}/rating`,{email:t,rate:s,review:n})).data}catch(o){throw new Error(((a=(i=o.response)==null?void 0:i.data)==null?void 0:a.message)||o.message)}}document.getElementById("giveRatingBtn");document.getElementById("closeRatingModal");document.getElementById("closeExerciseModal");const d=document.getElementById("ratingModal");document.getElementById("exerciseModal");const w=document.querySelector("#ratingModal .modal-content"),K=()=>{d.style.display="block",d.classList.remove("modal-closing")},I=()=>{w.classList.add("dispersing"),d.classList.add("modal-closing"),setTimeout(()=>{d.style.display="none",w.classList.remove("dispersing"),d.classList.remove("modal-closing")},600)},x=e=>{const t=document.getElementById("currentRating");t.textContent=`${e}.0`};y.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function Z(){document.getElementById("loader").classList.remove("hidden")}function ee(){document.getElementById("loader").classList.add("hidden")}function U(e){y.success({message:e,backgroundColor:"#0C7611"})}function F(e){y.error({message:e,backgroundColor:"#EF4040"})}let v=null;function q(e){v=e,K(),_()}const _=()=>{const e=document.getElementById("closeRatingModal"),t=document.getElementById("ratingForm");e.addEventListener("click",I),t.addEventListener("submit",j),document.querySelectorAll(".stars input").forEach(s=>{s.addEventListener("change",n=>x(n.target.value))})},j=async e=>{e.preventDefault();const t=e.target,s=t.querySelector('input[name="rating"]:checked'),n=t.elements.email.value.trim(),i=t.elements.description.value.trim(),a=parseFloat(s.value||"");if(!a){F("Failed to submit rating.");return}const o={email:n,rate:a,review:i};try{await H(v,o),U("Rating submitted successfully!"),t.reset(),x(0),v=null,I()}catch{F("Failed to submit rating.")}};let m;const h="favorites";let c=[],l;async function te(e){l=await T(e),c=localStorage.getItem(h)?JSON.parse(localStorage.getItem(h)):[];const s=c.findIndex(i=>i._id===l._id)!==-1,n=D(l,s);m=P.create(n,{closable:!0,onClose:()=>W()}),m.show(),J()}function J(){document.getElementById("dialogIconClose").addEventListener("click",f),document.addEventListener("keydown",f),document.getElementById("favoritesBtn").addEventListener("click",S),document.getElementById("giveRatingBtn").addEventListener("click",()=>q(l._id))}function W(){document.getElementById("dialogIconClose").removeEventListener("click",f),document.removeEventListener("keydown",f),document.getElementById("favoritesBtn").removeEventListener("click",S),document.getElementById("giveRatingBtn").addEventListener("click",q)}function S(){const e=c.findIndex(t=>t._id===l._id);e!==-1?c.splice(e,1):c.push(l),localStorage.setItem(h,JSON.stringify(c)),O(e!==-1)}function f(e){e instanceof PointerEvent&&m.close(),e instanceof KeyboardEvent&&e.key==="Escape"&&!(e.ctrlKey||e.altKey||e.shiftKey)&&m.close()}const z=document.querySelector(".quote-text-wrapper"),M=document.querySelector(".filter-list"),b=document.querySelector(".pagination-section");function L(e){const t=e.results.map(s=>`
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
      `).join("");M.insertAdjacentHTML("beforeend",t)}function R(e){let t="";for(let s=1;s<=e.totalPages;s++)t+=`
      <button type="button" class="pagination-btn untreated${s===1?" active":""}" data-page=${s}>${s}</button>
    `;b.insertAdjacentHTML("beforeend",t)}function $(e){const t=`
    <p class="quote-text">${e.quote}</p>
    <p class="quote-author">${e.author}</p>
  `;z.insertAdjacentHTML("beforeend",t)}function Q(e){document.querySelectorAll(".nav-btn").forEach(s=>s.classList.remove("decorated")),e.target.classList.add("decorated")}function B(e){M.innerHTML="",e&&(b.innerHTML="")}function G(e){b.querySelectorAll(".pagination-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active");const s=document.querySelector(".main-title");window.scrollTo({top:s.offsetTop,behavior:"smooth"})}async function E({page:e=1,limit:t=12,filter:s}){var n,i;try{return(await p.get("filters",{params:{page:e,limit:t,filter:s}})).data}catch(a){throw new Error(((i=(n=a.response)==null?void 0:n.data)==null?void 0:i.message)||a.message)}}async function V(){var e,t;try{return(await p.get("quote")).data}catch(s){throw new Error(((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||s.message)}}const r={filter:"Muscles",page:1,limit:null};async function se(e){if(e.target.classList.contains("nav-btn")){Q(e),B(!0),r.page=1,r.filter=e.target.dataset.filter;const t=await E(r);L(t),R(t)}}async function ne(){const e=k().format("L"),t=JSON.parse(localStorage.getItem("quote-data"));if(!t||t.date!==e){const s=await V();$(s);const n={};n.date=e,n.quote=s.quote,n.author=s.author,localStorage.clear("quote-data"),localStorage.setItem("quote-data",JSON.stringify(n))}else $(t)}async function ie(){const e=window.innerWidth;let t=null;if(e>1439?t=12:t=9,t!==r.limit){B(!0),r.page=1,r.limit=t;const s=await E(r);L(s),R(s)}}async function ae(e){if(e.target.classList.contains("pagination-btn")){B();const t=e.target;r.page=t.dataset.page;const s=await E(r);L(s),G(t)}}export{F as a,u as b,p as c,Z as d,ie as e,ne as f,se as g,ee as h,ae as i,te as o,U as s};
//# sourceMappingURL=filtersHandlers-4e2a642a.js.map
