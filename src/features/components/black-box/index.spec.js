import React from "react"
import BlackBox from ".";
import { shallow } from "enzyme";
describe("BlackBox Test", () => {

    const props = {children: <div className="test">TEST</div>}
    
    it("should render black box component", () => {
        const wrapper = shallow(<BlackBox {...props} />);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(".black-box")).toHaveLength(1);
        expect(wrapper.find(".test")).toHaveLength(1)
    });
})