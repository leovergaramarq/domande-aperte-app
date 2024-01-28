import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

import registerNNPushToken, { getPushDataObject } from "native-notify";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans";

export default function App() {
  const [url, setUrl] = useState(
    "https://leovergaramarq.github.io/domande-aperte/"
  );
  const [visible, setVisible] = useState(false);

  // registerNNPushToken(18817, "thDjZpHUT1d7rqr0tj0Zk2");
  // let pushDataObject = getPushDataObject();

  useFonts({ OpenSans_300Light, OpenSans_600SemiBold });

  // useEffect(() => {
  //   if ("newURL" in pushDataObject) {
  //     setUrl(pushDataObject.newURL);
  //   }
  // }, [pushDataObject]);

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="#009688" size="large" />
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <WebView
        key={1}
        style={styles.webview}
        source={{ uri: url }}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
      />
      {visible ? <ActivityIndicatorElement /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    // paddingTop: Constants.statusBarHeight,
  },
  // body: {
  //   flex: 9,
  //   width: "100%",
  // },
  // webview
  webview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicatorStyle: {
    flex: 1,
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
});
