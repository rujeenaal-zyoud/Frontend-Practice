import React, { Component } from 'react';
import axios from 'axios';
import FavRecipe from './FavRecipe';
import UpdateForm from './UpdateForm';


class FavoriteRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverLink: process.env.REACT_APP_SERVER,
            recipes: [],
            showFavRecipes: false,
            showModelForm: false,
            // chosenRecipe:{}
            recipeName: '',
            recipeImage: '',
            index: 0,
            label:'',
            image:'',
        }
    }

    componentDidMount = async () => {
        const recipes = await axios.get(`http://localhost:3001/getFavoriteRecipies`)

        this.setState({
            recipes: recipes.data,
            showFavRecipes: true
        })
    }

    deleteRecipe = async (index) => {
        const id = this.state.recipes[index]._id;
        const recipes = await axios.delete(`http://localhost:3001/deleteRecipe/${id}`)
        this.setState({
            recipes: recipes.data,

        })
    }
    showModel = async(e) => {
        this.setState({
            showModelForm: true
        })
    }

    hiddenModel = async(e) => {
        this.setState({
            showModelForm: false
        })
    }



    showUpdateFormFunc =  (idx) => {
        const chosenR = this.state.recipes[idx]
        console.log(chosenR);
          this.setState({
            showModelForm: true,
            label: chosenR.label,
            image: chosenR.image,
            index: idx

        })
this.showModel();
    }

    updateLabel = (e => this.setState({ label: e.target.value }))
    updateImage =   (e => this.setState({ image: e.target.value }))



    updateRecipe=async(e)=>{
        e.preventDefault();
        const id = this.state.recipes[this.state.index]._id;
   const recipeData = {
    label:this.state.label,
    image:this.state.image,
   }
   let reUpdate = await axios.put(`http://localhost:3001/updateRecipe/${id}`,recipeData)
 this.setState({
     recipes:reUpdate.data,
     showModelForm:false,
 })
    }


    render() {
        return (
            <div>
                <h2>Favorite page</h2>
                <UpdateForm
showModelForm={this.state.showModelForm}
                    showModel={this.state.showModel}
                    updateLabel={this.updateLabel}
                    showUpdateFormFunc={this.showUpdateFormFunc}

                    hiddenModel={this.hiddenModel}
                    updateImage={this.updateImage}
                    recipeImage={this.state.recipeImage}
                    recipeName={this.state.recipeName}
                    updateRecipe={this.updateRecipe}
                />
    
                <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', padding: '5rem', marginLeft: '10px' }}>

                    {this.state.showFavRecipes
                        && this.state.recipes.map((recipe, idx) => {
                            return (
                                <FavRecipe
                                    index={idx}
                                    recipe={recipe}
                                    deleteRecipe={this.deleteRecipe}
                                    showUpdateFormFunc={this.showUpdateFormFunc}
                                />
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default FavoriteRecipes;