const count = 0

export default function reducer (state =count,action){
    const {type,payload} = action;
    switch (type){
        case 'increment':
            return count+1;
            case 'decrement':
                return count-1;
                default:
                    return count;
    }
}