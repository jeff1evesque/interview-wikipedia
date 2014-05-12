Connect Four Game
============

I had an interview with Wikimedia (commonly known for Wikipedia), and was given a coding exercise to create a simple implementation of the Connect Four game.  This code was written relatively quick, and needs improvements (see below).  I initially wrote this exercise in jsfiddle, my apologies for being lazy:

http://jsfiddle.net/jeff1evesque/8jy57/26/

---

For more clarification on the interview exercise, please refer to the following specification:

https://gist.github.com/jgonera/4cf21a3abcbeb62a9dfb

*Note: I have imported what I initially submitted for my interview, and may enhance this application.  In the meantime,  free free to use, or improve what I have.*

##Connect Four, written in JavaScript

###Definition:

Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping colored discs from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The object of the game is to connect four of one's own discs of the same color next to each other vertically, horizontally, or diagonally before your opponent.

- http://en.wikipedia.org/wiki/Connect_Four

##Configurable variables:

At the beginning of `connect-four.js`, we have some configurable variables:

- `num_cells_x`: determines the number of columns in the Connect Four grid
- `num_cells_y`: determines the number of rows in the Connect Four grid
- `canvas_width`: determines the width of the HTML5 canvas container for the Connect Four grid
- `canvas_height`: determines the height of the HTML5 canvase container for the Connect Four grid
- `canvas_cell`: determines the square dimension of cells within the Connect Four grid

The first two configurable variables determine the `for-loop` structure needed to generate the grid, which directly depends on the last configurable variable, `canvas_cell`.  This variable determines the cell dimension within the canvas.

The `canvas_width`, and `canvas_height` are used for redrawing the canvas.  These two values must match exactly the `width`, and `height` attribute that have been defined within the `<canvas>` element in the `container.html` file.  The javascript needs these variables because, when the game completes, we must clear the entire canvas.  Clearing the canvas allows us to redraw an empty Connect Four grid for the next game.

##Future Improvements:

- Remove the HTML buttons, and simply attach click events on the columns of the Connect Four grid.  This way users can click on the column they want to drop their disc.
- Add some minimal graphics, animation of the disc dropping into its location
- Develop some kind of scoreboard, a prettier notification scheme
- Either sharpen / tidy up the `algorithm()` function, or provide clear documentation of each case


