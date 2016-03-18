require.config({
    paths: {
        'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.min'
    },
    shim: {
        'angular': {
            exports: 'angular',
        },
    },
});

require([
    'controllers/mainController'
]);
