import { View, Text, StyleSheet } from 'react-native';

export function ListItem({data}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listText}>{data.data}</Text>
            <Text style={styles.listText}>{data.temperatura}</Text>
            <Text style={styles.listText}>{data.umidade}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#008080',
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        borderRadius: 10
    },
    listText: {
        color: '#fff',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
});