import { businessItemsReducer } from "../businessItemsReducer"

describe("businessItemsReducer", () => {
  it("should have a default", () => {
    const mockState = undefined;
    const mockAction = {
      type: "DEFAULT",
    };
    const expected = []
    const result = businessItemsReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should return the business items", () => {
    const mockState = undefined;
    const mockAction = {
      type: "SET_BUSINESS_ITEMS",
      businessItems: [{},{},{}]
    };
    const expected = [{},{},{}]
    const result = businessItemsReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should return the business items with a added item", () => {
    const mockState = [{},{},{}];
    const mockAction = {
      type: "ADD_BUSINESS_ITEM",
      businessItems: {}
    };
    const expected = [{},{},{},{}]
    const result = businessItemsReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
  it("should return a list with the updated business items", () => {
    const mockState = [{
      id: 1,
      attributes: {
        price_sold: 1,
        quantity: 1,
        serving_size: 1 
      }
    },{
      id: 2,
      attributes: {
        price_sold: 1,
        quantity: 1,
        serving_size: 1 
      }
    }];
    const mockAction = {
      type: "UPDATE_BUSINESS_ITEM",
      businessItems: {
        id: 1,
        attributes: {
          price_sold: 3,
          quantity: 3,
          serving_size: 3 
        }
      }
    };
    const expected = [{
      id: 1,
      attributes: {
        price_sold: 3,
        quantity: 3,
        serving_size: 3 
      }
    },{
      id: 2,
      attributes: {
        price_sold: 1,
        quantity: 1,
        serving_size: 1 
      }
    }]
    const result = businessItemsReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})