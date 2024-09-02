export function renderPagination({
  currentPage,
  pageLimit,
  totalPages,
  paginationContainer,
  updateExercises,
  currentBodypart,
  currentMuscles,
  currentEquipment,
  currentKeyword,
}) {
  paginationContainer.innerHTML = '';

  // Определяем диапазон страниц для отображения
  let startPage, endPage;

  if (currentPage === 1) {
    startPage = 1;
    endPage = Math.min(3, totalPages);
  } else if (currentPage === totalPages) {
    startPage = Math.max(1, totalPages - 2);
    endPage = totalPages;
  } else {
    startPage = currentPage - 1;
    endPage = currentPage + 1;
  }

  // Создаем кнопки для пагинации
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.classList.add('pagination-btn');

    if (i === currentPage) {
      pageButton.classList.add('pagination-current'); // Выделяем текущую страницу
    }

    pageButton.addEventListener('click', () => {
      updateExercises({
        currentPage: i,
			  pageLimit,
        currentBodypart,
        currentMuscles,
        currentEquipment,
        currentKeyword,
        paginationContainer,
        totalPages,
      });
      const filterWrapper = document.querySelector('.main-title');
      window.scrollTo({
        top: filterWrapper.offsetTop,
        behavior: 'smooth',
      });
    });

    paginationContainer.appendChild(pageButton);
  }
}
