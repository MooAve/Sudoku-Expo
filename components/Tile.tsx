import { useState } from 'react'
import { StyleSheet, Text, TextInput } from "react-native"

type Props = {
    num : number
    revealed : boolean
}

export default function Tile({num, revealed}: Props) {
    let [guess, setGuess] = useState<string>(" ")
    let [notes, setNotes] = useState<number[]>([])
    const [guessColor, setGuessColor] = useState<string>("#FFFFFFFF")

    function checkSetGuess(guessString : string) {

        if (guessString === num.toString()) {
            setGuessColor("#177810");
        } else if (guessString === "") {
            setGuessColor("#FFFFFFFF");
        }
        else {
            setGuessColor("#B31513");
        }

        setGuess(guessString);
        
    }

    if (revealed) {
        return(
            <Text style={styles.tile}>{num}</Text>
        );
    } else {
        return (
            <TextInput style={[styles.tile, {backgroundColor: guessColor}]} inputMode="numeric" keyboardType="numeric" maxLength={1} onChangeText={checkSetGuess}></TextInput>
        )
    }


}

const styles = StyleSheet.create({
    tile: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 40,
        height: 40
    }
})