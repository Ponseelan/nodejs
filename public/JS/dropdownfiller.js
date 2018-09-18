/*var app = angular.module('myapp', []);
app.controller("RegisterController",function($scope)
    {
        $.ajax(
{
    url:"/getdata",
    dataType:"JSON",
    type:"GET",
    success:function(data)
    {
        $scope.collections=data;
        $scope.selecteditem=data[0];
    }
});
    });
*/
var dashboard=angular.module('Dashboard',['ngRoute']);
dashboard.controller('mainController',function($scope)
{
$scope.message="message";
})
dashboard.config(function($routeProvider)
{
$routeProvider.when('/about',
{
      templateUrl : '/about',
                controller  : 'mainController'
})
})
