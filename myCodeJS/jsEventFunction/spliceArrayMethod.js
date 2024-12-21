const splicingArray = document.querySelector('#spliceArray');
const array1 = [1, 2, 3, 4, 5, 6] //Original Array

//splicing method\\

//remove array splice(starts, NumberDeleted, AddedItem1, Added Item 2) => splice(2, 0, item1)
//remove the index[3] and 4
const removeArray = array1.splice(3, 2); // 3 here is where start the index to remove then 2 here is the number of items to remove starting from index[3]
//expected result is array1 = [1,2,3,6];

//inserting array text to index [3] and [4]
const addingArray = array1.splice(3, 0, "added1", "added2"); // 0 here means no item deleted followed by item added