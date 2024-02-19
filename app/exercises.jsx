import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExerciseByBodypart } from '../api/exerciseDB';
import { demoExercises } from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,

} from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';
export default function Exercises() {

    const router = useRouter()
    const item = useLocalSearchParams();
    const [exercises, setExercises] = useState([])

useEffect(() => {
if(item) getExercises(item.name);

},[item])

const getExercises = async (bodypart) => {
  
let data = await fetchExerciseByBodypart(bodypart)
setExercises(data)
console.log('got it:',data)

}


  return (
    <ScrollView>
      <StatusBar style="light"/>
      <Image 
      source={item.image}
      style={{width: wp(100) , height: hp(45)}}
      className="rounded-b-[40px]"

      />

      <TouchableOpacity
      onPress={() => router.back()}
      className="bg-rose-500 mx-4 absolute rounded-full flex justify-center items-center"
      style={{height: hp(5.5) , width: hp(5.5),  marginTop: hp(7)}}>

        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>


      <View className='mx-4 space-y-3 mt-4'>
        <Text style={{fontSize: hp(5)}} className='font-semibold text-neutral-700'>
          {item.name} exercises
        </Text>
 <View className='mb-10'>
  <ExerciseList data={exercises} />
 </View>
      </View>
    </ScrollView>
  )
}