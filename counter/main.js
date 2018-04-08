const Counter = React.createClass({

    getInitialState(){
        return {
            value: 0
        }
    },
    handleDecrement(){
        console.log('before', this.state.value);
        this.setState({
            value: this.state.value - 1
        }, () => {
            console.log('after2', this.state.value);// Выполнится после того как состояние уже поменяется
        });
        console.log('after', this.state.value);
    },
    handleIncrement(){
        this.setState({
            value: this.state.value + 1
        });
    },
    render(){
        return(
            <div>
                <button onClick={ this.handleDecrement } >-</button>
                <h1>
                    Value: { this.state.value } 
                </h1>
                <button onClick={ this.handleIncrement } >+</button>
            </div>
        )
    }
})

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);