var app = angular.module("teamApp", ["ngRoute"]);
var members = [
				{
				 "firstName" : "Shailendra",
				 "lastName"  : "Singh",
				 "email"     : "Shailendra.singh@email.com",
				 "address"   : "Hinjewadi",
				 "city"		 : "Pune",
				 "state"     : "Maharastra",
				 "avatar"	 : "../../assets/images/male.png",
				 "task"		 : "2"	
				}
			];

var users = [{email:'admin@admin.com', password:'admin123' }];

/*
	routes
*/
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
	})
	.when("/member",{
		templateUrl : "views/member/new.html",
		controller : "memberCtrl"
	})
	;
});

/*
	directive
*/
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

/*
	Controllers
*/
app.controller('teamAppCtrl',function($scope, $rootScope){
    $rootScope.isLogin = false;
    $rootScope.view= "login";
    $rootScope.activeTeam = "";
});

app.controller('memberCtrl',function($scope, $rootScope, $location){
    $scope.newUser = {
    	    "firstName" : "dev",
		    "lastName" : "singh",
		    "email" : "dev@email.com",
		    "address" : "wakad",
		    "city" : "Pune",
		    "state" : "Maharastra",
	    	"avatar"	 : "../../assets/images/male.png",
			"task"		 : "0"	
    };

	$scope.newMember = function(){
		members.push($scope.newUser);
		$rootScope.isLogin = true;
    	$rootScope.activeTeam = "active";
		$location.path('/team');
    };

});

app.controller('teamCtrl',function($scope, $rootScope, $location){
    var _this = this;
    $scope.addMember = function(){
    	$rootScope.activeTeam = "active";
    	$location.path('/member');
    };
    $scope.members = members; 
});

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