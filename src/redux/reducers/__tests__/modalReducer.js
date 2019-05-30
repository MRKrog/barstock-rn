import { modalReducer } from "../modalReducer"

describe("modalReducer", () => {
  it("should have a default", () => {
    const mockState = undefined;
    const mockAction = {
      type: "DEFAULT",
    };
    const expected = false
    const result = modalReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should change the boolean of modal", () => {
    const mockState = undefined;
    const mockAction = {
      type: "TOGGLE_MODAL",
      bool: true
    };
    const expected = true
    const result = modalReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})