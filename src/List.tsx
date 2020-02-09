import React, { FC } from 'react';
import './App.css';
import { connect } from 'react-redux';

const List: FC = (props) => {

    console.log(props);
    const { users } = props;
    const userList = users.length ? (
        users.map(user => {
            <span>user.employee_name</span>
        })
    );

    return (
        {userList}
        )
}

const mapStateToProps = (state: any) => {
    return {
        users: state.user
    }
}

export default connect(mapStateToProps)(List);