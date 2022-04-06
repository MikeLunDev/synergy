import React from "react"
import { shallow } from "enzyme";
import { Theme } from ".";
import { historyObject } from "../../historyObject";
jest.mock("../../historyObject")
describe("Theme Test", () => {

    const props = {
        children: <div className="child">TEST</div>
    }

    beforeEach(() => {
        jest.resetAllMocks()
    })

    it("should render Theme component", () => {
        const wrapper = shallow(<Theme {...props} />);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(".synergy-layout")).toHaveLength(1);
        expect(wrapper.find(".child")).toHaveLength(1)

    })

    it("Should click correctly", () => {
        const wrapper = shallow(<Theme {...props} />);
        wrapper.find("img").props().onClick()
        expect(historyObject.push).toHaveBeenCalledWith("/homepage")
    })
    

})