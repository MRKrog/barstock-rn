import { shallow } from "enzyme"
import { AlcoholModal } from "./AlcoholModal"
import React from "react"

describe("AlcoholModal", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AlcoholModal />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})