import React, { Component } from 'react'

import axios from 'axios';
import Recipe from './Recipe';

class Main extends Component {
   
   
    constructor(props){
        super(props);
        this.state={
            serverLink: process.env.REACT_APP_SERVER,
            showDataRecipe : false,
            recipes :[]
        }
    }

//  addToFav=async()=> {
//     await axios.post(`${this.state.serverLink}/addToFavorite`,recipeData)
  
// }
    componentDidMount = async () =>{
 const recipes = await axios.get(`http://localhost:3001/recipes?ingredient=chicken`);
   console.log(recipes.data);
   this.setState({
    showDataRecipe:true,
    recipes: recipes.data
   })
}

    render() {
        return (
       <>
         <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', padding: '5rem',marginLeft:'10px' }}

>
       {this.state.showDataRecipe &&
         this.state.recipes.map((item,idx)=>{
             return(
                 <Recipe
                 item = {item}
                 key ={idx}

                 />
             )
         })
         }
         </div>
       </>
        )
    }
}

export default Main ;
