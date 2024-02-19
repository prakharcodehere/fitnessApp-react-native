import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import {Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from 'react-native-vector-icons/AntDesign';


export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter()
  return (
    <View className='flex flex-1 my-6'>
     <View className='shadow-md bg-neutral-200 rounded-b-[40px]'>

      <Image source={{uri: item.gifUrl}}
      contentFit='cover'
      style={{width: wp(100), height: wp(100)}}
      />
     </View>

<TouchableOpacity
onPress={() => router.back()}
className='mx-2 absolute rounded-full mt-2 right-0'
>
<Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
</TouchableOpacity>

<ScrollView
className='mx-4 space-y-2 mt-3'
>
<Text
style={{fontSize:hp(2)}}
className='text-neutral-800 tracking-wide'
>
  {item.name}
</Text>
<Text
style={{fontSize:hp(2)}}
className='text-neutral-800 tracking-wide'
>
Equipment <Text></Text>

</Text>
</ScrollView>

    </View>
  )
}