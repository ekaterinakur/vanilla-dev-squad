import{s as m}from"./assets/sprite-327f9b99.js";import{a as G,h as Y,i as q,b as X}from"./assets/vendor-4a631802.js";const x=document.querySelector(".scrollup-btn"),Z=function(){window.scrollY<300?x.classList.add("visually-hidden"):x.classList.remove("visually-hidden")};window.addEventListener("scroll",Z);x.addEventListener("click",ee);function ee(){window.scrollTo({top:0,behavior:"smooth"})}const S=document.querySelector(".js-header-menu"),N=document.querySelector(".overlay"),te=getComputedStyle(document.documentElement),ne=parseInt(te.getPropertyValue("--breakpoint-md").trim());function se(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.removeEventListener("click",j)})}function oe(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.addEventListener("click",j)})}function j(){S.classList.toggle("open"),N.classList.toggle("open"),document.body.classList.toggle("no-scroll"),document.documentElement.style.overflow=S.classList.contains("open")?"hidden":""}function W(){window.innerWidth>=ne?(S.classList.remove("open"),N.classList.remove("open"),document.body.classList.remove("no-scroll"),document.documentElement.style.overflow="",se()):oe()}const ie=document.querySelector(".quote-text-wrapper"),z=document.querySelector(".filter-list"),k=document.querySelector(".pagination-section");function M(e){const t=e.results.map(n=>`
        <li class="filter-item">
          <button type="submit" class="filter-btn untreated" data-filter=${n.filter} data-name=${n.name}>
            <div class="filter-container">
              <img class="filter-img" src="${n.imgURL}" alt="${n.name}" width=335 height=225>
              <div class="filter-overlay"></div>
              <p class="filter-name">${n.name}</p>
              <p class="filter-filter">${n.filter}</p>
            </div>  
          </button>
        </li>
      `).join("");z.insertAdjacentHTML("beforeend",t)}function U(e){let t="";for(let n=1;n<=e.totalPages;n++)t+=`
      <button type="button" class="pagination-btn untreated${n===1?" active":""}" data-page=${n}>${n}</button>
    `;k.insertAdjacentHTML("beforeend",t)}function H(e){const t=`
    <p class="quote-text">${e.quote}</p>
    <p class="quote-author">${e.author}</p>
  `;ie.insertAdjacentHTML("beforeend",t)}function ae(e){document.querySelectorAll(".nav-btn").forEach(n=>n.classList.remove("decorated")),e.target.classList.add("decorated")}function C(e){z.innerHTML="",e&&(k.innerHTML="")}function re(e){k.querySelectorAll(".pagination-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active"),window.scrollTo(0,0)}const h=G.create({baseURL:"https://your-energy.b.goit.study/api/",timeout:3e3});async function R({page:e=1,limit:t=12,filter:n}){var s,o;try{return(await h.get("filters",{params:{page:e,limit:t,filter:n}})).data}catch(i){throw new Error(((o=(s=i.response)==null?void 0:s.data)==null?void 0:o.message)||i.message)}}async function ce(){var e,t;try{return(await h.get("quote")).data}catch(n){throw new Error(((t=(e=n.response)==null?void 0:e.data)==null?void 0:t.message)||n.message)}}const g={filter:"Muscles",page:1,limit:null};async function le(e){if(e.target.classList.contains("nav-btn")){ae(e),C(!0),g.page=1,g.filter=e.target.dataset.filter;const t=await R(g);M(t),U(t)}}async function de(){const e=Y().format("L"),t=JSON.parse(localStorage.getItem("quote-data"));if(!t||t.date!==e){const n=await ce();H(n);const s={};s.date=e,s.quote=n.quote,s.author=n.author,localStorage.clear("quote-data"),localStorage.setItem("quote-data",JSON.stringify(s))}else H(t)}async function O(){const e=window.innerWidth;let t=null;if(e>1439?t=12:t=9,t!==g.limit){C(!0),g.page=1,g.limit=t;const n=await R(g);M(n),U(n)}}async function ue(e){if(e.target.classList.contains("pagination-btn")){C();const t=e.target;g.page=t.dataset.page;const n=await R(g);M(n),re(t)}}async function ge(e){var t,n;try{return(await h.post("subscription",{email:e})).data}catch(s){throw new Error(((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.message)||s.message)}}q.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function me(){document.getElementById("loader").classList.remove("hidden")}function fe(){document.getElementById("loader").classList.add("hidden")}function K(e){q.success({message:e,backgroundColor:"#0C7611"})}function v(e){q.error({message:e,backgroundColor:"#EF4040"})}const J=document.querySelector(".subscribe__form"),P=J.querySelector('[name="email"]');async function pe(e){if(e.preventDefault(),!!P.value)try{const t=P.value,n=await ge(t);K(n.message),J.reset()}catch(t){v(t.message)}}async function ve(e){var t,n;try{return(await h.get(`exercises/${e}`)).data}catch(s){throw new Error(((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.message)||s.message)}}function L(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function he(e,t){return`
    <svg id="dialogIconClose" class="dialog-icon-close" width="28" height="28">
      <use href="${m}#icon-close"></use>
    </svg>
    <div class="exercise-dialog">    
      <div class="exercise-image-container">
        <img class="exercise-image" src="${e.gifUrl}" alt="Exercise GIF">
      </div>
      <div class="exercise-content">
        <div class="exercise-name">${L(e.name)}</div>
        <div class="exercise-rating">
          ${e.rating}${ye(e.rating)}
        </div>
        <div class="exercise-details">
          <div class="exercise-details-item"><span>Target</span> ${L(e.target)}</div>
          <div class="exercise-details-item"><span>Body Part</span> ${L(e.bodyPart)}</div>
          <div class="exercise-details-item"><span>Equipment</span> ${L(e.equipment)}</div>
          <div class="exercise-details-item"><span>Popular</span> ${e.popularity}</div>
          <div class="exercise-details-item"><span>Burned calories</span> ${e.burnedCalories}/${e.time} min</div>
        </div>
        <div class="exercise-description">${e.description}</div>
      </div>
    </div>
    <div class="exercise-actions">
      ${Ee(t)}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>
  `}function ye(e){let t="";for(let n=1;n<=5;n++){const s=n<=Math.floor(e);t+=`
      <svg class="exercise-icon-star${s?" checked":""}" width="18" height="18">
        <use href="${m}#icon-star"></use>
      </svg>
    `}return t}function Ee(e){return`
    <button id="favoritesBtn" class="base-btn favorites-btn" type="button">
      ${e?"Remove from favorites":"Add to favorites"}
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${m}#${e?"trash":"icon-heart"}"></use>
      </svg>
    </button>
  `}function Le(e){const t=document.getElementById("favoritesBtn");e?t.innerHTML=`
      Add to favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${m}#icon-heart"></use>
      </svg>
    `:t.innerHTML=`
      Remove from favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${m}#trash"></use>
      </svg>
    `}async function be(e,{email:t,rate:n,review:s}){var o,i;try{return(await h.patch(`exercises/${e}/rating`,{email:t,rate:n,review:s})).data}catch(r){throw new Error(((i=(o=r.response)==null?void 0:o.data)==null?void 0:i.message)||r.message)}}document.getElementById("giveRatingBtn");document.getElementById("closeRatingModal");document.getElementById("closeExerciseModal");const E=document.getElementById("ratingModal");document.getElementById("exerciseModal");const _=document.querySelector("#ratingModal .modal-content"),we=()=>{E.style.display="block",E.classList.remove("modal-closing")},F=()=>{_.classList.add("dispersing"),E.classList.add("modal-closing"),setTimeout(()=>{E.style.display="none",_.classList.remove("dispersing"),E.classList.remove("modal-closing")},600)},Be=e=>{const t=document.getElementById("currentRating");t.textContent=`${e}.0`};let $=null;function Q(e){$=e,we(),xe()}const xe=()=>{const e=document.getElementById("closeRatingModal"),t=document.getElementById("closeExerciseModal"),n=document.getElementById("ratingForm");e.addEventListener("click",F),t.addEventListener("click",F),n.addEventListener("submit",Se),document.querySelectorAll(".stars input").forEach(s=>{s.addEventListener("change",o=>Be(o.target.value))})},Se=async e=>{e.preventDefault();const t=e.target,n=t.querySelector('input[name="rating"]:checked'),s=t.elements.email.value.trim(),o=t.elements.description.value.trim(),i=parseFloat(n.value||"");if(!i){v("Failed to submit rating.");return}const r={email:s,rate:i,review:o};try{await be($,r),K("Rating submitted successfully!"),$=null,F()}catch{v("Failed to submit rating.")}};let w;const I="favorites";let f=[],p;async function Fe(e){p=await ve(e),f=localStorage.getItem(I)?JSON.parse(localStorage.getItem(I)):[];const n=f.findIndex(o=>o._id===p._id)!==-1,s=he(p,n);w=X.create(s,{closable:!0,onClose:()=>Ie()}),w.show(),$e()}function $e(){document.getElementById("dialogIconClose").addEventListener("click",B),document.addEventListener("keydown",B),document.getElementById("favoritesBtn").addEventListener("click",V),document.getElementById("giveRatingBtn").addEventListener("click",()=>Q(p._id))}function Ie(){document.getElementById("dialogIconClose").removeEventListener("click",B),document.removeEventListener("keydown",B),document.getElementById("favoritesBtn").removeEventListener("click",V),document.getElementById("giveRatingBtn").addEventListener("click",Q)}function V(){const e=f.findIndex(t=>t._id===p._id);e!==-1?f.splice(e,1):f.push(p),localStorage.setItem(I,JSON.stringify(f)),Le(e!==-1)}function B(e){e instanceof PointerEvent&&w.close(),e instanceof KeyboardEvent&&e.key==="Escape"&&!(e.ctrlKey||e.altKey||e.shiftKey)&&w.close()}async function qe({page:e=1,limit:t=12,bodypart:n,muscles:s,equipment:o,keyword:i}){var r,c;try{return(await h.get("exercises",{params:{page:e,limit:t,bodypart:n,muscles:s,equipment:o,keyword:i}})).data}catch(d){throw new Error(((c=(r=d.response)==null?void 0:r.data)==null?void 0:c.message)||d.message)}}function D(e){const t=document.getElementById("exercise-list");if(!Array.isArray(e)){console.error("Expected exercises to be an array, but received:",e);return}t.innerHTML=e.map(s=>`
        <div class="exercise-card">
            <div class="exercise-card-rating">
                <div class="exercise-card-wrapper">
                    <span class="exercise-card-workout">workout</span>
                <p class="exercise-card-ret">${Math.round(s.rating).toFixed(1)}</p>
                <svg class="exercize-icon-star" width="18" height="18">
                    <use href="${m}#icon-star"></use>
                </svg>
                </div>
                <button class="start-btn" data-id="${s._id}">
                    Start
                    <svg class="exercize-icon-arrow" width="16" height="16">
                        <use href="${m}#arrow"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-card-name">
                <svg class="exercize-icon-cross" width="24" height="24">
                    <use href="${m}#running-stick-figure-border"></use>
                </svg>
                <h3 class="exercise-card-name-title">${s.name}</h3>
            </div>
            <div class="exercise-card-info">
                <p class="exercise-card-info-cal">Burned calories: ${s.burnedCalories} / ${s.time} min </p>
                <p class="exercise-card-info-body">Body part: ${s.bodyPart}</p>
                <p class="exercise-card-info-terget">Target: ${s.target}</p>
            </div>
        </div>
    `).join(""),document.querySelectorAll(".start-btn").forEach(s=>{s.addEventListener("click",o=>{const i=o.target.dataset.id;Fe(i)})})}async function ke({page:e,limit:t,bodypart:n,muscles:s,equipment:o,keyword:i}){me();try{const r=await qe({page:e,limit:t,bodypart:n,muscles:s,equipment:o,keyword:i});return r.results.length>0?(D(r.results),{results:r.results,totalPages:r.totalPages}):(D([]),v("No exercises found for the selected category."),{results:[],totalPages:1})}catch(r){return v("Error fetching exercises"),console.error("Error fetching exercises:",r),{results:[],totalPages:1}}finally{fe()}}function Me({currentPage:e,totalPages:t,paginationContainer:n,updateExercises:s,currentBodypart:o,currentMuscles:i,currentEquipment:r,currentKeyword:c}){n.innerHTML="";let d,l;e===1?(d=1,l=Math.min(3,t)):e===t?(d=Math.max(1,t-2),l=t):(d=e-1,l=e+1);for(let a=d;a<=l;a++){const u=document.createElement("button");u.textContent=a,u.classList.add("pagination-btn"),a===e&&u.classList.add("pagination-current"),u.addEventListener("click",()=>{s({currentPage:a,currentBodypart:o,currentMuscles:i,currentEquipment:r,currentKeyword:c,paginationContainer:n,totalPages:t})}),n.appendChild(u)}}async function b({currentPage:e,currentBodypart:t,currentMuscles:n,currentEquipment:s,currentKeyword:o,paginationContainer:i,totalPages:r}){try{const c=await ke({page:e,limit:8,bodypart:t||void 0,muscles:n||void 0,equipment:s||void 0,keyword:o||void 0});c&&c.totalPages&&(r=c.totalPages,Me({currentPage:e,totalPages:r,paginationContainer:i,updateExercises:b,currentBodypart:t,currentMuscles:n,currentEquipment:s,currentKeyword:o}))}catch{v("Error fetching exercises")}}function Ce(e,t,n,s,o,i,r,c){const d=e.target.closest("button");if(!d)return;const l=d.dataset.filter.toLowerCase(),a=d.dataset.name,u=document.querySelector(".filter-wrapper");u&&u.classList.add("hidden");const y=document.querySelector(".exercise-wrapper");y&&y.classList.remove("hidden"),document.querySelector(".main-title");const T=document.getElementById("selected-category"),A=document.getElementById("search-container");return l?A.classList.remove("hidden"):A.classList.add("hidden"),a?T.innerHTML=`
                <span class="category__slash"> / </span>
                <span class="category__selected">${a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}</span>
            `:T.innerHTML="",l==="bodypart"?(n=a,s="",o=""):l==="muscles"?(s=a,n="",o=""):l==="equipment"&&(o=a,n="",s=""),t=1,r({currentPage:t,currentBodypart:n,currentMuscles:s,currentEquipment:o,currentKeyword:i,paginationContainer:c,totalPages:1}),{currentPage:t,currentBodypart:n,currentMuscles:s,currentEquipment:o,currentKeyword:i}}function Re(e,t,n,s,o,i,r,c){e.preventDefault();const d=document.getElementById("search-input");return t=1,i=d.value.trim(),console.log("Filter applied:",{currentBodypart:n,currentMuscles:s,currentEquipment:o,currentKeyword:i}),r({currentPage:t,currentBodypart:n,currentMuscles:s,currentEquipment:o,currentKeyword:i,paginationContainer:c,totalPages:1}),{currentPage:t,currentBodypart:n,currentMuscles:s,currentEquipment:o,currentKeyword:i}}const Te=document.querySelector(".main-nav"),Ae=document.querySelector(".pagination-section"),He=document.querySelector(".subscribe__form");window.addEventListener("resize",()=>{W(),O()});W();O();de();Te.addEventListener("click",le);Ae.addEventListener("click",ue);He.addEventListener("submit",pe);document.addEventListener("DOMContentLoaded",()=>{let e=1,t=1,n="",s="",o="",i="";document.getElementById("selected-category");const r=document.getElementById("search-form"),c=document.getElementById("pagination-container");document.querySelector(".filter-list").addEventListener("click",l=>{const a=Ce(l,e,n,s,o,i,b,c);e=a.currentPage,n=a.currentBodypart,s=a.currentMuscles,o=a.currentEquipment,i=a.currentKeyword}),r.addEventListener("submit",l=>{const a=Re(l,e,n,s,o,i,b,c);e=a.currentPage,n=a.currentBodypart,s=a.currentMuscles,o=a.currentEquipment,i=a.currentKeyword}),document.querySelectorAll(".nav-btn").forEach(l=>{l.addEventListener("click",a=>{const u=document.querySelector(".exercise-wrapper");u&&u.classList.add("hidden");const y=document.querySelector(".filter-wrapper");y&&y.classList.remove("hidden")})}),document.querySelector(".main-nav").addEventListener("click",()=>{const l=document.getElementById("search-container");l&&l.classList.add("hidden");const a=document.getElementById("selected-category");a&&(a.innerHTML="")}),b({currentPage:e,currentBodypart:n,currentMuscles:s,currentEquipment:o,currentKeyword:i,paginationContainer:c,totalPages:t})});
//# sourceMappingURL=commonHelpers2.js.map
