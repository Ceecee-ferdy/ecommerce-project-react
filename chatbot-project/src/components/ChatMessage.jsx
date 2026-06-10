 import robotImage from '../assets/robot.png';
 import userImage from '../assets/user-image.jpg';
 import dayjs from 'dayjs';
 import './ChatMessage.css';


   console.log(userImage);
      export function ChatMessage({ message, sender, time }) {

        const formattedTime = dayjs(time).format('h:mma');
       /* 
        const message = prps.message;
        const sender= props.sender;
       const { message, sender } = props;
       */

       /*
       if(sender === 'robot') {
          return (
             <div>
              <img src="robot.png" alt="robot-image" width="50" />
              {message}  
             </div>
          )
       }
          */
 

        return (
          <div className={
            sender === 'user' 
             ? 'chat-message-user' 
             : 'chat-message-robot'
          }>
            {sender === 'robot' &&  (
              <img src={robotImage} 
               alt="robot-image" 
               className="chat-message-profile"
              />
            )}
            <div className="chat-message-text">
             {message}
             <div className="chat-message-time">
             {formattedTime}
             </div>
            </div>           
            {sender === 'user' &&  (
              <img src={userImage} 
               alt="user-image"
               className="chat-message-profile"
              />
            )}  
          </div>
        );
      }
 
     