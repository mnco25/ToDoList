import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

const ToDoScreen = () => {

    const [toDos, setToDos] = useState("");
    const [toDosList, setToDosList] = useState([]);
    const [isEditing, setIsEditing] = useState(null);

    const handleAddTask = () => {
        if (toDos === "") {
            return;
        }

        setToDosList([...toDosList, { id:   Date.now().toString(), title: toDos }]);
        setToDos("");
    }

    const handleDeleteTask = (id) => {
        const newToDosList = toDosList.filter((item) => item.id !== id);
        setToDosList(newToDosList);
    }

    const handleUpdateTask = () => {

        const updatedToDosList = toDosList.map((item) => {
            if (item.id === isEditing) {
                return { ...item, title: toDos };
            }

            return item;
        });

        setToDosList(updatedToDosList);
        setToDos("");
        setIsEditing(null);
    }


    const handleEditTask = (toDos) => { 
        setToDos("");
        setIsEditing(toDos.id);
    }

    const renderToDos = ({ item }) => {
        return (
            <View style={styles.renderToDos}>
                <Text style={styles.renderButtonText}>{item.title}</Text>
                <IconButton
                    icon="pencil"
                    iconColor="#fff"
                    onPress={() => handleEditTask(item)}
                />
                <IconButton
                    icon="delete"
                    iconColor="#fff"
                    onPress={() => handleDeleteTask(item.id)}
                />
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={toDos}
                onChangeText={setToDos}
                placeholder="Enter task name"
            />
            <TouchableOpacity
                style={styles.addTaskOuterButton}
                onPress={isEditing ? handleUpdateTask : handleAddTask}
            >
                <Text style={styles.AddTaskButton}>
                    {isEditing ? "Update Task" : "Add Task"}
                </Text>
            </TouchableOpacity>
            <FlatList data={toDosList} renderItem={renderToDos}/>
        </View>
    );
}

export default ToDoScreen;

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 16,
    },

    input: {
        borderWidth: 2,
        borderColor: "#1e90ff",
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

    addTaskOuterButton: {
        backgroundColor: "#000",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginTop: 12,
        alignItems: "center",
        marginBottom: 12,
    },

    AddTaskButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    renderToDos: {
        padding: 16,
        marginVertical: 8,
        borderWidth: 2,
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        alignItems: "center",
        flexDirection: "row",
    },

    renderButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        flex: 1,
    },
});