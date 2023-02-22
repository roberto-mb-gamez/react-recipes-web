import React from "react";
import Recipe from "./Recipe";

class Recipes extends React.Component {

    getRecipes() {
        fetch('https://localhost:443/recipes')
            .then(response => response.json())
            .then(data => this.setState({
                recipes: data
            }));
    }

    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }

        this.getRecipes();
    }

    render() {
        return (<div>
            {this.state.recipes.map((recipe, index) => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </div>)
    }
}

export default Recipes;