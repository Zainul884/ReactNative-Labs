import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = () => {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      {/* Add more tasks*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    taskText: {
        fontSize: 16,
    },
});

export default ToDoList;
