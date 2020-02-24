import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';
import App from './App';



describe('App.js Test Case 02', () => {
   
    it('Test API is http://localhost:3001/api', () => {
        var app = shallow(<App />);
        expect(app.state().api).toEqual("http://localhost:3001/api");
        });
});