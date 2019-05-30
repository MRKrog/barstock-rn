import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height


export default {
  modal_background: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",

  },
  modal_container: {
    backgroundColor: "#ffffff",
    width: screenWidth * 0.85,
    borderRadius: 8,
    display: "flex",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#fffff',
    shadowOffset: { height: 4, width: 0 },
  },
  modal_alcInfoContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
  },
  modal_alcInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10
  },
  
  info_title: {
    color: "#8e8e8e",
    fontFamily: "Lato-Light",
    paddingBottom: 3,
    fontSize: 10,
    textTransform: "uppercase",
    fontStyle: "italic"
  },
  info_name: {
    color: "#8e8e8e",
    fontFamily: "Lato-Light",
    fontSize: 25,
    paddingBottom: 3
  },
  info_section: {
    display: "flex",
    flexDirection: "row",
  },
  info_cont: {
    display: "flex",
    flexDirection: "column",
    marginRight: 15
  },
  info_label: {
    color: "#8e8e8e",
    fontFamily: "Lato-Light",
    fontSize: 10,
    textAlign: "left"
  },
  info_text: {
    fontFamily: "Lato-Light",
    color: "#8e8e8e",
    fontSize: 18,
    letterSpacing: .1
  },
  info_busTitle: {
    color: "#8e8e8e",
    fontFamily: "Lato-Light",
    paddingBottom: 3,
    fontSize: 10,
    textTransform: "uppercase",
    fontStyle: "italic",
    textAlign: "center",
    paddingTop: 10,
  },

  business_content: {
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    borderRightColor: '#ececec',
    borderRightWidth: 1,
    alignItems: "center",
    alignSelf: "center",
    flex: 1
  },
  modal_textInputDisplay: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 5
  },
  modal_textInput: {
    fontSize: 25,
    fontFamily: "Lato",
    padding: 5,
    borderRadius: 10,
    color: "#0098de",
    color: "#8e8e8e",
    backgroundColor: "#ffffff",
    width: screenWidth * 0.2,
    textAlign: "center",
    shadowOpacity: 0.2,
    borderColor: "#EEAD0C",
    borderWidth: .4,
    shadowRadius: 3,
    height: 50,
    shadowColor: '#231f20',
    shadowOffset: { height: 2, width: 0 },
  },
  modal_label: {
    marginTop: 5,
    fontSize: 13,
    color: "#8e8e8e",
    fontFamily: "Lato-Light",
    textAlign: "center"
  },
  numberContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-between',
    flex: 1
  },
  itemNumber: {
    display: "flex",
    marginVertical: 10,
    // padding: 5,
    flex: 1,
  },
  alcInfo_Margin: {
    fontFamily: "Lato-Light",
    color: "#8e8e8e",
    fontSize: 31,
    textAlign: "center",
    // height: 50,
  },
  alcInfo_MarginLabel: {
    fontFamily: "Lato-Light",
    textAlign: "center",
    color: "#8e8e8e",
    fontSize: 13,
  },
  modal_button: {
    marginVertical: 15,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#EEAD0C",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#fffff',
    shadowOffset: { height: 2, width: 0 },
  },
  modal_buttonText: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },



}
