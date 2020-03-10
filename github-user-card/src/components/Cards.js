import React from "react"
import Card from "./Card"
import axios from "axios"



class Cards extends React.Component {
    
    constructor() {
        super()
        this.state = {
            userMe: []
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/Michael-Bailar')
        .then( response => {
        console.log(response);
        this.setState({
            users: response.data
        })
        })
        .catch( err => {
        console.log(err);
        })

        axios.get('https://api.github.com/users/Michael-Bailar/followers')
            .then(response => {
                const followersArray = [];
                const followerLinkArray = [];
                response.data.forEach(user => {
                    followersArray.push(user.login);
                })
                console.log("followers array", followersArray);
                followersArray.forEach(item => {
                    followerLinkArray.push(`https://api.github.com/users/${item}`);
                });
                followerLinkArray.forEach(link => {
                    axios.get(link)
                        .then( response => {
                            console.log("", response);
                        })
                        .catch( err => {
                            console.log(err);
                        })
                    })
                })
                .catch(error => {
                    console.log(error);
                })

    }

    render() {
        return (
            <div>
                <Card />
            </div>
        )
    }
}

export default Cards