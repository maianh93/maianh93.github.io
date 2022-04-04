import React from 'react'
import { Input } from 'semantic-ui-react'

const InputSearch = (props) => {
    return (
            <Input className='input' onChange={props.onChange} icon='search' placeholder='Search...' />
        
    );
}
    

export default InputSearch