import React from 'react'
import {useCode} from './CodeContext';

const Page =()=>{
    const {code}=useCode();
    return(
        <div>
            <h2>Generated Code</h2>
            <div dangerouslySetInnerHTML={{__html:code}}/>        
        </div>
    )
};

export default Page;