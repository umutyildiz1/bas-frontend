import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AuctionService from "./../services/auctionService";
import CustomCard from "../components/CustomCard";

export default function HomePage() {
  const [listAuction, setlistAuction] = useState();
  const auctionService = new AuctionService();
  useEffect(() => {
    auctionService.getAll().then((response) => {
      setlistAuction(response.data);
    });
  }, [listAuction]);
  return (
    <Container>
      {
      listAuction?(listAuction.map((auction) => {
        return (
          <CustomCard
            key={auction.id}
            name={auction.name}
            description={auction.description}
          />
        );
      })):<h1>There is no Active Auction</h1>}
    </Container>
  );
}
