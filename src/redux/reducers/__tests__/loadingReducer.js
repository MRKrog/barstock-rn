import { loadingReducer } from "../loadingReducer"

describe("loadingReducer", () => {
  it("should have a default", () => {
    const mockState = undefined;
    const mockAction = {
      type: "DEFAULT",
    };
    const expected = false
    const result = loadingReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should change the boolean of loading", () => {
    const mockState = undefined;
    const mockAction = {
      type: "SET_LOADING",
      loading: true
    };
    const expected = true
    const result = loadingReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})