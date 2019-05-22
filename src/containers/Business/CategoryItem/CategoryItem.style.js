import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  category_item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  item_info: {
    display: 'flex',
  },
  item_action: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnMinus: {
    backgroundColor: "#0098de",
    borderRadius: 2,
    padding: 3
  },
  btnPlus: {
    backgroundColor: "#0098de",
    borderRadius: 2,
    padding: 3
  }
};
