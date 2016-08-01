function grid(type, w, h, totalW, totalH){
	    
    var $this = this;
    this.type = type || 'blocks';// blocks, diamonds, hexagons
    this.blockW = w;
    this.blockH = h;
    this.container;

    $('#grid').empty();

    var totalW = totalW || $(document).width();
    var totalH = totalH || $(document).height();


    for(var i = 0;i < Math.round(totalW/blockW); i++){
        for(var j = 0; j < Math.round(totalH/blockH); j++){

            var span = document.createElement("span");

            span.style.width = blockW + 'px';
            span.style.height = blockH + 'px';
            span.className = "block";
            
            var cellContent = getBlock(i,j);
            if(cellContent != null){
                span.appendChild(cellContent);    
            }else{
                // TODO
                span.innerHTML = i + ' ' + j;
            }
            
            
            document.getElementById('grid').appendChild(span);

        }
    }
};

function getBlock(i,j){
    if(i == 3 && j == 3){
        // the smile one
        var smile = document.createElement("div");

        smile.className = "tooltip blockInternal";
        
        smile.innerHTML = ':-)';
        var tooltipText = getTooltipText('It\'s you!');
        smile.appendChild(tooltipText)
        return smile;
    }
    return null;
    /*
    // all the others
    var regularBlock = document.createElement("div");
    regularBlock.className = "tooltip blockInternal";
    //TODO
    //regularBlock.innerHTML = $scope.firstName + " " +  $scope.lastName;

    return regularBlock;
    */
}

function getTooltipText(string){
    var span = document.createElement("span");
    span.className = "tooltiptext";
    span.innerHTML = string;
    return span;
}
    
//	    else if(this.type == 'hex'){
//	        
//	        var c = drawHexGrid({}, c);
//	        this.container.appendChild(c);
//	        document.getElementById('grid').appendChild(this.container);
//	    }
//	    else if(this.type == 'diamonds'){
//	        
//	        
//	        var mapGridCanvas = c.getContext("2d");
//	        mapGridCanvas.clearRect(0, 0, c.width, c.height);
//	        mapGridCanvas.globalAlpha = 1;
//	        mapGridCanvas.strokeStyle = "#1e1e1e";
//	        mapGridCanvas.lineWidth = 1;
//	        mapGridCanvas.beginPath();
//	        var x = 0;
//	        var y = 0;
//	        var z = 0;
//	        var counter = 0;
//	        for(var i = 0; i < Math.round(totalH/blockH); i++){
//	            
//	            var z = counter;
//	            while(x <= blockW*Math.round(totalW/blockW)){
//	                
//	                if(z%2 == 0){
//	                    mapGridCanvas.moveTo( x, y+blockW );
//	                    mapGridCanvas.lineTo( x+blockW, y );
//	                }
//	                else{
//	                    mapGridCanvas.moveTo(x,y);
//	                    mapGridCanvas.lineTo(x+blockW, y+blockW);
//	                }
//	                    
//	                x += blockW;    
//	                z += 1;
//	            }
//	            
//	            x = 0;
//	            y = y + blockW;
//	            counter += 1;
//	            
//	        }
//	        
//	        mapGridCanvas.stroke();
//	        this.container.appendChild(c);
//	        document.getElementById('grid').appendChild(this.container);
//	        
//	    }
	    

//	    function drawHexGrid(opts,c) {
//	        
//	        var alpha       = opts.alpha || 1;
//	        var color       = opts.color || '#1e1e1e';
//	        var lineWidth   = opts.lineWidth || 1;
//	        var radius      = opts.radius || 20;
//	        
//	        
//	        var mapGridCanvas = c.getContext("2d");
//	        mapGridCanvas.clearRect(0, 0, c.width, c.height);
//	        mapGridCanvas.globalAlpha = alpha;
//	        mapGridCanvas.strokeStyle = color;
//	        mapGridCanvas.lineWidth = lineWidth;
//	    
//	        //length of line
//	        r = radius;
//	        part = 60;
//	        hexSize = r*Math.sqrt(3);
//	        yHexSize = r*Math.sqrt(2.25);
//	        xHexes = 2000 / hexSize;
//	        yHexes = 2000 / yHexSize;
//	    
//	        mapGridCanvas.beginPath();
//	    
//	        //loop through hex "rows" and every other row shift
//	        for (xGrid=0;xGrid<=xHexes;xGrid++){
//	            for (yGrid=0;yGrid<=yHexes;yGrid++){
//	                if (yGrid % 2 == 0) {
//	                    //even row
//	                    shiftX = hexSize/2;
//	                }
//	                else {
//	                    //odd row
//	                    shiftX=0;
//	                }
//	                for (i=0;i<=6;i++) {
//	                    var a = i * part - 90;
//	                    x = r * Math.cos(a * Math.PI / 180)+xGrid*hexSize+shiftX;
//	                    y = r * Math.sin(a * Math.PI / 180)+yGrid*yHexSize;
//	                    if (i == 0) {
//	                        mapGridCanvas.moveTo(x,y);
//	                    }
//	                    else {
//	                        mapGridCanvas.lineTo(x,y);
//	                    }
//	                }
//	            }
//	        }
//	        mapGridCanvas.stroke();
//	        
//	        return c;
//	    }
	    
//	    function removeGrid(){
//	        
//	        document.removeChild(this.container);
//	    }
