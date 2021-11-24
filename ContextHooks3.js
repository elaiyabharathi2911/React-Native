import React, {useContext} from 'react';
import {first} from './ContextHooks1';
import {Button, Text, View} from 'react-native';
function ContextHooks3() {
  const title = useContext(first);
  return (
    <View>
      <Text>{title} Hloo</Text>
    </View>
  );
}

export default ContextHooks3;