var app = angular.module("myApp", ['ngMaterial']); 

app.controller("myCtrl", function ($scope, $mdDialog) {
    
    $scope.firstName = "Daniele";
    $scope.lastName = ":-)";
    
    $scope.blocks = [];
    for(var i = 0;i < 7; i++){
        for(var j = 0; j < 7; j++){
            $scope.blocks.push(getBlockDescription(i,j));
        }
    };

    $scope.showAlert = function() {
      alert = $mdDialog.alert()
        .title('Attention, ' + $scope.userName)
        .content('This is an example of how easy dialogs can be!')
        .ok('Close');

      $mdDialog
          .show( alert )
          .finally(function() {
            alert = undefined;
          });
    }
    
    $scope.showPrompt = function() {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.prompt()
          .title('What would you name your dog?')
          .textContent('Bowser is a common name.')
          .placeholder('Dog name')
          .ariaLabel('Dog name')
          .initialValue('Buddy')
          .targetEvent(ev)
          .ok('Okay!')
          .cancel('I\'m a cat person');
        $mdDialog.show(confirm).then(function(result) {
          $scope.status = 'You decided to name your dog ' + result + '.';
        }, function() {
          $scope.status = 'You didn\'t name your dog.';
        });
      };

});

// model

function getBlockDescription(i,j){
    var block = new Object;
    var cellNr = getCellNr(i,j);
    block.description = getDescription(cellNr);
    block.tooltip = getTooltip(cellNr);
    return block;
}

function getCellNr(i,j){
    if(i == 3 && j == 3){
        return 0;
    }
    return ((i)*7)+(j+1);
}

function getDescription(cellNr){
    if(cellNr == 0){
        return ":-)";
    }
    return "#"+cellNr;
}

function getTooltip(cellNr){
    if(cellNr == 0){
        return "It's you!";
    }
    return "It's #" + cellNr;
}