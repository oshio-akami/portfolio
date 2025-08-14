import { FadeIn } from "../animation/FadeIn";
import { PortfolioCard } from "../ui/PortfolioCard";

export function Portfolios() {
  return (
    <section id="portfolio" className="bg-bg pt-20 pb-10 mt-10 mb-50">
      <div className="wrapper">
        <div className="flex gap-2 justify-center mb-10">
          <span className="icon-[mdi--folder-multiple] text-heading size-10"></span>
          <h1 className="text-4xl font-bold text-heading leading-none">
            Portfolio
          </h1>
        </div>
        <div className="m-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <FadeIn>
            <PortfolioCard
              image="/portfolio/committee-homepage.jpg"
              title="委員会ホームページ(模擬サイト)"
              description={`通所していた事業所の委員会ホームページの模擬サイトです。`}
              link="https://committee-homepage.pages.dev/"
              tags={[
                "Vue.js",
                "Type Script",
                "Hono",
                "drizzle",
                "Cloudflare Pages",
                "Cloudflare Workers",
                "sqlite",
                "d1",
                "r2",
              ]}
              github={[
                {
                  name: "github-frontend",
                  link: "https://github.com/oshio-akami/committee-homepage",
                },
                {
                  name: "github-backend",
                  link: "https://github.com/oshio-akami/committee-backend",
                },
              ]}
            />
          </FadeIn>
          <FadeIn>
            <PortfolioCard
              image="/portfolio/group-app.jpg"
              title="NoteLink(グループ制記事共有アプリ)"
              description={`NoteLinkは、招待制のグループ内で記事を投稿・共有できるWebアプリです。`}
              link="https://project-management-tool-8fs.pages.dev/"
              tags={[
                "Next.js",
                "Type Script",
                "swr",
                "Hono",
                "drizzle",
                "Cloudflare Pages",
                "d1",
                "r2",
                "postgresql",
              ]}
              github={[
                {
                  name: "github",
                  link: "https://github.com/oshio-akami/notelink-app",
                },
              ]}
            />
          </FadeIn>
          <FadeIn>
            <PortfolioCard
              image="/portfolio/committee-homepage.jpg"
              title="仮の三件目"
              description="ここに説明"
              link="https://project-management-tool-8fs.pages.dev/"
              tags={["Next.js", "Type Script", "Hono", "Cloudflare"]}
              github={[
                {
                  name: "github",
                  link: "https://github.com/oshio-akami/notelink-app",
                },
              ]}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
