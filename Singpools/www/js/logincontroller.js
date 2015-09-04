angular.module('starter.controller',[])

.controller('LoginCtrl', loginCtrl);



function loginCtrl(Login, $state, $http){
	var vm = this;
	vm.response;
	vm.signIn = signIn;
	vm.errorResponse = true;

	function signIn(user)
	{
		vm.response = Login.loginToServer(user, $http);

		vm.response.then(loginSuccess, loginFail);
		
		function loginSuccess(result){
			vm.errorResponse = true;
			$state.go("race");
		}

		function loginFail(result){
			vm.errorResponse = false;
		}
	};

	// this.users = Login.getUserList(user);
	// alert(user.username);

	// if(this.users == "ok"){
	// 	$state.go("race");
	//}
};