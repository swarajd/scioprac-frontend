'use strict';

/**
 * @ngdoc function
 * @name yoProjRnd2App.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the yoProjRnd2App
 */
angular.module('yoProjRnd2App')
  .controller('UploadCtrl', function ($scope, $firebase, $route) {

    var ref = new Firebase("https://popping-heat-8159.firebaseio.com/data");
    var sync = $firebase(ref);
    
    $scope.questions = sync.$asArray();
    
    $scope.upload = function() {
      var question = CKEDITOR.instances['question'].getData();
      console.log(question);
      var questionBody = question.split('<hr />');

      $scope.questions.$add({
        name: $scope.question.name,
        school: $scope.question.school,
        question: questionBody[0],
        answer: questionBody[1],
        tags: $scope.question.tags
      })
      $route.reload();
    };
  });
