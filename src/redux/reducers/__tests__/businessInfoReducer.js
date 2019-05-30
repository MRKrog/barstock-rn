import { businessInfoReducer } from "../businessInfoReducer"

describe("businessInfoReducer", () => {
  it("should have a default", () => {
    const mockState = undefined;
    const mockAction = {
      type: "DEFAULT",
    };
    const expected = {}
    const result = businessInfoReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should return the business info", () => {
    const mockState = undefined;
    const mockAction = {
      type: "SET_BUSINESS_INFO",
      info: {
        name: "the basement"
      }
    };
    const expected = {
      name: "the basement"
    }
    const result = businessInfoReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})