import { shallow } from "enzyme"
import { AccountContainer } from "./AccountContainer"
import React from "react"

describe("AccountContainer", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AccountContainer />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})