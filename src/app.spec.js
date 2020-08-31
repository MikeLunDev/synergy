import React from "react"
import { App } from "./App"
import { shallow } from "enzyme"

describe("App test", () => {


    it("should be defined", () => {
        const wrapper = shallow(<App />)
        expect(wrapper).toBeDefined()
    })

})