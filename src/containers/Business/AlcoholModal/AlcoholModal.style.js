import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height


export default {
  modal_background: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal_container: {
    backgroundColor: "#EBEBEB",
    height: screenHeight * 0.45,
    width: screenWidth * 0.8,
    borderRadius: 5
  },
  modal_button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#EEAD0C"
  },
  modal_buttonText: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },
  modal_alcInfo: {
    flex: 1,
    flexDirection: "column"
  },
  modal_textInput: {
    fontSize: 25,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    height: 50,
    width: screenWidth * 0.3
  },
  modal_textInputDisplay: {
    display: "flex",
    flexDirection: "row",
  }
}