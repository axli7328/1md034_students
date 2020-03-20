const vm = new Vue({
    el: "#wrapper",
    data: {
        header: "Select Burger",
        menu: "Here you select which wonderful burger you want",
        gluten: "Contains gluten",
        lactose: "Contians lacose",
        burgers: [
  	        {
                name: B1.getName(),
                lactose: B1.getLactoseInfo(),
                gluten: B1.getGlutenInfo(),
                kCal: B1.getKcal(),
                imgPath: B1.getImgPath()
            },
            {
                name: B2.getName(),
                lactose: B2.getLactoseInfo(),
                gluten: B2.getGlutenInfo(),
                kCal: B2.getKcal(),
                imgPath: B2.getImgPath()
            },
            {
                name: B3.getName(),
                lactose: B3.getLactoseInfo(),
                gluten: B3.getGlutenInfo(),
                kCal: B3.getKcal(),
                imgPath: B3.getImgPath()
            },
            {
                name: B4.getName(),
                lactose: B4.getLactoseInfo(),
                gluten: B4.getGlutenInfo(),
                kCal: B4.getKcal(),
                imgPath: B4.getImgPath()
            },
            {            
                name: B5.getName(),
                lactose: B5.getLactoseInfo(),
                gluten: B5.getGlutenInfo(),
                kCal: B5.getKcal(),
                imgPath: B5.getImgPath()
            }
        ]
    },
    methods: {}
});
