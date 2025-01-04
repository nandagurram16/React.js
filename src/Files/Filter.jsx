import React from 'react'

const Filter = () => {

    // const names =['nanda','nandu','gurram','book']
    // const filternames = names.filter(name => name.includes('n'))

    const array = [10,20,30,40,50,60]

    const filterd = array.filter(item => item > 40)
  return(
    <div>
        {/* {
            filternames.map(
                values => <li>{values}</li>
            )
        } */}

        {
            filterd.map(
                items => <li>{items}</li>
            )
        }
    </div>
  )
}

export default Filter 
