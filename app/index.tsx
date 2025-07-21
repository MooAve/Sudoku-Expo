import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Sudoku</Text>

      <Button title="EASY" onPress={() => router.navigate('./game?difficulty=easy')}></Button>
      <Button title="MEDIUM" onPress={() => router.navigate('./game?difficulty=medium')}></Button>
      <Button title="HARD" onPress={() => router.navigate('./game?difficulty=hard')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  start_button : {
    borderWidth : 2,
    borderRadius : 3,
  }
})