export class CommonHelperClass {
  addRecipeToFav(recipeData: any) {
    let savedRecipeArray: any;
    if (localStorage.getItem('savedRecipe')) {
      savedRecipeArray = JSON.parse(localStorage.getItem('savedRecipe') || '');
    }
    if (savedRecipeArray) {
      let index = savedRecipeArray.findIndex(
        (item: any) => item.id == recipeData?.id
      );
      if (index == -1) {
        savedRecipeArray.push(recipeData);
      }
    } else {
      savedRecipeArray = [];
      savedRecipeArray.push(recipeData);
    }
    localStorage.setItem('savedRecipe', JSON.stringify(savedRecipeArray));
  }
  removeRecipeFromFav(recipeData: any) {
    let savedRecipeData: any;
    if (localStorage.getItem('savedRecipe')) {
      savedRecipeData = JSON.parse(localStorage.getItem('savedRecipe') || '');
    }
    if (savedRecipeData) {
      let index = savedRecipeData.findIndex(
        (item: any) => item.id == recipeData?.id
      );
      if (index > -1) {
        savedRecipeData.splice(index, 1);
      }
    }
    localStorage.setItem('savedRecipe', JSON.stringify(savedRecipeData));
  }
  checkIfRecipeIsSaved(id: number) {
    let savedRecipeArray: any;
    let index = -1
    if (localStorage.getItem('savedRecipe')) {
      savedRecipeArray = JSON.parse(localStorage.getItem('savedRecipe') || '');
    }
    if (savedRecipeArray) {
       index = savedRecipeArray.findIndex(
        (item: any) => item.id == id
      );
    }
    return index != -1
  }
}
