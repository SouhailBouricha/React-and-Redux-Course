export const playAudio = (isPlaying,audioRef) =>{
    if(isPlaying){
        const songPlay = audioRef.current.play();
        if(songPlay !== undefined){
          songPlay.then(() =>{
            audioRef.current.play()
          });
        }
      }
}
