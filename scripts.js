const resultEl = document.getElementById("result");

const quickSort = (array) => {
    if (array.length <= 1) {
      return arr;
    }  

    let pivot = array[0].length;
    let leftArray = [];
    let rightArray = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i].length < pivot) {
        leftArray.push(array[i]);
      } else {
        rightArray.push(array[i]);
      }
    }

  
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  };

  const makeSentence = (array) => {};