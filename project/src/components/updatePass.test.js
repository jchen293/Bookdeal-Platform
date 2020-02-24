import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {shallow, mount} from 'enzyme';
import Account from './accountPage';


var user = {
    username: "test02",
    email: "pmx971114@gmail.com",
    interestsList: []
}

var resetPass = mount(<Account 
                        api="http://3.18.110.2:3001/api" 
                        user={user}
                        signOut={()=>{}}
                        updateInter={(obj)=>{}}
                        randomBook={()=>{}} />);

describe('ResetPassword Test Case 02', () => {

    it('Test API is http://3.18.110.2:3001/api', () => {
        expect(resetPass.props().api).toEqual("http://3.18.110.2:3001/api");
    });

    it('Chech username and email is set', () => {
        expect(resetPass.props().user.username).toEqual("test02");
        expect(resetPass.props().user.email).toEqual("pmx971114@gmail.com");
    });

    it('Update Password Function', () => {
        resetPass.instance().updatePassword("test02","test02");
        setTimeout(200);
        //check your login
    });
});