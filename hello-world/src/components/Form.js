import React, { useState } from "react";
const Form = () => {
  const [username, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("vue");
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleCommentsChange = (e) => setComments(e.target.value);
  const handleTopicChange = (e) => setTopic(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${username} ${comments} ${topic}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Username</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="">Comments</label>
        <textarea
          name="comments"
          id=""
          cols="30"
          rows="10"
          value={comments}
          onChange={handleCommentsChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="">Topic</label>
        <select name="topic" id="" value={topic} onChange={handleTopicChange}>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
};
export default Form;
