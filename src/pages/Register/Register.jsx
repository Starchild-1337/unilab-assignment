import React, { useState } from "react";
import "./Register.css";
import photoIcon from "../../assets/add-a-photo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    avatar: "",
  });
  const navigate = useNavigate();

  const handleAvatar = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      setErrors({
        ...errors,
        avatar: "file format should be .png or .jpeg",
      });
      setPhoto("");

      return;
    }

    const url = URL.createObjectURL(file);
    setPhoto(url);
    setErrors({
      name: "",
      avatar: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length > 25) {
      setErrors({
        ...errors,
        name: "name is too long",
      });
    } else {
      setErrors({
        name: "",
        avatar: "",
      });
    }

    const userData = { name: name, avatar: photo };
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard/form");
  };

  return (
    <main className="register">
      <div className="register__card">
        <h2>Get Started</h2>
        <h4>add a photo</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              className="register__card-upload-photo"
              type="file"
              id="file"
              accept="image/png, image/jpeg"
              onChange={handleAvatar}
            />
            <label className="card__photo-label" htmlFor="file">
              {!photo ? (
                <img src={photoIcon} alt="icon" />
              ) : (
                <img src={photo} alt="user icon" className="user-avatar" />
              )}
            </label>
            {errors.avatar && (
              <small className="error-text">{errors.avatar}</small>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="name" className="name-label">
              fill in your name
            </label>
            <input
              id="name"
              className="register__card-name"
              type="text"
              placeholder="your name"
              value={name}
              autoComplete="off"
              spellCheck={false}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>
          <button
            type="submit"
            className="register__card-sign-in btn"
            disabled={!name.trim() || !photo}
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
