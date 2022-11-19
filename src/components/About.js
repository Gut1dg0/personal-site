import agus from '../assets/Agustin.jpg'

function About() {
    return (
        <>
            <hgroup>
                <h1>Agustin Compean</h1>
                <p>Front-End Developer</p>
            </hgroup>
            <h2>Who am I?</h2>
            <p>I'm a professional Front-End Developer who
                enjoys a lot designing and developing
                websites, and it's not just a coincidence,
                since this profession combines two of the
                things that I am passionate about, Design 
                and Software, therefore, I give my best on
                every project.</p>
            <img src={agus} height={400} alt="A selfie of Agustin Compean"/>
        </>
    )
}

export default About