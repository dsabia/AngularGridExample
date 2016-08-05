angular.module('gridService', [])

	// super simple service
	// each function returns a promise object 
	.factory('GridREST', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/grid');
			},
			create : function() {
				return $http.post('/api/grid/');
			},
			delete : function(id) {
				return $http.delete('/api/grid/' + id);
			}
		}
	}]);