var recipes = new Object({ chia: '1 cup', hemp: '2 cups', zinc: '3 cups' });

function updateObjectWithKeyAndValue(recipes, kale, chopped) {
  return Object.assign({}, recipes, { [kale]: chopped })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, butter, stick) {
    recipes[butter] = stick;
    return recipes
}

function deleteFromObjectByKey(recipes, chia) {
  delete recipes[chia];
  return recipes
}

function deleteFromObjectByKey(recipes, chia) {
  return recipes.slice(1)
}

//////spread or objective.assign, modify the clone instead of the original