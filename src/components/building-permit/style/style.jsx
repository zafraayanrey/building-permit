// Create styles
import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  size: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  page: {
    // display: "flex",
    // flexDirection: "row",
    fontSize: "11px",
    // textAlign: "center",
    paddingTop: 25,
    paddingLeft: 50,
    paddingRight: 50,
  },
  section: {
    // margin: 24,
    flex: 1,
    padding: 5,
    textAlign: "center",
    width: "100%",
    height: "70px",
  },

  header: {
    flexDirection: "row",
    borderBottomColor: "#000000",
    borderBottomWidth: "1px",
    zIndex: 1,

    // backgroundColor: "orange",
  },

  logo: {
    width: "65px",
    height: "65px",
    zIndex: 0,
  },

  subHeading: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    gap: 0,
    // margin: 0,
    padding: 0,
  },

  subHeadingContent: {
    flex: 1,
    padding: 0,
    margin: "auto",
    textAlign: "center",
    border: "1px solid black",
  },
});
