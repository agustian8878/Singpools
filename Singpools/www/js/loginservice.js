angular.module('starter.service',[])

.factory('Login', loginFactory);


function loginFactory($http, $q){

	
	return{
		loginToServer: function(user, $http){ 
			var response = $http(
					{
						method: "POST",
						url: "http://10.209.8.198:9000/login",
						headers: { 'Content-Type': 'xapplication/-www-form-urlencoded' },
						params: user
					}
			);

			return response;

			// $http.get('http://10.209.8.198:9000/userlist').success(getResponse);
			
			
			// function getResponse(data){
			// 	if(data != null){
			// 		response = data;
			// 	}
			// }
			// return response;
			
		}
	};
};
