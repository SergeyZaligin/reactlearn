const Timer = React.createClass({

    getInitialState(){
        return {
            secondElapse: 0
        }
    },

    componentDidMount(){
       this.timer = setInterval(()=>{
            this.setState({
                secondElapse: this.state.secondElapse + 1
            });
        }, 1000);
    },
    
    componentWillUnmount(){
        clearInterval(this.timer);
    },

    render(){
        return(
            <div>
                <h1>
                    Timer: { this.state.secondElapse } 
                </h1>
            </div>
        )
    }
})

ReactDOM.render(
    <Timer />,
    document.getElementById('root')
);