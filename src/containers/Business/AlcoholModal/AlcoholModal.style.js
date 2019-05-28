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
    backgroundColor: "#ffffff",
    height: screenHeight * 0.45,
    width: screenWidth * 0.8,
    borderRadius: 5,
    // padding: 15,
    display: "flex",
    justifyContent: "space-between"
  },

  modal_alcInfoContainer: {
    // flex: 1,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between"
  },

  modal_alcInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },

  alcInfo_Name: {
    fontFamily: "Lato",
    fontSize: 20,
    textAlign: "left",
    paddingBottom: 3,
  },
  alcInfo_Price: {
    fontFamily: "Lato-Light",
    fontSize: 15,
    textAlign: "left",
    paddingBottom: 2,
  },
  alcInfo_Size: {
    fontFamily: "Lato-Light",
    fontSize: 15,
    textAlign: "left",
    paddingBottom: 2,
  },

  numberContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  itemNumber: {
    display: "flex"
  },
  alcInfo_Margin: {
    fontFamily: "abel",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 2,
  },
  alcInfo_MarginLabel: {
    fontFamily: "abel",
    textAlign: "center",
    textTransform: "uppercase"
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#2c4969",
    paddingVertical: 10
  },
  modal_textInputDisplay: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // marginHorizontal: 20,
    marginTop: 10
  },
  modal_textInput: {
    fontSize: 20,
    fontFamily: "Lato-Light",
    padding: 5,
    borderRadius: 3,
    borderColor: "#C4C4C4",
    color: "#ffffff",
    borderWidth: 1,

    // height: 50,
    width: screenWidth * 0.2,
    // width: 1,
    textAlign: "center"
  },
  modal_label: {
    paddingTop: 5,
    fontSize: 12,
    color: "#ffffff",
    fontFamily: "Lato-Light",
    textAlign: "center"
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


}
