import React from 'react';
import './loading.css';

const Loading =()=>{
    return(
        <div className='load-container'>
            <div id="loader">

                <div id="back"></div>
                <div id="side"></div>
            </div>
            <div id='space'></div>
            
            <h2 align='center' >Aman: Generating your webpage, please wait...</h2>
        </div>
    )
}

export default Loading;