import React from "react";
import { Message } from "semantic-ui-react";

const MessageExampleNegative = () => (
  <>
  <p></p>
  <div class="ui container positive message ">
    <i class="close icon"></i>
    <div class="header">This is a beautiful 404 page</div>
    <p>We welcome you to it</p>
  </div>
  <div class="ui container negative message ">
  <Message
    error
    header='There was some errors with your submission'
    list={[
      'You must include both a upper and lower case letters in your password.',
      'You need to select your home country.',
    ]}
  />
  </div>
  <i class="ae flag"></i>
<i class="france flag"></i>
<i class="myanmar flag"></i>

  
  </>
);

export default MessageExampleNegative;
