import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, TouchableHighlight, Text } from "react-native";

import { EvilIcons } from '@expo/vector-icons';
import { getClima } from "../services/climaService";
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={styles.nomeCity}>{cidade}</Text>
                <View style={styles.card}>
                    <MaterialCommunityIcons name="weather-night" size={64} color="black" />
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>{clima.list[0].main.temp}</Text>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', padding: 10}}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Min: {clima.list[0].main.temp_min}</Text>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Max: {clima.list[0].main.temp_max}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        {/* <Text>{clima.list[0].main.temp}</Text>
                        <Text>{clima.list[0].main.temp}</Text>
                        <Text>{clima.list[0].main.temp}</Text> */}
                    </View>
                </View>
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
    },
    nomeCity: {
        margin: 12,
        fontSize: 24,
        fontWeight: "bold"
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    }
});