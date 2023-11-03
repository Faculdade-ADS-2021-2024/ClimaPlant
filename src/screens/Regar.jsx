import { StyleSheet, View, Button, Alert } from "react-native";

export function Regar() {
    return (
        <View style={styles.container}>
            <View style={{ width: "80%"}}>
                <Button
                    title='Regar'
                    color="#005C73"
                    onPress={() => Alert.alert('Funcionalidade não implementada!')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: '#E5F4DF',
    }
});