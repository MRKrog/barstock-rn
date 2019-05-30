import { shallow } from "enzyme"
import { PastOrders } from "./PastOrders"
import React from "react"

describe("PastOrders", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PastOrders />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
