import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Go to Detials"
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Details Screen</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Setting Screen</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Notification Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Profile Screen</Text>
    </View>
  );
}

function SensorsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Sensors Screen</Text>
    </View>
  );
}

export default function App() {
  const HomeStack = () => {
    const Home = createNativeStackNavigator();
    return (
      <Home.Navigator>
        <Home.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Icon
                name="add"
                size={30}
                color="white"
                onPress={() => navigation.navigate('Details')}
              />
            ),
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#6495ED',
            },
          })}
        />
        <Home.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTintColor: 'white',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#6495ED',
            },
          }}
        />
      </Home.Navigator>
    );
  };

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          //tabBarShowLabel: false,
          // tabBarActiveTintColor: '#6495ED',
          // tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Sensors"
          component={SensorsScreen}
          options={{
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#6495ED',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="timer-outline" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#6495ED',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="person-circle-outline" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#6495ED',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="notifications-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#6495ED',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
