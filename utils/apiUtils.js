const backendUrl = "https://0ff7-190-9-255-23.ngrok-free.app/api";

// Authentication routes
exports.loginCredentialsAuthentication = async (userEmail, userPassword) => {
  try {
    const objectOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    };

    const response = await fetch(`${backendUrl}/users/login`, objectOptions);
    const data = await response.json();

    // What will be returned if api call was succesfull
    if (response.status === 200) {
      const objectToReturn = {
        email: data.data.user.email,
        id: data.data.user._id,
        token: data.token,
        logged: true,
      };
      return objectToReturn;
    }

    // What will be returned if there was a bad request
    if (response.status !== 200) {
      return { ...data, logged: false };
    }
  } catch (err) {
    console.log(err.message);
  }
};

exports.fetchFeedData = async (authToken) => {
  try {
    const objectOptions = {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    };

    const response = await fetch(`${backendUrl}/registration`, objectOptions);
    const data = await response.json();

    // What will be returned if api call was succesfull
    if (response.status === 200) {
      const objectToReturn = {
        data: data.data.entries,
      };
      return objectToReturn;
    }

    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
