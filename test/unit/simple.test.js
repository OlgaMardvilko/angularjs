'use strict'; 

describe('Weather Controller', function() {
    var suite = null;

    beforeEach(module('weather'));
    //var $controller, $rootScope;
    beforeEach(inject(function($injector) {
        suite = {};
        suite.rootScope = $injector.get('$rootScope');
        suite.scope = suite.rootScope.$new();

        suite.ctrl = $injector.get('$controller')('ctrl', {
            $scope: suite.scope
            // $rootScope: suite.rootScope
        });
    }));

    afterEach(function() {
        suite.scope.$destroy();
        suite.rootScope.$digest();
        suite = null;
    });

    it('Test 1: shoul be controller', function() {
        expect(suite.ctrl).toBeDefined();
    });

    it('Test 2: shoul be property test in controller', function() {
        expect(suite.scope.test).toBeDefined();
    });

    it('Test 3: shoul be value "test" in property test in controller', function() {
        expect(suite.scope.test).toBe('test');
    })

});