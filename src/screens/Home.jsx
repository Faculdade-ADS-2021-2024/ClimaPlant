import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Paho from 'paho-mqtt';

import { ListItem } from "../components/ListItem";

const DATA = [
    {
        id: 1,
        data: '01/11/2023',
        temperatura: 20.5,
        umidade: 90.6
    },
    {
        id: 2,
        data: '02/11/2023',
        temperatura: 20.5,
        umidade: 83.6
    },
    {
        id: 3,
        data: '03/11/2023',
        temperatura: 20.5,
        umidade: 87.6
    },
];

client = new Paho.Client(
    "maqiatto.com",
    8883,
    "mqttx_23ba8d7e"
);

export function Home() {

    const [temp, setTemp] = useState(null);
    const [umidade, setUmidade] = useState(null);

    function onMessage(message) {
        if (message.destinationName === "arilsontere18@hotmail.com/temp") {
            setTemp(message.payloadString);
        }
        if (message.destinationName === "arilsontere18@hotmail.com/umidade") {
            setUmidade(message.payloadString);
        }
    }

    useEffect(() => {
        client.connect({
            userName: 'arilsontere18@hotmail.com',
            password: '@Ri142008',
            onSuccess: () => {
                console.log("Connected to MQTT Broker");
                client.subscribe("arilsontere18@hotmail.com/temp");
                client.subscribe("arilsontere18@hotmail.com/umidade");
                client.onMessageArrived = onMessage;
            },
            onFailure: (error) => {
                console.log("Failed to connect to MQTT Broker");
                console.log(error)
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Temperatura</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.box}>
                        <FontAwesome5 name="temperature-high" size={56} color="#ff6347" />
                        <Text style={styles.boxText}>{temp}</Text>
                    </View>
                    <View style={styles.box}>
                        <Ionicons name="water" size={57} color="#4169e1" />
                        <Text style={styles.boxText}>{umidade}</Text>
                    </View>
                </View>
            </View>

            <View style={{ width: '100%' }}>
                <View>
                    <Text style={styles.title}>Histórico</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Ultimos 7 dias</Text>
                </View>
                <View>
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={DATA}
                        renderItem={({ item }) => <ListItem data={item} />}
                        keyExtractor={item => item.id}
                    />
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
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        color: '#008080',
        fontWeight: 'bold',
        paddingTop: 12,
        textAlign: 'center',
    },
    box: {
        width: 150,
        height: 100,
        margin: 10,
        marginBottom: 0,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxText: {
        fontSize: 28,
        fontWeight: '900',
        color: '#008080',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});