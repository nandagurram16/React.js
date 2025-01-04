import React from 'react'

function Map() {
    // const arr=['nanda','guram','kumar','names']

    const obj = [
        {
            id:1,
            title:'react js'
        },
        
        {
            id:2,
            title:'node js'
        },

        {
            id:3,
            title:'mongodb'
        },

        {
            id:4,
            title:'javascript'
        }
    ]
    return (
        <div>

            {/* array */}

            {/* {
                arr.map(
                    (values,index) => <li key={index}>{values}</li>
                )
            } */}

            {/* object */}

            {
                obj.map(
                    (values,id) => <li key={id}>{values.id}</li>
                )
            }
            
        </div>
    )
}

export default Map
