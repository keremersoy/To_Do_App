import React from 'react';
import { View, Text } from 'react-native';
import styles from "./TaskCard.style"

const TaskCard = props => {


    return (
        <View style={props.toDo.item.completed ? styles.completed_container : styles.container}>
            <Text
                style={props.toDo.item.completed ? styles.completed_task : styles.task}
                onPress={() => props.event_click(props.toDo.item.id)}>
                {props.toDo.item.title}</Text>
        </View>
    );
}

export default TaskCard;