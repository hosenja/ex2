var app = angular.module("hosen",['ngRoute']);

app.controller('submitCtr',function($scope){
    
    $scope.ok=function(){
        
      alert("thanks you for sending");  
        
    };
    
    
});

app.config(function($routeProvider){
$routeProvider
.when('/', {
    templateUrl: "home.html"
})
.when('/about', {
    templateUrl: "about.html"
})
.when('/contact', {
    templateUrl: "contact.html"
})
.otherwise({
    redirectTo : "/"
});
});