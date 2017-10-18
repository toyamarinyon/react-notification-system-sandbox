import React from 'react';
import NotificationSystem from 'react-notification-system';

var style = {
  Containers: {
    tc: {
      padding: 0,
      width: '100%',
      left: 0,
      marginLeft: 0,
    },    
  },
  NotificationItem: { // Override the notification item
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      marginTop: 0,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    success: {
      borderTop: 'none',
      backgroundColor: '#f0f5ea',
    }
  }
}

export default class NotificationSandBox extends React.Component {
  _notificationSystem = null;

  constructor() {
    super();
    this._addNotification = this._addNotification.bind(this);
  }
  _addNotification(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'メッセージの送信を行いました。通常10分以内に受信者の方へ配信、通知が行われます。 :)',
      level: 'success',
      position: 'tc',
      dismissible: false,
    });
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  render() {
    return (
      <div>
        <button onClick={this._addNotification}>Flash messageを表示！</button>
        <NotificationSystem ref="notificationSystem" style={style}/>
      </div>
      );
  }
};