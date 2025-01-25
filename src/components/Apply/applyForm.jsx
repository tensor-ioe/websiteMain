import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApplyForm = ({ apiKey }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [feedbacks, setFeedbacks] = useState("");
  const [positions, setPositions] = useState([]);
  const [disableInput, setDisableInput] = useState(false);

  const handlePositions = (e) => {
    const { name, checked } = e.target;

    setPositions((prevPositions) => {
      if (checked) {
        if (prevPositions.length >= 3) {
          setDisableInput(true);
          return prevPositions;
        } else {
          setDisableInput(false);
          return [...prevPositions, name];
        }
      } else {
        setDisableInput(false);
        return prevPositions.filter((position) => position !== name);
      }
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const appliedPositions = positions.join(", ");
    const data = {
      Name: name,
      Email: email,
      Roll: rollNo,
      Positions: appliedPositions,
      SkillSet: question1,
      Motivation: question2,
      Contribution: question3,
      Feedbacks: feedbacks,
    };

    try {
      await axios.post(`https://sheet.best/api/sheets/${apiKey}`, data);
      navigate("success");
    } catch (error) {
      console.error(error);
      navigate("networkError");
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="md:w-3/5 lg:w-5/12 self-center p-4"
    >
      {/* Personal Details */}
      <div className="mb-6">
        <label className="block font-bold text-lg mb-4">Personal Details</label>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border-2 border-sky-400 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border-2 border-sky-400 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Campus Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="w-full p-2 mb-4 border-2 border-sky-400 rounded-md"
          required
        />
      </div>

      {/* Roles and Skills */}
      <div className="mb-6">
        <label className="block font-bold text-lg mb-4">Roles and Skills</label>
        <p className="mb-2">Which role are you interested in? (Max 3)</p>
        {["Research Advocate", "Software Coordinator", "Web Developer", "Event Manager", "Graphics Designer", "Social Media Manager", "General Member"].map(
          (role) => (
            <div key={role} className="flex items-center mb-2">
              <input
                type="checkbox"
                name={role}
                onChange={handlePositions}
                disabled={disableInput && !positions.includes(role)}
                className="mr-2"
              />
              <label>{role}</label>
            </div>
          )
        )}
        <label className="block mt-4">Specific skills:</label>
        <textarea
          value={question1}
          onChange={(e) => setQuestion1(e.target.value)}
          className="w-full p-2 border-2 border-sky-400 rounded-md"
          required
        />
      </div>

      {/* Personal Expression */}
      <div className="mb-6">
        <label className="block font-bold text-lg mb-4">Personal Expression</label>
        <label className="block mb-2">Why do you want to join?</label>
        <textarea
          value={question2}
          onChange={(e) => setQuestion2(e.target.value)}
          className="w-full p-2 border-2 border-sky-400 rounded-md mb-4"
          required
        />
        <label className="block mb-2">How will you contribute?</label>
        <textarea
          value={question3}
          onChange={(e) => setQuestion3(e.target.value)}
          className="w-full p-2 border-2 border-sky-400 rounded-md mb-4"
          required
        />
        <label className="block mb-2">Feedback or queries:</label>
        <textarea
          value={feedbacks}
          onChange={(e) => setFeedbacks(e.target.value)}
          className="w-full p-2 border-2 border-sky-400 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ApplyForm;
