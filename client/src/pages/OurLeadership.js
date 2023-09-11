import PatDanene from "../images/pat-danene.png"
import TonyJessica from "../images/tony-jessica.png"
import MichaelKim from "../images/michael-kim.png"

const OurLeadership = () => {
  return (
    <div className="our-leadership">
      <h1>Our Leadership</h1>
      <section>
        <img src={PatDanene} alt="" />
        <div className="leadership-info">
          <h4>Pat & Danene Conditt - Directors</h4>
          <p>
            Our passion is to help people become their best in all areas of their life - not just as business owners.
            This perspective allows us to operate with compassion and empathy.
            Our team has been productively partnered with many of our clients for over 20 years.
            We are very proud of our track-record and longevity.
          </p>
          <p>
            Pat is degreed in Electrical Engineering and Computer Science from the University of Colorado.
            Danene is degreed in Electrical Engineering from Texas A&M University.
          </p>
        </div>
      </section>
      <section>
        <img src={TonyJessica} alt="" />
        <div className="leadership-info">
          <h4>Tony & Jessica Nelson - Business Coaches</h4>
          <p>
            Our talents are aimed at helping people develop their leadership potential so they can create an bigger impact on their families and communities around them.
            We believe that before we change the world around us, we first need to start with our own house and we have collaborated with people over the years to help those changes occur.
            Knowing what you want and having a coach that can help establish a strategy to go get it makes a large difference in the likelihood that those goals can come to fruition.
          </p>
          <p>
            Tony graduated from Howard Payne University with a degree in Computer Information Systems.
            Jessica graduated from Howard Payne University with a degree in Pre-Law.
          </p>
        </div>
      </section>
      <section>
        <img src={MichaelKim} alt="" />
        <div className="leadership-info">
          <h4>Pat & Danene Conditt - Directors</h4>
          <p>
            Energy and attention to details are key values we bring to this team.
            Our passion is to help businesses create a culture that helps drive success.
            Our insights and skills have helped shape the training elements of our approach to developing and maintaining a positive culture for our clients.
          </p>
          <p>
            Michael graduated from Texas A&M with a degree in Tourism & Marketing.
            Kim graduated from the University of Missouri with a degree in Middle School Education and a Masters in Curriculum & Instruction.
          </p>
        </div>
      </section>
    </div>
  )
}

export default OurLeadership