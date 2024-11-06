import { useState, useEffect } from "react";
import { searchGithub } from "../api/API"; // searchGithubUser ??
import Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "./CandidateCard";
// import { ImCross } from "react-icons/im";
// import { CgPlayListAdd } from "react-icons/cg";

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    const saved = localStorage.getItem("savedCandidates");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
  }, [savedCandidates]);

  const handleReject = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleAccept = () => {
    if (candidates[currentIndex]) {
      setSavedCandidates([...savedCandidates, candidates[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (currentIndex >= candidates.length) {
    return <p>No more candidates available to browse.</p>;
  }

  return (
    <CandidateCard
      candidate={candidates[currentIndex]}
      onReject={handleReject}
      onAccept={handleAccept}
    />
  );
};

export default CandidateSearch;
