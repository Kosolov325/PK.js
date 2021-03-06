import { gql } from 'apollo-boost';

export default gql`
  query UseCustomBanList($serverID: Int!, $steamID: String!){
    server(id: $serverID){
      _id
      useCustomBanList
    }
    
    adminPermission(serverID: $serverID, steamID: $steamID){
      editCustomBanList
    }
  }
`;
