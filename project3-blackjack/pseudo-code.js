/*

Write the steps from the user point of view

--Release 1 - MVP-- I can see who wins/loses
✅- I see a Start Game button
- When I click the start game button, I see an output box that shows me
      -my two cards, my card total
            - ✅ To do this the computer must have a deck of cards
            - ✅ It has to shuffle a deck
            - ✅ It has to pick one card out from the deck
            - ✅ It has to pick another card out from the deck
            - ✅ It has to output a message to show which two cards the player is given
      - ✅ the computer's two cards,
      - ✅ I see my total
      - ✅ I see the computer total
      - ✅I see who wins
            - ✅ if my hand is higher, I win
            - ✅ if my hand is lower, I lose
            - ✅ if it is a draw, it is a draw

--Release 2-- Player can hit or stand
- ✅ After I click start game and see my cards
    - ✅ I can see the stand button
    - ✅ and the hit button
- If I click the hit button
    - ✅I see that I get one more card
    - ✅I see my new total
        - ✅If the new card total is over 21
              - ✅I see that I bust
After I click the hit button,
      - ✅ If I did not bust, I should see a message asking whether I want to hit again
After I click stand,
      - ✅My round ends, and then I see who wins

--Release 3-- Computer can hit or stand
- After I select either hit or stand,
      - ✅if the computer is > player total, computer will stand and end game.
      - ✅if computer's total =< my total,
          - ✅if the dealer's total is < 19, computer will hit
          - ✅Otherwise, computer will stand
      - ✅If computer's total is still <19, computer will hit again.
      - ✅Otherwise, computer will stand
-After computer chooses stand,
      - ✅computer round ends, and I see who wins.


Ooops, bug fix:

Release 3.1
- Player is not allowed to make endless hits!
      - Once player choose either hit or stand, it is the computer's turn
      - Once computer has chosen to hit or stand, it is the player's turn
      - Game ends when either computer or player busts.
      - Game also ends when player decides to stand and computer also decides to stand.

Release 4 -- Ace can be 1, or 11.
- Before endGame, if player has an ace, player can choose whether they want the ace to be 1, 11 or 10
- what happens if a player has two aces!?!?!?!?
- Computer can also choose whether it wants its ace to be 1, 11 or 10.
- update FE game instructions for new logic


Release 5 - make it pretty pretty for monday's submission

nice button effects
// https://codepen.io/kocsten/pen/rggjXp
//https://codepen.io/vitor-siqueira/pen/xNBExN
// https://codepen.io/giana/pen/BZaGyP

Code logic first, then make it prettyyyyyy~~~
Design style - DARK UI glowy glowy
*/



// Your goal in blackjack is to beat the dealer’s hand without going over 21. 
// You’ll receive 2 cards at the beginning of each round, and you’ll add up the values of these cards. 
// Cards 2-10 have face value; King, Queen, Jack are worth 10; and Aces are either a 1 or an 11 — it’s up to you to decide.
// The dealer also draws two cards. The aim of the game is to beat his hand (have a higher hand) without going over 21.
// If you would like the dealer to deal you another card, you tell him “hit”
// If you do not want to be dealt another card, you “stand”
// “Busting” is when the sum of your hand is over 21. 
// The winner of the round is whoever has the highest hand without going bust. 