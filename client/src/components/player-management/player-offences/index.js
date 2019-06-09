import React from 'react';
import { Query } from 'react-apollo';

import { PLAYER_OFFENCES } from '../../../graphql/queries';

import Loader from './loader';
import Error from './error';
import Component from './component';

class Player extends React.Component{
  render(){
    return (
      <Query
        query={PLAYER_OFFENCES}
        variables={{
          serverID: this.props.serverID,
          guid: this.props.guid
        }}
        onError={() => {}}
      >
        {({ loading, error, data }) => {
          if(loading) return <Loader />;
          if(error) return <Error />;

          return (
            <Component
              serverID={this.props.serverID}
              player={data.server.player}
            />
          );
        }}
      </Query>
    );
  }
}

export default Player;