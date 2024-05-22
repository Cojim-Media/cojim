import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { getTimeAgo } from '../../utils';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import MediaList from './MediaList';

const LiveChat = () => {
    const [chatData, setChatData] = useState([

    ]);
    const [message, setMessage] = useState("");
    // setChatData([
        
    // ])
    return (
        <div className="bg-slate-200 p-5 mb-2  rounded pr-4 w-[97%]   h-[550px] ">
            <h3 className="font-bold text2lx">Chat</h3>
            <div className="rounded mt-2 bg-slate-100 h-96 shadow pr-4 overflow-y-scroll flex flex-col-reverse mb-2">
                <div className="">
                    {chatData.map((data, index) => {
                        return (
                            <div key={index} className="flex p-3">
                                <img
                                    className="h-6 rounded-full"
                                    src={data.avatar}
                                    alt="avatar"
                                />
                                <p className="ml-2 text-slate-700">
                                    {data.message}
                                    <span className="font-bold ml-2">{data.name}</span>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <input
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mt-2"
                    placeholder="Say something..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button
                    className="float-right float-right box-border bg-slate-300 px-4 py-1 mt-2 rounded-full "
                >
                    Send
                </button>
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
    },);

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
                    url={`http://54.236.214.61:8081/hls/${currentStreamData.streamingKey}.m3u8`}
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
                                {/* <div className="flex items-start">
                                    <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                        <img
                                            className="h-full w-full object-cover"
                                            alt='Profile'
                                            src={'https://res.cloudinary.com/sharefood/image/upload/v1702733213/profile_pictures/kaoobrcvmjkxfxpuq79m.png'}
                                        />
                                    </div>
                                </div> */}
                                <div className="flex flex-col ml-3">
                                    {/* <div className="text-white text-md font-semibold flex items-center">
                                        Mr
                                        Petec
                                    </div> */}
                                    {/* <div className="text-white/[0.7] text-sm">
                                        {getTimeAgo(new Date(currentStreamData.createdAt))}
                                    </div> */}
                                </div>
                            </div>
                            <div className="flex text-white mt-4 md:mt-0">
                                {/* <div className="flex items-center justify-center h-11 px-3 rounded-3xl bg-white/[0.15]">
                                    {`2 Likes`}
                                </div> */}
                                {/* <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                                    {`3 Views`}
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                        <LiveChat />
                    </div>
                </div>
            </div>
            <MediaList />
            <Footer />
        </>
    );

};

export default LiveStreamPlayer;
