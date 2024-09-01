import{f as r,o as a}from"./assets/filtersHandlers-b5c73039.js";import"./assets/vendor-478dae0d.js";const s=JSON.parse(localStorage.getItem("favorites")),i=document.querySelector(".favorites-container"),n="It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future";r();const c=()=>{document.querySelector(".favorites-container-empty")&&document.querySelector(".favorites-container-empty").remove();const e=s.map(t=>`<li class="favorites-container-list-item">
      <div class="list-item-header">
        <div class="list-item-header-text-wrapper">
          <p class="list-item-header-text">Workout</p>
          <button class="list-item-header-button-delete">
            <svg class="list-item-header-icon" width="16" height="16">
              <use href="../img/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <button class="list-item-header-button-start list-item-header-button-text" data-id="${t._id}">
          Start
          <svg class="list-item-header-button-icon" width="13" height="13">
            <use href="../img/sprite.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div class="list-item-content">
        <div class="item-content-icon-wrapper">
          <svg class="item-content-icon" width="14" height="16">
            <use href="../img/sprite.svg#icon-running-man"></use>
          </svg>
        </div>
        <p class="item-content-text">${t.name}</p>
      </div>
      <div class="list-item-footer">
        <p class="item-footer-title">
          Burned calories:<span class="item-footer-text">${t.burnedCalories}</span>
        </p>
        <p class="item-footer-title">
          Body part:<span class="item-footer-text">${t.bodyPart}</span>
        </p>
        <p class="item-footer-title">
          Target:<span class="item-footer-text">${t.target}</span>
        </p>
      </div>
    </li>`).join("");i.insertAdjacentHTML("beforeend",`<ul class="favorites-container-list">${e}</ul>`)},l=()=>{document.querySelector(".favorites-container-list")&&document.querySelector(".favorites-container-list").remove(),i.insertAdjacentHTML("beforeend",`<p class="favorites-container-empty">${n}</p>`)};s?c():l();const d=document.querySelectorAll(".list-item-header-button-start");d.forEach(e=>{e.addEventListener("click",t=>{const o=t.target.dataset.id;a(o)})});
//# sourceMappingURL=commonHelpers.js.map
