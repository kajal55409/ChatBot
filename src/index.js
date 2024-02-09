//import liraries
import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput,TouchableOpacity } from 'react-native';

// create a component
const ChatGpt = () => {
    const [data, setdata] = useState([]);
    const apiKey = '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'
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'
    const [textInput, setTextInput] = useState('');

    const handleSend = async () => {
        console.log('hello')

        const prompt = textInput
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 1024,
            temperature: 0.5,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });
        const text = response.data.choices[0].text;
        setdata([...data, { type: 'user', 'text': textInput }, { type: 'bot', 'text': text }]);
        setTextInput('');
    }
    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <Text style={{ fontWeight: '600', marginVertical: 20 }}> AI Chatbot  </Text>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.body}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? 'green' : 'red' }}>{item.type === 'user' ? 'Ninza' : 'Bot'}</Text>

                            <Text style={styles.bot}>{item.text}</Text>
                        </View>
                    )}
                />

                <TextInput 
                style={styles.input}
                value={textInput}
                onChangeText={text=>setTextInput(text)}
                placeholder='Ask me Anything'
                />

                <TouchableOpacity style={styles.button}
                onPress={handleSend}
                >
<Text style={styles.buttonText}>Let's Go</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fffcc9',

    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 70
    },
    body: {
        backgroundColor: 'white',

        width: '102%',
        margin: 10
    },
    bot:{
        fontSize:16
    },
    input:{
        borderWidth:1,
        borderColor:'green',
        width:'90%',
        height:60,
        marginBottom:10,
        borderRadius:5,
        paddingHorizontal:10
        
    },
    button:{
        backgroundColor:'green',
        width:'90%',
        height:60,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
              marginBottom:10,
        
    },
    buttonText:{
        fontSize:25,
        fontWeight:'bold',
        color:'blue'
    }


});

//make this component available to the app
export default ChatGpt
    ;
