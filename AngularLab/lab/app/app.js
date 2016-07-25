var app = angular.module("teamApp", []);

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
    $rootScope.users = [{email:'admin@admin.com', password:'admin123' }];
    $rootScope.activeTeam = "";
});



app.controller('loginCtrl',function($scope, $rootScope){
	$scope.email="";
	$scope.password="";
    $scope.subLogin = function(){
    	var users = $rootScope.users;
    	angular.forEach(users, function(value, key) {
		  if(value.email === $scope.email && value.password === $scope.password){
		  	$rootScope.isLogin = true;
		  	$rootScope.activeTeam = "active";
		  }
		});
    	// alert($scope.email + " " + $scope.password);
    };
    
});