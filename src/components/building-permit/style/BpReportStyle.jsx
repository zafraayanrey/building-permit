import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { styles } from "./style";
import cpdclogo from "../../../assets/cpdclogo.jpg";
import talisaylogo from "../../../assets/talisaylogo.png";
import "./style.css";

function BpReportStyle() {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <View style={styles.logo}>
              <Image src={cpdclogo}></Image>
            </View>
            <View style={styles.section}>
              <Text>Republic of the Philippines</Text>
              <Text>Province of Cebu</Text>
              <Text>City of Talisay</Text>
              <Text>CITY PLANNING AND DEVELOPMENT COORDINATOR</Text>
              <Text>OFFICE OF THE ZONING ADMINISTRATOR</Text>
            </View>
            <View style={styles.logo}>
              <Image src={talisaylogo}></Image>
            </View>
          </View>
          <View style={styles.subHeading}>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
          </View>
          <View style={styles.subHeading}>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
            <View style={styles.subHeadingContent}>
              <Text>SubHeading</Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default BpReportStyle;
