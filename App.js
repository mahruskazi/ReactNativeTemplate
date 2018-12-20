import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/components";

function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: "loopmerchant.WelcomeScreen"
              }
            }
          ]
        }
      }
    });
  });
}

module.exports = {
  start
};
