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
                if (tile > 10) {
                    return (
                        <Tile key = {row.toString() + index.toString()} num={tile-10} revealed={true}></Tile>
                    )
                } else {
                    return (
                        <Tile key = {row.toString() + index.toString()} num={tile} revealed={false}></Tile>
                    )
                }
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    tileRow : {
        flexDirection : 'row'
    }
})