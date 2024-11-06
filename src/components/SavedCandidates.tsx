import { useState, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedCandidates");
    setSavedCandidates(saved ? JSON.parse(saved) : []);
  }, []);

  if (savedCandidates.length === 0) {
    return <p>No candidates have been accepted.</p>;
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.map((candidate) => (
        <div key={candidate.id} className="candidate-card">
          <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
          <h2>{candidate.name}</h2>
          <h6>({candidate.login})</h6>
          <p>Location: {candidate.location}</p>
          <p>Email: {candidate.email}</p>
          <p>Company: {candidate.company}</p>
          <article>Bio: {candidate.bio}</article>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      ))}
    </>
  );
};

export default SavedCandidates;
