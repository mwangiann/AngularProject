describe('Index', function(){

	var state, scope, templateCache;
	beforeEach(module('my-app'));

	beforeEach(function(){
		inject(function($state, $rootScope, $templateCache){
			state = $state;
			scope = $rootScope.$new();
			$templateCache.put('static/views/home.html', '');
		});
	});

	it('should load home page', function () {
		state.go('/');
		scope.$apply();
		state.current.controller(scope);

		expect(scope.items.length).toBe(4);
		expect(state.current.name).toBe('/');
	});
	
});