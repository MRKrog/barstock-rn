import { cartReducer } from "../cartReducer"

describe("cartReducer", () => {
  it("should have a default", () => {
    const mockState = undefined;
    const mockAction = {
      type: "DEFAULT",
    };
    const expected = []
    const result = cartReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should return an array with added alcohol", () => {
    const mockState = undefined;
    const mockAction = {
      type: "ADD_ALCOHOL",
      id: 1
    };
    const expected = [{
      id: 1,
      quantity: 1
    }]
    const result = cartReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should return an array with updated alcohol", () => {
    const mockState = [{
      id: 1,
      quantity: 2
    }];
    const mockAction = {
      type: "UPDATE_ALCOHOL",
      id: 1,
      number: 1
    };
    const expected = [{
      id: 1,
      quantity: 3
    }]
    const result = cartReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should remove a alcohol", () => {
    const mockState = [{
      id: 1,
      quantity: 2
    }];
    const mockAction = {
      type: "REMOVE_ALCOHOL",
      id: 1
    };
    const expected = []
    const result = cartReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should remove a alcohol group", () => {
    const mockState = [{
      id: 1,
      quantity: 2
    }];
    const mockAction = {
      type: "REMOVE_ALCOHOL_GROUP",
      id: 1
    };
    const expected = []
    const result = cartReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should empty the cart", () => {
    const mockState = [{
      id: 1,
      quantity: 2
    }];
    const mockAction = {
      type: "RESET_CART",
    };
    const expected = []
    const result = cartReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should place reorder in cart", () => {
    const mockState = undefined;
    const mockAction = {
      type: "RE_ORDER",
      order: [{},{},{}]
    };
    const expected = [{},{},{}]
    const result = cartReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})