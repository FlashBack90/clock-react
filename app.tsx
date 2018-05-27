import {Component} from "react";
import * as React from "react";

export class App extends Component{

    constructor(props: any){
        super(props)
    }
    createClock(){
        let date = new Date();
        return date.getHours() + ":"+ date.getMinutes() + ":" + date.getSeconds();
    }
    componentDidMount(){
        setInterval( () =>
        {this.setState({})

        },1000)
    }
    public render(){
        return <div>{this.createClock()}</div>
    }
}
