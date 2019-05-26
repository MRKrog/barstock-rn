import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  bar_invContainer: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flex: 1,
    backgroundColor: "#ffffff"
  },
  bar_titleContainer: {
    backgroundColor: "#2c4969",
    padding: 10,
    zIndex: 8
  },
  bar_title: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },
  item_card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    height: 55,
  },
  bar_itemsHeader: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#E8E8E8",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 1, width: 0 },
    zIndex: 9

  },
  items_rowOne: {
    flex: 2,
    fontSize: 13,
    fontFamily: 'Lato-Light',
    color: "#8e8e8e"
  },
  items_rowTwo: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Lato-Light',
    textAlign: "center",
    color: "#8e8e8e"
  },
  items_rowThree: {
    flex: 1,
    textAlign: "right",
    fontSize: 13,
    fontFamily: 'Lato-Light',
    color: "#8e8e8e"
  },
  item_info: {
    flex: 2,
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
    fontSize: 15,
    paddingBottom: 3
  },
  item_price: {
    color: "#11212a",
    fontFamily: 'Lato-Light',
    fontSize: 13
  },
  item_action: {
    display: 'flex',
    flexDirection: 'column'
  },
  item_margins: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item_marginsText: {
    color: "#11212a",
    fontFamily: "Lato-Light",
    fontSize: 17
  },
  item_stock: {
    flex: 1,
    alignItems: "center"
  },
  item_stockText: {
    textAlign: "right",
    fontFamily: "Lato-Light",
    fontSize: 17
  }
}
