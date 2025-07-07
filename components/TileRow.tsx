import { StyleSheet, View } from "react-native"
import Tile from "./Tile"

type Props = {
    row : number,
    tiles : any
}

export default function TileRow({row, tiles} : Props) {
    return (
        <View style = {styles.tileRow}>
            {tiles.map((tile : number, index : number) => {
                return (
                    <Tile key = {row.toString() + index.toString()} num={tile} revealed={true}></Tile>
                )
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    tileRow : {
        flexDirection : 'row'
    }
})