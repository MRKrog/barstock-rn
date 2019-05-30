import { shallow } from "enzyme"
import { CurrentOrder } from "./CurrentOrder"
import React from "react"

describe("CurrentOrder", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CurrentOrder />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})