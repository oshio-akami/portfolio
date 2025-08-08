import { Link } from "react-router-dom";

export function Skill() {
  return (
    <div>
      <p>スキル</p>
      <Link to="/">
        <p>ホーム</p>
      </Link>
      <Link to="/portfolio">
        <p>ポートフォリオ</p>
      </Link>
    </div>
  );
}
