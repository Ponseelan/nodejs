/*$(document).ready(function(){
		var app = angular.module('main', []);
app.controller('DemoCtrl', function ($scope) {

    $scope.chooseCountries=[
        {countryId : 1, name : "France - Mainland", desc: "some description" },
        {countryId : 2, name : "Gibraltar", desc: "some description"},
        {countryId : 3, name : "Malta", desc: "some description"}
    ];

    $scope.selectedCountry = $scope.chooseCountries[0].countryId;
});
$.ajax(
{
	url:"/home",
	dataType:"JSON",
	type:"GET",
	success:function(data)
	{
		console.log(data);
	}
})

})

		/*<script type="text/javascript">
			var app = angular.module('main', []);
app.controller('DemoCtrl', function ($scope) {

    $scope.chooseCountries=[
        {countryId : 1, name : "France - Mainland", desc: "some description" },
        {countryId : 2, name : "Gibraltar", desc: "some description"},
        {countryId : 3, name : "Malta", desc: "some description"}
    ];

    $scope.selectedCountry = $scope.chooseCountries[0].countryId;
});
		</script>*/