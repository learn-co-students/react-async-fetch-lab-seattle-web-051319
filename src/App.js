// create your App component here
import React, {Component} from 'react'

export default class APP extends Component {
    state = {
        astronauts: []
    }
    componentDidMount (){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(json => this.setState({astronauts: json}))
    }

    render(){
        return(
            <div>{console.log(this.state)}</div>
        )
    }
}
