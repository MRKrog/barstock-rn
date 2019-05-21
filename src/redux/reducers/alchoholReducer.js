const mock = [{
  id: 123,
  catName: "beer",
  alchohol: [
    {
      id: 234,
      name: "blue moon",
    },
    {
      id: 345,
      name: "coors",
    }
  ]
},{
  id: 456,
  catName: "wine",
  alchohol: [
    {
      id: 567,
      name: "red",
    },
    {
      id: 789,
      name: "white",
    }
  ]
}]

export const alchoholReducer = (state = [], action) => {
  switch(action.type){
    default:
      return mock
  }
}