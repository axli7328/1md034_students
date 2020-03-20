const vm = new Vue({
    el: "#wrapper",
    data: {
        header: "Select Burger",
        menu: "Here you select which wonderful burger you want",
        gluten: "Contains gluten",
        lactose: "Contians lacose",
        burgers: [
  	        {
                name: food[0].name,
                lactose: food[0].lactose,
                gluten: food[0].gluten,
                kCal: food[0].kCal,
                imgPath: food[0].img
            },
            {
                name: food[1].name,
                lactose: food[1].lactose,
                gluten: food[1].gluten,
                kCal: food[1].kCal,
                imgPath: food[1].img
            },
            {
                name: food[2].name,
                lactose: food[2].lactose,
                gluten: food[2].gluten,
                kCal: food[2].kCal,
                imgPath: food[2].img
            },
            {
                name: food[3].name,
                lactose: food[3].lactose,
                gluten: food[3].gluten,
                kCal: food[3].kCal,
                imgPath: food[3].img
            },
            {
                name: food[4].name,
                lactose: food[4].lactose,
                gluten: food[4].gluten,
                kCal: food[4].kCal,
                imgPath: food[4].img
            },
        ]
    },
    methods: {}
});
