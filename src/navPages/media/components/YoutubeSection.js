import React, { useEffect, useState } from 'react';

const YoutubeSection = () => {
    const [isSermonReady, setSermonReady] = useState(false);
    const [gallerySermons, setGallerySermons] = useState([]);

    useEffect(() => {
        // send a get request to the server to fetch gallerySermons
        (async () => {
            const rawResponse = await fetch(`/api/media/get-sermons`, {
                method: 'GET',
            });
            const content = await rawResponse.json();
            // check if there is an error in the response
            if (content.error) {
                alert(content.message);
            } else {
                setGallerySermons([...content.data]);
                setSermonReady(true);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section className="mx-6 my-6 md:mx-24">
                {/* <h1 className="text-center my-4 text-xl font-semibold capitalize text-gray-800 lg:text-2xl">YouTube Extracts</h1> */}

                <div className="grid gap-6 md:grid-cols-4">
                    <div
                        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                        style={{ paddingTop: "56.25%" }}>
                        <iframe
                            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                            src={`${isSermonReady ? gallerySermons[0].link : 'https://www.youtube.com/embed/bx7hosDBJEE'}`}
                            title="Sermon 1"
                            allowFullScreen></iframe>
                    </div>

                    <div
                        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                        style={{ paddingTop: "56.25%" }}>
                        <iframe
                            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                            src={`${isSermonReady ? gallerySermons[1].link : 'https://www.youtube.com/embed/3Cs4xKwkd6w'}`}
                            title="Sermon 2"
                            allowFullScreen></iframe>
                    </div>
                    <div
                        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                        style={{ paddingTop: "56.25%" }}>
                        <iframe
                            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                            src={`${isSermonReady ? gallerySermons[2].link : 'https://www.youtube.com/embed/--SKSM_mly0'}`}
                            title="Sermon 3"
                            allowFullScreen></iframe>
                    </div>

                    <div
                        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                        style={{ paddingTop: "56.25%" }}>
                        <iframe
                            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                            src={`${isSermonReady ? gallerySermons[3].link : 'https://www.youtube.com/embed/idOKZYUissI'}`}
                            title="Sermon 4"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default YoutubeSection;
