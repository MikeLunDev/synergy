import React from "react"
import { shallow } from "enzyme";
import Button from ".";
describe("Button Test", () => {

    const props = {
        text: "text button",
        onClick: jest.fn()
    }

    beforeEach(() => {
        jest.resetAllMocks()
    })

    it("should render btn component", () => {
        const wrapper = shallow(<Button {...props} />);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(".btn")).toHaveLength(1);
        expect(wrapper.find(".btn-text").props().children).toEqual(props.text)

    })

    it("Should click and call props correctly", () => {
        const wrapper = shallow(<Button {...props} />);
        wrapper.find(".btn").props().onClick()
        expect(props.onClick).toHaveBeenCalled()
    })
    

})