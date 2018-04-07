const HelloComponent = React.createClass({

    /** 
     * Возвращает начальное состояние компонента
    */
    getInitialState(){
        return {
            name: 'Noname'
        }
    },

    handleChange(e){
        this.setState({
            name: e.target.value
        });
    },

    render(){
        return(
            <div>
                <input 
                    placeholder="Enter your name"
                    name="name"
                    type="text"
                    value={ this.state.name }
                    onChange={ this.handleChange }
                />
                <h1>Hello { this.state.name } !!!</h1>
            </div>
        )
    }
})

ReactDOM.render(
    <HelloComponent />,
    document.getElementById('root')
);