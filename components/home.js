import { useState } from 'react'
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Header from './header'
import Footer from './footer'
import { 
  NBR_OF_DICES,
  NBR_OF_THROWS,
  MIN_SPOT,
  MAX_SPOT,
  BONUS_POINTS_LIMIT,
  BONUS_POINTS } from '../constants/game';


export default function Home({ navigation }) {

  const [playerName, setPlayerName] = useState('');
  const [hasPlayerName, setHasPlayerName] = useState(false);

  const handlePlayerName = (value) => {
    if (value.trim().length > 0) {
      setHasPlayerName(true);
      Keyboard.dismiss();
    }
  }

  return (
    <>
    <Header />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal:50 }}>
      <MaterialCommunityIcons
        name="information"
        size={60}
        color="red"
      />
      {!hasPlayerName ? 
      <>
          <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18, fontFamily: 'Arial', color: '#333' }}>Enter your name for the scoreboard:</Text>
          <TextInput 
            onChangeText={setPlayerName}
            autoFocus={true}
            style={{ backgroundColor: 'white', borderColor: 'red', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, marginTop: 10 }}
            placeholder="Your name"
            placeholderTextColor="#999"
          />
          <Pressable
            onPress={() => handlePlayerName(playerName)}
            style={{ marginTop: 10 }}
          >
            <Text style={{ backgroundColor: 'red', color: 'white', padding: 10, borderRadius: 5, textAlign: 'center', fontSize: 16, fontFamily: 'Arial', }}>OK</Text>
          </Pressable>
        </>
      :
        <>
          <Text style={{fontWeight: 'bold', marginTop: 20, textAlign: 'center', fontSize: 20, fontFamily: 'Georgia', color: '#666' }}>Rules of the Game</Text>
          <Text style={{ textAlign: 'center', marginVertical: 10, fontSize: 14, fontFamily: 'Arial', color: '#444' }}>
            Upper section of the classic Yahtzee dice game.
            You have {NBR_OF_DICES} dices and for every dice, 
            you have {NBR_OF_THROWS} throws. After each throw,
            you can keep dices in order to get the same dice spot counts
            as many as possible. At the end of the turn, you must select
            your points from {MIN_SPOT} to {MAX_SPOT}.
            The order for selecting those is free.
          </Text>
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18, fontFamily: 'Georgia', color: '#666' }}>POINTS:</Text>
          <Text style={{ textAlign: 'center', marginVertical: 10, fontSize: 14, fontFamily: 'Arial', color: '#444' }}>
            After each turn, the game calculates the sum for the dices you selected.
            Only the dices having the same spot count are calculated.
            Inside the game, you cannot select the same points from {MIN_SPOT} to {MAX_SPOT} again.
          </Text>
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18, fontFamily: 'Georgia', color: '#666' }}>GOAL:</Text>
          <Text style={{ textAlign: 'center', marginVertical: 10, fontSize: 14, fontFamily: 'Arial', color: '#444' }}>
            To get as many points as possible.
            {BONUS_POINTS_LIMIT} points is the limit of getting a bonus which gives you {BONUS_POINTS} points more.
          </Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20, fontFamily: 'Georgia', color: '#666'}}>Good luck, {playerName}!</Text>
          <Pressable onPress={() => navigation.navigate('Gameboard')} style={{ marginTop: 20 }}>
            <Text style={{fontWeight: 'bold', backgroundColor: 'red', color: 'white', padding: 10, borderRadius: 25, textAlign: 'center', fontSize: 18, fontFamily: 'Arial' }}>PLAY</Text>
          </Pressable>
        </>
      }
    </View>
      <Footer />
    </>
  )
}