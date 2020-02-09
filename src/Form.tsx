import React, { FC } from 'react';
import './App.css';
import { connect } from 'react-redux';


const Form: FC = (props) => {

    return (
        <div className="App">
            <h1>Welcome</h1>
            <form >
                <label htmlFor='Name'>Name</label>
                <input type='text' id='name' required  /><br /><br />
                <label htmlFor='Salary'>Salary</label>
                <input type='text' id='salary' required  /><br /><br />
                <label htmlFor='Age'>Age</label>
                <input type='text' id='age' required  /><br /><br />
                <input type='submit' value='submit' /><br /><br />
            </form>           
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        users: state.user
    }
}

export default connect(mapStateToProps)(Form);
