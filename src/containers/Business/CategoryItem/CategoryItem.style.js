import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  category_item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 10,
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    height: 60
  },
  item_info: {
    display: 'flex',
    flexDirection: 'row',
  },
  item_image: {
    marginRight: 10,
    resizeMode: 'contain'
  },
  item_details: {
    display: "flex",
    flexDirection: "column"
  },
  item_name: {
    color: "#11212a",
    fontFamily: "lato",
    fontWeight: "100",
    fontSize: 16,
    paddingBottom: 3
  },
  item_price: {
    color: "#adadad",
    fontFamily: "raleway",
    fontStyle: "italic",
    fontWeight: "100",
    fontSize: 15
  },
  item_action: {
    display: 'flex',
    flexDirection: 'column'
  },
  quantityContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 2
  },
  quantity: {
    fontWeight: '400',
    fontSize: 25,
    marginLeft: 15,
    marginRight: 15,
    color: "#11212a",
    width: 20,
    textAlign: "center"
  },
  btnMinus: {
    backgroundColor: "#0098de",
    borderRadius: 2,
    padding: 5
  },
  btnPlus: {
    backgroundColor: "#0098de",
    borderRadius: 2,
    padding: 5
  },
  quantityText: {
    color: "#adadad",
    fontFamily: "raleway",
    fontSize: 10,
    textAlign: "center"
  },
  textvalid: {
    opacity: 1
  },
  textinvalid: {
    opacity: .5
  }
};


//   alc_category:
// "lager"
// alc_type:
// "beer"
// name:
// "Bud Light"
// ounces:
// 288
// price:
// 24.35
// thumbnail:
// "https://products0.imgix.drizly.com/ci-bud-light-19699dcd3e7591e3.png?auto=format%2Ccompress&fm=jpeg&q=20"
// unit:
// "case"
