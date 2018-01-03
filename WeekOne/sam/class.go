package main

import "fmt"

type Game struct {
  Home struct {
    score int
    name string
  }
  Away struct {
    score int
    name string
  }
}

func main() {
  fmt.Println(Game())
}
