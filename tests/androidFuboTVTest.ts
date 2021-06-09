import { remote, RemoteOptions, Browser } from "webdriverio";
import { clickElement, setValueOnElement } from "./testUtilities";
import ProjectCapabilities from "./projectCapabilities"
import AndroidViewObjects from "./viewObjects/androidFuboTV";

describe('fuboTV Android Test Suite', function () {
  let driver: Browser<"async">;
  this.timeout(40000);

  before(async function () {
    const remoteOptions: RemoteOptions = ProjectCapabilities.androidBaseCapabilities(
      "tv.fubo.mobile",
      ".presentation.onboarding.dispatch.controller.DispatchActivity",
      {
        noReset: false
      }
    );
    driver = await remote(remoteOptions);
  });

  it('Login Test', async function () {
    console.log("Clicking on the [Sign In] Button");
    await clickElement(driver, AndroidViewObjects.OnboardingView.signInButton);

    // Provide your fuboTV account email
    console.log("Sending input on the [Email] TextField");
    await setValueOnElement(driver, AndroidViewObjects.LoginView.emailTextField, "");

    // Provide your fuboTV account password
    console.log("Sending input on the [Password] TextField");
    await setValueOnElement(driver, AndroidViewObjects.LoginView.passwordTextField, "");

    console.log("Hide the keyboard");
    await driver.hideKeyboard();

    console.log("Clicking on the [Sign In] Button");
    await clickElement(driver, AndroidViewObjects.LoginView.signInButton);

    console.log("Clicking on the [Profile Image] Button");
    await clickElement(driver, AndroidViewObjects.SelectProfileView.myProfileImageButton);

    console.log("Clicking on the [ALLOW LOCATION ACCESS] Button");
    await clickElement(driver, AndroidViewObjects.AllowLocationAccessView.allowLocationAccessButton);

    console.log("Clicking on the [While using the app] Button in Android Permission")
    await clickElement(driver, AndroidViewObjects.AndroidLocationPermissionDialog.allowInForegroundButton);

    await driver.pause(5000);
  });

  after(async function () {
    await driver.deleteSession();
  });

});