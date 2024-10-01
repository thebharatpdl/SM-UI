import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Arrowback from '../component/Arrowback'


export class Profile extends Component {
  render() {
    return (
      <View>
              <Arrowback />

        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default Profile
