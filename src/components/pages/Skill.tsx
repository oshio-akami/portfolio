import { Link } from "react-router-dom";

export function Skill() {
  return (
    <div>
      <Link to="/">
        <p>ホーム</p>
      </Link>
      <p>スキル</p>
      <Link to="/portfolio">
        <p>ポートフォリオ</p>
      </Link>
    </div>
  );
}
