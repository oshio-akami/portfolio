import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <div>
      <Link to="/">
        <p>ホーム</p>
      </Link>
      <Link to="/skill">
        <p>スキル</p>
      </Link>
      <p>ポートフォリオ</p>
    </div>
  );
}
