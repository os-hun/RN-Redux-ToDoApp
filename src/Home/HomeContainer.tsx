import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import { addNote, deleteNote } from "./action";

import Note from './components/note';

interface Props {
  onAddNote: any,
  noteArray: [ { date: string, note: string } ],
}
interface State {
  noteText: string,
  date: string
  noteArray: [ { date: string, note: string } ],
}

class Home extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    var d = new Date()
    var fullDate = d.getFullYear() +  "/" + (d.getMonth() + 1) + "/" + d.getDate()
    this.state = {
      noteArray: [ { date: '', note: '' }],
      noteText: '',
      date: fullDate,
    }
  }
  addNote() {
    if(this.state.noteText){
      this.props.onAddNote(this.state.noteText, this.state.date)
      this.setState({ noteText: '' })
    }
  }
  deleteNote(key: number) {
    this.props.noteArray.splice(key, 1)
    this.setState({noteArray: this.state.noteArray})
  }
  render() {
    let notes = this.props.noteArray.map((val, key) => {
      // @ts-ignore
      return <Note key={key} keyval={key} deleteMethod={() => this.deleteNote(key)}  val={val}/>
    })
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>- NOTER -</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder='>note'
            onChangeText={(noteText)=> this.setState({noteText})}
            value={this.state.noteText}
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
          </TextInput>
        </View>
        <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state: any) => {
  // stateとはstoreのこと。巨大なjsonで全てのstateを管理する
  console.log(state)
  return {
    noteArray: state.Home.noteArray
  }
}

const mapDispatchToProps = (dispatch: any) => {
  console.log(dispatch)
  return {
    onAddNote: (text: string, date: string)  => dispatch(addNote(text, date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth:2,
    borderTopColor: '#ededed',
    height: 90,
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});
