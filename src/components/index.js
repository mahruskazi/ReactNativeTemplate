import { Navigation } from "react-native-navigation";
import WelcomeScreen from "./WelcomeScreen";

function registerScreens() {
  Navigation.registerComponent(`loopmerchant.WelcomeScreen`, () => WelcomeScreen );
}

module.exports = {
  registerScreens
};
