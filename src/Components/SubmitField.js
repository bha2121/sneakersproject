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

      handleSubmit(){
          console.log(this.state)
      }


      
    render(){
        return(
            <form>
                <input 
                type="text" 
                name="brand"
                placeholder="Brand"
                value= {this.state.brand} 
                onChange={(e) => this.handleInputUpdate(e)}
                />
                <br/><br/>
                <input 
                type="text" 
                name="model"
                placeholder="Model"
                value= {this.state.model} 
                onChange={(e) => this.handleInputUpdate(e)}
                /> 
                <br/><br/>
                <input 
                type="text" 
                name= "colorway"
                placeholder="Colorway"
                value= {this.state.colorway} 
                onChange={(e) => this.handleInputUpdate(e)}
                /> 
                <br/><br/>
                <input 
                type="number" 
                name="price"
                placeholder="$"
                step="10"
                value= {this.state.price}
                onChange={(e) => this.handleInputUpdate(e)}
                />
                <br/><br/>
                <button onClick={() => this.handleSumbit()}>Submit</button>
            </form>
            





        )
    }
}

export default SubmitField