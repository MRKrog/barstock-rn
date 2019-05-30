import { shallow } from "enzyme"
import { BarInventory } from "./BarInventory"
import React from "react"

describe("BarInventory", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BarInventory />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})