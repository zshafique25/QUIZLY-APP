import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import {
  Home,
  Login,
  SignUp,
  QuizCategory,
  QuestionPage,
  Result,
  VedioRecord,
} from "./screens";
// import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./redux/store";
import { Provider, useSelector, useDispatch } from "react-redux";
import { QuestionController } from "./components";

export default function App() {
  // console.log(user);

  // const fetchSubjects = async () => {
  //   return fetch("http://172.23.0.1:3000/subjects")
  //     .then((response) => response.json())
  //     .then((responseJson) => console.log(responseJson))
  //     .catch((err) => console.log("There has been an error" + err.message));
  // };

  //   fetch('https://mywebsite.com/endpoint/', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     firstParam: 'yourValue',
  //     secondParam: 'yourOtherValue',
  //   }),
  // });
  // const subjects = fetchSubjects();

  // console.log(subjects[0].subjectName);
  // fetchSubjects();
  // console.log("hello");

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="QuizCategory" component={QuizCategory} />
          <Stack.Screen name="QuestionPage" component={QuestionPage} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="VedioRecord" component={VedioRecord} />
          <Stack.Screen
            name="QuestionController"
            component={QuestionController}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
