import React from "react"
import { shallow } from "enzyme";
import {LoginPage} from ".";
import Theme from "../../layouts";
import Input from "../../components/input";
import Button from "../../components/button";
import { historyObject } from "../../../historyObject";
jest.mock("../../../historyObject")
describe("LoginPage Test", () => {

    const props = {
        serverError:"", 
        loading: false, 
        loginStart: jest.fn(), 
        success:false
    }

    let useEffect;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
      };

    beforeEach(() => {
        jest.resetAllMocks()
        useEffect = jest.spyOn(React, "useEffect")
        mockUseEffect()
        mockUseEffect()
        mockUseEffect()
    })

    it("should render login component", () => {
        const wrapper = shallow(<LoginPage {...props} />);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(Theme)).toHaveLength(1);
        expect(wrapper.find(".error-box-form")).toHaveLength(0);
    })

    it("Should fill the form and save data correctly", () => {
        const wrapper = shallow(<LoginPage {...props} />);
        wrapper.find(Input).first().props().onBlur("test@gmail.com")
        wrapper.find(Input).last().props().onBlur("Test1234")
        wrapper.find(Button).props().onClick()
        expect(props.loginStart).toHaveBeenCalledWith({"email": "test@gmail.com", "password": "Test1234"})
    })

    it("Should pass errors when they are present and not start login", () => {
        const wrapper = shallow(<LoginPage {...props} />);
        wrapper.find(Input).first().props().onBlur("test")
        wrapper.find(Button).props().onClick()
        expect(wrapper.find(Input).first().props().error).toEqual({"email": "Email should be a valid email address"})
        expect(props.loginStart).not.toHaveBeenCalled()
    })

    it("Should render server error when they are present", () => {
        const propsWithError = {
            ...props,
            serverError:"test server errors"
        }
        const wrapper = shallow(<LoginPage {...propsWithError} />);
        expect(wrapper.find(".error-box-form")).toHaveLength(1);
    })

    it("Should redirect when success login", () => {
        const propsWithSuccess = {
            ...props,
            success:true
        }
        shallow(<LoginPage {...propsWithSuccess} />);
        expect(historyObject.replace).toHaveBeenCalledWith("/homepage")
    })


    

})