const array1 = [1,2,-1,3];
//Put output inside the UL and LI tag to output in LIST
let filterMap = array1
            .filter(a => a >= 0)
            .map(n => '<li>'+ n + '</li>');
let output = '<ul>' + filterMap.join('') + '</ul>';       

console.log(output);

/* 
Expected Output is:
<ul><li>1</li><li>2</li><li>3</li></ul>
*/