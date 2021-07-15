import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingIndex > -1) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        const updatedFavMeals = [...state.favoriteMeals, meal];
        return {...state, favoriteMeals: updatedFavMeals};
      }

    case SET_FILTERS:
      const apliedFilters = action.filters;
      const updatedfilteredMeals = state.meals.filter(meal => {
        if (apliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (apliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (apliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (apliedFilters.vegatarian && !meal.isVegatarian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedfilteredMeals};

    default:
      state;
  }
  return state;
};

export default mealsReducer;
