import React, { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import TaskCard from "./TaskCard";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDoCounter, setToDoCounter] = useState(0);

  const handleAddTask = task => {
    if (task) {
      const todo = {
        id: toDoList.length + 1,
        title: task,
        completed: false,
      };
      setToDoList(toDoList.concat(todo));
      setToDoCounter(toDoCounter + 1);
    }
    else{
      alert("Boş görev eklenemez!");
    }
  }

  const handleCompleteTask = id => {
    let newList = toDoList;
    if (!newList.find(e => e.id == id).completed) {
      newList.find(e => e.id == id).completed = true;
      setToDoList(newList);
      setToDoCounter(toDoCounter - 1);
    }
    else{
      newList.find(e => e.id == id).completed = false;
      setToDoList(newList);
      setToDoCounter(toDoCounter + 1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header style={styles.header} to_do_counter={toDoCounter} />
        <FlatList
          style={styles.list}
          keyExtractor={(item) => item.id}
          data={toDoList}
          renderItem={item => <TaskCard toDo={item} event_click={handleCompleteTask} />}
        />
      </View>
      <View style={styles.footer_container}>
        <Footer style={styles.footer} event_click={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#373A40"
  },
  body: {
    flex: 1
  },
  footer_container: {
    borderRadius:10,
  },
  header: {
  },
  list: {
    flex: 1,
  },
  footer: {
  },
});

export default App;
