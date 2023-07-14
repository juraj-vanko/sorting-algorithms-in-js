const resultEl = document.getElementById("result");
const formElements = document.getElementById("form").elements;
const timeElement = document.getElementById("time");
const sortSentence = async () => {
  let startTime;
  let endTime;
  switch (formElements["algorithm"].value) {
    case "quick":
      console.log("quick");
      startTime = new Date().getMilliseconds();
      makeResult(
        quickSort(makeArrayFromSentence(formElements["sentence"].value))
      );
      endTime = new Date().getMilliseconds();
      showTimeOfSorting(startTime, endTime);
      break;

    case "merge":
      console.log("merge");
      startTime = new Date().getMilliseconds();
      makeResult(
        mergeSort(makeArrayFromSentence(formElements["sentence"].value))
      );
      endTime = new Date().getMilliseconds();
      showTimeOfSorting(startTime, endTime);

      break;

    case "selection":
      console.log("selection");
      startTime = new Date().getMilliseconds();
      makeResult(
        selectionSort(makeArrayFromSentence(formElements["sentence"].value))
      );
      endTime = new Date().getMilliseconds();
      showTimeOfSorting(startTime, endTime);

      break;

    default:
      makeResult(
        quickSort(makeArrayFromSentence(formElements["sentence"].value))
      );
  }
};

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
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

  return [...quickSort(leftArray), array[0], ...quickSort(rightArray)];
};

const selectionSort = (arr) => {
  let steps = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    // Finding smallest number
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j].length < arr[min].length) {
        min = j;
      }
    }

    // Swapping items
    if (min != i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }

    //TODO
    steps.push(arr);
  }
  return arr;
};

const mergeHelper = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
};

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2); // Get middle item
  const left = mergeSort(arr.slice(0, mid)); // Divide arr to 2 arrays and repeat
  const right = mergeSort(arr.slice(mid));
  return mergeHelper(left, right);
}

const makeArrayFromSentence = (sentence) => sentence.split(" ");

const makeResult = (array) => {
  resultEl.innerHTML = array.map((word) => makeHtmlForItem(word, word.length));
};

const showTimeOfSorting = (startDate, endDate) => {
  const time = (endDate - startDate) / 1000;
  timeElement.innerText = `Sorting time is: ${time} seconds.`;
};

const makeHtmlForItem = (word, length) => {
  return `<div class="item"><div class="length">${word}</div><div class="word">${length}</div></div>`;
};
