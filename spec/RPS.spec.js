const whoWon = require('../RPS.js');

describe("whoWon", function() {
  it("should return 'TIE!' when both arguments are the same", function() {
    const output = whoWon('rock', 'rock');
    expect(output).toEqual('TIE!');
  });

  it("should return 'Player 2 wins!' if arguments are 'rock', 'paper'", function() {
    const output = whoWon('rock', 'paper');
    expect(output).toEqual('Player 2 wins!');
  });

  it("should return 'Player 2 wins!' if argument are paper, scissors", function() {
    const output = whoWon('paper', 'scissors');
    expect(output).toEqual('Player 2 wins!');
  });

  it("should return 'Player 2 wins!' if arguments are scissors, rock", function() {
    const output = whoWon('scissors', 'rock');
    expect(output).toEqual('Player 2 wins!');
  });

  it("should return 'Player 1 wins!' if arguments are rock, scissors", function() {
    const output = whoWon('rock', 'scissors');
    expect(output).toEqual('Player 1 wins!');
  });

  it("should return 'Invalid input.  Please try again.' if either argument is anything other than rock, paper, or scissors", function() {
    const output = whoWon('window', 'paper');
    expect(output).toEqual('Invalid input.  Please try again.');
    const output2 = whoWon('paper', 'cat');
    expect(output2).toEqual('Invalid input.  Please try again.');
  });
});