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
});