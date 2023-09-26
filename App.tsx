import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface TeamType {
  teamName: string;
  flag: string;
  captain: string;
  homeGround: string;
  players: string[];
}

enum GameState {
  GameStart,
  TeamSelected,
  TossCompleted,
  GameOver
}

const App = () => {

  const [team1, setTeam1] = useState<TeamType | null>(null);
  const [team2, setTeam2] = useState<TeamType | null>(null);
  const [btnValue, setBtnValue] = useState<string>("")
  const [matchScore, setScore] = useState<number>(0)
  const [over, setOver] = useState<number>(0)
  const [totalWicket, setWicketNUmber] = useState<number>(1)



  const t20Teams: TeamType[] = [
    {
      "teamName": "Team India",
      "flag": "🇮🇳",
      "captain": "Virat Kohli",
      "homeGround": "Eden Gardens, Kolkata",
      "players": [
        "Rohit Sharma",
        "Shikhar Dhawan",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja",
        "Jasprit Bumrah",
        "Mohammed Shami",
        "Yuzvendra Chahal"
      ]
    },
    {
      "teamName": "Australia",
      "flag": "🇦🇺",
      "captain": "Aaron Finch",
      "homeGround": "Melbourne Cricket Ground",
      "players": [
        "David Warner",
        "Steve Smith",
        "Glenn Maxwell",
        "Mitchell Starc",
        "Pat Cummins",
        "Adam Zampa",
        "Matthew Wade"
      ]
    },
    {
      "teamName": "Pakistan",
      "flag": "🇵🇰",
      "captain": "Babar Azam",
      "homeGround": "Gaddafi Stadium, Lahore",
      "players": [
        "Fakhar Zaman",
        "Shaheen Afridi",
        "Shadab Khan",
        "Mohammad Rizwan",
        "Hassan Ali",
        "Wahab Riaz"
      ]
    },
    {
      "teamName": "England",
      "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      "captain": "Eoin Morgan",
      "homeGround": "Lord's, London",
      "players": [
        "Jos Buttler",
        "Ben Stokes",
        "Jofra Archer",
        "Adil Rashid",
        "Jonny Bairstow",
        "Moeen Ali"
      ]
    },
    {
      "teamName": "South Africa",
      "flag": "🇿🇦",
      "captain": "Quinton de Kock",
      "homeGround": "Newlands, Cape Town",
      "players": [
        "Faf du Plessis",
        "Kagiso Rabada",
        "Lungi Ngidi",
        "Tabraiz Shamsi",
        "David Miller",
        "Anrich Nortje"
      ]
    },
    {
      "teamName": "New Zealand",
      "flag": "🇳🇿",
      "captain": "Kane Williamson",
      "homeGround": "Eden Park, Auckland",
      "players": [
        "Martin Guptill",
        "Trent Boult",
        "James Neesham",
        "Mitchell Santner",
        "Tom Latham"
      ]
    },
    {
      "teamName": "West Indies",
      "flag": "🌴",
      "captain": "Kieron Pollard",
      "homeGround": "Kensington Oval, Bridgetown",
      "players": [
        "Chris Gayle",
        "Andre Russell",
        "Sunil Narine",
        "Shimron Hetmyer",
        "Nicholas Pooran",
        "Dwayne Bravo"
      ]
    },
    {
      "teamName": "Sri Lanka",
      "flag": "🇱🇰",
      "captain": "Dimuth Karunaratne",
      "homeGround": "R. Premadasa Stadium, Colombo",
      "players": [
        "Kusal Perera",
        "Lasith Malinga",
        "Angelo Mathews",
        "Dhananjaya de Silva",
        "Wanindu Hasaranga"
      ]
    },
    {
      "teamName": "Bangladesh",
      "flag": "🇧🇩",
      "captain": "Mushfiqur Rahim",
      "homeGround": "Sher-e-Bangla National Cricket Stadium, Dhaka",
      "players": [
        "Tamim Iqbal",
        "Shakib Al Hasan",
        "Mehidy Hasan",
        "Mustafizur Rahman",
        "Liton Das"
      ]
    }
  ]

  useEffect(() => {
    btnText("")
  }, [])


  useEffect(()=>{
    if(matchScore){

  }

  },[matchScore])

  const teamSelection = () => {
    console.log("array lenth", t20Teams.length)
    const rendomIndex = Math.floor(Math.random() * t20Teams.length)
    let selectTeam1 = t20Teams[rendomIndex];
    setTeam1(selectTeam1)
    let removeIndexOfselectTeam1 = t20Teams.splice(rendomIndex, 1)
    let selectTeam2 = t20Teams[Math.floor(Math.random() * t20Teams.length)];
    setTeam2(selectTeam2)
    // Alert.alert("Toss for the team who will play first?")
    // Alert.alert(`Now match will start between ${selectTeam1.teamName} & ${selectTeam2.teamName}`)
    btnText("teamselected")
    return true
  }

  const tossForTeam = () => {
    const winToss = Math.random()
    const selectedTeam = winToss < 0.5 ? team1 : team2;
    Alert.alert(`team ${selectedTeam?.teamName} wining this toss`)
    btnText("tossdone")
  }

  const matchStart = () => {
    Alert.alert("match start")
    // switch(score){
    //   case 1: {

    //   }
    //   case 2: {

    //   }
    //   case 3: {

    //   }
    //   case 4: {

    //   }
    //   case 5: {

    //   }
    //   case 6: {

    //   }
    //   default: {

    //   }
    // }

    btnText("GameOver")
  }

  const reStartGame = () => {
    btnText("")
  }

  const handelBtn = () => {

    switch (btnValue) {
      case "teamselected": {
        return teamSelection()
      }
      case "Toss": {
        return tossForTeam()
      }
      case "Play": {
        return matchStart()
      }
        break;
      case "Restart": {
        return reStartGame()
      }
      default: {
        return teamSelection()
      }
    }
  }

  const btnText = (value: string) => {
    switch (value) {
      case "teamselected": {
        return setBtnValue("Toss")
      }
        break;
      case "tossdone": {
        return setBtnValue("Play")
      }
        break;
      case "GameOver": {
        return setBtnValue("Restart")
      }
      default: {
        return setBtnValue("teamselected")
      }
    }
  }

  let totalScore = 0;

  const scoreValue = (e: any) => {
    const convert = parseInt(e)
    totalScore = totalScore + convert

   console.log("get e value..",convert, totalScore)
  //  setScore(convert)
  }

  // Functions
  // Switch and control flow 
  // Interfaces, classes, Control flow using Interfaces and Classes

 
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.selctedTeamRow}>
        <View style={styles.teamNameView}>
          <Text style={styles.teamName}>{team1?.flag}  {team1?.teamName ?? "N/A"}</Text>
        </View>
        <View style={styles.teamNameView}>
          <Text style={styles.teamName}>{team2?.flag}  {team2?.teamName ?? "N/A"}</Text>

        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handelBtn()}
      >
        <Text>{btnValue}</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <View>
          <Text>score/wicket</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.box1}>
              <Text>{totalScore}</Text>
            </View>
            <View style={styles.box1}>
              <Text>{totalWicket}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>over</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.box1}>
              <Text>{over}</Text>
            </View>
            <View style={styles.box1}>
              <Text>{20}</Text>
            </View>
          </View>
        </View>
      </View>

      <TextInput
        // value={matchScore}
        style={styles.input}
        onChangeText={(text)=>scoreValue(text)}

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  selctedTeamRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 60
  },
  btn: {
    backgroundColor: "#1BC8B8",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 22,
    width: "40%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 60
  },
  teamNameView: {
    borderBottomWidth: 1,
    paddingBottom: 6
  },
  teamName: {
    fontSize: 16,
    fontWeight: "600"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  box1: {
    borderWidth: 1,
    padding: 12
  },
  input: {
    backgroundColor: "#1BC8B8",
    width: "20%",
    marginTop: 40,
    height: 56,
    padding: 8
  }
});

export default App;
