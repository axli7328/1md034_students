// let myButton = document.getElementById("submitButton");
// let allValues = document.querySelector("form");
// myButton.onclick = function () {
//   let array = new Array(allValues.length);
//   for(let i = 0; i < allValues.length;i++){
//     array[i] = allValues[i].value;
//   }
//   console.log(array);
//   return array;
// };


// function menuItem (name, ingredients, kCal, gluten, lactose, imgPath) {
//     this.name = name;
//     this.ingredients = ingredients;
//     this.calories = kCal;
//     this.gluten = gluten;
//     this.lactose = lactose;
//     this.imgPath = imgPath;
//     this.info = function() {
//         return this.name + ' ' + this.calories + this.gluten;
//     };
// }

// let B1 = new menuItem (
//     'The Burger Dream',
//     'Contains meat, not for vegans',
//     9000,
//     true,
//     true,
//     'https://www.peoplemagazine.co.za/app/uploads/2018/08/burger-patty.jpg',
// )

// let B2 = new menuItem (
//     'The Vegan Bune',
//     'Contains beans by all means',
//     100,
//     true,
//     true,
//     'https://nutritionrefined.com/wp-content/uploads/2017/01/veggie-burger-vegan-gluten-free-healthy-grillable.jpg'
// )

// let B3 = new menuItem (
//     'Still better than Donken Style',
//     'Contains an unhealthy amount of mold',
//     200,
//     true,
//     true,
//     'https://ima.xgoo.jp/column/img2/oosumi/20150409_burger_end_010.jpg'
// )

// let B4 = new menuItem (
//     'Chicken for chickens',
//     'Contains a bird',
//     15,
//     true,
//     true,
//     'https://www.kitchensanctuary.com/wp-content/uploads/2017/08/Crispy-Chicken-Burger-with-Honey-Mustard-Coleslaw-recipe-tall-FS.webp'
// )

// let B5 = new menuItem (
//     'Halloumi Heaven',
//     'Contains cheese',
//     500,
//     true,
//     false,
//     'https://www.sainsburysmagazine.co.uk/uploads/media/675x882/00/5870-Peri-peri-halloumi-burger-with-sweetcorn-salsa.jpg?v=1-0'
// )

// menuItem.prototype.getName = function getName() {
//   return this.name;
// };
// menuItem.prototype.getLactoseInfo = function getLactoseInfo() {
//   	if (this.lactose == true) {
//   		return ", Contains lactose";	  
//     }
// };
// menuItem.prototype.getGlutenInfo = function getGlutenInfo() {
// 		if (this.gluten == true) {
//   		return ", Contains gluten";	  
//     }
// };
// menuItem.prototype.getKcal = function getKcal() {
//     return this.calories;
// };
// menuItem.prototype.getImgPath = function getImgPath() {
//     return this.imgPath;
// };

// let id = document.getElementById("myID");

// let p_1 = document.createElement("p");
// let p_2 = document.createElement("p");
// let p_3 = document.createElement("p");
// let p_4 = document.createElement("p");
// let p_5 = document.createElement("p");

// let B1 = document.createTextNode(B1.info());
// let B2 = document.createTextNode(B2.info());
// let B3 = document.createTextNode(B3.info());
// let B4 = document.createTextNode(B4.info());
// let B5 = document.createTextNode(B5.info());

// p_1.appendChild(B1);
// p_2.appendChild(B2);
// p_3.appendChild(B3);
// p_4.appendChild(B4);
// p_5.appendChild(B5);

// id.appendChild(p_1);
// id.appendChild(p_2);
// id.appendChild(p_3);
// id.appendChild(p_4);
// id.appendChild(p_5);


// console.log(B1.info() + B2.info() + B3.info() + B4.info() + B5.info()); 










// function menuItem (name, ingredients, kCal, allergy, imagePath) {
//     this.name = name;
//     this.ingredients = ingredients;
//     this.calories = kCal;
//     this.allergy = allergy;
//     this.imagePath = imagePath;
//     this.info = function() {
//         return this.name + ' ' + this.calories;
//     };
// }

// let B1 = new menuItem (
//     'The Burger Dream',
//     'Contains meat, not for vegans',
//     'Calories, it\'s over 9000!!!',
//     'Contains gluten and lactose, but it\'s worth it',
//     'https://www.peoplemagazine.co.za/app/uploads/2018/08/burger-patty.jpg',
// )

// let B2 = new menuItem (
//     'The Vegan Bune',
//     'Contains beans by all means',
//     'Healthy amount of calories due to vegan',
//     'Contains no gluten, nolactose, no nothing',
//     'https://nutritionrefined.com/wp-content/uploads/2017/01/veggie-burger-vegan-gluten-free-healthy-grillable.jpg'
// )

// let B3 = new menuItem (
//     'Still better than Donken Style',
//     'Contains an unhealthy amount of mold',
//     'Does calories matter when eating mold? Didn\'t think so',
//     'Contains less gluten than before',
//     'https://ima.xgoo.jp/column/img2/oosumi/20150409_burger_end_010.jpg'
// )

// let B4 = new menuItem (
//     'Chicken for chickens',
//     'Contains a bird',
//     '15',
//     'Contains gluten and lactose',
//     'https://www.kitchensanctuary.com/wp-content/uploads/2017/08/Crispy-Chicken-Burger-with-Honey-Mustard-Coleslaw-recipe-tall-FS.webp'
// )

// let B5 = new menuItem (
//     'Halloumi Heaven',
//     'Contains cheese',
//     '500',
//     'Contains gluten and lactose',
//     'https://www.sainsburysmagazine.co.uk/uploads/media/675x882/00/5870-Peri-peri-halloumi-burger-with-sweetcorn-salsa.jpg?v=1-0'
// )
