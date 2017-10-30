window.onload=function(){
	
var gundong=document.getElementById("gundong")
var fu=document.getElementsByClassName("fu")[0]
        var el = document.querySelector('.test');
        var startPosition, endPosition, deltaX,moveLength;

       fu.addEventListener('touchstart', function (ev) {
            var touch = ev.touches[0];
            startPosition = {
                x:touch.clientX
            }
        })
        gundong.addEventListener('touchmove', function (e) {
            var touch = e.touches[0];
            endPosition = {
                x: touch.pageX,
            }
            deltaX = endPosition.x - startPosition.x;
            if(deltaX>0){
            	deltaX=0
            }
            console.log(startPosition.x)
            fu.style.left=deltaX+"px"
        })

    
       





















 }



