import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Linking from "expo-linking";

export default function App() {
  const [canOpenHome, setCanOpenHome] = useState(false);
  const [canOpenUser, setCanOpenUser] = useState(false);

  useEffect(() => {
    Linking.canOpenURL("linkedto://").then((result) => setCanOpenHome(result));
    Linking.canOpenURL("linkedto://user/friend").then((result) =>
      setCanOpenUser(result)
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>Can open home? {canOpenHome.toString()}</Text>
      <Button
        title="Open Home Page"
        onPress={() => Linking.openURL("linkedto://")}
      />
      <Text>Can open user? {canOpenUser.toString()}</Text>
      <Button
        title="Open User Page"
        onPress={() => Linking.openURL("linkedto://user/friend")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
