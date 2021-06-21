import Image from 'next/image'

const Projects = () => {
  return ( 
    <div className="projectsContainer">
      <h1>Projects</h1>
        <div className="cards">
          <div className="lcard">
            <h3>Web Dev</h3>
            <p>Creating Beautiful websites
              using NEXTjs
              and Animation with
              Framer Motion
            </p>
          </div>
          <Image 
            src="/Homepage.png"
            alt="Picture of the author"
            height={414}
            width={600}
          />
        </div>
        <div className="cards">
          <div className="lcard">
            <h3>App Dev</h3>
            <p>Creating Beautiful Mobile apps
                using React Native
                and the power of CSS
            </p>
          </div>
          <Image 
            src="/Homepage.png"
            alt="Picture of the author"
            height={414}
            width={600}
          />
        </div>
        <div className="cards">
          <div className="lcard">
            <h3>3D Artwork</h3>
            <p>Creating Object from my Vivid ImaginationUsing Blender
            </p>
          </div>
          <Image 
            src="/Homepage.png"
            alt="Picture of the author"
            height={414}
            width={600}
          />
        </div>
        <div className="cards">
          <div className="lcard">
            <h3>AR Effects</h3>
            <p>Creating Cool AR effects using Spark Ar for Instagram and Facebook
            </p>
          </div>
          <Image 
            src="/Homepage.png"
            alt="Picture of the author"
            height={414}
            width={600}
          />
        </div>
        
    </div>
   );
}
 
export default Projects;