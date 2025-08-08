import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <p>ホーム</p>
      <Link to="/portfolio">
        <p>スキル</p>
      </Link>
      <Link to="/portfolio">
        <p>ポートフォリオ</p>
      </Link>
    </div>
  );
}
