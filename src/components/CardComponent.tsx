import { View, Text, Image , Button} from 'react-native'
import React from 'react'

const CardComponent = () => {
  return (
    <View>
      
      <h2>Profile Card</h2>
      <Image source={ require('../asset/logo.png')} />
      <Text><h2>Nilesh Kumar</h2></Text>
      <Text >I  am learning React-native</Text>
      <Button title='press me' />

    </View>
  )
}

export default CardComponent