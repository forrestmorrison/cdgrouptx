import Team from "../images/cdgroup-team-cropped.png"

const Home = () => {
  return (
    <div className="">
      <img src={Team} alt="team" className="team" />
      <div className="team-banner">
        <h1>Business Development & Support</h1>
        <h4>Team of Winners</h4>
      </div>
      <div className="home-content">
        <div className="welcome">
          <h1>Welcome</h1>
          <section>
            <p>Have a look around and learn all there is to know about us.</p>
            <p>Take a moment to drop us a line so we can talk about next steps.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home