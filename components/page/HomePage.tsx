import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

interface HomePageProp {
  isLoading: boolean;
  onPressSend: () => void;
}
const HomePage: React.FC<HomePageProp> = (prop: HomePageProp) => {
  return (
    <SafeAreaView
      style={styles.parentContainer}
      edges={["top", "left", "right"]}
    >
      <KeyboardAvoidingView style={styles.parentContainer}>
        <ScrollView style={styles.messageListContainer}>
          {Array.from({ length: 1000 }, (_, i) => (
            <Text key={i}>Item {i}</Text>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            multiline={true}
            placeholder="Type a message"
            style={styles.inputField}
          ></TextInput>
          {prop.isLoading ? (
            <ActivityIndicator size={30} style={{ padding: 4 }} />
          ) : (
            <TouchableOpacity onPress={prop.onPressSend}>
              <Ionicons
                name="play"
                size={30}
                color={"gray"}
                style={{ padding: 4 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: { flex: 1, backgroundColor: "white" },
  messageListContainer: {
    flex: 1,
    marginBottom: 8,
  },
  inputContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F5F6",
  },
  inputField: {
    backgroundColor: "white",
    padding: 12,
    margin: 4,
    flex: 1,
  },
});

export default HomePage;
