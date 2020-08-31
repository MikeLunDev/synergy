import i18n from "./index";
import { __ } from "./index"
import React from "react"
import { shallow } from "enzyme";

describe("i18n library formatting", () => {
    it("should return text with no formatting", () => {
        expect(i18n.format("test", "")).toBe("test");
    });
    it("should return text with capitalization formatting", () => {
        expect(i18n.format("test", "capitalize")).toBe("Test");
    });

    it("Should use __ operator correctly", () => {
        const Result = () => __("TEST")
        const wrapp = shallow(<Result />)
        const inner = wrapp.dive()
        expect(inner.prop("container")).toEqual("span")
        expect(inner.props().children).toEqual("TEST")
    })

    it("__ operator should return same value if not present in lang __", () => {
        const Result = () => __("prova")
        const wrapp = shallow(<Result />)
        const inner = wrapp.dive()
        expect(inner.prop("container")).toEqual("span")
        expect(inner.props().children).toEqual("prova")
    })

    it("__ operator should return value formatted custom with param", () => {
        const Result = () => __("prova", [{key: "a", value: "b"}])
        const wrapp = shallow(<Result />)
        const inner = wrapp.dive()
        expect(inner.prop("container")).toEqual("span")
        expect(inner.props().children).toEqual("provb")
    })
});