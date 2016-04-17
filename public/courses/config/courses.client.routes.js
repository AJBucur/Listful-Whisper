angular.module('courses').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/courses', {
                templateUrl: 'courses/views/list-articles.client.view.html'
            }).
            when('/courses/create', {
                templateUrl: 'courses/views/create-article.client.view.html'
            }).
            when('/courses/:courseId', {
                templateUrl: 'courses/views/view-article.client.view.html'
            }).
            when('/courses/:courseId/edit', {
                templateUrl: 'courses/views/edit-article.client.view.html'
            });
    }
]);