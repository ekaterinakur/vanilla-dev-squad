export function handleCategoryClick(event, currentPage, currentBodypart, currentMuscles, currentEquipment, currentKeyword, updateExercises, paginationContainer) {
    const button = event.target.closest('button');
    if (!button) return;

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

    
    const mainTitle = document.querySelector('.main-title');
    const exercisesTitle = document.getElementById('exercises-title');
    const searchContainer = document.getElementById('search-container');

    if (filter) {
        if (exercisesTitle) {
            exercisesTitle.classList.remove('hidden');
        }
        mainTitle.textContent = 'Exercises /';
        searchContainer.classList.remove('hidden'); 
    } else {
        searchContainer.classList.add('hidden');
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

    const selectedCategoryEl = document.getElementById('selected-category');
    
    if (selectedCategoryEl) {
        selectedCategoryEl.textContent = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        selectedCategoryEl.style.display = 'inline';
    }

    console.log('Filter applied:', { currentBodypart, currentMuscles, currentEquipment, currentKeyword });
    currentPage = 1;
    updateExercises({ 
        currentPage, 
        currentBodypart, 
        currentMuscles, 
        currentEquipment, 
        currentKeyword, 
        paginationContainer, 
        totalPages: 1 
    });

    return { currentPage, currentBodypart, currentMuscles, currentEquipment, currentKeyword };
}


export function handleSearchSubmit(event, currentPage, currentBodypart, currentMuscles, currentEquipment, currentKeyword, updateExercises, paginationContainer) {
    event.preventDefault();
    
    const searchInput = document.getElementById('search-input');
    currentPage = 1;
    currentKeyword = searchInput.value.trim();

    console.log('Filter applied:', { currentBodypart, currentMuscles, currentEquipment, currentKeyword });
    updateExercises({ 
        currentPage, 
        currentBodypart, 
        currentMuscles, 
        currentEquipment, 
        currentKeyword, 
        paginationContainer, 
        totalPages: 1 
    });

    return { currentPage, currentBodypart, currentMuscles, currentEquipment, currentKeyword };
}