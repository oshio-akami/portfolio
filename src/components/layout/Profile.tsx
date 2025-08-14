import { Link } from "react-router-dom";
import { FadeIn } from "../animation/FadeIn";

export function Profile() {
  return (
    <div>
      <div className="flex gap-2 mb-10 justify-center">
        <span className="icon-[mdi--account] size-10 text-heading"></span>
        <h1 className="text-4xl font-bold text-heading leading-none">
          Profile
        </h1>
      </div>
      <FadeIn>
        <div className="flex gap-10">
          <p className="text-4xl font-bold text-highlight mt-10 mb-10 fade-in">
            井上 汐音
          </p>
          <Link
            to="https://github.com/oshio-akami"
            className="flex gap-2 items-center text-2xl leading-none mt-5 hover:underline"
          >
            <span className="icon-[mdi--github]"></span>
            <p>oshio-akam</p>
          </Link>
        </div>
      </FadeIn>
      <FadeIn delay={700}>
        <p className="whitespace-pre-wrap text-[1.2rem]">{`専門学校でゲーム開発を学んでいた経験をきっかけに、Web開発にも興味を持ちました。\n日本工学院のゲームクリエイター科で主にUnityを用いたC#やC++のゲーム制作を学んだ後、2024年夏からHTML・CSS・JavaScriptの基礎を独学で習得しました。\nその後、モダンフレームワークに挑戦し、Vue.jsで委員会HPの模擬サイトを制作。さらにNext.jsを利用し、ポートフォリオとしてグループ招待制の記事投稿アプリを制作するなど、実践的なフルスタック開発にも取り組んでいます。\n現在は、型安全なAPI設計やフロント・バックエンドの統合開発など、自分のポートフォリオを通してスキルを磨いています。`}</p>
      </FadeIn>
    </div>
  );
}
