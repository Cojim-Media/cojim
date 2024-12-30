import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { FaRegPaperPlane } from "react-icons/fa6";
import './media.css'

const LiveChat = ({ roomId }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const socket = useRef(null);

    useEffect(() => {
        socket.current = io('https://cojim-api.onrender.com');  // Use the correct port

        socket.current.emit('joinRoom', roomId);

        socket.current.on('newMessage', (message) => {
            setMessages(prevMessages => [...prevMessages, message]);
        });

        // Fetch chat history for both authenticated and non-authenticated users
        axios.get(`/api/live-chat/history/${roomId}`)
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => console.error('Error fetching messages:', error));

        return () => {
            socket.current.disconnect();
        };
    }, [roomId]);

    const sendMessage = () => {
        if (inputMessage.trim() !== '') {
            const user = localStorage.getItem('user');
            if (user) {
                const parsedUser = JSON.parse(user);
                const message = {
                    roomId,
                    userId: parsedUser.userId,  // Use userId stored in localStorage
                    message: inputMessage,
                };

                socket.current.emit('sendMessage', message);
                setInputMessage('');
            } else {
                alert("Sign in to Chat");
            }
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="bg-slate-200 p-5 mb-2 rounded pr-4 w-[97%] h-[550px]">
            <h3 className="font-bold text2lx">Chat</h3>
            <div className="rounded mt-2 bg-slate-100 h-96 pr-4 overflow-y-scroll flex flex-col-reverse mb-2">
                <div className="chat-Container">
                    {messages.map((message, index) => (
                        <div key={index} className="chat-message">
                            {message.userId && message.userId.passportPhoto && (
                                <div style={{
                                    backgroundImage: `url(${message.userId.passportPhoto.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    color: 'white',
                                    borderRadius: '10px',
                                    marginBottom: '10px',
                                    width: '20px',
                                    height: '20px'
                                }} />
                            )}
                            <div className='message_Title'>
                                {message.userId && (
                                    <b>{message.userId.firstname + " " + message.userId.lastname}</b>
                                )} {message.message}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='inputchatT'>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}  // Add the event listener here
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}><FaRegPaperPlane /></button>
            </div>
        </div>
    );
};

export default LiveChat;
