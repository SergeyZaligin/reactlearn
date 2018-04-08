const TWEETS = [
    {
        id: 1,
        author: 'bennett83',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        image: 'https://dummyimage.com/400x200/000/fff',
        avatar: 'https://dummyimage.com/100x100/000/fff',
        likes: 223,
        retweets: 212
    },
    {
        id: 2,
        author: 'SuslikEst',
        text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.',
        image: 'https://dummyimage.com/400x200/000/fff',
        avatar: 'https://dummyimage.com/100x100/000/fff',
        likes: 221,
        retweets: 12
    },
    {
        id: 3,
        author: 'Cobweb',
        text: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.',
        image: 'https://dummyimage.com/400x200/000/fff',
        avatar: 'https://dummyimage.com/100x100/000/fff',
        likes: 21,
        retweets: 22
    },
    {
        id: 4,
        author: 'Cobweb',
        text: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.',
        image: '',
        avatar: 'https://dummyimage.com/100x100/000/fff',
        likes: 0,
        retweets: 0
    },
];

function shuffle(arr){
    const result = [...arr];

    result.sort(() => 0.5 - Math.random());

    return result;
}

const Tweet = React.createClass({

    render(){
        const {
            avatar,
            author,
            text,
            image,
            retweets,
            likes
        } = this.props;
        return(
            <div className="tweet">
                <img 
                    className="tweet-avatar" 
                    src={ avatar } 
                    alt={ author }
                />
                <div className="tweet-body">
                    <h3 className="tweet-author"> { author } </h3>
                    <p className="tweet-text">{ text }</p>
                    {
                        image && <img src={ image } alt={ author } />
                    }
                    <br />
                    <div className="tweet-stat-ico">
                        <span className="fa fa-heart tweet-likes">
                            Likes: { likes || null }
                        </span> 
                            /  
                        <span className="fa fa-retweet tweet-retweets"> 
                            Retwit: { retweets || null }
                        </span>
                    </div>
                    
                </div>
            </div>
        )
    }
});

const Feed = React.createClass({

    getInitialState(){
        return {
            tweets: []
        }
    },

    handleShuffle(arr){
        this.setState({
            tweets: shuffle(this.state.tweets)
        })
    },

    handleAdd(){
        const { tweets } = this.state;

        if(tweets.length < TWEETS.length){
            this.setState({
                tweets: [
                    ...tweets,
                    TWEETS[tweets.length]
                ]
            })
        }
    },

    render(){

        const tweets = this.state.tweets.map(tweet => {
            
            return(
                <Tweet
                    key={ tweet.id }
                    avatar={ tweet.avatar }
                    author={ tweet.author }
                    text={ tweet.text }
                    image={ tweet.image }
                    retweets={ tweet.retweets }
                    likes={ tweet.likes }
                />
            );
        });
        // console.log(tweets);
        return (
            <div>
                <button onClick={ this.handleShuffle }>
                    Shuffle
                </button>
                <button onClick={ this.handleAdd }>
                    Add
                </button>
                { tweets }
            </div>
        );
    }
});



ReactDOM.render(
    <Feed />,
    document.getElementById('root')
);