import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/getUsers';
import { Card, Container } from 'semantic-ui-react';

class UsersList extends Component {
  state = {
    users: [],
  };

  render() {
    return (
      <Container>
        <Card.Group centered={true} itemsPerRow={3}>
          {this.props.users && this.props.users.length > 0
            ? this.props.users.map(user => {
                return (
                  <Card fluid key={user.userid}>
                    <Card.Content>
                      <Card.Header>username: {user.username}</Card.Header>
                      {user.userRoles && user.userRoles.length > 0 ? (
                        <Card.Description>
                          roles: {``}
                          {user.userRoles.map(role => {
                            return `${role.role.name} `;
                          })}
                        </Card.Description>
                      ) : null}
                      {/* multiple role counts ^ */}
                      {/* single role count */}
                    </Card.Content>
                  </Card>
                );
              })
            : 'null'}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.usersList,
  };
};

export default connect(
  mapStateToProps,
  { getUsers },
)(UsersList);
