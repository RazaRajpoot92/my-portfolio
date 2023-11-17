import propic from "../assets/pimg.png"
import web from "../assets/web.jpg"
import Header from "../components/Header"

const Home = ()=>{
    return(
        <>
            <div className="bg">
                <Header />
                <div className="container">


                    <div className="content">
                        <h3>Hi There!</h3>
                        <h1>I'm Ahmad Raza</h1>
                        <h3>I am Passionate Web Developer</h3>
                        <p>Creative Web Developer Offering 2+ Years Of Experience Providing High-Impact Web Solutions For Many Different Organizations.</p>
                        <button className="btn">Contact Me</button>
                    </div>

                    <div className="pro-img">
                        <img src={propic}  alt="" />
                    </div>



                </div>
            </div>

            <div className="about-con">
                <div className="con">
                <div className="about-content">
                    <h1>About Me</h1>
                    <p>Know about me</p>
                    <div className="line"></div>
                </div>

                <div className="prof-con">
                <div className="prof-detail">

                    <h1>My name is Ahmad</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quibusdam quam voluptatum suscipit labore nemo vero asperiores incidunt, laborum, sed voluptatibus beatae hic. Voluptas voluptatum voluptates corporis ducimus sit nihil.</p>

                    <h3><span>Age:</span> 23</h3>
                    <h3><span>Gender: </span> Male</h3>
                    <h3><span>Language: </span> Urdu, English</h3>
                    <h3><span>Work: </span> Web Developer</h3>
                    <h3><span>Freelance</span> Available</h3>
                    <button className="btn-sec">Download CV</button>
                </div>

                <div className="web-img">
                    
                    <img src={web} alt="" />

                </div>
                </div>

                </div>

            </div>


        </>
    )
}

export default Home;