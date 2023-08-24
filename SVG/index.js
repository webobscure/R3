function addToCompare() {
  console.log("Click");
  var link = document.location.href;
  var diagonale = document.querySelector("#compare__diagonale");
  var weight = document.querySelector("#compare__weight");
  var color = document.querySelector("#compare__color");
  var category = document.querySelector("#compare__category");
  var tvNumber = document.querySelector("#compare__tv");
  var subtitle = document.querySelector(".product-data__title");
  var price = document.querySelector("#compare__price");
  var image = document.querySelector(".compare__image");
  var arr = [];
  var compare = {
    subtitle: subtitle.textContent,
    category: category.textContent,
    price: price.textContent,
    diagonal: diagonale.textContent,
    TV: tvNumber.textContent,
    color: color.textContent,
    weight: weight.textContent,
    image: image.src,
    link,
  };

  if (localStorage.getItem("compareArray")) {
    var resultArray = JSON.parse(localStorage.getItem("compareArray"));
    arr = resultArray;
    console.log(typeof resultArray);
    console.log(resultArray);
    if (resultArray.length === 5) {
      alert("You are out of limit");
      arr.length = 5;
    }
    console.log(typeof arr);

    arr.push(compare);
    localStorage.setItem("compareArray", JSON.stringify(arr));
  } else {
    arr.push(compare);
    localStorage.setItem("compareArray", JSON.stringify(arr));
  }
  console.log(compare);
}
