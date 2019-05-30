import { shallow } from "enzyme"
import { OrderContianer } from "./OrderContianer"
import React from "react"

describe("OrderContianer", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <OrderContianer />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
