package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	part1, part2 := Solve("input.txt")
	fmt.Println(part1, part2)
}

func Solve(fileName string) (solvePart1, solvePart2 int) {
	firstCol, secondCol := IntColsFromInput(fileName)
	sort.Ints(firstCol)
	sort.Ints(secondCol)

	part1 := 0
	for i, v := range firstCol {
		diff := Diff(secondCol[i], v)
		part1 += diff
	}

	//part 2
	part2 := 0
	for _, v := range firstCol {
		part2 += Bs(secondCol, v)
	}
	return part1, part2
}

func IntColsFromInput(fileName string) ([]int, []int) {
	f, err := os.Open(fileName)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	scanner := bufio.NewScanner(f)
	var firsts []int
	var seconds []int
	for scanner.Scan() {
		first, second, found := strings.Cut(scanner.Text(), "   ")
		if !found {
			panic("not found")
		}
		num1, err := strconv.Atoi(first)
		if err != nil {
			panic(err)
		}
		num2, err := strconv.Atoi(second)
		if err != nil {
			panic(err)
		}
		firsts = append(firsts, num1)
		seconds = append(seconds, num2)
	}
	return firsts, seconds
}

func Bs(s []int, x int) int {
	l, r := 0, len(s)
	for l < r {
		m := (l + r) / 2
		if s[m] == x {
			res := FindNumOfOccurences(s, m)
			return res * x
		}
		if s[m] < x {
			l = m + 1
		} else {
			r = m
		}
	}
	return 0
}

func FindNumOfOccurences(nums []int, foundIndex int) int {
	count := 1
	for i := foundIndex + 1; i < len(nums); i++ {
		if nums[i] == nums[foundIndex] {
			count++
		} else {
			break
		}
	}
	for i := foundIndex - 1; i >= 0; i-- {
		if nums[i] == nums[foundIndex] {
			count++
		} else {
			break
		}
	}
	return count
}

func Diff(a, b int) int {
	if a > b {
		return a - b
	}
	return b - a
}
