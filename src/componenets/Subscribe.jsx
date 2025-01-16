export default function Subscribe() {
  return (
    <section id="subscribe" className="subscribe my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h2>
              Subscribe to our email list and get updates from the experts
            </h2>
            <form>
              <div className="my-4">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="form-control form-control-lg"
                />
                <div className="form-text">
                  We will never share your email address
                </div>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
