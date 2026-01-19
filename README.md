# 2048 clone

This is a version of the highly addictive 2048 game. Move numbered tiles up down, left and right. Your goal is to combine them to try and reach 2048.

### Features

- Grid with coloured numbered tiles
- Tile movement
- Directional buttons to support tile movement
- Game score
- Mobile Compatible

### Technologies being used

- HTML
- CSS
- SASS
- Javascript

### Live demo

WIP - nothing to see yet!

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
