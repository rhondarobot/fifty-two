package main

import "fmt"

// Half - Used to construct a basketball half
type Half struct {
	// 3a - We Construct a struct for our halves
	score  int
	steals int
	blocks int
}

// Game - Used to construct a basketball game
type Game struct {
	// 3b We construct a game using our predefined Half Struct, we can simply place it into the game as needed.
	// We could also deconstruct this into a team struct if we wanted to, but let's just use this for now.
	Home struct {
		name       string
		firstHalf  Half
		secondHalf Half
	}
	Away struct {
		name       string
		firstHalf  Half
		secondHalf Half
	}
}

// main - prints a simple golang
func main() {
	//Construct the game
	c := &Game{
		Home: {
			name: "Jayhawks",
			firstHalf: {
				score:  30,
				steals: 8,
				blocks: 1,
			},
			secondHalf: {
				score:  30,
				steals: 3,
				blocks: 5,
			},
		},
		Away{
			name: "Jayhawks",
			firstHalf: {
				score:  30,
				steals: 8,
				blocks: 1,
			},
			secondHalf: {
				score:  39,
				steals: 2,
				blocks: 1,
			},
		},
	}
	// Let's print a game
	fmt.Println("hello")
}
