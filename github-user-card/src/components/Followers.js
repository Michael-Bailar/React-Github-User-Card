import React from "react"

const Followers = ({usersData}) => {
    usersData.forEach(user => console.log(user))

    return (
        <div>
            {usersData.map(user => {
                return(
                    <div className="card">
                        <img className="profile-img" src={user.avatar_url} alt="user avatar" />
                        <h1>{user.login}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Followers