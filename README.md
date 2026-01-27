# 2048 clone

This is a version of the highly addictive 2048 game. The original game cam be found in a repository here - https://github.com/gabrielecirulli/2048. Move numbered tiles up down, left and right. Your goal is to combine them to try and reach 2048.


### Features

- Grid with coloured numbered tiles
- Tile movement
- Directional buttons to support tile movement
- Game score
- Keyboard support
- Mobile Compatible


### Technologies being used

- HTML
- CSS
- SASS
- Javascript


### Live demo

https://mark-grayson1.github.io/2048-game/


### Design - basic game logic

#### 1. Display the game GUI:

        1.1 Display Heading for game.
        1.2 Display grid with coloured squares.
        1.3 Display Score label and value.
        1.4 Display buttons
    	    1.4.1 New Game button.
    	    1.4.2 Up button.
    	    1.4.3 Down button.
    	    1.4.4 Left button.
    	    1.4.5 Right button.

#### 2. Start the game/reset the game:

        2.1 Set score to 0.
        2.2 Reset the grid tracking object .
        2.3 Update the grid tracker object for 2 initial random tiles.
        2.4 Update the grid display for the grid tracker object.

### 3. Button presses:

        3.1 New Game button pressed.
    	    Confirm the user wants to reset and go to section 2 - Reset the game.
        3.2 Down button pressed - update grid for tiles move downward logic.
    	    3.2.1 If not game over:
    		    3.2.1.1 For each column in the grid
    			    3.2.1.1.1 Update grid tracker object to merge consecutive same number tiles.
    			    3.2.1.1.2 Update grid tracker object to remove tile gaps so tiles stacked upwards.
    				3.2.1.1.3 Update score if necessary.
            3.2.2 Add tile
    		    3.2.2.1 Randomly select number - 2 or 4.
    		    3.2.2.2 Select random empty grid square.
    		    3.2.2.3 Update grid tracker object.
                3.2.2.4 If grid tracker object changed, refresh grid display downwards.
    	    3.2.3 If grid full and no moves available then
    		    3.2.3.1 Display the Game over text.
        3.3 Up button pressed - update grid for tiles move upward logic.
             3.3.1 If not game over:
    		    3.3.1.1 For each column in the grid
    			    3.3.1.1.1 Update grid tracker object to merge consecutive same number tiles.
    			    3.3.1.1.2 Update grid tracker object to remove tile gaps so tiles stacked downwards.
    				3.3.1.1.3 Update score if necessary.
    	    3.3.2 Add tile
    		    3.3.2.1 Randomly select number - 2 or 4.
    		    3.3.2.2 Select random empty grid square.
    		    3.3.2.3 Update grid tracker object.
                3.3.2.4 If grid tracker object changed, refresh grid display upwards.
    	    3.3.3 If grid full and no moves available then
    		    3.3.3.1 Display the Game over text.
        3.4 Right button pressed - update grid for tiles move right logic.
            3.4.1 If not game over:
    		    3.4.1.1 For each row in the grid
    			    3.4.1.1.1 Update grid tracker object to merge consecutive same number tiles.
    			    3.4.1.1.2 Update grid tracker object to remove tile gaps so tiles clustered on right.
    				3.4.1.1.3 Update score if necessary.
    	    3.4.2 Add tile
    		    3.4.2.1 Randomly select number - 2 or 4.
    		    3.4.2.2 Select random empty grid square.
    		    3.4.2.3 Update grid tracker object.
                3.4.2.4 If grid tracker object changed, refresh grid display to the right.
    	    3.4.3 If grid full and no moves available then
    		    3.4.3.1 Display the Game over text.
        3.5 Left button pressed - update grid for tiles move left logic.
            3.5.1 If not game over:
    		    3.5.1.1 For each row in the grid
    			    3.5.1.1.1 Update grid tracker object to merge consecutive same number tiles.
    			    3.5.1.1.2 Update grid tracker object to remove tile gaps so tiles clustered on left.
    				3.5.1.1.3 Update score if necessary.
    	    3.5.2 Add tile
    		    3.5.2.1 Randomly select number - 2 or 4.
    		    3.5.2.2 Select random empty grid square.
    		    3.5.2.3 Update grid tracker object.
                3.5.2.4 If grid tracker object changed, refresh grid display to the left.
    	    3.5.3 If grid full and no moves available then
    		    3.5.3.1 Display the Game over text.

                    
### Task list
Using HTML, SCSS & JS

What code do I need?

# HTML

-   [x] We need containers for the tiles
-   [x] We need a button to start the game
-   [x] We need a buttons for movement (up, down, left right)
-   [x] We need a label and value for score 
-   [x] We need a wrapper for all but the display to act as our grid container.


# SCSS

-   [x] Using a grid
    -   [x] 4 columns
    -   [x] 4 rows
    -   [x] adding a gap
-   [x] background grey
-   [x] tile containers - background dark blue

# JS

-   [x] Create grid tracker object
-   [x] add tile functionality - specify number
-   [x] Start / Reinitialise game
	- [x] add 2 tiles - 2 or 4 to random grid position
	- [x] Set score to 0
	- [x] reset grid tracker object
-   [x] Update grid tracker object
	- [x] rows
		- [x] merge tile numbers
		- [x] remove tile gaps
	- [x] columns 
		- [x] merge tile numbers
		- [x] remove tile gaps
	- [x] reinitialise
-   [x] Grid display changes
	- [x] transition left
	- [x] transition right
	- [x] transition up
	- [x] transition down
-   [x] Calculate score
-   [x] Check whether the game has ended
	- [x] is grid full
	- [x] can no more tiles be merged
		- [x] display Game Over message 
-   [x] Update to support additional screen resolutions
	- [x] make display usable on a mobile phone resolution
-   [x] Support keyboard functionality
-   [x] Tile colours for all tiles defined -  for 17 levels

