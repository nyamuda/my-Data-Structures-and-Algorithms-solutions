//1
var conta=(obj,val)=> {
    let arr1=Object.values(obj); let add={};
    function checkValue(myArr,val) {
        let copy=myArr.slice();
        let item=copy.shift();
       if(item===undefined) {
           if(Object.keys(add).length===0) {
               return false
           }
           else {
               arr1=Object.values(add); add={};
               return checkValue(arr1,val)
           }
       }
         if(typeof(item)=='string'|| typeof(item)=='number') {
            if(item===val) {
                return true
            }
            else {
                return checkValue(copy,val)
            }
        }
        if(typeof(item)==='object') {
            if(item.hasOwnProperty(val)) {
                return true
            }
            else {
                Object.assign(add,item);
                return checkValue(copy,val)
            }
        }
    } return checkValue(arr1,val)
}




//2

function test1(arrays) {
    let arr=arrays.slice(); let newArr=arrays.slice();
    let num=0;
    function movers(par) {
        if(arr.length===0) {
            return num
        }
        let item=arr.shift();
        if(typeof(item)==='object') {
            newArr=[].concat.apply([],newArr);
            return movers(arr)
        }
        else {
            ++num;
            return newArr.length
        }
        
    }
    return movers(arrays)
}
//or 
function test1(arrays) {
    let arr=arrays.slice(); let newArr=arrays.slice();
    let num=0;
    function movers(par) {
        if(arr.length===0) {
            return newArr.length
        };let copy=par.slice();
        let item=copy.shift();
        if(typeof(item)==='object') {
            newArr=[].concat.apply([],newArr);
            return movers(item)
        }
        else if(typeof(item)==='number')  {
            if(copy.length>0) {
              return movers(copy)
            }
            else {
                return movers(arr)
            }
        }
    }
    return movers(arrays)
}

/*this function works by using helper method recursion. 
The helper function checks every value of arrays. If a value is a number, 
its pushe to the num array and if its an array(object), then it pushed to
the arr array. When all the the numbers in the main array are added to num i.e
when arrays.length==0, then the inner function calls arr(the one inner arrays have been added to) 
recusively and the same process is repeated until all inner arrays are 
removed(arr==0) and all the numbers are added to num*/

function test1(arrays) {
    let arr=[]; 
    let org=arrays.slice();
    let num=[]
    function move(par) {
        let copy=par.slice();
        let item=copy.shift();
        //if all the inner arrays have been dealt with(or if arr is empty), then add the numbers have been added to num
        if(arr.length==0 && copy.length==0) {
            return num.length;
        }
        //if all the numbers have been added to num, then run the inner arrays in arr
        if(copy.length==0) {
            return move(arr);
            arr=[];
        }
        //if an inner array is found, push it on to arr
        if(typeof(par)=='object') {
            arr.push(item)
            return move(copy)
        }
        //if a number is found, push it on to num
        if(typeof(item)=='number') {
            num.push(item);
            return move(copy)
        }
    }
}

