const DATA = [
  {
    title: "Enhance Your Skills",
    info: "Our training videos provide comprehensive insights and practical tips to help you enhance your skills in various domains. From technical expertise to soft skills, we've got you covered.",
  },
  {
    title: "Stay Updated",
    info: "Keep pace with the latest industry trends and advancements through our informative and up-to-date videos. Stay ahead of the curve and broaden your knowledge.",
  },
  {
    title: "Connect with Experts",
    info: "Our platform allows you to connect with like-minded individuals and industry experts. Expand your network, foster new connections, and unlock new opportunities.",
  },
  {
    title: "Flexible Learning",
    info: "Our training videos are available on-demand, allowing you to learn at your own pace and convenience. Access the content anytime, anywhere, and tailor your learning experience.",
  },
  {
    title: "Practical Knowledge",
    info: "Gain practical knowledge and apply it directly to real-world scenarios. Our videos offer hands-on insights and practical tips to help you succeed in your professional endeavors.",
  },
  {
    title: "Continuous Learning",
    info: "Lifelong learning is key to personal and professional growth. Explore a vast collection of training videos and embark on a journey of continuous learning and self-improvement.",
  },
];

export default function Points() {
  return (
    <section className="points pb-5">
      <div className="container">
        <div className="row text-cente mb-5">
          <div className="col-md-8 offset-md-2">
            <h2>Unlock Your Potential with Engaging Training Videos</h2>
          </div>
        </div>
        <div className="row">
          {DATA.map((item, index) => {
            return (
              <div key={Math.random()} className="col-md-6">
                <div className="d-flex gap-3">
                  <div className="number-container">
                    <span className="bg-primary py-2 px-4 fs-3 rounded-circle">
                      {index + 1}
                    </span>
                  </div>
                  <div className="info-container">
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
