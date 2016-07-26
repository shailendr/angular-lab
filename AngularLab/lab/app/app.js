var app = angular.module("teamApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "directives/login.html",
		controller : "loginCtrl"
	})
	.when("/login",{
		templateUrl : "directives/login.html",
		controller : "loginCtrl"
	})
	.when("/team",{
		templateUrl : "views/team/members.html",
		controller : "teamCtrl"
	});
});

app.directive("header", function() {
    return {
      restrict : "E",
      templateUrl : "directives/header.html"
    }
});

app.directive("footer", function() {
    return {
      restrict : "C",
      templateUrl : "directives/footer.html"
    }
});

app.directive("login", function() {
    return {
      restrict : "E",
      templateUrl : "directives/login.html"
    }
});

app.directive("task", function() {
    return {
      restrict : "C",
      template : "<p>task need to be implement...</p>"
    }
});

app.controller('teamAppCtrl',function($scope, $rootScope){
    $rootScope.isLogin = false;
    $rootScope.view= "login";
    $rootScope.activeTeam = "";
});

var members = [
				{
				 "firstName" : "Shailendra",
				 "lastName"  : "Singh",
				 "address"   : "Pune, Maharastra",
				 "avatar"	 : "../../assets/images/male.png",
				 "task"		 : "2"	
				}
			];

app.controller('teamCtrl',function($scope, $rootScope){
    $scope.members = members; 
});

var users = [{email:'admin@admin.com', password:'admin123' }];

app.controller('loginCtrl',function($scope, $rootScope, $location){
	$scope.email="";
	$scope.password="";
    $scope.subLogin = function(){
    	angular.forEach(users, function(value, key) {
		  if(value.email === $scope.email && value.password === $scope.password){
		  	$rootScope.isLogin = true;
		  	$rootScope.activeTeam = "active";
			$location.path('/team');
		  }
		});
    };
    
});