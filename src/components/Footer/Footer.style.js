import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  footer: {
    backgroundColor: "#E8E8E8",
    paddingVertical: 25,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowColor: '#231f20',
    shadowOffset: { height: 1, width: 4 },
    zIndex: 10
  }
}
