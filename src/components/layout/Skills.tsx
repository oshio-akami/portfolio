import { useInView } from "@/hooks/useInView";
import Skill from "../ui/Skill";

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div>
      <div className="flex gap-2 mb-10 justify-center">
        <span className="icon-[mdi--lightbulb-on] size-10 text-heading"></span>
        <h1 className="text-4xl font-bold text-heading leading-none">Skills</h1>
      </div>
      <p className="font-bold">
        1. 触った事がある。 2.使い方を大雑把に学んだ。
        3.基本的な使い方にまだ漏れがあるが使用可能。 4. 基本的な使い方を把握。
        5. 問題無く使用可能。
      </p>
      <div ref={ref} className="grid grid-cols-3 xl:grid-cols-4 gap-15 mb-10">
        <Skill
          className="basis-1/3"
          rating={4}
          text="Java Script"
          inView={inView}
          strokeColor="#f0db4f" // JSのゴールドイエロー
        />
        <Skill
          className="basis-1/3"
          rating={4}
          text="Next"
          inView={inView}
          strokeColor="#0070f3" // Next.jsのブランドブルー
        />
        <Skill
          className="basis-1/3"
          rating={3}
          text="Type Script"
          inView={inView}
          strokeColor="#3178c6" // TypeScriptブルー
        />
        <Skill
          className="basis-1/3"
          rating={3}
          text="React"
          inView={inView}
          strokeColor="#61dafb" // Reactシアンブルー
        />
        <Skill
          className="basis-1/3"
          rating={2}
          text="Vue"
          inView={inView}
          strokeColor="#42b883" // Vueのグリーン
        />
        <Skill
          className="basis-1/3"
          rating={3}
          text="C#"
          inView={inView}
          strokeColor="#68217A"
        />
        <Skill
          className="basis-1/3"
          rating={2}
          text="Git"
          inView={inView}
          strokeColor="#f05032" // Gitのオレンジレッド
        />
      </div>
    </div>
  );
}
