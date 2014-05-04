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

// functions

    function algorithm(var1, var2) {      
      // left to right case
        if (parseInt(var1)-1 >= 0 && parseInt(var1)-2 >= 0 && parseInt(var1)-3 >= 0 && arrBoard[parseInt(var1)-1][var2] != null && arrBoard[parseInt(var1)-2][var2] != null && arrBoard[parseInt(var1)-3][var2] != null && arrBoard[var1][var2] == arrBoard[parseInt(var1)-1][var2] && arrBoard[var1][var2] == arrBoard[parseInt(var1)-2][var2] && arrBoard[var1][var2] == arrBoard[parseInt(var1)-3][var2]) { 
            alert(arrBoard[var1][var2] + " has just won the game!");
            reset();
        }
        
        if (parseInt(var1)-1 >= 0 && parseInt(var1)-2 >= 0 && parseInt(var1)+1 >= 0 && arrBoard[parseInt(var1)-1][var2] != null && arrBoard[parseInt(var1)-2][var2] != null && arrBoard[parseInt(var1)+1][var2] != null && arrBoard[var1][var2] == arrBoard[parseInt(var1)-1][var2] && arrBoard[var1][var2] == arrBoard[parseInt(var1)-2][var2] && arrBoard[var1][var2] == arrBoard[parseInt(var1)+1][var2]) { 
            alert(arrBoard[var1][var2] + " has just won the game!");
            reset();
        }
        
        if (parseInt(var1)-1 >= 0 && parseInt(var1)+1 >= 0 && parseInt(var1)+2 >= 0 && arrBoard[parseInt(var1)-1][var2] != null && arrBoard[parseInt(var1)+1][var2] != null && arrBoard[parseInt(var1)+2][var2] != null && arrBoard[var1][var2] == arrBoard[parseInt(var1)-1][var2] && arrBoard[var1][var2] == arrBoard[parseInt(var1)+1][var2] && arrBoard[var1][var2] == arrBoard[parseInt(var1)+2][var2]) { 
            alert(arrBoard[var1][var2] + " has just won the game!");
            reset();
        }
 
      // right to left case
        if (parseInt(var1)+1 < num_cells_x && parseInt(var1)+2 < num_cells_x && parseInt(var1)+3 < num_cells_x && var1 >= 0 && arrBoard[var1][var2] != null && arrBoard[var1][var2] != null && arrBoard[parseInt(var1)+1][var2] != null && arrBoard[parseInt(var1)+2][var2] != null && arrBoard[parseInt(var1)+3][var2] != null && arrBoard[var1][var2] == arrBoard[parseInt(var1)+1][var2] && arrBoard[var1][var2] == arrBoard[parseInt(var1)+2][var2] && arrBoard[var1][var2] == arrBoard[parseInt(var1)+3][var2]) {
            alert(arrBoard[var1][var2] + " has just won the game!");
            reset();
        }

     // top to bottom case
        if (parseInt(var2)-1 < num_cells_y && parseInt(var2)-2 < num_cells_y && parseInt(var2)-3 < num_cells_y && arrBoard[var1][parseInt(var2)-1] != null && arrBoard[var1][parseInt(var2)-2] != null  && arrBoard[var1][parseInt(var2)-3] != null && arrBoard[var1][var2] == arrBoard[var1][parseInt(var2)-1] && arrBoard[var1][var2] == arrBoard[var1][parseInt(var2)-2] && arrBoard[var1][var2] == arrBoard[var1][parseInt(var2)-3]) {
            alert(arrBoard[var1][var2] + " has just won the game!");
            reset();
        }
        
      // top-right to bottom-left
        if (parseInt(var1)-1 >=0 && parseInt(var1)-2 >=0 && parseInt(var1)-3 >=0 && arrBoard[parseInt(var1)][parseInt(var2)] != null && arrBoard[parseInt(var1)-1][parseInt(var2)-1] != null && arrBoard[parseInt(var1)-2][parseInt(var2)-2] != null && arrBoard[parseInt(var1)-3][parseInt(var2)-3] != null && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)-1][parseInt(var2)-1] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)-2][parseInt(var2)-2] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)-3][parseInt(var2)-3]) {
            alert(arrBoard[var1][var2] + " has just won the game!");
            reset();
        }
        
         if (parseInt(var1)-1 >=0 && parseInt(var1)-2 >=0 && parseInt(var1)+1 >=0 && arrBoard[parseInt(var1)][parseInt(var2)] != null && arrBoard[parseInt(var1)-1][parseInt(var2)-1] != null && arrBoard[parseInt(var1)-2][parseInt(var2)-2] != null && arrBoard[parseInt(var1)+1][parseInt(var2)+1] != null && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)-1][parseInt(var2)-1] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)-2][parseInt(var2)-2] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)+1][parseInt(var2)+1]) {
            alert(arrBoard[var1][var2] + " has just won the game!");
            reset();
        }
        
        if (parseInt(var1)-1 >=0 && parseInt(var1)+1 >=0 && parseInt(var1)+2 >=0 && arrBoard[parseInt(var1)][parseInt(var2)] != null && arrBoard[parseInt(var1)-1][parseInt(var2)-1] != null && arrBoard[parseInt(var1)+1][parseInt(var2)+1] != null && arrBoard[parseInt(var1)+2][parseInt(var2)+2] != null && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)-1][parseInt(var2)-1] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)+1][parseInt(var2)+1] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)+2][parseInt(var2)+2]) {
            alert(arrBoard[var1][var2] + " has just won the game!");
            reset();
        }
        
      // top-left to bottom-right
        if (parseInt(var1)+1 < num_cells_x && parseInt(var1)+2 < num_cells_x && parseInt(var1)+3 < num_cells_x && arrBoard[parseInt(var1)][parseInt(var2)] != null && arrBoard[parseInt(var1)+1][parseInt(var2)-1] != null && arrBoard[parseInt(var1)+2][parseInt(var2)-2] != null && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)+1][parseInt(var2)-1] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)+2][parseInt(var2)-2] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)+3][parseInt(var2)-3]) {
            alert(arrBoard[parseInt(var1)][parseInt(var2)] + " has just won the game!");
            reset();
        }
        
        if (parseInt(var1)+1 < num_cells_x && parseInt(var1)+2 < num_cells_x && parseInt(var1)-1 < num_cells_x && arrBoard[parseInt(var1)][parseInt(var2)] != null && arrBoard[parseInt(var1)+1][parseInt(var2)-1] != null && arrBoard[parseInt(var1)-1][parseInt(var2)+1] != null && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)+1][parseInt(var2)-1] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)+2][parseInt(var2)-2] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)-1][parseInt(var2)+1]) {
            alert(arrBoard[parseInt(var1)][parseInt(var2)] + " has just won the game!");
            reset();
        }
        
         if (parseInt(var1)+1 < num_cells_x && parseInt(var1)-1 < num_cells_x && parseInt(var1)-2 < num_cells_x && arrBoard[parseInt(var1)][parseInt(var2)] != null && arrBoard[parseInt(var1)-1][parseInt(var2)+1] != null && arrBoard[parseInt(var1)-2][parseInt(var2)+2] != null && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)+1][parseInt(var2)-1] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)-1][parseInt(var2)+1] && arrBoard[parseInt(var1)][parseInt(var2)] == arrBoard[parseInt(var1)-2][parseInt(var2)+2]) {
            alert(arrBoard[parseInt(var1)][parseInt(var2)] + " has just won the game!");
            reset();
        }
    }

function draw(ctx) {
    ctx.beginPath();
    ctx.arc( (canvas_cell * parseInt(column_current)+1 ) + (canvas_cell/2)-1, ( (num_cells_y - rowLevel[column_current]+1)  * canvas_cell)  - (canvas_cell/2), (canvas_cell/2)-2, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fillStyle = (arrBoard[column_current][rowLevel[column_current]] == "player-1" ) ? "blue" : "red";
    ctx.fill();  
}

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
