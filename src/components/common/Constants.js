import {Platform,Dimensions} from "react-native";
const { width, height } = Dimensions.get('window');

//Font Family

//Colors
export const Purple = "#bc0d8d";
export const LightPurple = "#de0fa6";
export const GRAY = "#808080";
export const LIGHTGRAY = "#F2F2F2";


//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
//const guidelineBaseWidth = 360;
//const guidelineBaseHeight = 640;
export const verticalScale = size => height / guidelineBaseHeight * size;
export const scale = size => width / guidelineBaseWidth * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
