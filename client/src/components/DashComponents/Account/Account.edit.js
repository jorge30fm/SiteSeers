import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT_USER } from "../../../utils/mutations";
import { QUERY_USER_INFO } from "../../../utils/queries";
import "./Account.css";
import Edit from "@mui/icons-material/Edit";
import Auth from "../../../utils/auth";

const EditProfile = () => {
  const [formState, setFormState] = useState({
    bio: "",
    email: "",
    phone: "",
  });
  const [editUser, { error }] = useMutation(EDIT_USER);

  const { loading, data } = useQuery(QUERY_USER_INFO);
  const userInfo = data?.me || {};

	var myWidget = window.cloudinary.createUploadWidget(
		{
			cloudName: "dxs0geixs",
			uploadPreset: "irkknuii",
		},
		async (error, result) => {
			if (!error && result && result.event === "success") {
				const { public_id, format } = result.info;
				console.log(result.info);
				console.log(public_id);

				try {
					editUser({
						variables: { profilePicture: `${public_id}.${format}` },
					});
				} catch (e) {
					console.log(e);
				}
			}
		}
	);

  const handleOpenWidget = () => {
		myWidget.open();
	};
	// const handleDivClick = (e) => {
	// 	const clickedDiv = e.target;
	// 	const text = clickedDiv.textContent;
	// 	const inputEl = document.createElement("textarea");
	// 	inputEl.classList.add("input-to-text");
	// 	inputEl.value = text;
	// 	inputEl.addEventListener("blur", divOnBlur);
	// 	clickedDiv.replaceWith(inputEl);
	// 	inputEl.focus();
	// };

	// const divOnBlur = (e) => {
	// 	const inputEl = e.target;
	// 	const text = inputEl.value;
	// 	const divEl = document.createElement("p");
	// 	divEl.classList.add("text-to-input");
	// 	divEl.textContent = text;
	// 	divEl.addEventListener("click", handleDivClick);
	// 	inputEl.replaceWith(divEl);
	// };
	if (loading) {
		return <div>Loading...</div>;
	}

  const profilePicStyle = {
    backgroundImage: `url(https://res.cloudinary.com/dxs0geixs/image/upload/c_scale,w_135/v1663680167/${userInfo.profilePicture})`,
    backgroundSize: "cover",
  }


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await editUser({
        variables: { ...formState },
      });
      console.log("this is data ", data)
      Auth.login(data.editUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex-row justify-space-between">
        <div className="pfp-container">
          <div className="pfp" style={profilePicStyle}></div>
          <Edit
            id="upload_widget"
            className="account-edit-icon "
            onClick={handleOpenWidget}
          />
        </div>
        <div className="flex-column align-center">
          <h3>
            {userInfo.firstName} {userInfo.lastName}
          </h3>
          <p>Member since {userInfo.createdAt}</p>
        </div>
      </div>

      <div className="padding">
        <h2>Profile</h2>
        <form className="flex-column" onSubmit={handleFormSubmit}>
          <div>
            {" "}
            {/* TODO: display fname and lname in a row */}
            <div className="flex-column margin-top">
              <label>About:</label>
              <textarea
                className="form-input"
                placeholder={userInfo.bio}
                name="bio"
                type="bio"
                id="bio"
                value={formState.bio}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex-column margin-top">
              <label>Email:</label>
              <input
                className="form-input"
                placeholder={userInfo.email}
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex-column margin-top">
            <label>Phone:</label>
            <input
              className="form-input"
              placeholder={userInfo.phone}
              name="phone"
              type="phone"
              id="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div className="btn-container margin-top">
            <button className="btn" type="submit">
              Save
            </button>
          </div>
        </form>
        {error && (
          <div className="margin-top flex-column align-center">
            Somthing went wrong.
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
