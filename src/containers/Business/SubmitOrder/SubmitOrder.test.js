import { shallow } from "enzyme"
import { SubmitOrder } from "./SubmitOrder"
import React from "react"

describe("SubmitOrder", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SubmitOrder />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})