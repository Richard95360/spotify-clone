import styles from '@/styles/Home.module.css'
import { NextPage } from 'next'
import { useState } from 'react';
import Song from '@/components/Song/Song';
import Audio from '@/components/Audio/Audio';

  const SONGS:Song[] = [
    {
      id: 0,
      title: 'Birdseye Blues',
      artist: 'Chris Haugen',
      file: 'songs/Birdseye Blues - Chris Haugen.mp3',
      image: '/covers/1.jpg'
    },
    {
      id: 1,
      title: 'Depth Fuse',
      artist: 'French Fuse',
      file: 'songs/Depth Fuse - French Fuse.mp3',
      image: '/covers/2.jpg'
    },
    {
      id: 2,
      title: 'Duh Fuse',
      artist: 'French Fuse',
      file: 'songs/Duh Fuse - French Fuse.mp3',
      image: '/covers/3.jpg'
    }
]


const Home:NextPage<{songs: Song[]}> = ({songs}) => {
  const [trackPlaying, setTrackPlaying] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  return (
        <div className={styles.container}>
            <div className={styles.songPlaying}>
              <Song trackPlaying={trackPlaying} song={songs[trackPlaying]} isPlaying={isPlaying} />
            </div>
            <Audio isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} trackPlaying={trackPlaying} setTrackPlaying={setTrackPlaying} />
        </div>
      
    
  )
}


export const getStaticProps = async () => {
  const allSongs:Song[] = SONGS;
  return {
    props: {
      songs:allSongs
    },
    revalidate: 3600
  }
}

export default Home;