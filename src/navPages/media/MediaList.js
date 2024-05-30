import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getTimeAgo } from '../../utils';
import ProgressBar from 'components/ProgressBar';


const MediaList = () => {
    const [streamData, setStreamData] = useState({});
    const [isDataReady, setIsDataReady] = useState(false);

    useEffect(() => {
        // Fetch stream data from your API
        fetchCurrentStreamData();
    }, []);

    const fetchCurrentStreamData = async () => {
        try {
            const response = await axios.get(`/api/live-stream/live-stream-events`);
            setStreamData({ ...response.data.data });
            setIsDataReady(true);
        } catch (error) {
            console.error('Error fetching stream data:', error);
            setIsDataReady(false);
        }
    };

    return (
        <>
            <div className="h-full py-8 px-2 flex bg-gray-900 items-center justify-center">
                <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
                    {
                        // if data is not ready diplay spinners else diplay the table
                        !isDataReady ? (
                            <ProgressBar />
                        ) : (
                            // If there is no customer yet, display a message
                            !(Object.values(streamData) === undefined || Object.values(streamData).length === 0) ? (
                                Object.values(streamData).map((item, index) => {
                                    return (
                                        <div key={index} className="col-span-12 sm:col-span-6 md:col-span-3">
                                            <span className="w-full flex flex-col">
                                                <div className="relative">

                                                    {/* <!-- Image Video --> */}
                                                    <a href={`/media/${item._id}`}>
                                                        <img alt={item.eventName} src={item.thumbnailUrl ? item.thumbnailUrl : 'https://res.cloudinary.com/sharefood/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1716128978/Designer_f5nuz9.png'} className="w-96 h-auto" />
                                                    </a>

                                                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">{item.duration}</p>
                                                </div>

                                                <div className="flex flex-row mt-2 gap-2">

                                                    {/* <!-- Profile Picture --> */}
                                                    {/* <a href="#">
                                                        <img src="https://picsum.photos/seed/1/40/40" className="rounded-full max-h-10 max-w-10" />
                                                    </a> */}

                                                    {/* <!-- Description --> */}
                                                    <div clas="flex flex-col">
                                                        <a href={`/media/${item._id}`}>
                                                            <p className="text-gray-100 text-sm font-semibold">{item.eventName}</p>
                                                        </a>
                                                        {/* <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a> */}
                                                        <p className="text-gray-400 text-xs mt-1">0 views . {getTimeAgo(new Date(item.createdAt))}</p>
                                                    </div>

                                                </div>
                                            </span>
                                        </div>
                                    )
                                })

                            ) : <></>

                        )
                    }


                </div>
            </div>
        </>
    )
}

export default MediaList