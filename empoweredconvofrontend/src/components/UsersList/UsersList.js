import React, {Component} from 'react'
import {connect} from 'react-redux';
import { getUsers } from '../../actions/getUsers';

class UsersList extends Component {
    state = {
        users: []
    };

    render() {
        return (
            <div>
                {this.props.usersList.map((user) => {
                     return <p>{user.username}</p>
                })}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({ usersList: state.user.usersList })

export default connect(mapStateToProps, { getUsers })(UsersList);