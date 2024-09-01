import"./assets/styles-73a474dd.js";let e=JSON.parse(localStorage.getItem("favorites")),s=document.querySelector(".favorites-container");const r="It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future",o=()=>{document.querySelector(".favorites-container-empty")&&document.querySelector(".favorites-container-empty").remove();const i=e.map(t=>`<li class="favorites-container-list-item">
      <div class="list-item-header">
        <div class="list-item-header-text-wrapper">
          <p class="list-item-header-text">Workout</p>
          <button class="list-item-header-button-delete">
            <svg class="list-item-header-icon" width="16" height="16">
              <use href="../img/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <button class="list-item-header-button-start">
          <p class="list-item-header-button-text">Start</p>
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
    </li>`).join("");s.insertAdjacentHTML("beforeend",`<ul class="favorites-container-list">${i}</ul>`)},a=()=>{document.querySelector(".favorites-container-list")&&document.querySelector(".favorites-container-list").remove(),s.insertAdjacentHTML("beforeend",`<p class="favorites-container-empty">${r}</p>`)};e.length>0?o():a();
//# sourceMappingURL=commonHelpers.js.map
