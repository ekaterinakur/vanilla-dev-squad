import { getExercises } from '../api/getExercises';
import { renderExercises } from '../rendering/renderExercises';
import { showLoader, hideLoader, showErrorNotification } from '../rendering/common';

export async function fetchExercisesHandler({ page, limit, bodypart, muscles, equipment, keyword }) {
    showLoader();

    try {
        const response = await getExercises({ page, limit, bodypart, muscles, equipment, keyword });

        if (response.results.length > 0) {
            renderExercises(response.results);
            return {
                results: response.results,
                totalPages: response.totalPages
            };
        } else {
            renderExercises([]);
            showErrorNotification('No exercises found for the selected category.');
            return {
                results: [],
                totalPages: 1
            };
        }
    } catch (error) {
        showErrorNotification('Error fetching exercises');
        console.error('Error fetching exercises:', error);
        return {
            results: [],
            totalPages: 1
        };
    } finally {
        hideLoader();
    }
}