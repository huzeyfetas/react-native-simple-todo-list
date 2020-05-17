import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// It is a simple to-do-list application. It is available for development.
// You can use it as you wish. version 0.1
// Thank you for your star and fork

// If you wanna see datas how looks like ,you can check logs for catch datas

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);
  // console.log(courseGoals);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length <= 0) {
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle,
      },
    ]);

    setisAddMode(false);
  };

  const removeGoalHandler = goalId => {
    // console.log('deleted item :' + goalId);
    // console.log(courseGoals);
    setCourseGoals(currentGoals => {
      return courseGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setisAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setisAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}>
        >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    borderWidth: 5,
    borderColor: '#2369cc',
  },
});
