import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { getTimeAgo } from '../../utils';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import MediaList from './MediaList';
import './media.css';
import LiveChat from './components/LiveChat';

const LiveStreamPlayer = () => {
    const [currentStreamData, setCurrentStreamData] = useState({});
    const [loading, setLoading] = useState(true);
    // Get the customer linkId from the URL
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
                    height={currentStreamData.category === 'shorts' ? '100vh' : 'auto'}
                />
            );
        } else {
            return (
                <ReactPlayer
                    url={`/hls/${currentStreamData.streamingKey}.m3u8`}
                    controls
                    width="100%"
                    height={currentStreamData.category === 'shorts' ? '100vh' : 'auto'}
                    playing
                />
            );
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center flex-row bg-gray-900">
                <div className={`w-full max-w-[1280px] flex flex-col ${currentStreamData.category !== 'shorts' && 'lg:flex-row'}`}>
                    <div className={`flex flex-col ${currentStreamData.category === 'shorts' ? 'w-full h-screen' : 'lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)]'} px-4 py-3 lg:py-6 overflow-y-auto`}>
                        <div className={`${currentStreamData.category === 'shorts' ? 'h-full' : 'h-[200px] md:h-[400px] lg:h-[400px] xl:h-[470px]'} ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0`}>
                            {renderPlayer()}
                        </div>
                        <div className={`text-white font-bold ${currentStreamData.category === 'shorts' ? 'text-lg mt-16' : 'text-sm md:text-xl mt-8'} mt-4 line-clamp-2`}>
                            {currentStreamData.eventName}
                        </div>
                        <div className="flex justify-between flex-col md:flex-row mt-4">
                            <div className="flex">
                                <div className="text-white/[0.7]">
                                    {getTimeAgo(new Date(currentStreamData.createdAt))}
                                </div>
                                <div className="flex flex-col ml-3"></div>
                            </div>
                            <div className="flex text-white mt-4 md:mt-0"></div>
                        </div>
                    </div>
                    <div className={`flex flex-col py-6 px-4 overflow-y-auto ${currentStreamData.category === 'shorts' ? 'lg:fixed lg:right-0 lg:w-[350px] xl:w-[400px] lg:h-full bg-gray-900' : 'lg:w-[350px] xl:w-[400px]'}`}>
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
