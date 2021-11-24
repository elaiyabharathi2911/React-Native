import React, {Component} from 'react';
import ContextHooks2 from './ContextHooks2';
import {Button, Text, View} from 'react-native';

export const first = React.createContext();

export class ContextHooks1 extends Component {
  render() {
    return (
      <View>
        <first.Provider value={'Use Context'}>
          <ContextHooks2 />
        </first.Provider>
      </View>
    );
  }
}

export default ContextHooks1;