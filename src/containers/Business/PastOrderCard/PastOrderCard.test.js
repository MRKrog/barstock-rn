import { shallow } from "enzyme"
import { PastOrderCard } from "./PastOrderCard"
import React from "react"

describe("PastOrderCard", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PastOrderCard />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})