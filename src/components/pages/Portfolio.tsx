import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <div>
      <p>ポートフォリオ</p>
      <Link to="/">
        <p>ホーム</p>
      </Link>
      <Link to="/skill">
        <p>スキル</p>
      </Link>
    </div>
  );
}
