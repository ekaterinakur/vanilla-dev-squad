import{r as d,o as l,F as u,t as c,f}from"./assets/filtersHandlers-0b1dfcff.js";import"./assets/vendor-c65b4e60.js";const s=document.querySelector(".favorites-container-list"),v=o=>{const r=o.map(t=>d(t,!0)).join("");s.innerHTML=r},p=()=>{s.innerHTML=`
		<p class="favorites-container-empty">
			It appears that you haven't added any exercises to your favorites yet. 
			To get started, you can add exercises that you like to your favorites for easier access in the future.
		</p>
	`};let e=[];function i(){e=JSON.parse(localStorage.getItem("favorites")),(e==null?void 0:e.length)>0?v(e):p(),s.querySelectorAll(".start-btn").forEach(t=>{t.addEventListener("click",a=>{const n=a.target.dataset.id;l(n,i)})}),s.querySelectorAll("#deleteFavorite").forEach(t=>{t.addEventListener("click",a=>{const n=a.currentTarget.dataset.id;y(n)})})}function y(o){const r=e.findIndex(t=>t._id===o);r!==-1&&e.splice(r,1),localStorage.setItem(u,JSON.stringify(e)),i()}window.addEventListener("resize",()=>{c()});c();f();i();
//# sourceMappingURL=commonHelpers.js.map
