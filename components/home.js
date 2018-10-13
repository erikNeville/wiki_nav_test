import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LogoTitle from '../App.js';

export default class home extends React.Component {
   

    static navigationOptions = {
        headerTitle: <LogoTitle />,
      };    

  render() {
    return (
      <View style={styles.container}>
        <Text>Homne Page</Text>
        <Button 
            title="Go To Profile" 
            onPress={
                () => this.props.navigation.navigate( 'profile' )
            }    
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
