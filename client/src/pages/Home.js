import Team from "../images/cdgroup-team-cropped.png"

const Home = () => {
  return (
    <div className="home">
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
          <button>- Find Out More -</button>
        </div>
        <div className="about">
          <h2>What We Do</h2>
          <div className="home-info">
            <section>
              <h4>All About You</h4>
              <p>
                We work to understand your goals, partner to develop a game plan for achieving those goals and work side by side to implement the plan.
                We will continue with the right follow-through to make sure the achievements are long term.
                We're prepared to help you at any level, from impartial advice or practical assistance to help you make the most of every opportunity.
              </p>
            </section>
            <section>
              <h4>The Technical Stuff</h4>
              <p>
                We start with a website no revenue with links to lots of products.
                Our mission is to create relationships, not transactions.
              </p>
              <p>
                From your 1st customer to your 100th, customer retention & business expansion.
              </p>
            </section>
            <section>
              <h4>Our Expertise</h4>
              <p>
                We're a team with a variety of backgrounds - from blue collar to white, engineering, healthcare, social work degrees to no degrees.
                What we have in common - we have all built successful online revenue streams with this platform and this team.
              </p>
            </section>
          </div>
        </div>
        <div className="about">
          <h2>About CDG Consulting</h2>
          <div className="home-info">
            <section>
              <h4>Our Experience</h4>
              <p>
                With nearly 20 years of experience, we have been through the ups and downs of e-commerce.
                Each of us have had to overcome setbacks and, with shared experiences, we have partnered through those to continued success.
                We wear these experiences plainly to help others take on their own challenges - sharing our ideas in a practical way.
              </p>
            </section>
            <section>
              <h4>Our Approach</h4>
              <p>
                We work side-by-side in the launching and scaling of your business.
                There is always a business coach available gratis to sit, discuss, plan and then execute a plan that is custom tailored to you.
                That's how we ensure your success.
              </p>
            </section>
            <section>
              <h4>Why Us?</h4>
              <p>
                Business mentors are key - that's why when it comes to client selection, we're choosy.
                We want to give each of you the time and guidance you deserve.
                Whether you're seeking a team of like-minded people or desiring a new direction, we are happy to have you.
                We didn't get there alone, and neither will you.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home