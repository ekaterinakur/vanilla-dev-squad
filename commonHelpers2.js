import{t as A}from"./assets/headerHandlers-3ddddfd6.js";import{a as O,h as J,i as I,b as Q}from"./assets/vendor-4a631802.js";const B=document.querySelector(".scrollup-btn"),G=function(){window.scrollY<300?B.classList.add("visually-hidden"):B.classList.remove("visually-hidden")};window.addEventListener("scroll",G);B.addEventListener("click",V);function V(){window.scrollTo({top:0,behavior:"smooth"})}const Y=document.querySelector(".quote-text-wrapper"),D=document.querySelector(".filter-list"),$=document.querySelector(".pagination-section");function q(e){const t=e.results.map(s=>`
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
      `).join("");D.insertAdjacentHTML("beforeend",t)}function N(e){let t="";for(let s=1;s<=e.totalPages;s++)t+=`
      <button type="button" class="pagination-btn untreated${s===1?" active":""}" data-page=${s}>${s}</button>
    `;$.insertAdjacentHTML("beforeend",t)}function T(e){const t=`
    <p class="quote-text">${e.quote}</p>
    <p class="quote-author">${e.author}</p>
  `;Y.insertAdjacentHTML("beforeend",t)}function X(e){document.querySelectorAll(".nav-btn").forEach(s=>s.classList.remove("decorated")),e.target.classList.add("decorated")}function k(e){D.innerHTML="",e&&($.innerHTML="")}function Z(e){$.querySelectorAll(".pagination-btn").forEach(s=>s.classList.remove("active")),e.classList.add("active"),window.scrollTo(0,0)}const v=O.create({baseURL:"https://your-energy.b.goit.study/api/",timeout:3e3});async function C({page:e=1,limit:t=12,filter:s}){var n,i;try{return(await v.get("filters",{params:{page:e,limit:t,filter:s}})).data}catch(a){throw new Error(((i=(n=a.response)==null?void 0:n.data)==null?void 0:i.message)||a.message)}}async function ee(){var e,t;try{return(await v.get("quote")).data}catch(s){throw new Error(((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||s.message)}}const g={filter:"Muscles",page:1,limit:null};async function te(e){if(e.target.classList.contains("nav-btn")){X(e),k(!0),g.page=1,g.filter=e.target.dataset.filter;const t=await C(g);q(t),N(t)}}async function se(){const e=J().format("L"),t=JSON.parse(localStorage.getItem("quote-data"));if(!t||t.date!==e){const s=await ee();T(s);const n={};n.date=e,n.quote=s.quote,n.author=s.author,localStorage.clear("quote-data"),localStorage.setItem("quote-data",JSON.stringify(n))}else T(t)}async function z(){const e=window.innerWidth;let t=null;if(e>1439?t=12:t=9,t!==g.limit){k(!0),g.page=1,g.limit=t;const s=await C(g);q(s),N(s)}}async function ne(e){if(e.target.classList.contains("pagination-btn")){k();const t=e.target;g.page=t.dataset.page;const s=await C(g);q(s),Z(t)}}async function ie(e){var t,s;try{return(await v.post("subscription",{email:e})).data}catch(n){throw new Error(((s=(t=n.response)==null?void 0:t.data)==null?void 0:s.message)||n.message)}}I.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function ae(){document.getElementById("loader").classList.remove("hidden")}function re(){document.getElementById("loader").classList.add("hidden")}function U(e){I.success({message:e,backgroundColor:"#0C7611"})}function p(e){I.error({message:e,backgroundColor:"#EF4040"})}const W=document.querySelector(".subscribe__form"),H=W.querySelector('[name="email"]');async function oe(e){if(e.preventDefault(),!!H.value)try{const t=H.value,s=await ie(t);U(s.message),W.reset()}catch(t){p(t.message)}}async function ce(e){var t,s;try{return(await v.get(`exercises/${e}`)).data}catch(n){throw new Error(((s=(t=n.response)==null?void 0:t.data)==null?void 0:s.message)||n.message)}}function E(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function le(e,t){return`
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
          ${e.rating}${de(e.rating)}
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
      ${ue(t)}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>
  `}function de(e){let t="";for(let s=1;s<=5;s++){const n=s<=Math.floor(e);t+=`
      <svg class="exercise-icon-star${n?" checked":""}" width="18" height="18">
        <use href="/img/sprite.svg#icon-star"></use>
      </svg>
    `}return t}function ue(e){return`
    <button id="favoritesBtn" class="base-btn favorites-btn" type="button">
      ${e?"Remove from favorites":"Add to favorites"}
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="/img/sprite.svg#${e?"icon-delete":"icon-heart"}"></use>
      </svg>
    </button>
  `}function ge(e){const t=document.getElementById("favoritesBtn");e?t.innerHTML=`
      Add to favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="/img/sprite.svg#icon-heart"></use>
      </svg>
    `:t.innerHTML=`
      Remove from favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="/img/sprite.svg#icon-delete"></use>
      </svg>
    `}async function me(e,{email:t,rate:s,review:n}){var i,a;try{return(await v.patch(`exercises/${e}/rating`,{email:t,rate:s,review:n})).data}catch(o){throw new Error(((a=(i=o.response)==null?void 0:i.data)==null?void 0:a.message)||o.message)}}document.getElementById("giveRatingBtn");document.getElementById("closeRatingModal");document.getElementById("closeExerciseModal");const y=document.getElementById("ratingModal");document.getElementById("exerciseModal");const P=document.querySelector("#ratingModal .modal-content"),fe=()=>{y.style.display="block",y.classList.remove("modal-closing")},x=()=>{P.classList.add("dispersing"),y.classList.add("modal-closing"),setTimeout(()=>{y.style.display="none",P.classList.remove("dispersing"),y.classList.remove("modal-closing")},600)},pe=e=>{const t=document.getElementById("currentRating");t.textContent=`${e}.0`};let F=null;function j(e){F=e,fe(),ve()}const ve=()=>{const e=document.getElementById("closeRatingModal"),t=document.getElementById("closeExerciseModal"),s=document.getElementById("ratingForm");e.addEventListener("click",x),t.addEventListener("click",x),s.addEventListener("submit",he),document.querySelectorAll(".stars input").forEach(n=>{n.addEventListener("change",i=>pe(i.target.value))})},he=async e=>{e.preventDefault();const t=e.target,s=t.querySelector('input[name="rating"]:checked'),n=t.elements.email.value.trim(),i=t.elements.description.value.trim(),a=parseFloat(s.value||"");if(!a){p("Failed to submit rating.");return}const o={email:n,rate:a,review:i};try{await me(F,o),U("Rating submitted successfully!"),F=null,x()}catch{p("Failed to submit rating.")}};let b;const S="favorites";let m=[],f;async function ye(e){f=await ce(e),m=localStorage.getItem(S)?JSON.parse(localStorage.getItem(S)):[];const s=m.findIndex(i=>i._id===f._id)!==-1,n=le(f,s);b=Q.create(n,{closable:!0,onClose:()=>Le()}),b.show(),Ee()}function Ee(){document.getElementById("dialogIconClose").addEventListener("click",w),document.addEventListener("keydown",w),document.getElementById("favoritesBtn").addEventListener("click",K),document.getElementById("giveRatingBtn").addEventListener("click",()=>j(f._id))}function Le(){document.getElementById("dialogIconClose").removeEventListener("click",w),document.removeEventListener("keydown",w),document.getElementById("favoritesBtn").removeEventListener("click",K),document.getElementById("giveRatingBtn").addEventListener("click",j)}function K(){const e=m.findIndex(t=>t._id===f._id);e!==-1?m.splice(e,1):m.push(f),localStorage.setItem(S,JSON.stringify(m)),ge(e!==-1)}function w(e){e instanceof PointerEvent&&b.close(),e instanceof KeyboardEvent&&e.key==="Escape"&&!(e.ctrlKey||e.altKey||e.shiftKey)&&b.close()}async function be({page:e=1,limit:t=12,bodypart:s,muscles:n,equipment:i,keyword:a}){var o,c;try{return(await v.get("exercises",{params:{page:e,limit:t,bodypart:s,muscles:n,equipment:i,keyword:a}})).data}catch(d){throw new Error(((c=(o=d.response)==null?void 0:o.data)==null?void 0:c.message)||d.message)}}function _(e){const t=document.getElementById("exercise-list");if(!Array.isArray(e)){console.error("Expected exercises to be an array, but received:",e);return}t.innerHTML=e.map(n=>`
        <div class="exercise-card">
            <div class="exercise-card-rating">
                <div class="exercise-card-wrapper">
                    <span class="exercise-card-workout">workout</span>
                <p class="exercise-card-ret">${Math.round(n.rating).toFixed(1)}</p>
                <svg class="exercize-icon-star" width="18" height="18">
                    <use href="./img/sprite.svg#icon-star"></use>
                </svg>
                </div>
                <button class="start-btn" data-id="${n._id}">
                    Start
                    <svg class="exercize-icon-arrow" width="16" height="16">
                        <use href="./img/sprite.svg#arrow"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-card-name">
                <svg class="exercize-icon-cross" width="24" height="24">
                    <use href="./img/sprite.svg#running-stick-figure-border"></use>
                </svg>
                <h3 class="exercise-card-name-title">${n.name}</h3>
            </div>
            <div class="exercise-card-info">
                <p class="exercise-card-info-cal">Burned calories: ${n.burnedCalories} / ${n.time} min </p>
                <p class="exercise-card-info-body">Body part: ${n.bodyPart}</p>
                <p class="exercise-card-info-terget">Target: ${n.target}</p>
            </div>
        </div>
    `).join(""),document.querySelectorAll(".start-btn").forEach(n=>{n.addEventListener("click",i=>{const a=i.target.dataset.id;ye(a)})})}async function we({page:e,limit:t,bodypart:s,muscles:n,equipment:i,keyword:a}){ae();try{const o=await be({page:e,limit:t,bodypart:s,muscles:n,equipment:i,keyword:a});return o.results.length>0?(_(o.results),{results:o.results,totalPages:o.totalPages}):(_([]),p("No exercises found for the selected category."),{results:[],totalPages:1})}catch(o){return p("Error fetching exercises"),console.error("Error fetching exercises:",o),{results:[],totalPages:1}}finally{re()}}function Be({currentPage:e,totalPages:t,paginationContainer:s,updateExercises:n,currentBodypart:i,currentMuscles:a,currentEquipment:o,currentKeyword:c}){s.innerHTML="";let d,l;e===1?(d=1,l=Math.min(3,t)):e===t?(d=Math.max(1,t-2),l=t):(d=e-1,l=e+1);for(let r=d;r<=l;r++){const u=document.createElement("button");u.textContent=r,u.classList.add("pagination-btn"),r===e&&u.classList.add("pagination-current"),u.addEventListener("click",()=>{n({currentPage:r,currentBodypart:i,currentMuscles:a,currentEquipment:o,currentKeyword:c,paginationContainer:s,totalPages:t})}),s.appendChild(u)}}async function L({currentPage:e,currentBodypart:t,currentMuscles:s,currentEquipment:n,currentKeyword:i,paginationContainer:a,totalPages:o}){try{const c=await we({page:e,limit:8,bodypart:t||void 0,muscles:s||void 0,equipment:n||void 0,keyword:i||void 0});c&&c.totalPages&&(o=c.totalPages,Be({currentPage:e,totalPages:o,paginationContainer:a,updateExercises:L,currentBodypart:t,currentMuscles:s,currentEquipment:n,currentKeyword:i}))}catch{p("Error fetching exercises")}}function xe(e,t,s,n,i,a,o,c){const d=e.target.closest("button");if(!d)return;const l=d.dataset.filter.toLowerCase(),r=d.dataset.name,u=document.querySelector(".filter-wrapper");u&&u.classList.add("hidden");const h=document.querySelector(".exercise-wrapper");h&&h.classList.remove("hidden"),document.querySelector(".main-title");const M=document.getElementById("selected-category"),R=document.getElementById("search-container");return l?R.classList.remove("hidden"):R.classList.add("hidden"),r?M.innerHTML=`
                <span class="category__slash"> / </span>
                <span class="category__selected">${r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}</span>
            `:M.innerHTML="",l==="bodypart"?(s=r,n="",i=""):l==="muscles"?(n=r,s="",i=""):l==="equipment"&&(i=r,s="",n=""),t=1,o({currentPage:t,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a,paginationContainer:c,totalPages:1}),{currentPage:t,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a}}function Fe(e,t,s,n,i,a,o,c){e.preventDefault();const d=document.getElementById("search-input");return t=1,a=d.value.trim(),console.log("Filter applied:",{currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a}),o({currentPage:t,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a,paginationContainer:c,totalPages:1}),{currentPage:t,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a}}const Se=document.querySelector(".main-nav"),Ie=document.querySelector(".pagination-section"),$e=document.querySelector(".subscribe__form");window.addEventListener("resize",()=>{A(),z()});A();z();se();Se.addEventListener("click",te);Ie.addEventListener("click",ne);$e.addEventListener("submit",oe);document.addEventListener("DOMContentLoaded",()=>{let e=1,t=1,s="",n="",i="",a="";document.getElementById("selected-category");const o=document.getElementById("search-form"),c=document.getElementById("pagination-container");document.querySelector(".filter-list").addEventListener("click",l=>{const r=xe(l,e,s,n,i,a,L,c);e=r.currentPage,s=r.currentBodypart,n=r.currentMuscles,i=r.currentEquipment,a=r.currentKeyword}),o.addEventListener("submit",l=>{const r=Fe(l,e,s,n,i,a,L,c);e=r.currentPage,s=r.currentBodypart,n=r.currentMuscles,i=r.currentEquipment,a=r.currentKeyword}),document.querySelectorAll(".nav-btn").forEach(l=>{l.addEventListener("click",r=>{const u=document.querySelector(".exercise-wrapper");u&&u.classList.add("hidden");const h=document.querySelector(".filter-wrapper");h&&h.classList.remove("hidden"),console.log(`Filter button clicked: ${r.target.dataset.filter}`)})}),document.querySelector(".main-nav").addEventListener("click",()=>{const l=document.getElementById("search-container");l&&l.classList.add("hidden");const r=document.getElementById("selected-category");r&&(r.innerHTML="")}),L({currentPage:e,currentBodypart:s,currentMuscles:n,currentEquipment:i,currentKeyword:a,paginationContainer:c,totalPages:t})});
//# sourceMappingURL=commonHelpers2.js.map
