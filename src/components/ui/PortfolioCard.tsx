import { Link } from "react-router-dom";
import { Badge } from "./badge";
import { Card, CardHeader, CardContent } from "./card";

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  github: { name: string; link: string }[];
};

export function PortfolioCard(props: Props) {
  const badges = props.tags.map((tag) => (
    <Badge className="bg-bg text-[1rem] text-highlight">{tag}</Badge>
  ));
  const githubLinks = props.github.map((github) => (
    <Link className="flex text-heading hover:underline " to={github.link}>
      <span className="icon-[mdi--github] mt-1.5"></span>
      <p>{github.name}</p>
    </Link>
  ));
  return (
    <Card className="w-full min-h-[580px] p-0 transition-transform duration-300 hover:scale-105">
      <Link to={props.link}>
        <img
          src={props.image}
          alt="image"
          className="w-full h-[250px] object-cover rounded-t-lg  cursor-pointer hover:brightness-90"
        />
      </Link>
      <CardHeader>
        <h2 className="text-xl text-center text-heading font-semibold">
          {props.title}
        </h2>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 pr-10 pl-10 mb-5">
        <p className="whitespace-pre-wrap">{props.description}</p>
        <div className="flex gap-2 flex-wrap">{badges}</div>
        <div className="flex gap-4 flex-wrap">
          <Link
            className="flex items-center text-heading hover:underline"
            to={props.link}
          >
            <span className="icon-[mdi--external-link] mt-1"></span>
            <p>サイト</p>
          </Link>
          {githubLinks}
        </div>
      </CardContent>
    </Card>
  );
}
