['Apple', 'Google', 'Microsoft'].forEach( x => console.log(x));

['Apple', 'Google', 'Microsoft'].forEach((element, index, array) => console.log(element, index, array));


const stockData = [1, 2, 3, 4, undefined];
    //forEACH
    stockData.forEach(getBeta);
    function getBeta(beta) {
      console.table(beta); // the last with empty data will return (<empty string>)
      //console.log(Number(beta)); // Using Number() constructor the empty data will return zero value (0) since we use forEachLoop empty data will escape in ForEach
    }

    /* 
    Note:
    In For Each you cannot use the
    break;
    and
    continue;
    */