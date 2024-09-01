import{a as L,i as y,b as I}from"./vendor-478dae0d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const B=L.create({baseURL:"https://your-energy.b.goit.study/api/",timeout:3e3});async function x(e){var t,n;try{return(await B.get(`exercises/${e}`)).data}catch(o){throw new Error(((n=(t=o.response)==null?void 0:t.data)==null?void 0:n.message)||o.message)}}function u(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const l="/vanilla-dev-squad/assets/sprite-45ef4b9c.svg";function $(e,t){return`
    <svg id="dialogIconClose" class="dialog-icon-close" width="28" height="28">
      <use href="${l}#icon-close"></use>
    </svg>
    <div class="exercise-dialog">    
      <div class="exercise-image-container">
        <img class="exercise-image" src="${e.gifUrl}" alt="Exercise GIF">
      </div>
      <div class="exercise-content">
        <div class="exercise-name">${u(e.name)}</div>
        <div class="exercise-rating">
          ${e.rating}${w(e.rating)}
        </div>
        <div class="exercise-details">
          <div class="exercise-details-item"><span>Target</span> ${u(e.target)}</div>
          <div class="exercise-details-item"><span>Body Part</span> ${u(e.bodyPart)}</div>
          <div class="exercise-details-item"><span>Equipment</span> ${u(e.equipment)}</div>
          <div class="exercise-details-item"><span>Popular</span> ${e.popularity}</div>
          <div class="exercise-details-item"><span>Burned calories</span> ${e.burnedCalories}/${e.time} min</div>
        </div>
        <div class="exercise-description">${e.description}</div>
      </div>
    </div>
    <div class="exercise-actions">
      ${R(t)}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>
  `}function w(e){let t="";for(let n=1;n<=5;n++){const o=n<=Math.floor(e);t+=`
      <svg class="exercise-icon-star${o?" checked":""}" width="18" height="18">
        <use href="${l}#icon-star"></use>
      </svg>
    `}return t}function R(e){return`
    <button id="favoritesBtn" class="base-btn favorites-btn" type="button">
      ${e?"Remove from favorites":"Add to favorites"}
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${l}#${e?"trash":"icon-heart"}"></use>
      </svg>
    </button>
  `}function C(e){const t=document.getElementById("favoritesBtn");e?t.innerHTML=`
      Add to favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${l}#icon-heart"></use>
      </svg>
    `:t.innerHTML=`
      Remove from favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${l}#trash"></use>
      </svg>
    `}async function M(e,{email:t,rate:n,review:o}){var s,i;try{return(await B.patch(`exercises/${e}/rating`,{email:t,rate:n,review:o})).data}catch(a){throw new Error(((i=(s=a.response)==null?void 0:s.data)==null?void 0:i.message)||a.message)}}document.getElementById("giveRatingBtn");document.getElementById("closeRatingModal");document.getElementById("closeExerciseModal");const d=document.getElementById("ratingModal");document.getElementById("exerciseModal");const h=document.querySelector("#ratingModal .modal-content"),k=()=>{d.style.display="block",d.classList.remove("modal-closing")},v=()=>{h.classList.add("dispersing"),d.classList.add("modal-closing"),setTimeout(()=>{d.style.display="none",h.classList.remove("dispersing"),d.classList.remove("modal-closing")},600)},S=e=>{const t=document.getElementById("currentRating");t.textContent=`${e}.0`};y.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function _(){document.getElementById("loader").classList.remove("hidden")}function A(){document.getElementById("loader").classList.add("hidden")}function N(e){y.success({message:e,backgroundColor:"#0C7611"})}function E(e){y.error({message:e,backgroundColor:"#EF4040"})}let f=null;function b(e){f=e,k(),q()}const q=()=>{const e=document.getElementById("closeRatingModal"),t=document.getElementById("closeExerciseModal"),n=document.getElementById("ratingForm");e.addEventListener("click",v),t.addEventListener("click",v),n.addEventListener("submit",K),document.querySelectorAll(".stars input").forEach(o=>{o.addEventListener("change",s=>S(s.target.value))})},K=async e=>{e.preventDefault();const t=e.target,n=t.querySelector('input[name="rating"]:checked'),o=t.elements.email.value.trim(),s=t.elements.description.value.trim(),i=parseFloat(n.value||"");if(!i){E("Failed to submit rating.");return}const a={email:o,rate:i,review:s};try{await M(f,a),N("Rating submitted successfully!"),f=null,v()}catch{E("Failed to submit rating.")}};let g;const p="favorites";let r=[],c;async function H(e){c=await x(e),r=localStorage.getItem(p)?JSON.parse(localStorage.getItem(p)):[];const n=r.findIndex(s=>s._id===c._id)!==-1,o=$(c,n);g=I.create(o,{closable:!0,onClose:()=>P()}),g.show(),O()}function O(){document.getElementById("dialogIconClose").addEventListener("click",m),document.addEventListener("keydown",m),document.getElementById("favoritesBtn").addEventListener("click",F),document.getElementById("giveRatingBtn").addEventListener("click",()=>b(c._id))}function P(){document.getElementById("dialogIconClose").removeEventListener("click",m),document.removeEventListener("keydown",m),document.getElementById("favoritesBtn").removeEventListener("click",F),document.getElementById("giveRatingBtn").addEventListener("click",b)}function F(){const e=r.findIndex(t=>t._id===c._id);e!==-1?r.splice(e,1):r.push(c),localStorage.setItem(p,JSON.stringify(r)),C(e!==-1)}function m(e){e instanceof PointerEvent&&g.close(),e instanceof KeyboardEvent&&e.key==="Escape"&&!(e.ctrlKey||e.altKey||e.shiftKey)&&g.close()}export{E as a,l as b,B as c,_ as d,A as h,H as o,N as s};
//# sourceMappingURL=exerciseHandlers-85059fa2.js.map
