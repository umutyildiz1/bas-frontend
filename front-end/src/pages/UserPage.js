import React , { useState, useEffect }from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import AuctionService from "./../services/auctionService";
import CustomCard from "../components/CustomCard";
function UserPage(props) {
    const {id} = props.match.params
    const {userId} = props.state
    const isEqual = (id == userId)
    const [listAuction, setlistAuction] = useState();
    const auctionService = new AuctionService();
    useEffect(() => {
        auctionService.getByUserId(id).then((response) => {
            
                setlistAuction(response.data);
        
        });
      }, [listAuction]);
    return (
        <Container>
               {isEqual?<p>We can edit</p>:<p>You can not edit</p>}
               {listAuction?(listAuction.map((auction) => {
        return (
          <CustomCard
            key={auction.id}
            name={auction.name}
            description={auction.description}
          />
        );
      })):<h1>There is no Active Auction</h1>}
        </Container>
    )
}

const putStateToProps = (state) => {
    return {
        state
    }
}

export default connect(putStateToProps)(UserPage)
