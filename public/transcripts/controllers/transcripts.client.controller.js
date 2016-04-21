angular.module('transcripts').controller('TranscriptsController', ['$scope',
    '$routeParams', '$location', 'Authentication', 'Transcripts', 'Courses',
    function($scope, $routeParams, $location, Authentication, Transcripts, Courses) {
        $scope.authentication = Authentication;

        $scope.create = function() {
            var transcript = new Transcripts({
                //title: this.title,
                //content: this.content
            });

            transcript.$save(function(response) {
                $location.path('transcripts/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.transcripts = Transcripts.query();
        };

        $scope.findOne = function() {
            $scope.transcript = Transcripts.get({
                transcriptId: $routeParams.transcriptId
            });
        };

        $scope.update = function() {
            $scope.transcript.$update(function() {
                $location.path('transcripts/' + $scope.transcript._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(course) {
            if (course) {
                course.$remove(function() {
                    for (var i in $scope.courses) {
                        if ($scope.courses[i] === course) {
                            $scope.courses.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.course.$remove(function() {
                    $location.path('courses');
                });
            }
        };
    }
]);

