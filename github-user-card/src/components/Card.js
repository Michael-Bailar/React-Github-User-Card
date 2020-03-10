import React from "react"

const Card = (props) => {
    return (
        <div className="my-data-card">
            <img className="profile-img" src={props.myData.avatar_url} alt="users profile image"/>
            <h1>Michael Bailar</h1>
            <h2>Github Tag: {props.myData.login}</h2>
        </div>
    )
    
}

export default Card