/** @format */

import styles from "../styles/events.module.css";

function events() {
  return (
    <section className="flex-col min-h-screen ">
      <section className="flex items-center bg-[url('../public/images/community.png')]  bg-no-repeat bg-cover  min-h-screen min-w-screen">
        <div className="container mx-auto">
          <h1 className="text-center sm:text-[100px] md:text-[200px]">
            SUM<div className={styles.M}>M</div>
            <div className={styles.wordFormat}>IT</div>
          </h1>
        </div>
      </section>
      <section className=" flex-col container mx-auto mt-20 p-10 md:p-20">
        <h1>THE OPEN SOURCE SUMMIT KAMPALA EDITION</h1>
        <p>Summit events are carried out once yearly. Started right in 2022.</p>

        <div className="dateBanner">
          <p>Date : 9th April 2022</p>
          <p>Time : 10 AM to 5 PM</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-cover">
          <img
            src="./images/community.png"
            alt="img"
            // height="auto"
            // width="auto"
            className="rounded-xl"
            
          />
          </div>
        
          <img
            src="./images/musoke speaker.jpeg"
            alt="img"
            height="git"
            width="auto"
            className="rounded-xl"

          />
          <img
            src="./images/malinga speaker.jpeg"
            alt="img"
            height="auto"
            width="auto"
            className="rounded-xl"

          />
        </div>

        <div className="details">
          <h2>Concept note</h2>
          <p>
            Open collaboration often allows communities to achieve more than
            their members can do alone.{" "}
          </p>
          <p>
            This, in turn, accelerates innovation and is one of the reasons all
            the tech giants such as Microsoft, Google, Meta, are supporting
            various open-source projects financially and bringing their
            engineers to help build a healthy open source community.
          </p>
        </div>

        <div className="sponsors">
          <h2>Event Sponsors</h2>
          <div className="logs">
            <img src="" alt="img" />
            <img src="" alt="img" />
          </div>
        </div>
      </section>
      <section className="donation">
        <h2>DONATE</h2>
        <div className="productShow">
          <p>You can also contribute by donating</p>
          <p>Purchasing our Branded material</p>
          <img src="" alt="img" />
          <button>VIEW PRODUCTS</button>
        </div>
      </section>
      this is an experience <section></section>
    </section>
  );
}

export default events;