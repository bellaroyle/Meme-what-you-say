import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, DatePickerIOSBase } from "react-native";
import { startGame, setAmountOfUsers } from "../../utils/databaseFuncs";
import UserCard from "../../components/UserCard";
import { firebase } from "../../firebase/config";
import NewButton from "../../components/NewButton";
import { UserContext } from "../../Context/UserContext";

export default function GameWaitingRoom(props) {
  const [users, setUsers] = useState([]);
  const {
    navigation: { navigate },
  } = props;

  const { user } = useContext(UserContext);

  const roomCode = props.route.params.roomCode;
  const roomDoc = firebase.firestore().collection("rooms").doc(roomCode);

  useEffect(() => {
    const unsubscribe = roomDoc.collection("waiting").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      setUsers(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text>Game Waiting room</Text>

      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard name={item.name} />}
        keyExtractor={(item) => item.name}
      />

      {/* {users.length > 0 && user.isHost && (
        <NewButton onPress={handleProgressButton}>
          <Text>Move to Voting </Text>
        </NewButton>
      )} */}
    </View>
  );
}