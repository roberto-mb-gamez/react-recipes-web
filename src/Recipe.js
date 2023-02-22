import React from "react";
import './Recipe.css';

class Recipe extends React.Component {
    render() {
        return (
            <div className="recipe">
                <h4>{this.props.recipe.name}</h4>
                <ul>
                    {
                        this.props.recipe.ingredients &&
                        this.props.recipe.ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Recipe;