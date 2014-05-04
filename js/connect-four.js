/**
 * connect-four.js
 *
 * Jeffrey M. Levesque
 * 05/03/2014
 *
 * This file contains the logic component for the 'connect-four' game'
 */

$( document ).ready(function() {

// variables & arrays
// variables & arrays
var num_cells_x = 8; var num_cells_y = 7;
var canvas_width = 480; var canvas_height = 420; canvas_cell = canvas_cell = 60;

var rowLevel = new Array(num_cells_x);

var arrBoard = new Array(num_cells_x);
for(i = 0; i < arrBoard.length; i++) {
    arrBoard[i] = new Array(num_cells_y);
    for(j = 0; j < arrBoard[num_cells_y]; j++) {
        arrBoard[i][j] = null;
    }
}
    
var arrRow = new Array(num_cells_y);
flag_player = false; // indicate current player

// setting up grid

// button actions

// algorithm

});
