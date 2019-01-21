import React, {Component} from "react";

class SubmitField extends Component {
    constructor(){
        super()
        this.state = {
          brand: '',
          model: '',
          colorway: '',
          price: '',
        }
      }

      handleInputUpdate(e){
        this.setState({
            [e.target.name]: e.target.value
          })
      }

      handleSubmit(e){
          e.preventDefault();
          alert("you submitted "+ `${this.state.brand} ${this.state.model}`)

      }


      
    render(){
        return(
            <form onSubmit={(e) => {this.handleSubmit(e)}}> 
                <input 
                type="text" 
                name="brand"
                placeholder="Brand"
                autoComplete="off"
                value= {this.state.brand} 
                onChange={(e) => this.handleInputUpdate(e)}
                />
                <br/>
                <br/>
                <input 
                type="text" 
                name="model"
                placeholder="Model"
                autoComplete="off"
                value= {this.state.model} 
                onChange={(e) => this.handleInputUpdate(e)}
                /> 
                <br/>
                <br/>
                <input 
                type="text" 
                name= "colorway"
                placeholder="Colorway"
                autoComplete="off"
                value= {this.state.colorway} 
                onChange={(e) => this.handleInputUpdate(e)}
                /> 
                <br/>
                <br/>
                <input 
                type="number" 
                name="price"
                placeholder="$"
                min="0"
                step="10"
                value= {this.state.price}
                onChange={(e) => this.handleInputUpdate(e)}
                />
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            





        )
    }
}

export default SubmitField