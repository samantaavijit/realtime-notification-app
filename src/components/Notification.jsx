import React, { PureComponent } from "react";
import { onMessageListener, requestForToken } from "../firebase";

export default class Notification extends PureComponent {
  componentDidMount = () => {
    requestForToken().then((token) => {
      if (token) {
        console.log("token ", token);
      }
    });
    onMessageListener()
      .then((payload) => {
        console.log("avijit ", payload);
      })
      .catch((err) => console.log("failed: ", err));
  };

  render() {
    return <div>Notification</div>;
  }
}
