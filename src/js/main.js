import './up-btn.js';

import { toggleHeaderEventListeners } from './eventHandlers/headerHandlers.js';
import {
  changeFilter,
  filterSizeDepends,
  filterQuoteLS,
  handleFiltersPagination,
} from './eventHandlers/filtersHandlers.js';
import { handleSubmitSubscription } from './eventHandlers/handleSubscription.js';
import { openExerciseDialog } from './eventHandlers/exerciseHandlers.js';
import { updateExercises } from './eventHandlers/updateExercisesHandler.js';
import { handleCategoryClick, handleSearchSubmit } from './eventHandlers/uiEventHandlers';

const navFilter = document.querySelector('.main-nav');
const filterPagination = document.querySelector('.pagination-section');
const subscriptionForm = document.querySelector('.subscribe__form');

window.addEventListener('resize', () => {
  // Header Listening for window resize events - hide burger menu on larger screens
  toggleHeaderEventListeners();
  filterSizeDepends();
});

// Header Setting up event listeners
toggleHeaderEventListeners();

// Filters
filterSizeDepends();
filterQuoteLS();

navFilter.addEventListener('click', changeFilter);
filterPagination.addEventListener('click', handleFiltersPagination);

// Subscription Form
subscriptionForm.addEventListener('submit', handleSubmitSubscription);


document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    let totalPages = 1;
    let currentBodypart = '';
    let currentMuscles = '';
    let currentEquipment = '';
    let currentKeyword = '';

    const selectedCategoryEl = document.getElementById('selected-category');
    const searchForm = document.getElementById('search-form');
    const paginationContainer = document.getElementById('pagination-container');
    const filterList = document.querySelector('.filter-list');

    filterList.addEventListener('click', (event) => {
        const result = handleCategoryClick(event, currentPage, currentBodypart, currentMuscles, currentEquipment, currentKeyword, updateExercises, paginationContainer);
        currentPage = result.currentPage;
        currentBodypart = result.currentBodypart;
        currentMuscles = result.currentMuscles;
        currentEquipment = result.currentEquipment;
        currentKeyword = result.currentKeyword;
    });

    searchForm.addEventListener('submit', (event) => {
        const result = handleSearchSubmit(event, currentPage, currentBodypart, currentMuscles, currentEquipment, currentKeyword, updateExercises, paginationContainer);
        currentPage = result.currentPage;
        currentBodypart = result.currentBodypart;
        currentMuscles = result.currentMuscles;
        currentEquipment = result.currentEquipment;
        currentKeyword = result.currentKeyword;
    });
  
  document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const exerciseWrapper = document.querySelector('.exercise-wrapper');
            if (exerciseWrapper) {
                exerciseWrapper.classList.add('hidden');
            }

            const filterWrapper = document.querySelector('.filter-wrapper');
            if (filterWrapper) {
                filterWrapper.classList.remove('hidden');
            }

            console.log(`Filter button clicked: ${event.target.dataset.filter}`);
        });
  });
    
    document.querySelector('.main-nav').addEventListener('click', () => {
    // Скрываем строку поиска
    const searchContainer = document.getElementById('search-container');
    if (searchContainer) {
        searchContainer.classList.add('hidden');
    }

    // Скрываем заголовок
    const exercisesTitle = document.getElementById('exercises-title');
    if (exercisesTitle) {
        exercisesTitle.classList.add('hidden');
    }
});

    updateExercises({ 
        currentPage, 
        currentBodypart, 
        currentMuscles, 
        currentEquipment, 
        currentKeyword, 
        paginationContainer, 
        totalPages 
    });
});