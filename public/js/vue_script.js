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
        checkedBurger: [],
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
    created: function() {
        /* When the page is loaded, get the current orders stored on the server.
         * (the server's code is in app.js) */
        socket.on(
            "initialize",
            function(data) {
                this.orders = data.orders;
            }.bind(this)
        );

        /* Whenever an addOrder is emitted by a client (every open map.html is
         * a client), the server responds with a currentQueue message (this is
         * defined in app.js). The message's data payload is the entire updated
         * order object. Here we define what the client should do with it.
         * Spoiler: We replace the current local order object with the new one. */
        socket.on(
            "currentQueue",
            function(data) {
                this.orders = data.orders;
            }.bind(this)
        );
    },
    methods: {
        submit: function() {
            console.log("hej");
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
            console.log(this.checkedBurger);
            return this.checkedBurger;
        },
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };
            socket.emit("addOrder", {
                orderId: this.getNext(),
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y
                },
                orderItems: ["Beans", "Curry"]
            });
        }
    }
});
