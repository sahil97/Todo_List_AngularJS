angular.module('myApp', []).controller('MainCtrl', function($scope) {
    $scope.hello = "world";

    $scope.tasks = [
        { text: "Test Task 1", done: true },
        { text: "Test Task 2", done: false },
        { text: "Test Task 3", done: true },
        { text: "Test Task 4", done: false },
        { text: "Test Task 5", done: false },
    ];

    $scope.getTotalTasks = function() {
        return $scope.tasks.length;
    };

    $scope.addTask = function() {
        if (input != null) {
            $scope.tasks.push({ text: $scope.input, done: false });
            $scope.input = "";
        }
    }

    $scope.removeTasks = function() {
        $scope.tasks = _.filter($scope.tasks, function(task) {
            return !task.done;
        });
    };

    $scope.toggle = function() {
        task.done = !task.done;
        return task.done;
    };
});