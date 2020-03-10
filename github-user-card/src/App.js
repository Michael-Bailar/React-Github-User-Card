import React from 'react'
import axios from "axios"
import './App.css'
import Card from "./components/Card"
import Followers from "./components/Followers"


class App extends React.Component {

  state= {
    myData: {},
    usersData:{}
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/michael-bailar")
    .then(res => {
      console.log("my res", res)
      this.setState({
        myData: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })

    axios.get("https://api.github.com/users/Michael-Bailar/followers")
    .then(res => {
      console.log("users res", res)
      this.setState({
        usersData: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    // console.log("my state", this.state.myData)
    // console.log("users state", this.state.usersData)
    return (
      <div className="App">
        <Card myData={this.state.myData}/>
        <Followers usersData={this.state.usersData}/>
      </div>
    );
  }
}

export default App
