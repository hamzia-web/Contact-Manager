import React from 'react'
import spinnerImg from '../../assests/images/spinning-loading.gif'

let Spinner = () =>{
    return(
        <React.Fragment>
            <div>
                <img src={spinnerImg} alt="Spinner" className="d-block m-auto" width="200px"/>
            </div>
        </React.Fragment>
    )
}

export default Spinner