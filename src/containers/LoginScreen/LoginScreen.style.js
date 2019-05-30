import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  container: {
    display: "flex",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  loginContainer: {
    display: "flex",
    flexDirection: 'column',
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 10
  },
  form: {
    // paddingHorizontal: 10,
  },
  submitContainer: {
    marginTop: 10,
  },
  loginScreenButton: {
    padding: 8,
    backgroundColor:'#EEAD0E',
    borderRadius:5,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 },
 },
 loginText:{
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
    textTransform: "uppercase",
    fontFamily: 'abel',
 },
 searchInput: {
    fontSize: 26,
    lineHeight: 20,
    padding: 10,
    fontFamily: 'Lato-Light',
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    fontSize: 16,
    color: '#231f20',
    marginVertical: 10
 },
 setUpAccountBtn: {
   display: "flex",
   paddingBottom: 30,
   color: "#ffffff"
   // alignSelf: "flex-end",
 },
 goBackBtn: {
   color: "#ffffff",
   paddingBottom: 30,
 },
 goBackText: {
  color: "#ffffff",

 },
 setUpText: {
   color:'#fff',
   textAlign:'center',
   textTransform: "uppercase",
   fontFamily: 'abel',
   fontSize: 15
 }
}
