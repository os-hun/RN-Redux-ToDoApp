import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

interface Props {
  keyval: number,
  deleteMethod: () => void,
  val: Val
}
export default class Note extends Component<Props>{
  render() {
    const { keyval, deleteMethod } = this.props
    const { date, note } = this.props.val
    return (
      <View key={keyval} style={styles.note}>
        <Text style={styles.noteText}>{date}</Text>
        <Text style={styles.noteText}>{note}</Text>
        <TouchableOpacity onPress={deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>D</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class Val {
  date: string = ''
  note: string = ''
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth:2,
    borderBottomColor: '#ededed'
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63'
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: 'white'
  }
});
