import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import {ButtonToolbar,Button,} from 'react-bootstrap'
class Home extends React.Component {


  render () {
    const {
      apartments,
      currentUserId,
      deleteAction
    } = this.props
    return (
      <React.Fragment>

        <h1>Apartments</h1>
        <ul>
          {apartments.map((apartment) => {
            return(
              <li
                key={apartment.id}>
                {apartment.street} {apartment.city}
                {apartment.user_id === currentUserId &&
                <div>
                  <ButtonToolbar>
                    <Button
                    variant="dark"
                    size="sm"
                    onClick={()=> deleteAction(apartment.id)}>delete</Button>
                    <Button variant="primary" size="sm">
                      <Link to={`/edit-apartment/${apartment.id}`}>Edit</Link>
                    </Button>
                  </ButtonToolbar>
                </div>
                }
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Home
