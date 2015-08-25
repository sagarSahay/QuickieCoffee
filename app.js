/**
 * Created by Sagar on 25/08/2015.
 */

var app = angular.module('coffeeApp',[]);

app.controller('coffee.ctrl',function(CoffeeSearchFactory){
         var vm=this;
    vm.coffeeShops=CoffeeSearchFactory.getCoffeeShops();

});
