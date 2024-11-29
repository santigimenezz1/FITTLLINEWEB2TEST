import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  home: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    position: "relative",
    height: "100%",
  },
  home__main: {
    width: "95%",
    height: "100%",
    padding: 5,
    flexDirection: "column",
    marginTop: 10,
  },
  home__contentContainer: {
    paddingBottom: 60,
  },
  home__introText: {
    fontSize: RFValue(16),
    color: "white",
    marginTop: 30,
    marginBottom: 40,
    textAlign: "center",
    fontFamily: 'NunitoSans_400Regular',
    letterSpacing: 0.7,
  },
  home__sectionTitle: {
    fontSize: RFValue(18),
    color: "white",
    fontFamily: 'NunitoSans_400Regular',
    marginTop: 30,
    display:"flex",
    
  },
  home__tipsContainer: {
    marginTop: 30,

    display:"flex",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  home__buttonText: {
    color: "white",
  },
});

export default styles;
