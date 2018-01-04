package main

import "fmt"

type Team struct {
	mascot string
	school string
}

type Half struct {
	Points  int
	Steals  int
	Blocks  int
	Fouls   int
	Assists int
}

type Home struct {
	Team       Team
	firstHalf  Half
	secondHalf Half
}
type Away struct {
	Team       Team
	firstHalf  Half
	secondHalf Half
}
type Game struct {
	Home Home
	Away Away
}

type

func main() {

	coverage := Game{
		Home: Home{
			Team: Team{
				school: "Kansas University",
				mascot: "Jayhawks",
			},
			firstHalf: Half{
				Points:  52,
				Steals:  2,
				Blocks:  4,
				Fouls:   3,
				Assists: 5,
			},
			secondHalf: Half{
				Points:  30,
				Steals:  3,
				Blocks:  7,
				Fouls:   2,
				Assists: 10,
			},
		},
		Away: Away{
			Team: Team{
				school: "Stanford",
				mascot: "Sequoias",
			},
			firstHalf: Half{
				Points:  45,
				Steals:  2,
				Blocks:  4,
				Fouls:   3,
				Assists: 5,
			},
			secondHalf: Half{
				Points:  30,
				Steals:  3,
				Blocks:  7,
				Fouls:   2,
				Assists: 10,
			},
		},
	}

	fmt.Println(coverage)
}
