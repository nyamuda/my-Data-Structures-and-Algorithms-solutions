//1
/*if you want to check or change a specific value in the object, 
loop through the properties of the of the object using the for in loop, and 
if it happens that one of the values is an object recall the helper fuction
recursively*/
function container(arg,val) {
    let obj=arg;
    function helperFunction(par,num) {
        for(let key in par) {
            if(par[key]===val) {
                return true
            }
            if(typeof(par[key])=='object' && 
               Array.isArray(par[key])==false) {
                return helperFunction(par[key],val)
            }
            
            return false 
        }
    }
    return helperFunction(obj,val)
}

 //or
var conta = (obj, val) => {
    let arr1 = Object.values(obj);
    let add = {};

    function checkValue(myArr, val) {
        let copy = myArr.slice();
        let item = copy.shift();
        if (item === undefined) {
            if (Object.keys(add).length === 0) {
                return false
            } else {
                arr1 = Object.values(add);
                add = {};
                return checkValue(arr1, val)
            }
        }
        if (typeof (item) == 'string' || typeof (item) == 'number') {
            if (item === val) {
                return true
            } else {
                return checkValue(copy, val)
            }
        }
        if (typeof (item) === 'object') {
            if (item.hasOwnProperty(val)) {
                return true
            } else {
                Object.assign(add, item);
                return checkValue(copy, val)
            }
        }
    }
    return checkValue(arr1, val)
}




//2



/*this function works by using helper method recursion. 
The helper function checks every value of arrays. If a value is a number, 
its pushed to the myIntegers array and if its an array(object), then it pushed to
the innerArrays array. When all the the numbers in the main array are added to myIntegers i.e
when arrays.length==0, then the inner function calls extractIntegers(the one inner arrays have been added to) 
recusively and the same process is repeated until all inner arrays are 
removed(arr==0) and all the numbers are added to myIntegers*/
function realSize(arrays) {
    let innerArrays = [];
    let myIntegers = [];

    function extractIntegers(par) {
        let size1 = par.length;
        let size2 = innerArrays.length;

        //if all the inner arrays have been dealt with(or if innerArrays is empty),then all the integers have been added to myIntegers
        if (size2 == 0 && size1 == 0) {
            return myIntegers.length;
        }
        //if all the integers are added to myIntegers, then run the inner arrays in innerArrays
        if (size1 == 0) {
            return extractIntegers(innerArrays.shift());

        }
        let copy = par.slice();
        let item = copy.shift();
        //if an inner array is found, push it on to innerArrays
        if (typeof (item) == 'object') {
            innerArrays.push(item)
            return extractIntegers(copy)
        }
        //if a number is found, push it on to myIntegers
        if (typeof (item) == 'number') {
            myIntegers.push(item);
            return extractIntegers(copy)
        }
    }
    return extractIntegers(arrays)
}

//squaring integers
function sumSquares(l) {
    let innerArrays = [];
    let myIntegers =0;

    function extractIntegers(par) {
        let size1 = par.length;
        let size2 = innerArrays.length;

        //if all the inner arrays have been dealt with(or if innerArrays is empty),then all the integers have been added to myIntegers
        if (size2 == 0 && size1 == 0) {
            return myIntegers;
        }
        //if all the integers are added to myIntegers, then run the inner arrays in innerArrays
        if (size1 == 0) {
            return extractIntegers(innerArrays.shift());

        }
        let copy = par.slice();
        let item = copy.shift();
        //if an inner array is found, push it on to innerArrays
        if (typeof (item) == 'object') {
            innerArrays.push(item)
            return extractIntegers(copy)
        }
        //if a number is found, push it on to myIntegers
        if (typeof (item) == 'number') {
            let square=item*item;
            myIntegers+=square
            return extractIntegers(copy)
        }
    }
    return extractIntegers(l)
}

//Recursive Replication
//1
function replicate(times,number) {
    let arr=[];
    let numberOfTimes=times;
    function addNum() {
        if(numberOfTimes<=0) {
            return arr
        }
        else {
            arr.push(number);
            --numberOfTimes;
            return addNum()
        }
    }
    return addNum()
}

//index
function search(arr,num) {
    let indx=0;
    function findIndx(par) {
        let copy=par.slice();
        if(copy.length===0) {
            return -1
        }
        let item=copy.shift();
        if(item===num) {
            return indx
        }
        else {
            ++indx
            return findIndx(copy)
        }
    }
    return findIndx(arr)
}

//index binary search algorithm
function search(arr,num) {
    let org=arr.copy;
    let mid=Math.round((arr.length-1)/2);
    let indx=0;
    function myIndx(par) {
        let copy=par.slice();
        if(copy.length==0) {
            return -1
        }
        if(arr[mid]==num) {
           
        }
        if(copy.length==2) {
            
        }
        if(copy[mid]<num) {
            let moreArr=copy.slice(mid,copy.length-1);
            mid=Math.round((moreArr.length-1)/2);
            return myIndx(moreArr)
        }
        else if(copy[mid]>num) {
            let lessArr=copy.slice(0,mid);
            mid=Math.round((lessArr.length-1)/2);
            return myIndx(lessArr)
        }
        }
        
    }
}

//convert numbers to string

function stringifyNumbers(arg) {
    let myObj=arg;
    function move(par) {
        for(let key in par) {
            if(typeof(par[key])==='number') {
                par[key]=par[key].toString()
            }
            if(typeof(par[key])=='object' && 
               Array.isArray(par[key])==false) {
                return move(par[key])
            }
            
        }
        return myObj
    }
    return move(myObj)
}



function F(n) {
    if(n==0) {
        return 1
    }
    return n-M(F(n-1))
}

function M(n) {
    if(n==0) {
        return 0
    }
    return n-F(M(n-1))
}