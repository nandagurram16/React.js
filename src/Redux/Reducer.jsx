
const initialstate = 0

function countreducer(state = initialstate , action){

    const{type ,payload} = action;

    switch (type){
        case "Increment":
            return state+1;
            case "decrement":
                return state-1;
                default:
                    return state
    }
}

export default countreducer