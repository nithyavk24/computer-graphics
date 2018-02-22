--------------------------------------------------------------------
Author Name : Nithya Vasantha Kumar
Web Link : http://www.cs.uml.edu/~nvasanth/427546s2018/prog-hws/Assign1/index.html
username: nvasanth
password: Nithy@24
Programming Assignment 1
--------------------------------------------------------------------

1. index.html contains the code to draw the basic 2D geometric shapes without using any libraries.
2. User is given an option to choose the color of drawing. Based on the selection, particular value is passed to  'context.fillStyle' function.
3. Whenever user clicks on canvas, the particular point is captured and used for drawing different shapes. This
	is achieved using 'canvas.addEventListener' function.
4. Buttons are provided for selections of shapes like 'Line', 'Circle' etc. Based upon the selection, particular function is invoked to render 
	selected shapes	using midpoint algorithm.
5. Whenever 'Clear' button is clicked, 'location.reload()' function is used to clear the canvas.	

REFERENCES:
  1. http://www.somethinghitme.com/2013/11/11/simple-2d-terrain-with-midpoint-displacement/
  2. http://perfectionkills.com/exploring-canvas-drawing-techniques/
  3. http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/