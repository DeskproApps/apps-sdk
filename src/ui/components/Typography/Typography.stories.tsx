import * as React from "react";
import {
  H0,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P1,
  P10,
  P11,
  P12,
  P13,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
} from "./Typography";

export default {
  title: "Core/Typography",
};

const Template = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <H0>H0 - Rubik Medium 14pt</H0>
    <H1>H1 - Rubik Medium 12pt</H1>
    <H2>H2 - Rubik Regular 12pt</H2>
    <H3>H3 - Rubik Medium 11pt</H3>
    <H4>H4 - Rubik Regular 11pt</H4>
    <H5>H5 - Rubik Medium 10pt</H5>
    <H6>H6 - Rubik Medium 9pt</H6>
    <P1>P1 - Noto Sans Regular 12pt</P1>
    <P2>P2 - Noto Sans Medium 12pt</P2>
    <P3>P3 - Noto Sans SemiBold 12pt</P3>
    <P4>P4 - Noto Sans Bold 12pt</P4>
    <P5>P5 - Noto Sans Regular 11pt</P5>
    <P6>P6 - Noto Sans Medium 11pt</P6>
    <P7>P7 - Noto Sans SemiBold 11pt</P7>
    <P8>P8 - Noto Sans Medium 10pt</P8>
    <P9>P9 - Noto Sans Bold 10pt</P9>
    <P10>P10 - Noto Sans Semibold 9pt</P10>
    <P11>P11 - Noto Sans Medium 9pt</P11>
    <P12>P12 - Source Sans Pro Regular 9pt</P12>
    <P13>P13 - Source Sans Pro Regular 11pt</P13>
  </div>
);

export const Typography = Template.bind({});
