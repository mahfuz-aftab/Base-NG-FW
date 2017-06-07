var app = angular.module('InsideMapsData', ['ui.bootstrap']);
app.controller('MainCtrl', function($scope) {
    $scope.institutionDetail = {
        name: "North South University",
        established: "1993",
        tagline: "Center of Excellence in Higher Education"
    }
    $scope.studentsGrades = [{
            name: "John",
            courses: ["CSE-115", "ENG-102", "MAT-120"],
            id: "101001040",
            image: "./img/s1.jpg"
        },
        {
            name: "Doe",
            courses: ["CSE-115", "ENG-102"],
            id: "111003040",
            image: "./img/s2.jpg"
        }
    ];
});
