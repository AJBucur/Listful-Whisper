angular.module('transcripts').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/transcripts/transcript', {
                templateUrl: 'transcripts/views/view-transcript.client.view.html'
            }).
            when('/transcripts/courses', {
                templateUrl: 'transcripts/views/list-courses.client.view.html'
            }).
            when('/transcripts/courses/:courseId', {
                templateUrl: 'transcripts/views/enroll-course.client.view.html'
            }).
            when('/transcripts/create', {
                templateUrl: 'transcripts/views/create-course.client.view.html'
            }).
            when('/transcripts/:transcriptId', {
                templateUrl: 'transcripts/views/view-course.client.view.html'
            }).
            when('/transcripts/:transcriptId/edit', {
                templateUrl: 'transcripts/views/edit-course.client.view.html'
            });
            
    }
]);