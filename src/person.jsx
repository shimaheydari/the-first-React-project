import React from 'react';

const Person = props => {
    return (

        <div className="box">

            <div className="text">
                {props.children}
            </div>
            <div className="btns">
                <button type="button" className="btn-agree">agree</button>
                <button type="button" className="btn-deagree" >deagree</button>

            </div>
        </div>
    )

}
export default Person;