import { updateExercises } from './updateExercisesHandler.js';
import { handleCategoryClick, handleSearchSubmit } from './uiEventHandlers';

export let listTypeVisible = 'filters';

let currentPage = 1;
let pageLimit = 10;
let totalPages = 1;
let currentBodypart = '';
let currentMuscles = '';
let currentEquipment = '';
let currentKeyword = '';

export function initExercises() {
  const searchForm = document.getElementById('search-form');
  const paginationContainer = document.getElementById('pagination-container');
  const filterList = document.querySelector('.filter-list');

  pageLimit = window.innerWidth > 767 ? 10 : 8;

  filterList.addEventListener('click', event => {
    listTypeVisible = 'exercises';

    const result = handleCategoryClick({
      event,
      currentPage,
      pageLimit,
      currentBodypart,
      currentMuscles,
      currentEquipment,
      currentKeyword,
      updateExercises,
      paginationContainer,
    });
    currentPage = result.currentPage;
    currentBodypart = result.currentBodypart;
    currentMuscles = result.currentMuscles;
    currentEquipment = result.currentEquipment;
    currentKeyword = result.currentKeyword;
  });

  searchForm.addEventListener('submit', event => {
    const result = handleSearchSubmit({
      event,
      currentPage,
      pageLimit,
      currentBodypart,
      currentMuscles,
      currentEquipment,
      currentKeyword,
      updateExercises,
      paginationContainer,
    });
    currentPage = result.currentPage;
    currentBodypart = result.currentBodypart;
    currentMuscles = result.currentMuscles;
    currentEquipment = result.currentEquipment;
    currentKeyword = result.currentKeyword;
  });

  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', event => {
      listTypeVisible = 'filters';

      const exerciseWrapper = document.querySelector('.exercise-wrapper');
      if (exerciseWrapper) {
        exerciseWrapper.classList.add('hidden');
      }

      const filterWrapper = document.querySelector('.filter-wrapper');
      if (filterWrapper) {
        filterWrapper.classList.remove('hidden');
      }

      // Скрываем строку поиска
      const searchContainer = document.getElementById('search-container');
      if (searchContainer) {
        searchContainer.classList.add('hidden');
      }

      // Скрываем заголовок
      const exercisesTitle = document.getElementById('selected-category');
      if (exercisesTitle) {
        exercisesTitle.innerHTML = '';
      }
    });
  });
}

export async function exercisesSizeDepends() {
  if (listTypeVisible === 'filters') return;

  const windowWidth = window.innerWidth;
  let limit = null;

  if (windowWidth > 767) {
    limit = 10;
  } else {
    limit = 8;
  }

  if (limit !== pageLimit) {
		const paginationContainer = document.getElementById('pagination-container');
    currentPage = 1;
    pageLimit = limit;

    updateExercises({
      currentPage,
      pageLimit,
      currentBodypart,
      currentMuscles,
      currentEquipment,
      currentKeyword,
      paginationContainer,
      totalPages,
    });
  }
}
