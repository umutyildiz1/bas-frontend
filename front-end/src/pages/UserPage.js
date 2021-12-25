import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

function UserPage(props) {
    const {id} = props.match.params
    const {userId} = props.state
    const isEqual = (id == userId)
    return (
        <Container>
               {isEqual?<p>We can edit</p>:<p>we can not edit</p>}
            
        </Container>
    )
}

const putStateToProps = (state) => {
    return {
        state
    }
}

export default connect(putStateToProps)(UserPage)
