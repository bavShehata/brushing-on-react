import React, { useState } from "react";
const UserGreeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return isLoggedIn && <h1>Welcome Bavly</h1>;

  // return isLoggedIn ? <h1>Welcome Bavly</h1> : <h1>Welcome Guest</h1>;

  // let message;
  // if (isLoggedIn) message = "Welcome Bavly";
  // else message = "Welcome Guest";
  // return (
  //   <>
  //     <h1>{message}</h1>
  //   </>
  // );
  // if (isLoggedIn)
  //   return (
  //     <>
  //       <h1>Welcome Bavly</h1>
  //     </>
  //   );
  // else
  //   return (
  //     <>
  //       <h1>Welcome Guest</h1>
  //     </>
  //   );
};
export default UserGreeting;
