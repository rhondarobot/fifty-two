package main

import (
	"fmt"
)

// I - is our example interface
type I interface {
	M() string
}

// Team - struct to declare our team's data
type Team struct {
	mascot string
	school string
}

type T struct {
	name     string
	venue    string
	homeTeam Team
	awayTeam Team
}

func (t T) M() string {
	return t.name
}

func Announce(i I) {
	fmt.Printf("Todays Game is %s\n", i.M())
}

func main() {

	gameData := T{
		name: "Kansas Vs. Syracuse",
		awayTeam: Team{
			school: "Kansas",
			mascot: "Jayhawks",
		},
		homeTeam: Team{
			school: "Syracuse",
			mascot: "Orangemen",
		},
	}

	Announce(gameData)
}
