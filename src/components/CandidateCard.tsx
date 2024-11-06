import Candidate from "../interfaces/Candidate.interface";

interface CandidateCardProps {
  candidate: Candidate;
  onReject: () => void;
  onAccept: () => void;
}

const CandidateCard = ({
  candidate,
  onReject,
  onAccept,
}: CandidateCardProps) => (
  <div className="candidate-card">
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
    <button onClick={onReject} style={{ margin: "10px" }}>
      -
    </button>
    <button onClick={onAccept} style={{ margin: "10px" }}>
      +
    </button>
  </div>
);

export default CandidateCard;
