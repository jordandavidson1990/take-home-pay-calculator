import React from 'react';
import ReactDOM from "react-dom";
import MainContainer from './MainContainer';
import IncomeForm from '../components/IncomeForm';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from '../App'
import { render, fireEvent, getByTestId } from "@testing-library/jest-dom/extend-expect";


Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
}
)

it("Income tax result should start at 0", () => {
    const wrapper = shallow(<MainContainer />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("The amount of tax you will pay per year is £0")
}
)

