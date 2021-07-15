import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE} from '../actions/meals';

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
    default:
      state;
  }
  return state;
};

export default mealsReducer;
