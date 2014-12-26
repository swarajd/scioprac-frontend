'use strict';

/**
 * @ngdoc function
 * @name yoProjRnd2App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the yoProjRnd2App
 */
angular.module('yoProjRnd2App')
  .controller('SearchCtrl', function ($scope, $firebase, $location, $route) {
    var ref = new Firebase("https://popping-heat-8159.firebaseio.com/data");
    var sync = $firebase(ref);

    $scope.questions = sync.$asArray();

    $scope.getResults = function() {
    	$scope.results = [];
    	for (var i = 0; i < $scope.questions.length; i++) {
    		var cur_question = $scope.questions[i];
    		var tmp_question_tags = $scope.questions[i].tags.split(',');
    		if (cur_question.name === $scope.searchquery ||
    			  cur_question.school === $scope.searchquery) {
    			$scope.results.push(cur_question);
    		}
    		for (var j = 0; j < tmp_question_tags.length; j++) {
    			var cur_tag = tmp_question_tags[j];
    			if ($scope.searchquery === cur_tag) {
    				$scope.results.push(cur_question);
    			}
    		}
    	}
    	console.log($scope.results.length);
    	$location.path('/results');
    }
  });
