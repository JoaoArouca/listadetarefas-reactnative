import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container} >
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/Logo.png')} />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Escreva sua tarefa aqui"
                    placeholderTextColor="#6b6b6b"
                />
                <TouchableOpacity style={styles.button}>
                    <Icon name="plus-circle" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}