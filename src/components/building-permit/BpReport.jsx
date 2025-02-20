import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import BpReportStyle from "./style/BpReportStyle";
import { styles } from "./style/style";

function BpReport() {
  return (
    <PDFViewer style={styles.size}>
      <BpReportStyle />
    </PDFViewer>
  );
}

export default BpReport;
