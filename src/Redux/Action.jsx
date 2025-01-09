
export const increase = () => dispatch =>{
    dispatch ({
        type:'Increment'
    })
}

export const decrease = () => dispatch =>{
    dispatch({
        type:'Decrement'
    })
}