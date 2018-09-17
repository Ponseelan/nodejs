var app = angular.module('myapp', []);
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
