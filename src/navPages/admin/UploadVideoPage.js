import React, { useState } from 'react';
import axios from 'axios';
import { CloudinaryContext, Video } from 'cloudinary-react';
import Swal from "sweetalert2";
import ProgressBar from 'components/ProgressBar';
import { Cloudinary } from 'cloudinary-core';

const UploadVideoPage = () => {
    const [eventName, setEventName] = useState('');
    const [category, setCategory] = useState('videos');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const cloudName = 'cojim';
    const uploadPreset = 'videos_streams';
    const cloudinaryCore = new Cloudinary({ cloud_name: cloudName, secure: true });

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        // Validate file type
        const validFileTypes = ['video/mp4', 'video/avi', 'video/mov', 'video/mkv'];
        if (!validFileTypes.includes(file.type)) {
            Swal.fire("Error", "Unsupported video format or file.", "error");
            return;
        }

        setUploading(true);

        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);

        xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
                const progress = Math.round((event.loaded * 100) / event.total);
                setUploadProgress(progress);
            }
        });

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const response = JSON.parse(xhr.responseText);
                if (xhr.status === 200) {
                    const { public_id, secure_url, duration: videoDuration } = response;
                    setVideoUrl(secure_url);

                    // Generate the thumbnail URL
                    const thumbUrl = cloudinaryCore.url(public_id, {
                        resource_type: 'video',
                        format: 'jpg',
                    });

                    const formattedDuration = new Date(videoDuration * 1000).toISOString().substr(11, 8);

                    // Create the new live stream event
                    axios.post('/api/live-stream/live-stream-events', {
                        eventName,
                        category
                    }).then(createEventResponse => {
                        const { streamingKey } = createEventResponse.data.data;

                        // Update the event with Cloudinary URLs and duration
                        axios.put(`/api/live-stream/live-stream-events/${streamingKey}`, {
                            cloudinaryUrl: secure_url,
                            thumbnailUrl: thumbUrl,
                            duration: formattedDuration
                        }).then(() => {
                            Swal.fire("Success", "Video uploaded and event created successfully!", "success");
                        }).catch(error => {
                            console.error('Error updating event:', error);
                            Swal.fire("Error", "An error occurred while updating the event.", "error");
                        });
                    }).catch(error => {
                        console.error('Error creating event:', error);
                        Swal.fire("Error", "An error occurred while creating the event.", "error");
                    });
                } else {
                    console.error('Upload error:', xhr.statusText);
                    Swal.fire("Error", "An error occurred while uploading the video.", "error");
                }
                setUploading(false);
                setUploadProgress(0);
            }
        };

        xhr.onerror = () => {
            console.error('Upload error:', xhr.statusText);
            Swal.fire("Error", "An error occurred while uploading the video.", "error");
            setUploading(false);
            setUploadProgress(0);
        };

        xhr.send(formData);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload Video</h1>

            <label className="block mb-2">
                Event Name:
                <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="border p-2 w-full"
                />
            </label>

            <label className="block mb-4">
                Category:
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="videos">Videos</option>
                    <option value="shorts">Shorts</option>
                </select>
            </label>

            <label className="block mb-4">
                Upload Video:
                <input type="file" onChange={handleUpload} className="border p-2 w-full" />
            </label>

            {uploading && (
                <div className="mb-4">
                    <div className="bg-gray-500">
                        <ProgressBar progress={uploadProgress} />
                    </div>
                    <p className="text-center">{uploadProgress}%</p>
                </div>
            )}

            <CloudinaryContext cloudName="cojim">
                {videoUrl && (
                    <div className="flex flex-row min-h-screen justify-center items-center">
                        <Video publicId={videoUrl} controls />
                    </div>
                )}
            </CloudinaryContext>
        </div>
    );
};

export default UploadVideoPage;
