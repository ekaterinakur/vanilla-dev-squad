export function handleCategoryClick({
  event,
  pageLimit,
  currentPage,
  currentBodypart,
  currentMuscles,
  currentEquipment,
  currentKeyword,
  updateExercises,
  paginationContainer
}) {
  const button = event.target.closest('li');
  if (!button) return {};

  const filter = button.dataset.filter.toLowerCase();
  const name = button.dataset.name;

  const filterWrapper = document.querySelector('.filter-wrapper');
  if (filterWrapper) {
    filterWrapper.classList.add('hidden');
  }

  const exerciseWrapper = document.querySelector('.exercise-wrapper');
  if (exerciseWrapper) {
    exerciseWrapper.classList.remove('hidden');
  }

  const selectedCategoryEl = document.getElementById('selected-category');
  const searchContainer = document.getElementById('search-container');

  if (filter) {
    searchContainer.classList.remove('hidden');
  } else {
    searchContainer.classList.add('hidden');
  }

  if (name) {
    selectedCategoryEl.innerHTML = `
        <span class="category__slash"> / </span>
        <span class="category__selected">${
          name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        }</span>
    `;
  } else {
    selectedCategoryEl.innerHTML = '';
  }

  if (filter === 'bodypart') {
    currentBodypart = name;
    currentMuscles = '';
    currentEquipment = '';
  } else if (filter === 'muscles') {
    currentMuscles = name;
    currentBodypart = '';
    currentEquipment = '';
  } else if (filter === 'equipment') {
    currentEquipment = name;
    currentBodypart = '';
    currentMuscles = '';
  }

  currentPage = 1;
  updateExercises({
    currentPage,
    pageLimit,
    currentBodypart,
    currentMuscles,
    currentEquipment,
    currentKeyword,
    paginationContainer,
    totalPages: 1,
  });

  return {
    currentPage,
    currentBodypart,
    currentMuscles,
    currentEquipment,
    currentKeyword,
  };
}

export function handleSearchSubmit({
  event,
  currentPage,
  pageLimit,
  currentBodypart,
  currentMuscles,
  currentEquipment,
  currentKeyword,
  updateExercises,
  paginationContainer
}) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  currentPage = 1;
  currentKeyword = searchInput.value.trim();

  updateExercises({
    currentPage,
    pageLimit,
    currentBodypart,
    currentMuscles,
    currentEquipment,
    currentKeyword,
    paginationContainer,
    totalPages: 1,
  });

  return {
    currentPage,
    currentBodypart,
    currentMuscles,
    currentEquipment,
    currentKeyword,
  };
}
