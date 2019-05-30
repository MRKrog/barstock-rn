import { shallow } from "enzyme"
import { OrderContainer } from "./OrderContainer"
import React from "react"

describe("OrderContainer", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <OrderContainer />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})