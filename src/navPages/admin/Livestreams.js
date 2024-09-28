import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import * as FaIcons from "react-icons/fa";
import "../newcss/style.css";
import ReactPlayer from "react-player";

const LiveStream = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [showVideo, setShowVideo] = useState(null);
  const [videoOn, setVideoOn] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [visibleEventsCount, setVisibleEventsCount] = useState(6); // Events to show initially
  const [formOn, setFormOn] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "", // For create mode
    cloudinaryUrl: "",
    thumbnailUrl: "",
    duration: "00:00",
  });

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    setLoading(true);
    axios
      .get(`/api/live-stream/live-stream-events`, {
        timeout: 5000,
      })
      .then((response) => {
        setEvents(response.data.data); // Fetch all events at once
        setLoading(false);
      })
      .catch((err) => {
        setError(
          err.response
            ? `Error: ${err.response.status} - ${err.response.data.message}`
            : err.message
        );
        setLoading(false);
      });
  };

  const toggleMoreInfo = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const toggleVideo = (eventId) => {
    setShowVideo(showVideo === eventId ? null : eventId);
    setVideoOn(!videoOn);
  };

  const hideVideos = () => {
    setVideoOn(!videoOn);
    setShowVideo(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode && currentEvent) {
      // Update existing event
      axios
        .put(
          `/api/live-stream/live-stream-events/${currentEvent.streamingKey}`,
          {
            cloudinaryUrl: formData.cloudinaryUrl,
            thumbnailUrl: formData.thumbnailUrl,
            duration: formData.duration,
          }
        )
        .then(() => {
          Swal.fire("Success", "Event updated successfully", "success");
          setEditMode(false);
          setFormData({
            eventName: "",
            cloudinaryUrl: "",
            thumbnailUrl: "",
            duration: "00:00",
          });
          fetchEvents(); // Refresh events
          setFormOn(!formOn);
        })
        .catch((error) => {
          Swal.fire("Error", error.message, "error");
        });
    } else {
      // Create new event
      axios
        .post("/api/live-stream/live-stream-events", {
          eventName: formData.eventName,
        })
        .then(() => {
          Swal.fire("Success", "Event created successfully", "success");
          setFormData({
            eventName: "",
            cloudinaryUrl: "",
            thumbnailUrl: "",
            duration: "00:00",
          });
          fetchEvents(); // Refresh events
           setFormOn(!formOn);
        })
        .catch((error) => {
          Swal.fire("Error", error.message, "error");
        });
    }
  };

  const handleEditClick = (event) => {
    setEditMode(true);
    setFormOn(!formOn);
    setCurrentEvent(event);
    setFormData({
      cloudinaryUrl: event.cloudinaryUrl || "",
      thumbnailUrl: event.thumbnailUrl || "",
      duration: event.duration || "00:00",
    });
  };

  const handleCreateClick = () => {
    setFormOn(!formOn);
    setEditMode(false);
  };

  const loadMoreEvents = () => {
    setVisibleEventsCount((prevCount) => prevCount + 5); // Show 5 more events each time
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  const renderPlayer = (currentStreamData) => {
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
      <div className={`formofff ${formOn ? "formonn" : ""}`}>
        <form onSubmit={handleSubmit}>
          {editMode ? (
            <>
              <div>
                <label>
                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                        Update the event below 
                    </div>
                  <input
                    type="text"
                    placeholder=" Cloudinary URL"
                    name="cloudinaryUrl"
                    value={formData.cloudinaryUrl}
                    onChange={handleInputChange}
                    className="eventName"
                    required
                  />
                </label>
              </div>
              <div>
                <label>
         
                  <input
                    type="text"
                    name="thumbnailUrl"
                    value={formData.thumbnailUrl}
                    onChange={handleInputChange}
                    placeholder="Thumbnail URL:"
                    className="eventName"
                  />
                </label>
              </div>
              <div>
                <label> 
                  <input
                    type="hidden"
                    className="eventName"
                    name="duration"
                    placeholder="Duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            </>
          ) : (
            <div>
              <label>
                    <div style={{textAlign: 'center', marginBottom: '30px'}}>
                                        create your event here 
                    </div>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleInputChange}
                  className="eventName"
                  placeholder="Event Name"
                  required
                />
              </label>
            </div>
          )}

          <div className="footNotch">
            <button className="actBtn" type="submit">
              {editMode ? "Update Event" : "Create Event"}
            </button>
            <button
              className="cancBtn"
              onClick={() => setFormOn(!formOn)}
              type="submit"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="addEventS" onClick={() => handleCreateClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M10.5 20a1.5 1.5 0 0 0 3 0v-6.5H20a1.5 1.5 0 0 0 0-3h-6.5V4a1.5 1.5 0 0 0-3 0v6.5H4a1.5 1.5 0 0 0 0 3h6.5z"
            />
          </g>
        </svg>
      </div>

      <div className="videoItemsContainers">
        {/* Render only visible events based on visibleEventsCount */}
        {events.slice(0, visibleEventsCount).map((event) => (
          <div key={event._id} className="containerInner">
            <div
              className="videoItems"
              style={{
                backgroundImage: `url(${event.thumbnailUrl})`,
                marginBottom: "20px",
                color: "#fff",
              }}
            >
           

              <button onClick={() => toggleMoreInfo(event._id)}>
                {expandedEvent === event._id ? "Show Less" : "Show More"}
              </button>

              {expandedEvent === event._id && (
                <div style={{ marginTop: "10px" }}>
                  <p>Streaming Key: {event.streamingKey}</p>
                
                </div>
              )}

              <div className="floatingPlay">
                <div onClick={() => toggleVideo(event._id)}>
                  <svg
                    className="svg-icon"
                    style={{
                      width: "1em",
                      height: "1em",
                      verticalAlign: "middle",
                      fill: "white",
                      overflow: "hidden",
                    }}
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M852.727563 392.447107C956.997809 458.473635 956.941389 565.559517 852.727563 631.55032L281.888889 993.019655C177.618644 1059.046186 93.090909 1016.054114 93.090909 897.137364L93.090909 126.860063C93.090909 7.879206 177.675064-35.013033 281.888889 30.977769L852.727563 392.447107 852.727563 392.447107Z" />
                  </svg>
                </div>

                <div onClick={() => handleEditClick(event)} style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{marginRight:'10px'}}> {event.duration}</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.28em"
                    height="1em"
                    viewBox="0 0 1792 1408"
                  >
                    <path
                      fill="white"
                      d="m888 1056l116-116l-152-152l-116 116v56h96v96zm440-720q-16-16-33 1L945 687q-17 17-1 33t33-1l350-350q17-17 1-33m80 594v190q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-14 14-32 8q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q15-15 35-7t20 29m-96-738l288 288l-672 672H640V864zm444 132l-92 92l-288-288l92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h3>{event.eventName}</h3>
          </div>
        ))}

        <div className={`videoOff ${videoOn ? "videoon" : ""}`}>
          <div className="closeIcon" onClick={hideVideos}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M11.5 4a.5.5 0 0 0 .5.5h1.75a.75.75 0 0 1 0 1.5H12a2 2 0 0 1-2-2V2.25a.75.75 0 0 1 1.5 0zm0 8a.5.5 0 0 1 .5-.5h1.75a.75.75 0 0 0 0-1.5H12a2 2 0 0 0-2 2v1.75a.75.75 0 0 0 1.5 0zM4 11.5a.5.5 0 0 1 .5.5v1.75a.75.75 0 0 0 1.5 0V12a2 2 0 0 0-2-2H2.25a.75.75 0 0 0 0 1.5zM4.5 4a.5.5 0 0 1-.5.5H2.25a.75.75 0 0 0 0 1.5H4a2 2 0 0 0 2-2V2.25a.75.75 0 0 0-1.5 0z" />
            </svg>
          </div>

          {showVideo &&
            events
              .filter((event) => event._id === showVideo)
              .map((event) => (
                <div
                  key={event._id}
                  className="videoItself"
                  style={{ marginTop: "10px" }}
                >
                  {renderPlayer(event)}
                </div>
              ))}
        </div>


  
      </div>
              {/* Load More Button */}
            {visibleEventsCount < events.length && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={loadMoreEvents}>
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
    </>
  );
};

export default LiveStream;
