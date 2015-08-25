/**
 * Created by Sagar on 25/08/2015.
 */
angular.module('coffeeApp').factory('CoffeeSearchFactory',function($http){
    var coffeeShops=[
        {
            "name":"Cafe Amici",
            "id":1
        },
        {
            "name":"Starbucks",
            "id":2
        },
        {
            "name":"Costa Coffee",
            "id":3
        },{
            "name":"Pret-a-Manger",
            "id":4
        }
    ];
    return{
        'getCoffeeShops':function(){
            return coffeeShops;
        }
    }

});
