# fuboTV Appium Sample Test in TypeScript

![preview](./login-test-preview.gif)

## Prerequisites
- [Appium](http://appium.io/) 
- [Node.js](https://nodejs.org/en/)
- [Android Studio](https://developer.android.com/studio)
  - An Emulator with the FuboTV app installed

### Quick Start on macOS
```bash
$ brew install node
$ npm install -g appium
$ appium --allow-insecure=get_server_logs
```

*Don't let the **`--allow-insecure`** flag in the command above give you unease. What this command translates to is, "allow an Appium client to request logs from the Appium Server." Unless, you are hosting your Appium Server publicly on the Internet without safeguards in place, you can safely enable this feature.* *[Click here](http://appium.io/docs/en/writing-running-appium/security/) for more information.*

## Install Dependencies

```bash
$ npm install
```

## Run Test
```bash
$ npm test
```