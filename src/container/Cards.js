import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchField from '../SearchField';
import './Cards.css';

class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {robots: [], text: ''}
    }
    
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(res => res.json())
          .then(users => this.setState({robots: users}))
          .then(ans =>console.log(this.state.robots))
    }

    handleChange = e =>{
       this.setState({text: e.target.value})
    }

    render(){
        const {robots, text} = this.state

        const searchedCards = robots.filter(robot => {
          return  robot.name.toLowerCase().includes(text.toLowerCase())
        })

        return (
            <div>
                <h1 className='Title'>Robots App</h1>
                <div className='Contant'>
                    <SearchField  handleChange={this.handleChange}/>
                     <CardList robots={searchedCards} />
                </div>
            </div>
        )
    }
};

export default Cards;