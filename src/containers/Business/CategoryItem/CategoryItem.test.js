import { shallow } from "enzyme"
import { CategoryItem } from "./CategoryItem"
import React from "react"

describe("CategoryItem", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CategoryItem />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})