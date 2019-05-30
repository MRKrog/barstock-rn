import { alcoholReducer } from "../alcoholReducer"

describe("alcoholReducer", () => {
  it("should have a default", () => {
    const mockState = undefined;
    const mockAction = {
      type: "DEFAULT",
    };
    const expected = []
    const result = alcoholReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should return the alcohol list", () => {
    const mockState = undefined;
    const mockAction = {
      type: "SET_ALCOHOL",
      alcohol: [{},{},{}]
    };
    const expected = [{},{},{}]
    const result = alcoholReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})