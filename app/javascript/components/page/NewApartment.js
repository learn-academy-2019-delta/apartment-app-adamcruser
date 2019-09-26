
import React from "react"
import PropTypes from "prop-types"
import {Redirect} from 'react-router-dom'
class NewApartment extends React.Component {
constructor(props){
  super(props)
  this.state = {
    info: {
      street: "",
      city: ""
    }
  }
}

    onChange= (i) =>{
      const{ info } = this.state
      const{ name, value } = i.target
      info[name] = value
      this.setState({info})
    }

    buttonSubmit = () =>{
      const{ onSubmit } = this.props
      const{ info } = this.state
      onSubmit(info)
      .then(()=>{
        this.setState({createSuccess: true})
      })
    }
    render () {
      const{
        street,
        city,
        createSuccess
      } = this.state
      return (
        <React.Fragment>
          { createSuccess && <Redirect to="/"/> }
          <h1>New Apartment</h1>
          <div>
            <label>Street</label>
            <input
              name="street"
              value={street}
              onChange = { this.onChange }
              type='text'
            />
          </div>
          <div>
            <label>City</label>
            <input
              name="city"
              value={city}
              onChange = { this.onChange }
              type='text'
            />
          </div>

          <button onClick={this.buttonSubmit} >Submit</button>
        </React.Fragment>
      );
    }
    }

export default NewApartment
