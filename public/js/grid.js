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
                        // cancel
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
    defaultInitialization(scope);
  
    

    GridREST.get().success(function(data) {

        for(index in data){
            var dbBlock = data[index];
            var blockVO = refine(dbBlock);

            var gridIndex = (7*dbBlock.y)+dbBlock.x;

            console.info('Changed value []' + gridIndex + ' <-> ' + dbBlock._id);
            scope.blocks[gridIndex] = blockVO;

        }
        scope.icon = "Total objects loaded: " + data.length;
    }).finally(function(){
        scope.icon += "!!!";
    });

}

function defaultInitialization(scope){
    // default initialization
    for(var y = 0; y < 7; y++){
        for(var x = 0; x < 7; x++){    
            scope.blocks.push(getDefaultBlockInfo(x,y));
        }
    };
}

function getDefaultBlockInfo(x,y){
    var block = new Object;
    var cellNr = getCellNr(x,y);
    block.displayId = getDisplayId(cellNr, false);
    block.enabled = false;

    block.title = getTitleDefault(cellNr);
    block.description = getDescriptionDefault(cellNr);
    block.tooltip = getTooltipDefault(cellNr, block.enabled);

    return block;
}

function refine(dbBlock){
    dbBlock.enabled |= getEnabled(dbBlock._id);
    dbBlock.displayId = getDisplayId(dbBlock._id, dbBlock.enabled);
    
    return dbBlock;
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


function getCellNr(x,y){
    if(x == 3 && y == 3){
        return 0;
    }
    return ((y)*7)+(x+1);
}
