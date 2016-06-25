'use strict';

import React, {
Component,
} from 'react';
import {
Linking,
Platform,
AsyncStorage,
ActionSheetIOS,
Dimensions,
View,
Text,
Navigator,
} from 'react-native';

import './UserAgent';

var io = require('socket.io-client/socket.io');

var GiftedMessenger = require('react-native-gifted-messenger');
var Communications = require('react-native-communications');


var STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight;
if (Platform.OS === 'android') {
  var ExtraDimensions = require('react-native-extra-dimensions-android');
  var STATUS_BAR_HEIGHT = ExtraDimensions.get('STATUS_BAR_HEIGHT') - 50;
}


class FroggyMessengerContainer extends Component {

  constructor(props) {
    super(props);
    this.socket = io.connect('https://server-froggy.herokuapp.com/', {jsonp: false});

    this._isMounted = false;


    this.state = {
      messageLength           : 4,
      allMessages             : [],
      messages                : this._messages,
      isLoadingEarlierMessages: false,
      typingMessage           : '',
      allLoaded               : false,
      name                    : 'Froggy',
      image                   : require('./assets/images/logo-small.png'),
      position                : 'left',
      status                  : 'ErrorButton'
    };

  }

  componentDidMount() {
    this._isMounted = true;
    this.socket.on('connect', ()=> {
      this.state.status = 'ErrorButton';
    });

    this.socket.on('connect', ()=>{
      this.state.status = '';
    });

    this.socket.on('disconnect', ()=>{
      this.state.status = 'ErrorButton';
    });

    this.socket.on('serverMessage', (msg) => {
      let response = msg;
      let responseMessage = this.createMessage(response.message);
      this.state.typingMessage = '';
      this.setMessages(this._messages.concat(responseMessage));
      AsyncStorage.setItem('messages', JSON.stringify(this._messages));
    });

    this.socket.on('messageSuccess', (data) => {
      if (this._messages[this._messages.length - 1].text == data) {
        let message = Object.assign({}, this._messages[this._messages.length - 1]);
        this._messages.splice(this._messages.length - 1, 1);
        message.status = 'Seen';
        this.state.typingMessage = 'Froggy is typing .....';
        this.setMessages(this._messages.concat(message));
      }
    })


    AsyncStorage.getItem('messages', (err, result) => {
      result = result ? JSON.parse(result) : [];
      var showMessages = result.slice(Math.max(result.length - 4, 0))
      this.state.allMessages = result;
      this.state.messageLength += 10;
      this._messages = showMessages;
      this.setState({messages: this._messages})
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setMessages(messages) {
    this._messages = messages;

    // append the message
    this.setState({
      messages: messages,
    });
  }

  handleSend(message = {}) {
    message.uniqueId = Math.round(Math.random() * 100000000); // simulating server-side unique id generation
    message.status = this.state.status;
    this.setMessages(this._messages.concat(message));
    this.socket.emit('apiCall', message.text)
  }

  createMessage(text) {
    return {
      text    : text,
      name    : this.state.name,
      image   : this.state.image,
      position: 'left',
      date    : new Date(),
      uniqueId: Math.round(Math.random() * 100000000)
    }
  }

  onLoadEarlierMessages() {
    var showMessages = this.state.allMessages.slice(Math.max(this.state.allMessages.length - this.state.messageLength, 0))
    this._messages = showMessages;
    this.setMessages(showMessages); // prepend the earlier messages to your list
    this.setState({
      allLoaded: this.state.messageLength >= this.state.allMessages.length ? true : false  // hide the `Load earlier messages` button
    });
    this.state.messageLength += 10;
  }

  onErrorButtonPress(message = {}) {
    let index = this._messages.indexOf(message);
    this._messages.splice(index, 1);
    message.status = '';

    this.handleSend(message);
  }

  render() {
    return (
    <GiftedMessenger
    ref={(c) => this._GiftedMessenger = c}

    styles={{
          bubbleRight: {
            marginLeft: 70,
            backgroundColor: '#6cc068',
          },
        }}

    autoFocus={false}
    messages={this.state.messages}
    handleSend={this.handleSend.bind(this)}
    onErrorButtonPress={this.onErrorButtonPress.bind(this)}
    maxHeight={Dimensions.get('window').height - Navigator.NavigationBar.Styles.General.NavBarHeight - STATUS_BAR_HEIGHT}

    loadEarlierMessagesButton={!this.state.allLoaded}
    onLoadEarlierMessages={this.onLoadEarlierMessages.bind(this)}

    senderName='Awesome Developer'
    senderImage={null}
    onImagePress={this.onImagePress}
    displayNames={true}

    parseText={true} // enable handlePhonePress, handleUrlPress and handleEmailPress
    handlePhonePress={this.handlePhonePress}
    handleUrlPress={this.handleUrlPress}
    handleEmailPress={this.handleEmailPress}

    isLoadingEarlierMessages={this.state.isLoadingEarlierMessages}

    typingMessage={this.state.typingMessage}
    />
    );
  }

  handleUrlPress(url) {
    Linking.openURL(url);
  }

  // TODO
  // make this compatible with Android
  handlePhonePress(phone) {
    if (Platform.OS !== 'android') {
      var BUTTONS = [
        'Text message',
        'Call',
        'Cancel',
      ];
      var CANCEL_INDEX = 2;

      ActionSheetIOS.showActionSheetWithOptions({
        options          : BUTTONS,
        cancelButtonIndex: CANCEL_INDEX
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            Communications.phonecall(phone, true);
            break;
          case 1:
            Communications.text(phone);
            break;
        }
      });
    }
  }

  handleEmailPress(email) {
    Communications.email(email, null, null, null, null);
  }
}

module
.exports = FroggyMessengerContainer;