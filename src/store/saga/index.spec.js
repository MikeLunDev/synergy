import {sagas} from "./index";

describe("Sagas tests", () => {
    it("Sagas should be defined", () => {
        const generator = sagas();
        expect(generator).toBeDefined();
        while (generator.next().value) {}
        expect(generator.next().done).toBeTruthy();
    });
});
