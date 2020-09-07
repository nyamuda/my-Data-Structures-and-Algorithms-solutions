window.onload = function () {

    //NUMBER 1

    //getting all the children elements of the body
    let kids = document.body.children;

    /*
    let myId = (collect, nameId) => {
        let theElement = null;
 //loop through the children elements and if a child element has children as
well, rerun the same function and loop through the those children. 
        function searchId(par) {
            for (let i = 0; i < par.length; i++) {
                if (par[i].id == nameId) {
                    theElement = par[i];
                    return theElement
                }
                if (par[i].children.length > 0) {
                    searchId(par[i].children)
                }
            }
            return theElement
        }
        return searchId(collect)
    }
    let ele = myId(kids,'fooe');
    
*/
    //NUMBER 2


    let myId = (collect, nameId) => {
        let theElement = null;
        /* loop through the children elements and if a child element has children as
        well, rerun the same function and loop through the those children. */

        //Using a helper function searchId
        function searchId(par, nameId) {
            //converting the html collection using the spread operator
            let copy = [...par].slice();
            //if copy is empty nothing will will be executed, meaning the function will pop off the call stack.
            if (copy.length != 0) {
                let item = copy.shift();
                //as soon as an id is found, the function will return the element with that id.
                if (item.id == nameId) {
                    theElement = item;
                    return theElement
                }

                if (item.children.length > 0) {
                    searchId(item.children, nameId)
                }
                /* with the following code below, even if the function is rerun from the above if statement,
                the function will still excute it after reran function is poped off from the call stack.*/
                return searchId(copy,nameId);
            }
            return theElement
        }
        return searchId(collect, nameId) //searchId(collect)
    }

    console.log(myId(kids, "foo"));
    
    //Number 3
    
    let myTag = (collect, nameId) => {
        let allDivs=[];
        /* loop through the children elements and if a child element has children as
        well, rerun the same function and loop through the those children. */

        //Using a helper function searchId
        function searchId(par, nameId) {
            //converting the html collection using the spread operator
            let copy = [...par].slice();
            //if copy is empty nothing will will be executed, meaning the function will pop off the call stack.
            if (copy.length != 0) {
                let item = copy.shift();
                //as soon as an id is found, the function will return the element with that id.
                if (item.tagName.toLowerCase() == nameId) {
                    allDivs.push(item)
                }

                if (item.children.length > 0) {
                    searchId(item.children, nameId)
                }
                /* with the following code below, even if the function is rerun from the above if statement,
                the function will still excute it after reran function is poped off from the call stack.*/
                return searchId(copy,nameId);
            }
            return allDivs
        }
        return searchId(collect, nameId) //searchId(collect)
    }

    console.log(myTag(kids, "div"));

}




//n