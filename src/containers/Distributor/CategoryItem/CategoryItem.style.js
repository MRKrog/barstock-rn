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
    fontFamily: "Lato-Light",
    fontSize: 16,
    paddingBottom: 3
  },
  item_price: {
    color: "#adadad",
    fontFamily: "Raleway-Light",
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
  btnEdit: {
    backgroundColor: "#0098de",
    borderRadius: 5,
    padding: 5,
    display: "flex",
    alignItems: "center"
  }
};
