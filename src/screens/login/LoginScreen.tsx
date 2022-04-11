/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type { Node } from 'react';
import {
	ActivityIndicator,
	Alert,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	useColorScheme,
	View,
} from 'react-native';

import useLoginUser from '@app/hooks/useLoginUser';



const LoginScreen: () => Node = () => {
	const userHook = useLoginUser()

	const login = async () => {
		const data = {
			username: "test",
			password: "test"
		}
		userHook.login(data)
	}
	useEffect(() => {
		if (userHook.user) {
			Alert.alert("login success")
		}
	}, [userHook.user])


	const onPress = () => {
		login()
		userHook.getPosts()
	}
	return (
		<View style={{
			flex: 1
		}}>
			<Text>
				{JSON.stringify(userHook.user)}
			</Text>
			<View style={{ height: 100, width: "100%", justifyContent: "center" }}>
				{userHook.isLoading &&
					<ActivityIndicator size={"large"} />
				}
			</View>
			<TouchableOpacity {...{ onPress }} style={{
				width: "100%",
				height: 40,
				backgroundColor: "green",
				justifyContent: "center",
				alignItems: "center",
				marginTop: 20,
				borderRadius: 20
			}}>
				<Text>Login</Text>
			</TouchableOpacity>
			<ScrollView style={{ height: 300, }}>
				{userHook.posts.map((e: any) => {
					return <View style={{
						height: 40,
						paddingVertical: 10,

					}}>
						<Text>{e?.title!}</Text>
					</View>
				})}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({

});

export default LoginScreen;
