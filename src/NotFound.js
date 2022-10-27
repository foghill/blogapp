import React from "react";
import { Message } from "semantic-ui-react";

const MessageExampleNegative = () => (
  <>
    <p></p>
    <div className="ui container positive message ">
      <i className="close icon"></i>
      <div className="header">This is a beautiful 404 page</div>
      <p>We welcome you to it</p>
    </div>
    <div className="ui container negative message ">
      <Message
        error
        header="There was some errors with your submission"
        list={[
          "You must include both a upper and lower case letters in your password.",
          "You need to select your home country.",
        ]}
      />
    </div>
  </>
);

export default MessageExampleNegative;
