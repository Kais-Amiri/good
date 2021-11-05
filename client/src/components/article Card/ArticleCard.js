import React from "react";

function ArticleCard() {
  return (
    <div className="card col-9 col-md-5 col-lg-4 m-3">
      <img
        className="card-img-top"
        src="https://microbiologyclass.com/wp-content/uploads/2020/06/molecularbiologyimage.jpg"
        alt="Card image cap"
        style={{ width: "100%", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
