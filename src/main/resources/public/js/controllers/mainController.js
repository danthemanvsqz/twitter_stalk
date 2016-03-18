require(['myApp'], function(app) {
    app.controller('mainController', function($scope) {
        var ctrlData = {
            clickCount: 0,
            ifExtra: false,
            messages: {
                description: 'This is Angular!',
                greeting: 'Hello World',
            },
            now: null,
            showExtra: false,
            simple: 'This is a simple message.',
        };

        var init = function() {
            $scope.mainCtrlData = ctrlData;
            ctrlData.now = $scope.now();
        };

        $scope.addClick = function() {
            ctrlData.clickCount++;
            if(ctrlData.clickCount>=30)
                $scope.clearClick();
        };

        $scope.clearClick=function(){
            ctrlData.clickCount=0;
        };

        $scope.now = function() {
            return '[' + new Date().toISOString() + '] ';
        };

        init();
    });
});
