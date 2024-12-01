package main

import (
	"testing"
)

func TestSolve(t *testing.T) {
	t.Run("Test Solve part 1", func(t *testing.T) {
		gotPart1, _ := Solve("test_input.txt")
		wantPart1 := 2
		if gotPart1 != wantPart1 {
			t.Errorf("got %d, want %d", gotPart1, wantPart1)
		}
	})
	t.Run("Test Solve part 2", func(t *testing.T) {
		_, gotPart2 := Solve("test_input.txt")
		wantPart2 := 21
		if gotPart2 != wantPart2 {
			t.Errorf("got %d, want %d", gotPart2, wantPart2)
		}
	})

}

func BenchmarkSolve(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Solve("input.txt")
	}
}
