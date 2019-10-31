import { shallow } from "enzyme";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import * as Component from "./Component";

describe("Component ", () => {

    beforeAll(() => {
        Enzyme.configure({
            adapter: new Adapter.default(),
          });
    });

    it("renders the heading", () => {
        const wrapper = shallow(<Component.LikeButton caption="Click me!" finalText="Has been clicked." />);
        console.log(wrapper.debug());
        expect(wrapper.is(".btn")).toBeTruthy();
        expect(wrapper.is(".btn-primary")).toBeTruthy();
    });

});
