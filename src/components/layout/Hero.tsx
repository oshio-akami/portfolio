export function Hero() {
  return (
    <div className="relative flex gap-5 flex-col items-center justify-center w-full h-[100vh] -z-1">
      <img
        fade-in
        src="face2.png"
        className="absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-3/5 w-200 h-200 opacity-10"
      ></img>
      <h1 className="text-6xl font-bold text-highlight tracking-wide text-center">
        Shion Inoue Portfolio
      </h1>
    </div>
  );
}
