var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller : 'HomeController'
        })
        .when ('/blog',{
            templateUrl : 'pages/blog.html',
            controller : 'BlogController'
        })
        .when ('/about',{
            templateUrl : 'pages/about.html',
            controller : 'AboutController'
        })
        .otherwise({redirecTo: '/'});

});

app.controller('HomeContrller', function($scope){
    $scope.message = 'Đây là nội dung được gửi từ HomeController';
});
app.controller('BlogContrller', function($scope){
    $scope.message = 'Đây là nội dung được gửi từ BlogContrller';
});
app.controller('AboutContrller', function($scope){
    $scope.message = 'Đây là nội dung được gửi từ AboutContrller';
});
