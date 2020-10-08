
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let switcher = false
    let result = [];
    for (let x = 0; x < matrix.length; x++){
        if (!switcher){
      for(let y = 0; y < matrix[x].length; y++){
        result.push(matrix[x][y]);
      }
      switcher = true;
    }else if (switcher){
        for(let y = matrix[x].length -1; y >= 0 ; y--){
            result.push(matrix[x][y]);
          }
          switcher = false;
    }
    }
    return result;
}
