import { useState } from "react";
import { type Votes } from "../../types/votes";
import { type VoteType } from "../../types/votes";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import { Notification } from "../Notification/Notification";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Stats calculation
  const { good, bad, neutral } = votes;
  const totalVotes = good + bad + neutral;
  const positiveRate = totalVotes ? Math.round((good / totalVotes) * 100) : 0;
  const resetShown = totalVotes > 0; // Flag to show/hide reset button

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={resetShown}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
