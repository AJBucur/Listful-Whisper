angular.module('transcripts').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/transcripts', {
                templateUrl: 'transcripts/views/list-courses.client.view.html'
            }).
            when('/transcripts/courses', {
                templateUrl: 'transcripts/views/list-courses.client.view.html'
            }).
            when('/courses/create', {
                templateUrl: 'courses/views/create-course.client.view.html'
            }).
            when('/courses/:courseId', {
                templateUrl: 'courses/views/view-course.client.view.html'
            }).
            when('/courses/:courseId/edit', {
                templateUrl: 'courses/views/edit-course.client.view.html'
            });
            
    }
]);