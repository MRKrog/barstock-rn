import { shallow } from "enzyme"
import { LiquorCategory } from "./LiquorCategory"
import React from "react"

describe("LiquorCategory", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LiquorCategory />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
