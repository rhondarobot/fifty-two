// 2A
class BallGame {
  constructor(home, away) {
    this.homeName = home.name;
    this.awayScore = away.firstHalf.score + away.secondHalf.score;
    this.awayName = away.name;
    this.homeScore = home.firstHalf.score + away.secondHalf.score;
    // An Example of binding this to a function
    this.AverageHalf = this.AverageHalf.bind(this);
  }

  introduction() {
    return `${this.homeName} will be facing the ${this.awayName}`;
  }

  awaySteals() {
    // Let's deconstruct away!
    const { firstHalf, secondHalf } = away;
    return firstHalf.steals + secondHalf.steals
  }

  get homeSteals() {
    // Using a getter we can bind to a variable.
    return home.firstHalf.steals + home.secondHalf.steals;
  }

  // Notice that we do not need to reference after binding it
  AverageHalf() {
    const average = ((away.firstHalf.score + home.firstHalf.score) / 2) + ((away.secondHalf.score + home.secondHalf.score) / 2) / 2;
    return average;
  }
}

// 2B Extend our class to compute a winner
class Winner extends BallGame {
  winner() {
    return this.homeScore > this.awayScore ? `${this.homeName} Win!` : `${this.awayName} Win!`
  }
}

// 2C Create Our Objects
var home = {
  name: 'Hoosiers',
  firstHalf: {
    score: 52,
    steals: 8,
  },
  secondHalf: {
    score: 60,
    steals: 9,
  }
}

var away = {
  name: 'Jayhawks',
  firstHalf: {
    score: 52,
    steals: 3,
  },
  secondHalf: {
    score: 53,
    steals: 12,
  }
}

const Game = new BallGame(home, away);
const ExtendedBallGame = new Winner(home, away);

console.log('Make an introduction:', Game.introduction());
console.log('Our Base Class:', Game);
console.log('calling our extend:', ExtendedBallGame.winner());
console.log('Our Average points per half:', Game.AverageHalf());
console.log('After Desconstruction:', Game.awaySteals());
console.log('Use a getter:', Game.homeSteals);
