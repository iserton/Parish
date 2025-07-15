import React from 'react'
import { google } from 'googleapis';
import Image from 'next/image';

const youtube = google.youtube('v3');

// Your YouTube Data API key
const API_KEY = process.env.YOUTUBE_API_KEY;

async function getYouTubeVideos() {
  // The channel ID of the specific channel you're interested in
  const channelId = 'UCD90BZIQ_i3qlxrbP-W-ksA';

  try {
    // Get the playlist ID for the channel's uploaded videos
    const channelResponse = await youtube.channels.list({
      key: API_KEY,
      part: 'contentDetails',
      id: channelId,
    });

    if (!channelResponse.data.items || channelResponse.data.items.length === 0) {
      throw new Error('Channel not found');
    }

    const playlistId = "PLhEQkZ1FbznmFUDSosX52ylWJbdTK8a0S";

    // Get all videos from the 'uploads' playlist
    let videos = [];
    let nextPageToken = '';
    do {
      const playlistResponse = await youtube.playlistItems.list({
        key: API_KEY,
        part: 'snippet',
        playlistId: playlistId,
        maxResults: 50,
        pageToken: nextPageToken,
      });

      const items = playlistResponse.data.items;

      const videoDataPromises = items.map(async (item) => {
        const videoDetails = await youtube.videos.list({
          key: API_KEY,
          part: 'snippet',
          id: item.snippet.resourceId.videoId,
        });

        const video = videoDetails.data.items[0];

        return {
          title: item.snippet.title,
          videoId: item.snippet.resourceId.videoId,
          url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
          date: video ? video.snippet.publishedAt : item.snippet.publishedAt,
          photo: item.snippet.thumbnails.maxres || item.snippet.thumbnails.standard,
        };
      });

      videos = (await Promise.all(videoDataPromises)).sort((a, b) => {
        return new Date(b.date) - new Date(a.date); // Newest first
      });

      nextPageToken = playlistResponse.data.nextPageToken;
    } while (nextPageToken);

    return videos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

const Youtube = async () => {
  const videos = await getYouTubeVideos();

  return (

        <div id="first" className='w-full flex flex-col py-[10vh] bg-white'>
            <div  className={`w-full flex flex-col items-center justify-center `}>
                {/* {data !== null && data.data.map((item) => (
                    <div key={item.id} className={`my-[5vh] w-4/5 flex flex-col md:flex-row ${item.attributes.data.split('-')[0] == currentYear ? '': 'hidden'} items-center`}>
                        <div className='flex flex-col h-full w-full md:w-1/2 justify-center items-start'>
                            <h2 className='text-[2.3vh] font-header2'>{item.attributes.data}</h2>
                            <h2 className='text-[4.5vh] font-header2'>{item.attributes.tytul}</h2>
                            <div className='flex md:hidden h-[40vh] w-full relative'>
                                <Image fill objectFit="cover" alt='zdjecie kazanie' src={'https://parafia.bieda.it' + item.attributes.zdjecie.data.attributes.url}></Image>
                            </div>
                            <p className='mt-[2vh] '>{item.attributes.opis}</p>
                            <button className='mt-[4vh] p-4 bg-dark text-white'>Obejrzyj</button>
                        </div>
                        <div className='hidden md:flex h-[50vh] w-1/2 relative'>
                            <Image fill objectFit="cover" alt='zdjecie kazanie' src={'https://parafia.bieda.it' + item.attributes.zdjecie.data.attributes.url}></Image>
                        </div>
                    </div>
                
                ))} */}
                {videos.length > 0 ? (
                    <>
                        {videos.map((video) => (
                            <div key={video.videoId} className={`my-[5vh] w-4/5 flex flex-col-reverse md:flex-row md:justify-between md:items-center `}>
                                <div className='flex flex-col h-full w-full md:w-1/2 justify-center items-start'>
                                    <h2 className='text-[2.3vh] font-header2'>{new Date(video.date).toLocaleDateString('pl')}</h2>
                                    <h2 className='text-[4.5vh] font-header2'>{video.title}</h2>
                                    {/* <div className='flex md:hidden h-[40vh] w-full relative'>
                                        <Image fill objectFit="cover" alt='zdjecie kazanie' src={}></Image>
                                    </div> */}
                                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                                      <button className='mt-[4vh] p-4 bg-dark text-white'>Obejrzyj</button>
                                    </a>
                                </div>
                                <Image objectFit="cover" alt='zdjecie kazanie' src={video.photo.url}           
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  className='w-[80%] md:w-[40%] h-auto mb-[4vh] md:mb-0'></Image>
                            {/* <a href={video.url} target="_blank" rel="noopener noreferrer">
                                {video.title}
                            </a> */}
                            </div>
                        ))}
                    </>
                ) : (
                    <p>Nie znaleziono kazań.</p>
                )}
            </div>
            
            
        </div>
  );
}

export default Youtube