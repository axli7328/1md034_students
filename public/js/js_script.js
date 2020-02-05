function menuItem (name, ingredients, kCal, allergy, imagePath) {
    this.name = name;
    this.ingredients = ingredients;
    this.calories = kCal;
    this.allergy = allergy;
    this.imagePath = imagePath;
    this.info = function() {
        return this.name + ' ' + this.calories;
    };
}


let B1 = new menuItem (
    'The Burger Dream',
    'Contains meat, not for vegans',
    'Calories, it\'s over 9000!!!',
    'Contains gluten and lactose, but it\'s worth it',
    'https://www.peoplemagazine.co.za/app/uploads/2018/08/burger-patty.jpg',
)

let B2 = new menuItem (
    'The Vegan Bune',
    'Contains beans by all means',
    'Healthy amount of calories due to vegan',
    'Contains no gluten, nolactose, no nothing',
    'https://nutritionrefined.com/wp-content/uploads/2017/01/veggie-burger-vegan-gluten-free-healthy-grillable.jpg'
)

let B3 = new menuItem (
    'Still better than Donken Style',
    'Contains an unhealthy amount of mold',
    'Does calories matter when eating mold? Didn\'t think so',
    'Contains less gluten than before',
    'https://ima.xgoo.jp/column/img2/oosumi/20150409_burger_end_010.jpg'
)

let B4 = new menuItem (
    'Chicken for chickens',
    'Contains a bird',
    '15',
    'Contains gluten and lactose',
    'https://www.kitchensanctuary.com/wp-content/uploads/2017/08/Crispy-Chicken-Burger-with-Honey-Mustard-Coleslaw-recipe-tall-FS.webp'
)

let B5 = new menuItem (
    'Halloumi Heaven',
    'Contains cheese',
    '500',
    'Contains gluten and lactose',
    'https://www.sainsburysmagazine.co.uk/uploads/media/675x882/00/5870-Peri-peri-halloumi-burger-with-sweetcorn-salsa.jpg?v=1-0'
)

console.log(B1.info() + B2.info() + B3.info() + B4.info() + B5.info()); 
