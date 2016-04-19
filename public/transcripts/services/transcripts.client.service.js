angular.module('transcripts').factory('Transcripts', ['$resource',
    function($resource) {
        return $resource('api/courses/:courseId', {
            courseId: '@_id'
        }, {
                update: {
                    method: 'PUT'
                }
            });
    }]);