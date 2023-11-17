import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from "react-native-toast-message"
interface TeamType {
  teamName: string;
  flag: string;
  captain: string;
  homeGround: string;
  players: string[];
}

enum GameState {
  Initial,
  TeamSelected,
  Playing,
  GameOver
}

interface PlaytingTeam {
  team: TeamType;
  score: number;
  wicket: number;
  over: number;
  ball: number;
}

const Home = () => {

  const [currentBatingTeam, setCurrentBatingTeam] = useState<PlaytingTeam | null>(null);
  const [currentBowlingTeam, setCurrentBowlingTeam] = useState<PlaytingTeam | null>(null)
  const [selectedTeams, setSelectedTeams] = useState<[TeamType | null, TeamType | null]>([null, null])
  const [gameState, setGameState] = useState<GameState>(GameState.Initial)
  const [isFirstInning, setIsFirstInning] = useState<boolean>(true)


  const showScoreToast = (score: Number) => {
    Toast.show({
      type: 'success',
      text1: `${score} runs`,
      position: 'bottom'
    });
  }

  const showWicketToast = () => {
    Toast.show({
      type: 'error',
      text1: `Wicket`,
      position: 'bottom'
    });
  }

  const showDotBallToast = () => {
    Toast.show({
      type: 'info',
      text1: `Dot ball`,
      position: 'bottom'
    });
  }
  


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

  const teamSelection = () => {

    console.log("array lenth", t20Teams.length)
    const rendomIndex = Math.floor(Math.random() * t20Teams.length)
    let selectTeam1 = t20Teams[rendomIndex];
    let removeIndexOfselectTeam1 = t20Teams.splice(rendomIndex, 1)
    let selectTeam2 = t20Teams[Math.floor(Math.random() * t20Teams.length)];
    setSelectedTeams([selectTeam1, selectTeam2])
    setGameState(GameState.TeamSelected)
    return true
  }

  const tossForTeam = () => {
    const newArray = selectedTeams
    const winToss = Math.random()
    const selectedIndex = Math.floor(winToss * newArray.length)
    let battingTeam = newArray[selectedIndex]!
    let bowlingTeam = newArray[selectedIndex === 0 ? 1 : 0]!
    let currentPlayingBattingTeam: PlaytingTeam = {
      team: battingTeam,
      score: 0,
      wicket: 0,
      over: 0,
      ball: 0
    }
    let currentPlayingBowlingTeam: PlaytingTeam = {
      team: bowlingTeam,
      score: 0,
      wicket: 0,
      over: 0,
      ball: 0
    }

    setCurrentBatingTeam(currentPlayingBattingTeam)
    setCurrentBowlingTeam(currentPlayingBowlingTeam)


    Alert.alert(`team ${currentPlayingBattingTeam?.team.teamName} won this toss`)

    setGameState(GameState.Playing)
  }

  const checkIfCurrentInningCompleted = ():boolean => {
   return (currentBatingTeam?.wicket ?? 0) >= 11 || (currentBatingTeam?.over ?? 0) >= 20 
  }

  const switchTeams = () => {
    let previousBattingTeam = currentBatingTeam
    let previousBowlingTeam = currentBowlingTeam
    setCurrentBowlingTeam(previousBattingTeam)
    setCurrentBatingTeam(previousBowlingTeam)
  }

  const playBall = () => {
    const scoreSelection = [
      0, 1, 2, 3, 4, 5, 6, "wicket"
    ]
    const getRandomValueOFScoreIndex = Math.floor(Math.random() * scoreSelection.length)
    console.log("....", getRandomValueOFScoreIndex, scoreSelection[getRandomValueOFScoreIndex])
    let newBall = currentBatingTeam!.ball + 1
    let newOver = currentBatingTeam!.over
    if (newBall % 6 === 0) {
      newOver += 1
    }

    switch (scoreSelection[getRandomValueOFScoreIndex]) {
      case 0: {

        setCurrentBatingTeam({
          ...currentBatingTeam!,
          score: currentBatingTeam!.score + 0,
          over: newOver,
          ball: newBall
        });
        showDotBallToast()
      } break;
      case 1: {
        setCurrentBatingTeam({
          ...currentBatingTeam!,
          score: currentBatingTeam!.score + 1,
          over: newOver,
          ball: newBall
        });
        showScoreToast(1)
      } break;
      case 2: {
        setCurrentBatingTeam({
          ...currentBatingTeam!,
          score: currentBatingTeam!.score + 2,
          over: newOver,
          ball: newBall
        });
        showScoreToast(2)
      } break;
      case 3: {
        setCurrentBatingTeam({
          ...currentBatingTeam!,
          score: currentBatingTeam!.score + 3,
          over: newOver,
          ball: newBall
        });
        showScoreToast(3)
      } break;
      case 4: {
        setCurrentBatingTeam({
          ...currentBatingTeam!,
          score: currentBatingTeam!.score + 4,
          over: newOver,
          ball: newBall
        });
        showScoreToast(4)
      } break;
      case 5: {
        setCurrentBatingTeam({
          ...currentBatingTeam!,
          score: currentBatingTeam!.score + 5,
          over: newOver,
          ball: newBall
        });
        showScoreToast(5)
      } break;
      case 6: {
        setCurrentBatingTeam({
          ...currentBatingTeam!,
          score: currentBatingTeam!.score + 6,
          over: newOver,
          ball: newBall
        });
        showScoreToast(6)
      } break;
      case "wicket": {
        setCurrentBatingTeam({
          ...currentBatingTeam!,
          wicket: currentBatingTeam!.wicket + 1,
          over: newOver,
          ball: newBall
        });
        showWicketToast()
      } break;
    }
    if(checkIfCurrentInningCompleted()){
      if(isFirstInning){
        Alert.alert("First inning finished")
        switchTeams()
        setIsFirstInning(false)
      }else {
        showWinner()
        setGameState(GameState.GameOver)
      }
    }
      }

     const showWinner  = () => {
      if( (currentBatingTeam?.score ?? 0) > (currentBowlingTeam?.score ?? 0) ){
       Alert.alert(currentBatingTeam?.team.teamName+" won this match")
      }
      else if((currentBatingTeam?.score ?? 0) < (currentBowlingTeam?.score ?? 0) ){
       Alert.alert(currentBowlingTeam?.team.teamName+" won this match")

      }
      else {
        Alert.alert("Match draw")
      }
     }


  const reStartGame = () => {
  }

  const handelBtn = () => {


    switch (gameState) {
      case GameState.Initial: {
        teamSelection()
        // Select 
        // Set Selected Teams
        // Set Game State TeamSelected
      } break;
      case GameState.TeamSelected: {
        tossForTeam()
        // Toss
        // random from selected team
        // set currentBattingTeam, currentBowlingTeam
        // set GameState Playing
      } break;
      case GameState.Playing: {
        playBall()
        // Random Score or Wicket
        // Update Wicket, and Ball, Over
        // checkIfCurrentInningCompleted
        // wicket >= 10, over >= 20 
        // if: if: isFirstInning == false : Set GameState to GameOver
        //     else: switchTeams, set isFirstInning = false
        // else 

      } break;
      case GameState.GameOver: {
        reStartGame()
      } break;
    }
  }

  const btnText = (): string => {
    switch (gameState) {
      case GameState.Initial: {
        return "Select Team"
      }
      case GameState.TeamSelected: {
        return "Toss"
      }
      case GameState.Playing: {
        return "Play"
      }
      case GameState.GameOver: {
        return "Restart"
      }
    }
  }

  const getLeftTeamLabelName = (): string => {
    if (currentBatingTeam?.team.teamName) {
      return `🏏 ${currentBatingTeam.team.flag ?? ""} ${currentBatingTeam?.team.teamName}`
    }
    else if (selectedTeams[0]) {
      return `${selectedTeams[0]?.flag ?? ""} ${selectedTeams[0]?.teamName}` 
    } else {
      return "N/A"
    }
  }

  const getRightTeamLabelName = (): string => {
    if (currentBowlingTeam?.team.teamName) {
      return `🎾 ${currentBowlingTeam?.team.flag ?? ""} ${currentBowlingTeam?.team.teamName}`
    }
    else if(selectedTeams[1]) {
      return `${selectedTeams[1].flag ?? ""} ${selectedTeams[1]?.teamName}`
    }
    else {
      return "N/A"
    }
  }

  const getMatchScore = ():number => {
    return currentBatingTeam?.score ?? 0
  }

  const getCurrentWicket = ():number => {
    return currentBatingTeam?.wicket ?? 0
  }

  const getCurrentBall = ():number => {
    return (currentBatingTeam?.ball ?? 0) % 6
  }

  const getCurrentOver = ():number => {
    return currentBatingTeam?.over ?? 0
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.selctedTeamRow}>
        <View style={styles.bgBorder}>
        <View style={styles.teamNameView}>
          <Text style={styles.teamName}>{getLeftTeamLabelName()}</Text>
        </View>
        <Text style={styles.totalScore}>{currentBatingTeam?.score}</Text>
        </View>
        <View style={styles.bgBorder}>
        <View style={styles.teamNameView}>
          <Text style={styles.teamName}>{getRightTeamLabelName()}</Text>
        </View>
        <Text style={styles.totalScore}>{currentBowlingTeam?.score}</Text>
        </View>

      </View>
    

      <View style={styles.row}>
        <View>
          <Text>   Score / Wicket    </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.box1}>
              <Text>{getMatchScore()}</Text>
            </View>
            <View style={styles.box1}>
              <Text>{getCurrentWicket()}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>  Balls / Over </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.box1}>
              <Text>{getCurrentBall()}</Text>
            </View>
            <View style={styles.box1}>
              <Text>{getCurrentOver()}</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => handelBtn()}
      >
        <Text style={styles.btnText}>{btnText()}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
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
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 60
  },
  teamNameView: {
    // borderBottomWidth: 1,
    paddingBottom: 6
  },
  teamName: {
    fontSize: 16,
    fontWeight: "600"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24
  },
  box1: {
    borderWidth: 2,
    padding: 12,
    borderRadius:4,
    margin:4,
    backgroundColor:"rgba(27, 200, 184, 0.2)",
    borderColor:"#1BC8B8",


  },
  totalScore:{
    fontSize: 20,
    fontWeight: '700',
    marginTop: 12,
    textAlign:'center'
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign:'center',
    color:"#ffffff"
  },
  bgBorder: {
    borderWidth:4,
    borderColor:"#1BC8B8",
    padding: 14,
    borderRadius: 16,
    backgroundColor:"rgba(27, 200, 184, 0.2)",
  }
});

export default Home;
