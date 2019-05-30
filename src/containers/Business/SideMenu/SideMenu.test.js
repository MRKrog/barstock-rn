import { shallow } from "enzyme"
import { SideMenu } from "./SideMenu"
import React from "react"

describe("SideMenu", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SideMenu />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
