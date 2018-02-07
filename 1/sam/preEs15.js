// 1A Creating a Class
function BallGame(home, away) {
  this.homeName = home.name;
  this.awayScore = away.firstHalf.score + away.secondHalf.score;
  this.awayName = away.name;
  this.homeScore = home.firstHalf.score + away.secondHalf.score;
}

// 1B Determine the Winner
BallGame.prototype.winner = function() {
  var winner = this.homeScore > this.awayScore ? `${this.homeName} Win!` : `${this.awayName} Win!`
  return winner;
}

// 1C Create Our Objects
var home = {
  name: 'Hoosiers',
  firstHalf: {
    score: 52,
  },
  secondHalf: {
    score: 60,
  }
}

var away = {
  name: 'Jayhawks',
  firstHalf: {
    score: 52,
  },
  secondHalf: {
    score: 53
  }
}

var newGame = new BallGame(home, away);

// 1A Result
console.log('newGame', newGame);

// 1B Result
console.log('newGame.winner', newGame.winner());
