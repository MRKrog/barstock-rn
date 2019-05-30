import { shallow } from "enzyme"
import { AlcoholCategory } from "./AlcoholCategory"
import React from "react"

describe("AlcoholCategory", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AlcoholCategory />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})