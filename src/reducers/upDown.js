const initialstate = 10;
var plusValue =[]
const changeTheNumber=(state = initialstate, action)=>{
    switch(action.type){
        case "INCREMENT": return state + 1;
        case "DECEREMENT": return state - 1; 
        default : return state;
    }

}

export default changeTheNumber;