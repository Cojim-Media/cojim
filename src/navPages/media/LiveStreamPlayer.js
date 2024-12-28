import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { getTimeAgo } from '../../utils';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import MediaList from './MediaList';
import './media.css'
import { FaRegPaperPlane } from "react-icons/fa6";

const LiveChat = ({ roomId }) => {
    const [messages, setMessages] = useState([]); // Store chat messages
    const [inputMessage, setInputMessage] = useState(''); // Store user input

    // Fetch dummy data including photos when the component loads
    useEffect(() => {
        axios.get(`/api/live-chat/history/${roomId}`)
            .then(response => {
                const chats = response.data; // Get only a few dummy messages with photos
                console.log(chats)
                setMessages(chats);
            })
            .catch(error => console.error('Error fetching messages:', error));
    }, [roomId]);

    // Function to handle sending a new message
    const sendMessage = async () => {
        if (inputMessage.trim() !== '') {
            const user = localStorage.getItem('user');
            if (user !== null) {
                setMessages([...messages, { message: inputMessage, userId: JSON.parse(user) }]); // Add new message to state
                setInputMessage(''); // Clear input field
            } else {
                alert("Signin to Chat");
            }

            await fetch('/api/live-chat/send', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    roomId,
                    message: inputMessage,
                })
            });
        }
    };

    return (
        <div className="bg-slate-200 p-5 mb-2  rounded pr-4 w-[97%]   h-[550px] ">
            <h3 className="font-bold text2lx">Chat</h3>
            <div className="rounded mt-2 bg-slate-100 h-96  pr-4 overflow-y-scroll flex flex-col-reverse mb-2">
                <div className="chat-Container">
                    {messages.map((message, index) => (
                        <div key={index} className="chat-message">


                            <div style={{
                                backgroundImage: `url(${message.userId.passportPhoto.url})`,
                                backgroundSize: 'cover', // Ensures the image covers the entire div
                                backgroundPosition: 'center', // Centers the image within the div  
                                color: 'white', // Ensure text color contrasts with the background
                                borderRadius: '10px', // Optional: Rounded corners for the message
                                marginBottom: '10px', // Spacing between messages
                                width: '20px',
                                height: '20px'
                            }} src={message.userId.passportPhoto.url}   >

                            </div>
                            <div className='message_Title'>
                                <b>{message.userId.firstname + " " + message.userId.lastname}</b> {message.message}
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
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}><FaRegPaperPlane /></button>
            </div>
        </div>
    );
};


const LiveStreamPlayer = () => {
    const [currentStreamData, setCurrentStreamData] = useState({});
    const [loading, setLoading] = useState(true);
    // Get the customer linkId from the url
    const { mediaId } = useParams();


    useEffect(() => {
        // Fetch stream data from your API
        fetchCurrentStreamData();
        // eslint-disable-next-line
    }, []);

    const fetchCurrentStreamData = async () => {
        try {
            const response = await axios.get(`/api/live-stream/live-stream-events/${mediaId}`);
            setCurrentStreamData({ ...response.data.data });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching stream data:', error);
            setLoading(false);
        }
    };

    const renderPlayer = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (!currentStreamData) {
            return <div>No stream available</div>;
        }

        if (currentStreamData.cloudinaryUrl) {
            return (
                <ReactPlayer
                    url={currentStreamData.cloudinaryUrl}
                    controls
                    width="100%"
                    height="auto"
                />
            );
        } else {
            return (
                <ReactPlayer
                    url={`/hls/${currentStreamData.streamingKey}.m3u8`}
                    controls
                    width="100%"
                    height="auto"
                    playing
                />
            );
        }
    };

    return (
        <>
            <Navbar />
            {/* <h1>{currentStreamData ? currentStreamData.eventName : 'Live Stream'}</h1> */}
            <div className="flex justify-center flex-row bg-gray-900">
                <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                        <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[470px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                            {renderPlayer()}
                        </div>
                        <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                            {currentStreamData.eventName}
                        </div>
                        <div className="flex justify-between flex-col md:flex-row mt-4">
                            <div className="flex">
                                <div className="text-white/[0.7]">
                                    {getTimeAgo(new Date(currentStreamData.createdAt))}
                                </div>
                                <div className="flex text-white items-center justify-center h-8 px-6 rounded-3xl bg-white/[0.15] ml-4">
                                    {`3 Views`}
                                </div>

                                <div className="flex flex-col ml-3">

                                </div>
                            </div>
                            <div className="flex text-white mt-4 md:mt-0">

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                        <LiveChat roomId={currentStreamData._id} />
                    </div>
                </div>
            </div>
            <MediaList />
            <Footer />
        </>
    );

};

export default LiveStreamPlayer;
