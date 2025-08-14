import { HashLink } from "react-router-hash-link";

export function Header() {
  return (
    <div className="flex justify-end gap-10 text-3xl text-highlight pt-10 pr-[10%] font-bold">
      <HashLink smooth to="#top" className="cursor-pointer hover:underline">
        <p>Top</p>
      </HashLink>
      <HashLink smooth to="#profile" className="cursor-pointer hover:underline">
        <p>Profile</p>
      </HashLink>
      <HashLink smooth to="#profile" className="cursor-pointer hover:underline">
        <p>Skills</p>
      </HashLink>
      <HashLink
        smooth
        to="#portfolio"
        className="cursor-pointer hover:underline"
      >
        <p>Portfolio</p>
      </HashLink>
    </div>
  );
}
