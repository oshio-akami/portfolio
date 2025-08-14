import { Header } from "../layout/Header";
import { Hero } from "../layout/Hero";
import { FadeIn } from "../animation/FadeIn";
import { Skills } from "../layout/Skills";
import { Portfolios } from "../layout/Portfolios";
import { Profile } from "../layout/Profile";

export function Home() {
  return (
    <div id="top">
      <FadeIn className="fixed top-0 lef-0 w-full z-1000">
        <Header />
      </FadeIn>
      <FadeIn>
        <Hero />
      </FadeIn>
      <div className="flex flex-col">
        <section id="profile" className="bg-bg-sub pt-20 pb-10">
          <div className="wrapper">
            <div className="flex gap-10 flex-col lg:flex-row">
              <div className="basis-4/7">
                <Profile />
              </div>
              <div className="basis-3/7">
                <Skills />
              </div>
            </div>
          </div>
        </section>
        <Portfolios />
      </div>
    </div>
  );
}
