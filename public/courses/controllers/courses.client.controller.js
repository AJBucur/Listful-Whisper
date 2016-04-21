angular.module('courses').controller('CoursesController', ['$scope',
    '$routeParams', '$location', 'Authentication', 'Courses',
    function($scope, $routeParams, $location, Authentication, Courses) {
        $scope.authentication = Authentication;

        $scope.create = function() {
            var course = new Courses({
                title: this.title,
                content: this.content
            });

            course.$save(function(response) {
                $location.path('courses/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.courses = Courses.query();
        };

        $scope.findOne = function() {
            $scope.course = Courses.get({
                courseId: $routeParams.courseId
            });
        };
        
         $scope.listing = function() {
            $scope.course = Courses.get({
                courseId: $routeParams.courseId
            });
        };

        $scope.update = function() {
            $scope.course.$update(function() {
                $location.path('courses/' + $scope.course._id);
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

