import React from 'react';
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }
    componentDidMount(){
        this.TimerId = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.TimerId);
    }
    tick() {
        this.setState(
            {date : new Date()}
        );    
    }
    render(){
        return(
            <div>
                <h1>Hello!!</h1>
                <h2>Time is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

}
export default Clock;