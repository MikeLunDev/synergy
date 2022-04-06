// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "jest-extended";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import IntlPolyfill from 'intl';
import 'intl/locale-data/jsonp/it';
import _ from "lodash"
if (global.Intl) {
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
} else {
    global.Intl = IntlPolyfill
}
IntlPolyfill.__disableRegExpRestore();
configure({adapter: new Adapter()});
const originalConsoleError = console.error
/*console.error = function(msg) {
    if(_.startsWith(msg, 'Error: Could not parse CSS stylesheet')) return
    originalConsoleError(msg)
}*/
jest.mock("react-markdown", () => (props) => {
    return <>{props.children}</>
})