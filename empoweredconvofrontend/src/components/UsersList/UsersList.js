import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/getUsers';
import { Card } from 'semantic-ui-react';

class UsersList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <Card.Group centered={true} itemsPerRow={3}>
        {this.props.users && this.props.users.length > 0
          ? this.props.users.map(user => {
              return (
                <Card key={user.userid}>
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
                    {user.userRoles && user.userRoles.length === 1
                      ? user.userRoles.map(role => {
                          return (
                            <Card.Content>role: {role.role.name}</Card.Content>
                          );
                        })
                      : null}
                  </Card.Content>
                </Card>
              );
            })
          : 'null'}
      </Card.Group>
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
