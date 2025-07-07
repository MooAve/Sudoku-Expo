import { useState } from 'react'
import { StyleSheet, Text } from "react-native"

type Props = {
    num : number
    revealed : boolean
}

export default function Tile({num}: Props) {
    let [guess, setGuess] = useState<number>(0)
    let [notes, setNotes] = useState<number[]>([])


    return (
        <Text style={styles.tile}>{num}</Text>
    )


}

const styles = StyleSheet.create({
    tile: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})