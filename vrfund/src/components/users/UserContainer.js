import React, { Component } from 'react'

export class UserContainer extends Component {
    render() {
        return (
            <div>
                <h1>This is the user page container, for logged in users only(protected), other components in the user folder are to go in here </h1>
            </div>
        )
    }
}

export default UserContainer
