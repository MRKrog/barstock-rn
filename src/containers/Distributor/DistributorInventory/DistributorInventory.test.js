import { shallow } from "enzyme"
import { DistributorInventory } from "./DistributorInventory"
import React from "react"

describe("DistributorInventory", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DistributorInventory />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})