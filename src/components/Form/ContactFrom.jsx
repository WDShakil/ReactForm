import { useState } from "react";
function Myform(props) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = (data) => {
    const fieldName = data.target.name;
    setUser({ ...user, [data.target.name]: data.target.value });
  };
  const submitHandler = (data) => {
    console.log(user);
    const dataPackage = user;
    props.getWay(dataPackage);
    data.preventDefault();
  };

  return (
    <div>
      <form className="formWrapper" onSubmit={submitHandler}>
        <h2>Register Now</h2>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="formBtn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
export default Myform;
