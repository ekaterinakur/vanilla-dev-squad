import { renderExercise } from "./renderExercises";

export const container = document.querySelector('.favorites-container-list');

export const renderFavoritesList = (favorites) => {
  const markup = favorites
    .map((exercise) => renderExercise(exercise, true))
    .join('');

  container.innerHTML = markup;
};

export const renderFavoritesEmpty = () => {
  container.innerHTML = `
		<p class="favorites-container-empty">
			It appears that you haven't added any exercises to your favorites yet. 
			To get started, you can add exercises that you like to your favorites for easier access in the future.
		</p>
	`;
};
