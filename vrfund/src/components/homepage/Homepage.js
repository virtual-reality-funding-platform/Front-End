import React, { Component } from 'react'
import styled from 'styled-components';

const Styles = styled.form`

    display: flex;
    font-size: 1.5em;
    text-align: center;
    color: red;
`;

export class Homepage extends Component {
    render() {
        return (
            <div>
            <div className="form-container">
                <Styles>
                    <form action="submit" className="form">
                        <input type="text" placeholder="Username" label="Username" isRequired /><label htmlFor="">Username</label>
                        <input type="text" placeholder="Password" label="Password" isRequired /><label htmlFor="">Password</label>
                    </form> 
                </Styles>  
            </div>   
                <p>
                    This will have the project listing here and search functionality for all visitors, each project will have means to donate to them.
                </p>
                
            </div>
        )
    }
}

export default Homepage
