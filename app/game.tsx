import Board from "@/components/Board";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Game() {
    const {difficulty} = useLocalSearchParams<{difficulty : string }>();

    return (
        <View
        style={{
            flex: 1,
            alignItems: "center",
        }}
        >
        <Board difficulty={difficulty}></Board>
        </View>
    );
    }
