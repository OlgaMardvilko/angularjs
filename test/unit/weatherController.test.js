describe('Weather controller test', function() {
    // var mockScope = {};
    // var controller;

    // beforeEach(angular.mock.module('weather'));

    // beforeEach(angular.mock.inject(function($controller, $rootScope) {
    //     mockScope = $rootScope.$new();
    //     controller = $controller('ctrl', {
    //         $scope: mockScope
    //     });
    // }));

    // it('Create property test', function() {
    //     exspect(mockScope.test).toEqual('test');
    // })

    beforeEach(module('weather'));
    var $controller, $rootScope;

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('test my ctrl', function() {
        it('Create controller', function() {
            var $scope = $rootScope.$new();
            var controller = $controller('ctrl', { $scope: $scope});
                
            expect(controller).toBeDefined();
               // exspect($scope.test).toEqual('test');
        });


    });
});