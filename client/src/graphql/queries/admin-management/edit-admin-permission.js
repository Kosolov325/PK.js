import { gql } from 'apollo-boost';

import Fragments from '../../fragments/index';

export default gql`
  query AdminPermission($serverID: Int!, $selectedAdminSteamID: String!, $currentAdminSteamID: String!) {
    server(id: $serverID) {
      selectedAdmin: adminPermission(steamID: $selectedAdminSteamID) {        
        admin {
          _id
          steamID
          displayName
          avatar
        }
        player {
          _id
          guid
        }
        
      ...AdminPermission
      }
      currentAdmin: adminPermission(steamID: $currentAdminSteamID) {
        admin {
          _id
          steamID
        }
        
      ...AdminPermission
      }
    }
  }
  
  ${Fragments.AdminPermission}
`;
