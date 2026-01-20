import React from "react";
import "./Podcast.css";
import Footer from "../../Components/Footer/Footer";

const podcastVideos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/fhZF9YU98Us",
    title: "Podcast 1",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/zqfw_ycfL1Y",
    title: "Podcast 2",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/jOcxOvOY-_o",
    title: "Podcast 3",
  },
];

const Podcast = () => {
  return (
    <div className="podcast">
      <div className="container my-7">
        <div className=" rounded-5 p-5">

          {/* Heading */}
          <div className="text-center mb-4">
            <h1 className="podcast-title">Our Podcast's & Talk Show</h1>
          </div>

          {/* Description */}
          <div className="row justify-content-center mb-6">
            <div className="col-lg-12 text-center">
              <p className="podcast-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam, dolorem, deserunt quibusdam voluptates quas optio,
                repellat hic eaque sed eveniet molestias veritatis! Tempore
                accusamus quasi sequi delectus recusandae a porro.
              </p>
            </div>
          </div>

          {/* Videos using map */}
          <div className="row  justify-content-center">
            {podcastVideos.map((video) => (
              <div className="col-md-4" key={video.id}>
                <div className="ratio ratio-4x3">
                  <iframe
                    src={video.src}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="podcast-footer">

      <Footer />
      </div>
    </div>
  );
};

export default Podcast;
