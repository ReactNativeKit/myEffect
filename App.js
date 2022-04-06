import React, { useState, useEffect } from "react";
import {View, Button, Text} from "react-native";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, [count]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`)
  }, [count2]);

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#8FBDD3' }}>
      <Button color="#BE8C63" title="Click Me" onPress={() => setCount(count + 1)}/>
      <Text>{'\n'}</Text>
      <Button color="#A97155" title="Click Me" onPress={() => setCount2(count2 + 1)} />
    </View>
  );
}

export default App;