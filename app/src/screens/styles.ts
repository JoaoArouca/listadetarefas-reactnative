import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 28,
        backgroundColor: '#0D0D0D'
    },
    logoContainer: {
        padding: 30,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        height: 70,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#ffff',
        padding: 16,
        fontSize: 20,
        marginRight: 12
    },
    form: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        justifyContent: 'center',
        alignItems: "center"
    },
});