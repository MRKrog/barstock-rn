import { categorySelectedReducer } from "../categorySelectedReducer"

describe("categorySelectedReducer", () => {
  it("should have a default", () => {
    const mockState = undefined;
    const mockAction = {
      type: "DEFAULT",
    };
    const expected = ""
    const result = categorySelectedReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should return a string of the category", () => {
    const mockState = undefined;
    const mockAction = {
      type: "TOGGLE_CATEGORY",
      cat: "beer"
    };
    const expected = "beer"
    const result = categorySelectedReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})