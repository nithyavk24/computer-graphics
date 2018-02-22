document.addEventListener("DOMContentLoaded",domReady);

function domReady(){
    var myCanvas = document.getElementById("myCanvas");
    var line = document.getElementById("line");
    var polyline = document.getElementById("polyline");
    var circle = document.getElementById("circle");
    var ellipse = document.getElementById("ellipse");
    var rectangle = document.getElementById("rectangle");
    var clear = document.getElementById("clear"); 
    var ctx = myCanvas.getContext("2d"); 

    paintLine = function(x1,y1,x2,y2){        
        var dx = Math.abs(x2 - x1);
        var dy = Math.abs(y2 - y1);
        var x = (x1 < x2) ? 1 : -1;
        var y = (y1 < y2) ? 1 : -1;
        var constant = dx - dy;
        while(!((x1 == x2) && (y1 == y2))){
                var a = constant << 1;
                if (a > -dy) {
                constant -= dy;
                x1 += x;
            }
            if (a < dx) {
                constant += dx;
                y1 += y;
            }
            ctx.fillStyle = document.querySelector('input[name = "color"]:checked').value;
            ctx.fillRect(x1, y1, 1, 1);
        } 
    } 
    
    distance = function(x1,y1,x2,y2){
        var x = x1 - x2;
        var y = y1 - y2;
        x *= x;
        y *= y;
        return Math.sqrt(x+y);
    }

    
    line.addEventListener("click",drawLine);
    polyline.addEventListener("click",drawPolyline);
    rectangle.addEventListener("click",drawRectangle);
    circle.addEventListener("click", drawCircle);
    ellipse.addEventListener("click",drawEllipse);
    polygon.addEventListener("click",drawPolyline);
    clear.addEventListener("click",clearScreen);

    function clearScreen(){
        cframe = document.getElementById("c-frame");
        canvas = document.createElement("canvas");
        canvas.setAttribute("width", "892");
        canvas.setAttribute("height", "400");
        canvas.setAttribute("id", "myCanvas");

        cframe.replaceChild(canvas,myCanvas);
        myCanvas = document.getElementById("myCanvas");
        ctx = myCanvas.getContext("2d"); 
    } 

    function drawLine(event){
        event.preventDefault();
        clearScreen();
        var x1=0;
        var x2=0;
        var y1=0;
        var y2=0;
        var firsPoint = false;
        var diffX = myCanvas.offsetLeft;
        var diffY = myCanvas.offsetTop;
        myCanvas.addEventListener("mousedown", drawingLine);

        function drawingLine(e){
            console.log('hi')
            if(!firsPoint){
                firsPoint=true;
                x1 = e.clientX - diffX;
                y1 = e.clientY - diffY;   
            }
            else{
                firsPoint=false;
                x2 = e.clientX - diffX;
                y2 = e.clientY - diffY;
                paintLine(x1,y1,x2,y2);
                
            }
        }
    }

    function drawPolyline(event){
        event.preventDefault();
        clearScreen();
        var x1=0;
        var x2=0;
        var y1=0;
        var y2=0;
        var firsPoint = false;
        var diffX = myCanvas.offsetLeft;
        var diffY = myCanvas.offsetTop;
        myCanvas.addEventListener("mousedown", drawingLine);

        function drawingLine(e){
            if(!firsPoint){
                firsPoint=true;
                x1 = e.clientX - diffX;
                y1 = e.clientY - diffY;   
            }
            else{
                
                x2 = e.clientX - diffX;
                y2 = e.clientY - diffY;
                paintLine(x1,y1,x2,y2);
                x1= x2;
                y1= y2;
                
            }
        }
    }

    function drawRectangle(event){
        event.preventDefault();
        clearScreen();
        var recx1=0;
        var recx2=0;
        var recy1=0;
        var recy2=0;
        var firsPoint = false;
        var diffX = myCanvas.offsetLeft;
        var diffY = myCanvas.offsetTop;
        myCanvas.addEventListener("mousedown", drawingRectangle, true);

        function drawingRectangle(e){
            if(!firsPoint){
                firsPoint=true;
                recx1 = e.clientX - diffX;
                recy1 = e.clientY - diffY;   
            }
            else{
                ctx.clearRect(0, 0, 1000, 300);
                recx2 = e.clientX - diffX;
                recy2 = e.clientY - diffY;
                paintLine(recx1,recy1,recx2,recy1);
                paintLine(recx2,recy1,recx2,recy2);
                paintLine(recx2,recy2,recx1,recy2);
                paintLine(recx1,recy2,recx1,recy1);
            }
        }
    }

    function drawCircle(event){
        event.preventDefault();
        clearScreen();
        var x1=0;
        var x2=0;
        var y1=0;
        var y2=0;
        var d=0;
        var firsPoint = false;
        var diffX = myCanvas.offsetLeft;
        var diffY = myCanvas.offsetTop;
        myCanvas.addEventListener("mousedown", drawingCircle);

        function drawingCircle(e){
            if(!firsPoint){
                firsPoint=true;
                x1 = e.clientX - diffX;
                y1 = e.clientY - diffY;   
            }
            else{
                firsPoint=false;
                x2 = e.clientX - diffX;
                y2 = e.clientY - diffY; 
                d = distance(x1,y1,x2,y2);
                var x=d;
                var y=0;
                var constant = 1 - x;
        
                while(x >= y){
                ctx.fillStyle = document.querySelector('input[name = "color"]:checked').value;
                ctx.fillRect(x + x1, y + y1, 1, 1);
                ctx.fillRect(y + x1, x + y1, 1, 1);
                ctx.fillRect(-x + x1, y + y1, 1, 1);
                ctx.fillRect(-y + x1, x + y1, 1, 1);
                ctx.fillRect(-x + x1, -y + y1, 1, 1);
                ctx.fillRect(-y + x1, -x + y1, 1, 1);
                ctx.fillRect(x + x1, -y + y1, 1, 1);
                ctx.fillRect(y + x1, -x + y1, 1, 1); 
                y++;
                if (constant<0){
                        constant += 2 * y + 1;
                    }
                    else {
                        x--;
                        constant += 2 * (y - x) + 1;
                    }
                }               
            }
        }
    }

    function drawEllipse(event){
        event.preventDefault();
        clearScreen();
        var x1=0;
        var x2=0;
        var y1=0;
        var y2=0;
        var firsPoint = false;
        var diffX = myCanvas.offsetLeft;
        var diffY = myCanvas.offsetTop;
        myCanvas.addEventListener("mousedown", drawinngEllipse);

        function drawinngEllipse(e){
            if(!firsPoint){
                firsPoint=true;
                x1 = e.clientX - diffX;
                y1 = e.clientY - diffY;   
            }
            else{
                firsPoint=false;
                x2 = e.clientX - diffX;
                y2 = e.clientY - diffY;
                
                a =  distance(x1,y1,x2,y1);
                b = distance(x2,y1,x2,y2);
                var x = -a;
                var y = 0;
                var a2 = a * a;
                var b2 = b * b;
                var s2 = b;
                dx = (1 + 2 * x) * s2 * s2;
                dy = x * x;
                constant = dx + dy;
            
                while (x <= 0){
                    ctx.fillStyle = document.querySelector('input[name = "color"]:checked').value;
                    ctx.fillRect(x1 - x, y1 + y, 1, 1);
                    ctx.fillRect(x1 + x, y1 + y, 1, 1);
                    ctx.fillRect(x1 + x, y1 - y, 1, 1);
                    ctx.fillRect(x1 - x, y1 - y, 1, 1);
            
                    s2 = 2 * constant;
                    if (s2 >= dx){
                        x++;
                        constant += dx += 2 * b2;
                    }
                    if (s2 <= dy){
                        y++;
                        constant += dy += 2 * a2;
                    }
                }
                while (y++ < b) {
                    ctx.fillStyle = document.querySelector('input[name = "color"]:checked').value;
                    ctx.fillRect(x1, y1 + y, 1, 1);
                    ctx.fillRect(x1, y1 - y, 1, 1);
                }
            }
        }
    }
}
