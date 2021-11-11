import { createSelector } from "reselect";

const selectCategory = (state) => state.category;

export const selectCategorySection = createSelector(
  [selectCategory],
  (category) => category.sections
);
