import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {shallow, mount} from 'enzyme';
import Body from './body';


var body = mount(<Body api="http://3.18.110.2:3001/api" />);
describe('Search Test Case 02', () => {
    it('Test API is http://3.18.110.2:3001/api', () => {
        expect(body.props().api).toEqual("http://3.18.110.2:3001/api");
    });

    it('Test search case one', () => {
        body.setState({data: [
            {
                "_id": "5c7b10ec7f678c357026c997",
                "title": "Ocaml",
                "price": "-100",
                "course": "CSE",
                "owner": "jack",
                "url": "https://realworldocaml.org/cover.png",
                "__v": 0
            },
            {
                "_id": "5c7b11727f678c357026c999",
                "title": "English",
                "price": "300",
                "course": "English",
                "owner": "jack",
                "url": "https://oup.com.pk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/9780199061129.jpg",
                "__v": 0
            },
            {
                "_id": "5c7b11f67f678c357026c99a",
                "title": "Blockchain",
                "price": "400",
                "course": "CSE",
                "owner": "jack",
                "url": "https://images-na.ssl-images-amazon.com/images/I/51Eidbl9t8L.jpg",
                "__v": 0
            }
        ]});
        body.instance().search("title", "ocaml");
        expect(body.state().display).toEqual([{
            "_id": "5c7b10ec7f678c357026c997",
            "title": "Ocaml",
            "price": "-100",
            "course": "CSE",
            "owner": "jack",
            "url": "https://realworldocaml.org/cover.png",
            "__v": 0
        }]);
    });

    it('Test search cases two', () => {
        body.setState({data: [
            {
                "_id": "5c7b10ec7f678c357026c997",
                "title": "Ocaml",
                "price": "-100",
                "course": "CSE",
                "owner": "jack",
                "url": "https://realworldocaml.org/cover.png",
                "__v": 0
            },
            {
                "_id": "5c7b11727f678c357026c999",
                "title": "English",
                "price": "300",
                "course": "English",
                "owner": "jack",
                "url": "https://oup.com.pk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/9780199061129.jpg",
                "__v": 0
            },
            {
                "_id": "5c7b11f67f678c357026c99a",
                "title": "Blockchain",
                "price": "400",
                "course": "CSE",
                "owner": "jack",
                "url": "https://images-na.ssl-images-amazon.com/images/I/51Eidbl9t8L.jpg",
                "__v": 0
            }
        ]});
        body.instance().search("course", "english");
        expect(body.state().display).toEqual([{
            "_id": "5c7b11727f678c357026c999",
            "title": "English",
            "price": "300",
            "course": "English",
            "owner": "jack",
            "url": "https://oup.com.pk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/9780199061129.jpg",
            "__v": 0
        }]);
    });

    
});