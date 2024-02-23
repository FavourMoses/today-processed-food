import "./hero.css";
// import img1 from "./../../assets/images/img1.png";
import Box1 from "../box/box";
import img2 from "./../../assets/images/img2.png";
import img3 from "./../../assets/images/img3.png";
import img7 from "./../../assets/images/img7.png";
import Boxing from "./../../components/box2/box2";
import img5 from "./../../assets/images/img5.png";
import img6 from "./../../assets/images/img6.png";
import video from "./../../assets/images/video.mp4";
const Hero = () => {
    return (
      <div className="heroDiv1">
        <video
          controls
          autoPlay
          src={video}
          type="video/mp4"
          className="heroImg"
        />
        {/* <img src={img1} alt="flower" className="heroImg" /> */}
        <div className="healthy">
          <h1>
            Hea
            <span>lthy</span> Eating
          </h1>
        </div>
        <div className="heroPara1">
          <p className="heroPara2">
            Eating a variety of foods that give you the nutrients you need to
            maintain your health, feel good and have energy.
            <br /> Nutrition is important for everyone. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Corporis necessitatibus eius
            <br />
            explicabo quidem sed accusantium et, cumque aspernatur id cons
            equuntur tempora suscipit placeat perspiciatis nobis <br />
            blanditiis deleniti deserunt error vero. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Consectetur velit ipsum dol
            <br />
            orem, magnam deleniti accusamus excepturi officia placeat ipsam sed
            laudantium, cupiditate repellendus illo exercitati
            <br />
            onem iure doloremque soluta assumenda omnis.
          </p>
        </div>
        <h2 className="heroDiv2">Recent items</h2>
        <Box1
          box={img2}
          name="Dried Okro"
          paragraph="Limit unhealthy foods and eat healthy This is why even when we freshen up right
           before we leave the house, we are more concerned about what we smell like,
           especially when we are sweating.It is normal to sweat when we exercise or when the weather is hot; it is our body’s 
           way of cooling itself down. But when bacteria on the skin’s surface break down
           the lipids and proteins produced by the apocrine glands, it causes body odour. "
          amount="N5000"
        />
        <div className="herohr">
          <hr id="heroId1" />
        </div>
        <Box1
          box={img3}
          name="Egusi"
          paragraph="Limit unhealthy foods and eat healthy This is why even when we freshen up right
           before we leave the house, we are more concerned about what we smell like,
           especially when we are sweating.It is normal to sweat when we exercise or when the weather is hot; it is our body’s 
           way of cooling itself down. But when bacteria on the skin’s surface break down
           the lipids and proteins produced by the apocrine glands, it causes body odour."
          amount="N7000"
        />
        <p className="underBox">
          To stay comfortably Dry all day, it is important to use a deodorant
          after bathing to reduce unnecessary sweating <br />
          whilst on the go, when exercising, or performing other rigorous
          activities. The NIVEA Dry range has Dual <br />
          Active formula that provide you with a long-lasting dry feeling to
          help <br />
          you stay confident, stay dry and fresh.
        </p>
        <h2 className="heroDiv2">Popular Items</h2>
        <div className="box2Hero">
          <Boxing box2={img7} name2="Plantain Flour" amount2="N200" />
          <Boxing box2={img5} name2="Virgin Coconut Oil" amount2="N400" />
          <Boxing box2={img6} name2="Ewedu Jute Leaves" amount2="N2000" />
        </div>
      </div>
    );
}
 
export default Hero;