import{a as T,h as O,i as b,b as D}from"./vendor-c65b4e60.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const v=document.querySelector(".js-header-menu"),I=document.querySelector(".overlay"),H=getComputedStyle(document.documentElement),N=parseInt(H.getPropertyValue("--breakpoint-md").trim());function _(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.removeEventListener("click",S)})}function j(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.addEventListener("click",S)})}function S(){v.classList.toggle("open"),I.classList.toggle("open"),document.body.classList.toggle("no-scroll"),document.documentElement.style.overflow=v.classList.contains("open")?"hidden":""}function le(){window.innerWidth>=N?(v.classList.remove("open"),I.classList.remove("open"),document.body.classList.remove("no-scroll"),document.documentElement.style.overflow="",_()):j()}const K=document.querySelector(".quote-text-wrapper"),q=document.querySelector(".filter-list"),E=document.querySelector(".pagination-section");function L(e){const t=e.results.map(s=>`
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
      `).join("");q.insertAdjacentHTML("beforeend",t)}function M(e){let t="";for(let s=1;s<=e.totalPages;s++)t+=`
      <button type="button" class="pagination-btn untreated${s===1?" active":""}" data-page=${s}>${s}</button>
    `;E.insertAdjacentHTML("beforeend",t)}function $(e){const t=`
    <p class="quote-text">${e.quote}</p>
    <p class="quote-author">${e.author}</p>
  `;K.insertAdjacentHTML("beforeend",t)}function z(e){document.querySelectorAll(".nav-btn").forEach(s=>s.classList.remove("decorated")),e.target.classList.add("decorated")}function B(e){q.innerHTML="",e&&(E.innerHTML="")}function U(e){E.querySelectorAll(".pagination-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active");const s=document.querySelector(".main-title");window.scrollTo({top:s.offsetTop,behavior:"smooth"})}const p=T.create({baseURL:"https://your-energy.b.goit.study/api/",timeout:3e3});async function w({page:e=1,limit:t=12,filter:s}){var n,o;try{return(await p.get("filters",{params:{page:e,limit:t,filter:s}})).data}catch(i){throw new Error(((o=(n=i.response)==null?void 0:n.data)==null?void 0:o.message)||i.message)}}async function W(){var e,t;try{return(await p.get("quote")).data}catch(s){throw new Error(((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||s.message)}}const r={filter:"Muscles",page:1,limit:null};async function de(e){if(e.target.classList.contains("nav-btn")){z(e),B(!0),r.page=1,r.filter=e.target.dataset.filter;const t=await w(r);L(t),M(t)}}async function ue(){const e=O().format("L"),t=JSON.parse(localStorage.getItem("quote-data"));if(!t||t.date!==e){const s=await W();$(s);const n={};n.date=e,n.quote=s.quote,n.author=s.author,localStorage.clear("quote-data"),localStorage.setItem("quote-data",JSON.stringify(n))}else $(t)}async function ge(){const e=window.innerWidth;let t=null;if(e>1439?t=12:t=9,t!==r.limit){B(!0),r.page=1,r.limit=t;const s=await w(r);L(s),M(s)}}async function me(e){if(e.target.classList.contains("pagination-btn")){B();const t=e.target;r.page=t.dataset.page;const s=await w(r);L(s),U(t)}}async function J(e){var t,s;try{return(await p.get(`exercises/${e}`)).data}catch(n){throw new Error(((s=(t=n.response)==null?void 0:t.data)==null?void 0:s.message)||n.message)}}function g(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const c="/vanilla-dev-squad/assets/sprite-45ef4b9c.svg";function V(e,t){return`
    <svg id="dialogIconClose" class="dialog-icon-close" width="28" height="28">
      <use href="${c}#icon-close"></use>
    </svg>
    <div class="exercise-dialog">    
      <div class="exercise-image-container">
        <img class="exercise-image" src="${e.gifUrl}" alt="Exercise GIF">
      </div>
      <div class="exercise-content">
        <div class="exercise-name">${g(e.name)}</div>
        <div class="exercise-rating">
          ${e.rating}${Q(e.rating)}
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
      ${G(t)}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>
  `}function Q(e){let t="";for(let s=1;s<=5;s++){const n=s<=Math.floor(e);t+=`
      <svg class="exercise-icon-star${n?" checked":""}" width="18" height="18">
        <use href="${c}#icon-star"></use>
      </svg>
    `}return t}function G(e){return`
    <button id="favoritesBtn" class="base-btn favorites-btn" type="button">
      ${e?"Remove from favorites":"Add to favorites"}
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${c}#${e?"trash":"icon-heart"}"></use>
      </svg>
    </button>
  `}function Y(e){const t=document.getElementById("favoritesBtn");e?t.innerHTML=`
      Add to favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${c}#icon-heart"></use>
      </svg>
    `:t.innerHTML=`
      Remove from favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${c}#trash"></use>
      </svg>
    `}async function X(e,{email:t,rate:s,review:n}){var o,i;try{return(await p.patch(`exercises/${e}/rating`,{email:t,rate:s,review:n})).data}catch(a){throw new Error(((i=(o=a.response)==null?void 0:o.data)==null?void 0:i.message)||a.message)}}document.getElementById("giveRatingBtn");document.getElementById("closeRatingModal");document.getElementById("closeExerciseModal");const u=document.getElementById("ratingModal");document.getElementById("exerciseModal");const F=document.querySelector("#ratingModal .modal-content"),Z=()=>{u.style.display="block",u.classList.remove("modal-closing")},R=()=>{F.classList.add("dispersing"),u.classList.add("modal-closing"),setTimeout(()=>{u.style.display="none",F.classList.remove("dispersing"),u.classList.remove("modal-closing")},600)},k=e=>{const t=document.getElementById("currentRating");t.textContent=`${e}.0`};b.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function fe(){document.getElementById("loader").classList.remove("hidden")}function pe(){document.getElementById("loader").classList.add("hidden")}function ee(e){b.success({message:e,backgroundColor:"#0C7611"})}function x(e){b.error({message:e,backgroundColor:"#EF4040"})}let h=null;function A(e,t){h=e,Z(),te(t)}const te=e=>{const t=document.getElementById("closeRatingModal"),s=document.getElementById("ratingForm");t.addEventListener("click",R),s.addEventListener("submit",n=>se(n,e)),document.querySelectorAll(".stars input").forEach(n=>{n.addEventListener("change",o=>k(o.target.value))})},se=async(e,t)=>{e.preventDefault();const s=e.target,n=s.querySelector('input[name="rating"]:checked'),o=s.elements.email.value.trim(),i=s.elements.description.value.trim(),a=parseFloat(n.value||"");if(!a){x("Failed to submit rating.");return}const P={email:o,rate:a,review:i};try{await X(h,P),ee("Rating submitted successfully!"),s.reset(),k(0),h=null,t&&t(),R()}catch{x("Failed to submit rating.")}},y="favorites";let m,l=[],d;async function ne(e,t){d=await J(e),l=localStorage.getItem(y)?JSON.parse(localStorage.getItem(y)):[];const n=l.findIndex(i=>i._id===d._id)!==-1,o=V(d,n);m=D.create(o,{closable:!0,onClose:()=>ie()}),m.show(),oe(t)}function oe(e){document.getElementById("dialogIconClose").addEventListener("click",f),document.addEventListener("keydown",f),document.getElementById("favoritesBtn").addEventListener("click",()=>C(e)),document.getElementById("giveRatingBtn").addEventListener("click",()=>A(d._id,e))}function ie(){document.getElementById("dialogIconClose").removeEventListener("click",f),document.removeEventListener("keydown",f),document.getElementById("favoritesBtn").removeEventListener("click",C),document.getElementById("giveRatingBtn").addEventListener("click",A)}function C(e){const t=l.findIndex(s=>s._id===d._id);t!==-1?l.splice(t,1):l.push(d),localStorage.setItem(y,JSON.stringify(l)),Y(t!==-1),e&&e()}function f(e){e instanceof PointerEvent&&m.close(),e instanceof KeyboardEvent&&e.key==="Escape"&&!(e.ctrlKey||e.altKey||e.shiftKey)&&m.close()}function ae(e,t=!1){let s;return t?s=`
      <button id="deleteFavorite" class="list-item-header-button-delete" data-id="${e._id}">
        <svg class="list-item-header-icon" width="16" height="16">
          <use href="${c}#icon-trash"></use>
        </svg>
      </button>
    `:s=`
      <p class="exercise-card-ret">${Math.round(e.rating).toFixed(1)}</p>
      <svg class="exercize-icon-star" width="18" height="18">
        <use href="${c}#icon-star"></use>
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
            <use href="${c}#arrow"></use>
          </svg>
        </button>
      </div>
      <div class="exercise-card-name">
        <svg class="exercize-icon-cross" width="24" height="24">
          <use href="${c}#running-stick-figure-border"></use>
        </svg>
        <h6 class="exercise-card-name-title">${e.name}</h6>
      </div>
      <div class="exercise-card-info">
        <p class="exercise-card-info-cal"><span class="exercises-card-span">Burned calories:</span> ${e.burnedCalories} / ${e.time} min </p>
        <p class="exercise-card-info-body"><span class="exercises-card-span">Body part:</span> ${e.bodyPart}</p>
        <p class="exercise-card-info-terget"><span class="exercises-card-span">Target:</span> ${e.target}</p>
      </div>
    </div>
  `}function ve(e){const t=document.getElementById("exercise-list");if(!Array.isArray(e)){console.error("Expected exercises to be an array, but received:",e);return}t.innerHTML=e.map(n=>ae(n)).join(""),document.querySelectorAll(".start-btn").forEach(n=>{n.addEventListener("click",o=>{const i=o.target.dataset.id;ne(i)})})}export{y as F,x as a,fe as b,p as c,ve as d,ge as e,ue as f,de as g,pe as h,me as i,ne as o,ae as r,ee as s,le as t};
//# sourceMappingURL=renderExercises-09d12ed9.js.map
