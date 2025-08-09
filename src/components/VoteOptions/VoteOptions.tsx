import type { VoteType } from "../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: () => boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <ul className={css.container}>
      <li>
        <button onClick={() => onVote("good")} className={css.button}>
          Good
        </button>
      </li>
      <li>
        <button onClick={() => onVote("neutral")} className={css.button}>
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => onVote("bad")} className={css.button}>
          Bad
        </button>
      </li>
      {canReset() && (
        <li>
          <button onClick={onReset} className={`${css.button} ${css.reset}`}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
