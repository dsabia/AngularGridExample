var app = angular.module("gridApp", ['ngMaterial','ngMessages', 'gridService']); 

app.controller("gridController", function ($scope, $mdDialog, $http, GridREST ) {
    
    $scope.name = "Daniele";
    $scope.icon = ":-)";

    $scope.blocks = [];
    
    loadBlocks($scope, GridREST);
    
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
        console.info('Alert called');
        
    };
    
    $scope.showPrompt = function(block) {
        // Appending dialog to document.body to cover sidenav in docs app
        if(block.enabled){
            confirm = $mdDialog.prompt()
              .title(block.title)
              .textContent(block.description)
              .placeholder(block.tooltip)
              .ariaLabel(block.displayId)
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
            console.info('Show Prompt open');
        }else{
            console.info('Show Prompt disabled');
        }
      };

});

// business and model

function loadBlocks(scope, GridREST){
     for(var i = 0; i < 7; i++){
        for(var j = 0; j < 7; j++){
            scope.blocks.push(getDefaultBlockInfo(i,j));
        }
    };
    
    GridREST.get().success(function(data) {

        for(index in data){
            var dbBlock = data[index];
            var blockVO = refine(dbBlock);
            
            var gridIndex = (7*dbBlock.i)+dbBlock.j;
            
            console.info('Changed value []' + gridIndex + ' <-> ' + dbBlock._id);
            scope.blocks[gridIndex] = blockVO;
            
        }
        scope.icon = "Total objects loaded: " + data.length;
    }).finally(function(){
        scope.icon += "!!!";
    });
    
}
function refine(dbBlock){
    dbBlock.enabled |= getEnabled(dbBlock._id);
    dbBlock.displayId = getDisplayId(dbBlock._id, dbBlock.enabled);
    
    return dbBlock;
}


function getDefaultBlockInfo(i,j){
    var block = new Object;
    var cellNr = getCellNr(i,j);
    block.displayId = getDisplayId(cellNr, false);
    block.enabled = false;
    
    block.title = getTitleDefault(cellNr);
    block.description = getDescriptionDefault(cellNr);
    block.tooltip = getTooltipDefault(cellNr, block.enabled);
    
    return block;
}

function getEnabled(cellNr){
    if(cellNr == 0){
        return false;
    }
    return true;
}

function getDisplayId(id, enabled){
    if(id == 0){
        return ":-)";
    }
    if(enabled){
        return "#"+id;    
    }
    return "";
}

function getTitleDefault(){
    return "title default";
}

function getTooltipDefault(cellNr, enabled){
    if(cellNr == 0){
        return "It's you!";
    }
    if(enabled){
        return "tooltip default";    
    }
    return "";
}

function getDescriptionDefault(cellNr){
    return "description default";
}


function getCellNr(i,j){
    if(i == 3 && j == 3){
        return 0;
    }
    return ((i)*7)+(j+1);
}
