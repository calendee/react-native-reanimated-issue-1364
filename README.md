# Issue

When using react-native-reanimated v2 with Expo projects, the webpack compiler shows this warning:

> ./react-native-reanimated-issue-1364/node_modules/react-native-reanimated/src/reanimated2/NativeReanimated.js
> Attempted import error: 'TurboModuleRegistry' is not exported from 'react-native-web/dist/index'.

However, when the project is run in a web browser, the sample does run in most cases. I'm trying to recreate a sample that does not work properly and will update this repo.

Related Issue: https://github.com/software-mansion/react-native-reanimated/issues/1364

# Steps to Reproduct

- Clone this project
- `yarn install`
- `expo start`
- Press the `w` key to launch the project in a browser
- Observe warning