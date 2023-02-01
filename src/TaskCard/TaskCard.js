import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TaskCard.style';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskCard = props => {
  const btnclck = () => {
    props.remove_click(props.toDo.item.id)
  };
  return (
      <View
        style={[styles.outer_container,
          props.toDo.item.completed
            ? styles.completed_container
            : styles.container]
        }>
        <Text
          style={
            [styles.task_container,props.toDo.item.completed ? styles.completed_task : styles.task]
          }
          onPress={() => props.event_click(props.toDo.item.id)}>
          {props.toDo.item.title}
        </Text>
        <TouchableOpacity style={{justifyContent:"center",margin:5}} onPress={btnclck}>
          <Icon name="trash" size={20} />
        </TouchableOpacity>
      </View>
  );
};

export default TaskCard;
