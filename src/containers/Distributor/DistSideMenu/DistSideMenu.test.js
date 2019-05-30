import { shallow } from "enzyme"
import DistSideMenu from "./DistSideMenu"
import React from "react"

describe("DistSideMenu", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DistSideMenu />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})