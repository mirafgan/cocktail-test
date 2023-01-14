import { Component } from "react";
import Cocktail from "./Card";
import CocktailService from "./Cocktailservice";
import { Spinner  } from 'react-bootstrap';

class Random extends Component{
    constructor(props){
        super(props);
        this.state = {data: '',isloaded: false};
    }
    componentDidMount(){
        const cocktails = new CocktailService();
        cocktails.getRandomData().then(res=> {
            this.setState({data: res.drinks})
        })
    }
    render(){
        return(
                <>
                {this.state.data !== '' ? this.state.data.map((item)=>
                 <Cocktail 
                img={item.strDrinkThumb}
                title={item.strDrink}
                text={item.strInstructions}
                key={item.idDrink}
                 /> )  
                : <Spinner/> }
            </>
        )
    }
}
export default Random;