import React from "react"
import PropTypes from "prop-types"
import {Redirect} from 'react-router-dom'
class EditApartment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartmentId: this.props.match.params.id,
      apartmentUpdate: {}
    }

  }
  componentDidMount(){
      fetch("/apartments/:id")
      console.log(this.props.match.params.id);
  }

  Updated(oldAppt){
    if(oldAppt.match.params.id != this.props.match.params.id){
      this.getApartment()
    }
  }

  getApartment(){
  }

  onChange= (i) =>{
    const{apartmentUpdate} = this.state
    console.log(i.target.value)
    apartmentUpdate[i.target.name] = i.target.value
    // this.setState({apartmentUpdate})
  }

  buttonSubmit = () =>{
    const{ onSubmit } = this.props
    const{ apartmentId, apartmentUpdate } = this.state
    console.log(this.state);
    onSubmit(apartmentId, apartmentUpdate)
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
        <h1>Edit Apartment</h1>
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

        <button onClick={this.buttonSubmit} >Edit</button>

        </React.Fragment>
    );
  }
}

export default EditApartment
