function removeDuplicates(arr) {
  //a key value mappping where key is the element and value is the frequency of that element
  const count = {};

  arr.forEach((value) => {
    //if exists it takes count[value] or it takes o if the element is not added to count
    //Time complexity: O(n)
    //space complexity: O(n)
    count[value] = (count[value] || 0) + 1;
  });

  return arr.filter((value) => {
    return count[value] === 1;
  });
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
