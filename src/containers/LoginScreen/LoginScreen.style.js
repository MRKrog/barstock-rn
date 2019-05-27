import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  tabContainer: {
    backgroundColor: "#232121",
    height: 10
  },
  tabHeading: {
    backgroundColor: "#231f20"
  },
  tabTitle: {
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
    textTransform: "uppercase",
    fontFamily: 'abel',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  loginContainer: {
    display: "flex",
    flex: .5,
    flexDirection: 'column',
    width: screenWidth * .9,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logo: {
    marginBottom: 10
  },
  form: {
    flex: 2,
    paddingHorizontal: 10,
    justifyContent: 'flex-end'
  },
  submitContainer: {
    flex: 2,
    marginTop: 5,
    paddingHorizontal: 10,
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
}
