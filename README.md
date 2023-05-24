Hey there!

Currently building https://generativegig.com, https://opensession.club or making music [here](https://www.youtube.com/channel/UC7nKgwyOW6FkC3HxEnxHxJg).

# The Drone

A constantly evolving drone.

Generated based on real time data.

Streamed 24/7 on the web.

## Why?

I like drones, but I don't find the time to sit down and create a really complex drone using hardware.

I want to be able to tap into this drone whenever and have something interesting to base my music off of.

## How?

ChatGPTs answer to this question, 25.05.2023:

> Creating a constantly evolving drone that incorporates live data from public APIs and can be listened to on a website would typically require both frontend and backend development. While the frontend is responsible for presenting the audio and user interface, the backend handles data collection, processing, and generating the evolving sound based on the received data.
>
> Here's a general outline of the frontend and backend components involved:
>
> Frontend:
>
> 1.  User Interface: Design and develop the website's user interface to display the audio player, controls, and any visual representations of the evolving drone.
> 2.  Audio Playback: Implement the frontend code to handle audio streaming and playback on the website. Utilize HTML5 audio or audio libraries like Howler.js or Tone.js to manage the audio elements.
>
> Backend:
>
> 1.  Data Collection: Set up a backend server or cloud service to periodically retrieve data from public APIs. This could be done using technologies like Node.js, Python, or a serverless architecture.
> 2.  Data Processing: Process the retrieved data and extract relevant information for generating the evolving drone sound. Apply algorithms or rules to convert the data into suitable audio parameters or triggers for sound synthesis.
> 3.  Sound Synthesis: Utilize audio synthesis libraries or frameworks (e.g., Max/MSP, Pure Data, Web Audio >API) to generate the evolving drone sound based on the processed data.
> 4.  Audio Streaming: Implement a streaming server that can provide the evolving drone audio in real-time to the frontend. Technologies like WebSocket or HTTP Live Streaming (HLS) can be used for this purpose.
>
> The backend infrastructure will handle the continuous data retrieval, processing, and sound synthesis, while the frontend will receive and play the evolving drone sound. Both components work together to create the desired live experience on the website.
>
> Keep in mind that the complexity of this project depends on the specific data sources, sound synthesis techniques, and infrastructure you choose to implement. It's essential to plan and architect the system carefully, considering scalability, performance, and data privacy concerns, especially when dealing with continuous data collection and live audio streaming.

### Tech

#### Keep:

- Node.js
- Typescript
- Vite
- React

#### Discard:

- Tailwindcss

#### New:

- Regular CSS
- NestJS
- Web Audio API

#### Considerations:

- Tonal (js)
- Tonejs

## Challenge

I think the main challenge will be to create something that is pleasing and interesting to listen to. The sound is based on real time data and this data can fluctuate in unforeseeable ways. This could lead to weird things that might be great or might not be so great. It will definitely exist a longer testing phase where the algorithm will be tweaked. Through the algorithm I am creating the range in which the drone is able to change. It is not any specifc sound I am looking for, instead a sweet spot of randomness and structure.
