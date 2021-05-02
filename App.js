import React,{useState}from 'react';
import { View,Text,StyleSheet,Image,Model,Button,TextInput,Alert,ActivityIndicator} from 'react-native';
import Constants from 'expo-constants'

const FlexDimensionsBasics = () => {
  const [Item1,setItem1]= useState('')
  const [Item2,setItem2]= useState('')
  const [loading,setloading]= useState(false)
  if(loading)
  {
    return(
      <View style={{alignItems:"center",backgroundColor: 'orange'}}>
        <Text>Calculating Love ........</Text>
         <ActivityIndicator size={32} color="green"/>
      </View>
    )
  }
  const Calculatelove=()=>{
    setloading(true)
    setTimeout(() => {
    setloading(false)
    alert(Math.floor(Math.random()*100)+"%")
    }, 2000);
  }
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{ flex: 1 ,paddingTop:Constants.statusBarHeight}}>
      <View style={{ flex: 1, backgroundColor: 'orange' }} >
      <Text style={{color: 'pink',fontSize: 30,fontWeight: 'bold',textAlign:"center"}}>Welcome To Love Calculator ♥</Text>
      <TextInput 
      placeholder="Type a Your Name"
      value={Item1}
      style={{height:50,borderWidth:2}}
      onChangeText={(text)=>{setItem1(text);}}  
      />
      <TextInput 
      placeholder="Type Your Partner Name"
      value={Item2}
      style={{height:50,borderWidth:2}}
      onChangeText={(text)=>{setItem2(text);}}   
      />
     
      <Button title="Press Me"
      onPress={()=>{
        Calculatelove()
      }}
      />
      </View>
      {/* <View style={{ flex: 2, backgroundColor: 'steelblue' }} /> */}
    </View>
  );
};

export default FlexDimensionsBasics;
