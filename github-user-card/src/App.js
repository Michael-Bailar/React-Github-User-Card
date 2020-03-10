import React from 'react'
import axios from "axios"
import './App.css'
import Card from "./components/Card"


class App extends React.Component {

  state= {
    myData: {},
    usersData:{}
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/michael-bailar")
    .then(res => {
      console.log("myres", res)
      this.setState({
        myData: res.data
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
      </div>
    );
  }
}

export default App
