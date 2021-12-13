import React from 'react'
import { Spinner, Button } from "react-bootstrap";
export default function ButtonWithProgress(props) {
    const {onClick, disabled, pendingApiCall,text} = props
    return (
        <div>
            <Button
            onClick={onClick}
            type="submit"
            disabled = {disabled}
          >
            {pendingApiCall?<Spinner animation="border" size="sm"/>:''}
            {text}
          </Button>
          
        </div>
    )
}
