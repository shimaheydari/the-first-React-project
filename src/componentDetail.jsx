import React from 'react';


const ComponentDetail = props => {
    return (
        <div className="profile">
            <div className="pic-profile">
                <img src={require("./img/profile.jpg")} />
            </div>
            <div className="text-profile">
                <div className="name-profile">
                    <h4>{props.author}</h4>
                    <p>{props.time}</p>
                </div>
                <div className="dis-profile">
                    <p>{props.comment}</p>
                </div>
            </div>
        </div>
    )
}
export default ComponentDetail;