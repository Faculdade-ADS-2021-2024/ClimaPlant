import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, TouchableHighlight, Text } from "react-native";

import { EvilIcons } from '@expo/vector-icons';
import { getClima } from "../services/climaService";

export function Clima() {

    const [city, setCity] = useState('Teresopolis');
    const [clima, setClima] = useState([]);
    const [cidade, setCidade] = useState('')

    useEffect(() => {
        buscarCidade(city);
    }, [])

    async function buscarCidade() {
        try {
            const response = await getClima(city);
            setClima(response.data);
            // console.log(response.data);
            setCidade(response.data.city.name);
            console.log(response.data.city.name);
            console.log(response.data.city.name);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    onChangeText={setCity}
                    placeholder='Digite o nome da sua cidade'
                />

                <TouchableHighlight style={styles.btnSearch} onPress={() => { buscarCidade() }}>
                    <EvilIcons name="search" size={24} color="#fff" />
                </TouchableHighlight>
            </View>
            <View>
                <Text>{cidade}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 32,
        backgroundColor: '#E5F4DF',
    },
    header: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        width: '78%',
        height: 40,
        margin: 12,
        marginRight: 0,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 6
    },
    btnSearch: {
        width: '15%',
        margin: 12,
        marginLeft: 6,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008080',
        borderRadius: 10
    }
});