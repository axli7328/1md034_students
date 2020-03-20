"use strict";
const socket = io();

const vm = new Vue({
    el: "main",
    data: {
        header: "Select Burger",
        menu: "Here you select which wonderful burger you want",
        gluten: "Contains gluten",
        lactose: "Contians lacose",
        currentBurger: null,
        submitted: false,
        fullName: "",
        email: "",
        payment: "",
        value: "",
        nextInt: 0,
        checkedBurger: [],
        order: { orderId: "T", details: { x:0, y:0 }, orderItems: [], customerInfo: [] },
        orders: {},
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
            }
        ]
    },
    methods: {
        getNext: function() {
            this.nextInt = this.nextInt + 1;
            return this.nextInt;
        },
        addOrder: function(event) {
            vm.submitted = true;
            this.checkedBurger = [];

            let checkedBoxes = document.getElementsByName("selectBurger");

            for (let i = 0, j = 0; i < checkedBoxes.length; i++) {
                if (checkedBoxes[i].checked == true) {
                    this.checkedBurger[j] = checkedBoxes[i].value;
                    this.currentBurger = this.checkedBurger[j];
                    j++;
                }
            }
            
            this.order.orderItems = this.checkedBurger;
            this.order.customerInfo = [this.fullName, this.payment, this.value];
            
            socket.emit("addOrder", {
                orderId: this.getNext(),
                details: {
                    x: this.order.details.x,
                    y: this.order.details.y
                },
                orderItems: this.order.orderItems,
                customerInfo: this.order.customerInfo
            });
        },
        displayOrder: function(event) {
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };

            (this.order.details.x = event.clientX - 10 - offset.x),
            (this.order.details.y = event.clientY - 10 - offset.y);
        }       
    }   
});
