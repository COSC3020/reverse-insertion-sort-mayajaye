# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

#### I've deduced that the average-case time complexity of insertion sort is $\Theta(n^2)$ by this reasoning:

The worst case of insertion sort has a time complexity of $\Theta(n^2)$ because it has a number of compares equal to the summation from i=0 to n-1 of i. By the arithmetic series sum formula, this summation equals $\frac{n(n-1)}{2}$, which simplifies to $\frac{n^2-n}{2}$. In terms of time complexity, the -n and $\frac{1}{2}$ are insignificant, so this simplifies to $\Theta(n^2)$. The average case of insertion sort would be about half the compares of the worst case, so if we compute the summation from i=0 to n-1 of $\frac{i}{2}$, we'll get $\frac{n^2-n}{4}$. This will still simplify to $\Theta(n^2)$, thus the average case is $\Theta(n^2)$.

#### Sources

I wasnt really sure mathematically how we got $\Theta(n^2)$ as the worst-case 
time complexity, so I used [this forum.](https://stackoverflow.com/questions/21211883/can-someone-explain-to-me-why-the-worst-case-for-insertion-sort-is-on2).

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."