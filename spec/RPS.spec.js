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
});