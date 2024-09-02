import { fetchExercisesHandler } from '../eventHandlers/fetchExercisesHandler';
import { showErrorNotification } from '../rendering/common';
import { renderPagination } from '../rendering/renderPagination';

export async function updateExercises({
  currentPage,
  pageLimit,
  currentBodypart,
  currentMuscles,
  currentEquipment,
  currentKeyword,
  paginationContainer,
  totalPages,
}) {
  try {
    const response = await fetchExercisesHandler({
      page: currentPage,
      limit: pageLimit,
      bodypart: currentBodypart || undefined,
      muscles: currentMuscles || undefined,
      equipment: currentEquipment || undefined,
      keyword: currentKeyword || undefined,
    });

    if (response && response.totalPages) {
      totalPages = response.totalPages;
      renderPagination({
        currentPage,
			  pageLimit,
        totalPages,
        paginationContainer,
        updateExercises,
        currentBodypart,
        currentMuscles,
        currentEquipment,
        currentKeyword,
      });
    }
  } catch (error) {
    showErrorNotification('Error fetching exercises');
  }
}
