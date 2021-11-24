import React from "react";
import "./Card.css";

const Card = ({
  src,
  tag,
  hastag,
  title,
  description,
  name,
  followers,
  image,
  category,
}) => {
  return (
    <div className="card">
      <div className="card-banner">
        <p className={`category-tag ${tag}`}>{category}</p>
        <img className="banner-img" src={src} alt="" />
      </div>
      <div className="card-body">
        <p className="blog-hashtag">{hastag}</p>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>

        <div className="card-profile">
          <img className="profile-img" src={image} alt="" />
          <div className="card-profile-info">
            <h3 className="profile-name">{name}</h3>
            <p className="profile-followers">{followers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
