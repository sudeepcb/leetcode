var parenthesis = "((((([{])";

console.log(validParenthesis(parenthesis));
function validParenthesis(parenthesis){
    var queue = [];

    for (let index = 0; index < parenthesis.length; index++) {

        if(index == 0 && (parenthesis[index] == ')' || parenthesis[index] == '}' || parenthesis[index] == ']') ){
            return false;
        }

        if(parenthesis[index] == '(' || parenthesis[index] == '{' || parenthesis[index] == '['){
            console.log("enter 1");
            queue.push(parenthesis[index]);
            continue;
        }
        
            if(parenthesis[index] == ')' && parenthesis[index - 1] == '(' ){
                console.log('enter 2');
                queue.pop();
                continue;
            }
            if(parenthesis[index] == '}' && parenthesis[index - 1] == '{' ){
                console.log('enter 2');
                queue.pop();
                continue;
            }
            if(parenthesis[index] == ']' && parenthesis[index - 1] == '[' ){
                console.log(parenthesis[index]);
                console.log('enter 2');
                queue.pop();
                continue;
            }

    }

    return queue.length === 0;
    
}



