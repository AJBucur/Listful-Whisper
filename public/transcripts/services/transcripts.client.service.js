angular.module('transcripts').factory('Transcripts', ['$resource',
    function($resource) {
        return $resource('api/transcripts/:transcriptId', {
            courseId: '@_id'
        }, {
                update: {
                    method: 'PUT'
                }
            });
    }]);