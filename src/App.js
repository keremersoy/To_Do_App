import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, View} from 'react-native';
import TaskCard from './TaskCard';
import Header from './Header';
import Footer from './Footer';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove, completed, notCompleted} from './redux/list';

const App = () => {
  const toDoCounter = useSelector(state => state.list.counter);
  const toDoList = useSelector(state => state.list.list);

  const dispatch = useDispatch();


  const handleAddTask = task => {
    if (task) {
      let id = 0;
      if (toDoList) 
        id = toDoList.length + 1;

      const todo = {
        id: id,
        title: task,
        completed: false,
      };
      dispatch(add(todo));
    } else {
      alert('Boş görev eklenemez!');
    }
  };

  const handleCompleteTask = id => {
    if (!toDoList.find(e => e.id == id).completed) {
      dispatch(completed(id));
    } else {
      dispatch(notCompleted(id));
    }
  };

  const handleRemoveTask = id => {
    dispatch(remove(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header style={styles.header} to_do_counter={toDoCounter} />
        <FlatList
          style={styles.list}
          keyExtractor={item => item.id}
          data={toDoList}
          renderItem={item => (
            <TaskCard
              toDo={item}
              event_click={handleCompleteTask}
              remove_click={handleRemoveTask}
            />
          )}
        />
      </View>
      <View style={styles.footer_container}>
        <Footer style={styles.footer} event_click={handleAddTask} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373A40',
  },
  body: {
    flex: 1,
  },
  footer_container: {
    borderRadius: 10,
  },
  header: {},
  list: {
    flex: 1,
  },
  footer: {},
});

export default App;
