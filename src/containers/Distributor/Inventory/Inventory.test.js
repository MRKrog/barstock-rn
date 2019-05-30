import { shallow } from "enzyme"
import { Inventory } from "./Inventory"
import React from "react"

describe("Inventory", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Inventory />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})