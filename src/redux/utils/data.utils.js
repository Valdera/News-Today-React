// A function to map the data from the API to make it easier for data selecting
export const mapData = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    for (let j = 0; j < arr[i].templates.length; j++) {
      if (
        arr[i].templates[j].title &&
        arr[i].templates[j].sections &&
        arr[i].templates[j].sections[0].articles.length > 0
      ) {
        tempArr.push(arr[i].templates[j]);
      }
    }
    arr[i].templates = tempArr;
    obj[arr[i].name] = arr[i];
  }

  return obj;
};

// A function to get the 5 article from the selectedNews for the header
export const getHeaderArticle = (obj) => {
  let arr = [];
  for (let i = 0; i < obj.templates.length; i++) {
    arr.push(obj.templates[i].sections[0].articles[0]);
  }
  return arr.slice(0, 5);
};
