import React,{Component} from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    Button,
    Pressable,
    Animated,
    Easing,
    useColorScheme,
    Linking,
    
  } from 'react-native';
export default class ClifeCycle extends Component{
    constructor(props){
        super()
        this.state={count:0}
         this.state = {date: new Date()};
        console.log('App-constructor')
    }
    handleReset(){
        this.setState({count:null})
    }
    componentDidMount(){
        console.log("App-mounted")
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
    componentDidUpdate(prevProps,prevState){
        console.log('app counter update')
        console.log("App-precProps-",prevProps)
        console.log("App-prevState-",prevState)
    }
    increment(){
        let count=this.state.count
        this.setState({count:count+=1})
    }
    decrement(){
        let count=this.state.count
        this.setState({count:count-=1})
    }
    componentWillUnmount() {
        console.log('Unmounted')
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render(){
        console.log('App-render')
        return(
            <>

     {/* <Text>It is {this.state.date.toLocaleTimeString()}.</Text>  */}
        <Button onPress={this.componentWillUnmount.bind(this)} >clear</Button> 
         {<h2>{this.state.count}</h2>} 
        <Button onPress={this.increment.bind(this)} title="increment">Increment</Button>
        <Button onPress={this.decrement.bind(this)}>DECREMENT</Button>
        <Button onPress={this.handleReset.bind(this)}>RESET</Button>
            </>
        )
    }
}

