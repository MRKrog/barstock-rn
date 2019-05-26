export default {
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#231f20'
  },
  navItemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    // borderBottomColor: '#ececec',
    // borderBottomWidth: .2,
  },
  iconStyle: {
    marginRight: 15
  },
  navItemStyle: {
    fontSize: 18,
    textTransform: "uppercase",
    fontFamily: 'abel',
    textAlign: "left",
    color: "#ffffff",
    letterSpacing: 1,
  },
  navSectionStyle: {

  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  footerContainer: {
    paddingVertical: 20,
    backgroundColor: "#161515",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#161515',
    shadowOffset: { height: -3, width: 0 },
    zIndex: 9,
  }
};
