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
    var c=document.getElementById("gameCanvas");
    var ctx=c.getContext("2d");
    ctx.stroke();

    gridSetup();

// button actions
$( "button" ).click(function() {
        
        column_current = this.className.substring(7);
        
        if (flag_player) {
            flag_player = false;
        
            while (arrBoard[column_current][rowLevel[column_current]] != null || row_current < num_cells_y) {
                rowLevel[column_current]++;
                break;
            }
            arrBoard[column_current][rowLevel[column_current]] = "player-2";
            draw(ctx);
            algorithm(column_current, rowLevel[column_current]);
        }
        else {
            row_current = 0;
            flag_player = true;

            while (arrBoard[column_current][rowLevel[column_current]] != null || row_current < num_cells_y) {
                rowLevel[column_current]++;
                break;
            }
            arrBoard[column_current][rowLevel[column_current]] = "player-1";
            draw(ctx);
            algorithm(column_current, rowLevel[column_current]);
        }        
    });

// algorithm

function gridSetup() {
    for(i=0; i <= num_cells_x; i++) {
    
        arrRow[i] = 0;  // starting location
        rowLevel[i] = 0;

        for(j=0; j <= num_cells_y; j++) {
            ctx.strokeRect(i*canvas_cell,j*canvas_cell,canvas_cell,canvas_cell);
        }
    }
}

});
