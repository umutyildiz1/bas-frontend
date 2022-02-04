import axios from "axios";

class AuctionService {
  createUser(requestBody) {
    return axios.post("/api/1.0/auctions/createAuction", requestBody);
  }

  getAll=()=>{
      return axios.get("/api/1.0/auctions/all") }

  getByUserId(userId){
    return axios.get("/api/1.0/auctions/getByUser?userId="+userId)
  }
}

export default AuctionService;
