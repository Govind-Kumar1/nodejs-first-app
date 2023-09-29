import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odit ipsa eveniet quidem accusamus inventore iste, ut nam nemo porro, ea nulla ullam non, magnam impedit. Praesentium nobis cumque laudantium!
          Necessitatibus commodi sapiente nostrum magni amet, dicta ab ut fugiat neque dolore explicabo pariatur recusandae qui nihil aspernatur hic veniam soluta autem quaerat ea minus voluptate odio accusantium vitae. Error.
          Magnam modi, officiis nulla iusto ducimus corrupti itaque dignissimos voluptatibus enim, commodi molestiae autem! Nemo pariatur obcaecati nisi illo enim amet, rem quidem eos fuga repudiandae sit, ipsa ea? Non!
          Veritatis perferendis repudiandae voluptatibus aliquam molestias itaque, consequatur at omnis necessitatibus unde, voluptas maiores culpa, adipisci accusamus sed vel dolore recusandae ducimus odit eligendi iure quod eos voluptatum nesciunt. Eligendi?
          Sint odio consequuntur, nulla perspiciatis corrupti maxime soluta dicta explicabo omnis ipsum pariatur ex corporis ratione numquam deserunt enim voluptatibus aperiam doloribus placeat nobis vero! Nisi commodi eos odit rerum.
          Corporis ullam nisi mollitia dolorum aliquam velit dignissimos ratione aspernatur reprehenderit reiciendis. Ex optio officia dicta sint, amet quidem hic, sunt eligendi quaerat magnam doloremque et similique maxime nemo rem.
          Molestiae, aliquam pariatur? Harum expedita iusto animi nulla aliquid! Tenetur, quas aliquam repudiandae ullam architecto fugiat voluptatum illum! Obcaecati, molestias ipsam? Asperiores placeat recusandae nesciunt voluptatibus corrupti laborum ab unde.
          Asperiores libero adipisci consectetur neque sit minima in tenetur ullam nemo quam consequuntur ut delectus, voluptatem provident explicabo saepe voluptatum itaque. Itaque quod aperiam sit ducimus tempore iste amet porro.  
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
