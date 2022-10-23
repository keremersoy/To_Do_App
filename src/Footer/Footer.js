import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./Footer.style";

const Footer = props => {
    const [task, setTask] = useState("");

    const changeText = (text) => {
        setTask(text);
    }

    const pressAddButton = () => {
        props.event_click(task);
        setTask("");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.todo_input}
                placeholder='Yapılacak...'
                onChangeText={changeText}
                value={task}
                placeholderTextColor="#EEEEEE" />
                <TouchableOpacity style={styles.add_button_container} onPress={pressAddButton}>
                        <Text style={styles.add_button}>
                            EKLE
                        </Text>
                </TouchableOpacity>
        </View>
    );
}

export default Footer;
