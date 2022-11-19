import gutitech from '../assets/gutitech.jpg'
import ReactPlayer from 'react-player/youtube';

function Channel() {
    let gutichannel = 'https://www.youtube.com/@gutitech4913';
    return (
        <>
            <h2>Discover a little bit more about me...</h2>
            <a href={gutichannel} target='_blank' rel='noreferrer'><img src={gutitech} alt="gutitech YouTube channel's logo" height={150}/></a>
            <ReactPlayer url='https://youtu.be/QSS4kZGpfHU' controls={true}  />
        </>
    );
}

export default Channel;