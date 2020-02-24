import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {shallow, mount} from 'enzyme';
import ResetPass from './resetPass';


var resetPass = mount(<ResetPass api="http://3.18.110.2:3001/api" setContent={(input) => {}} />);

describe('ResetPassword Test Case 02', () => {

    it('Test API is http://3.18.110.2:3001/api', () => {
        expect(resetPass.props().api).toEqual("http://3.18.110.2:3001/api");
    });

    it('set User and Email', () => {
        resetPass.setState({username: "test02", email: "platformtest147@gmail.com"});
        expect(resetPass.state().username).toBeDefined();
        expect(resetPass.state().email).toBeDefined();
    });

    it('Reset Password Function', () => {
        resetPass.instance().resetPassword();
        setTimeout(200);
        //check your email
    });
});