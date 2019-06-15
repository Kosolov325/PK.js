import { gql } from 'apollo-server-koa';

export default gql`
  type Server {
    _id: String

    id: Int
    name: String

    apiKey: String

    welcomeMessage: String

    serverConfigFile(name: String!): ServerConfigFile
    serverConfigFiles: [ServerConfigFile]

    adminPermission(steamID: String!): AdminPermission
    adminPermissions: [AdminPermission]

    player(guid: String!): Player
    players(guidLike: String): [Player]

    playerName(name: String!): PlayerName
    playerNames(nameLike: String): [PlayerName]

    bans(player: String): [Ban]
    warnings(player: String): [Warning]
    notes(player: String): [Note]
  }
`;