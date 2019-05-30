import { alcoholInfoReducer } from "../alcoholInfoReducer"

describe("alcoholInfoReducer", () => {
  it("should have a default", () => {
    const mockState = undefined;
    const mockAction = {
      type: "DEFAULT",
    };
    const expected = {}
    const result = alcoholInfoReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should return the alcoholinfo", () => {
    const mockState = undefined;
    const mockAction = {
      type: "SET_ALCOHOL_INFO",
      info: {
        name: "wine",
        price: 12
      }
    };
    const expected = {
      name: "wine",
      price: 12
    }
    const result = alcoholInfoReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})