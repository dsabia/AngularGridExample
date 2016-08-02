var app = angular.module("gridApp", ['ngMaterial','ngMessages', 'gridService']); 

app.controller("gridController", function ($scope, $mdDialog, $log, $http, GridREST ) {
    
    $scope.name = "Daniele";
    $scope.icon = ":-)";
    
    $scope.blocks = [];
    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j++){
            $scope.blocks.push(getBlockInfo(i,j));
        }
    };
    
    $log.info('GridREST: ' + GridREST);
    
    GridREST.get().success(function(data) {
        //$scope.blocks = data;
        $scope.icon = data.length;
    }).finally(function(){
        $log.info('Finally called');
        $scope.icon += "!!!";
    });

    $scope.showAlert = function(aName) {
      alert = $mdDialog.alert()
        .title('Attention, ' + aName)
        .content('This is an example of how easy dialogs can be!')
        .ok('Close');

      $mdDialog
          .show( alert )
          .finally(function() {
            alert = undefined;
          });
        $log.info('Alert called');
        
    };
    
    $scope.showPrompt = function(block) {
        // Appending dialog to document.body to cover sidenav in docs app
        if(block.enabled){
            confirm = $mdDialog.prompt()
              .title("Who is " + block.id + "?")
              .textContent(block.description)
              .placeholder("What's the value for " + block.id + "?")
              .ariaLabel(block.id)
              .ok('Okay!')
              .cancel('Cancel');
        
            $mdDialog
                .show(confirm)
                .then(function(result) {
                        block.value = result;
                    }, function() {
                        block.value = null;
                    })
                .finally(function(){
                            confirm = undefined;
                        });
            $log.info('Show Prompt open');
        }else{
            $log.info('Show Prompt disabled');
        }
      };

});

// business and model

function getBlockInfo(i,j){
    var block = new Object;
    var cellNr = getCellNr(i,j);
    block.id = getId(cellNr);
    block.description = getDescription(cellNr);
    block.tooltip = getTooltip(cellNr);
    block.value = getBlockValue(cellNr);
    block.enabled = getEnabled(cellNr);
    return block;
}

function getCellNr(i,j){
    if(i == 3 && j == 3){
        return 0;
    }
    // TODO resolve correctly the numbers
    return ((i)*7)+(j+1);
}

function getId(cellNr){
    if(cellNr == 0){
        return ":-)";
    }
    return "#"+cellNr;
}

function getTooltip(cellNr){
    if(cellNr == 0){
        return "It's you!";
    }
    return "Who is #" + cellNr + "?";
}

function getDescription(cellNr){
    return "Qual'é il nome di TODO?";
}

function getBlockValue(cellNr){
    return null;
}

function getEnabled(cellNr){
    if(cellNr == 0){
        return false;
    }
    return true;
}