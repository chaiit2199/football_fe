import React, { useEffect, useState, useRef } from 'react';
import HeaderComponent from './components/header/header';
import MainComponent from './components/main/main';


const WebSocketComponent = () => {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');
  const socketRef = useRef(null);

  const [apiData, setApiData] = useState('');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5001');
    socketRef.current = socket;

    socket.onopen = () => { };

    socket.onmessage = (event) => {
      console.log('Received message:', event.data);
      setMessage(event.data);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    // return () => {
    //   if (socketRef.current) {
    //     console.log('Closing WebSocket connection');
    //     socketRef.current.close();
    //   }
    // };
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/message');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setApiData(data.message);
      console.log(data);
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };


  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      console.log('Sending message:', input);
      socketRef.current.send(input);
      setInput('');
    } else {
      console.error('WebSocket connection is not open.');
    }
  };

  return (
    <div>
      <HeaderComponent />
      <MainComponent />
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <p className='text-3xl font-bold underline'>Last message: {apiData}</p>
      <button onClick={fetchApiData}>Fetch API Data</button> */}
    </div>
  );
};

export default WebSocketComponent;
