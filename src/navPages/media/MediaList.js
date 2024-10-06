import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getTimeAgo } from '../../utils';
import ProgressBar from 'components/ProgressBar';

const MediaList = () => {
    const [streamData, setStreamData] = useState([]);
    const [isDataReady, setIsDataReady] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(6); // Show 6 items initially
    const [loadingMore, setLoadingMore] = useState(false); // For showing a spinner on loading more

    useEffect(() => {
        // Fetch stream data from your API
        fetchCurrentStreamData();
    }, []);

    const fetchCurrentStreamData = async () => {
        try {
            const response = await axios.get(`/api/live-stream/live-stream-events`);
            setStreamData(response.data.data || []); // Ensure the response is an array
            setIsDataReady(true);
        } catch (error) {
            console.error('Error fetching stream data:', error);
            setIsDataReady(false);
        }
    };

    const loadMoreItems = () => {
        setLoadingMore(true);
        // Simulate a short delay to show loading spinner (optional)
        setTimeout(() => {
            setItemsToShow(prevCount => prevCount + 6); // Increase by 6 more items
            setLoadingMore(false);
        }, 500);
    };

    return (
        <div className="h-full py-8 px-2 flex bg-gray-900 items-center justify-center">
            <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
                {
                    // Show progress bar while data is being fetched
                    !isDataReady ? (
                        <ProgressBar />
                    ) : (
                        // If streamData is empty, show a message
                        streamData.length > 0 ? (
                            <>
                                {streamData.slice(0, itemsToShow).map((item, index) => (
                                    <div key={index} className="col-span-12 sm:col-span-6 md:col-span-3">
                                        <span className="w-full flex flex-col">
                                            <div className="relative">
                                                {/* <!-- Image Video --> */}
                                                <a href={`/media/${item._id}`}>
                                                    <img
                                                        alt={item.eventName}
                                                        src={item.thumbnailUrl || 'https://res.cloudinary.com/sharefood/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1716128978/Designer_f5nuz9.png'}
                                                        className="w-96 h-auto"
                                                    />
                                                </a>
                                                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                                                    {item.duration}
                                                </p>
                                            </div>

                                            <div className="flex flex-row mt-2 gap-2">
                                                {/* <!-- Description --> */}
                                                <div className="flex flex-col">
                                                    <a href={`/media/${item._id}`}>
                                                        <p className="text-gray-100 text-sm font-semibold">{item.eventName}</p>
                                                    </a>
                                                    <p className="text-gray-400 text-xs mt-1">0 views . {getTimeAgo(new Date(item.createdAt))}</p>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                ))}

                                {/* Show Load More button if there are more items to load */}
                                {itemsToShow < streamData.length && (
                                    <div className="col-span-12 text-center mt-4">
                                        {loadingMore ? (
                                            <ProgressBar /> // Show a spinner when loading more data
                                        ) : (
                                            <button
                                                onClick={loadMoreItems}
                                                className="bg-gray-700 text-white px-4 py-2 rounded-md"
                                            >
                                                Load More
                                            </button>
                                        )}
                                    </div>
                                )}
                            </>
                        ) : (
                            <p className="text-gray-400 col-span-12 text-center">No live streams available.</p>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default MediaList;
