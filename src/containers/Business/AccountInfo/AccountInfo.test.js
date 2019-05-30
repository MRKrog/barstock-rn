import { shallow } from "enzyme"
import { AccountInfo } from "./AccountInfo"
import React from "react"

describe("AccountInfo", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AccountInfo />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})