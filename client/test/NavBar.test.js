import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import NavBar from "../src/Components/NavBar/NavBar";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";

configure({ adapter: new Adapter() });

describe('<NavBar/>', () => {
    let nav;
    beforeEach(() => {
        nav = shallow(<NavBar />);
        expect(isReact.classComponent(NavBar)).toBeFalsy();
      });
    it('Deberia renderizar 3 <Link to="" />. El primero que vaya a "/", el segundo a "/home" y el tercero a "/form"', () => {
        expect(nav.find(Link).length).toBeGreaterThanOrEqual(3);
        expect(nav.find(Link).at(0).prop('to')).toEqual('/');
        expect(nav.find(Link).at(1).prop('to')).toEqual('/home');
        expect(nav.find(Link).at(2).prop('to')).toEqual('/form');
    })
})
