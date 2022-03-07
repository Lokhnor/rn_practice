import { StyleSheet, Button } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useMachine } from "@xstate/react";
import { promiseMachine } from "../machine/machine";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [state, send] = useMachine(promiseMachine);
  return (
    <View style={styles.container}>
      {state.matches("pending") && <Text style={styles.title}>Pending</Text>}
      {state.matches("resolved") && <Text style={styles.title}>Resolved</Text>}
      {state.matches("rejected") && <Text style={styles.title}>Rejected</Text>}
      <View style={styles.separator} />
      <Button onPress={() => send("RESOLVE")} title="Resolve" />
      <View style={styles.separator} />
      <Button onPress={() => send("REJECT")} title="Reject" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
