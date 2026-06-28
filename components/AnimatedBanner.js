export default function AnimatedBanner() {
  return (
    <div className="banner" aria-label="AI growth systems visualization">
      <div className="scanline" />
      <div className="orb one" />
      <div className="orb two" />
      <div className="coreSphere">
        <span />
        <span />
        <span />
      </div>
      <svg className="signalMap" viewBox="0 0 520 560" role="presentation">
        <path className="signalPath pathOne" d="M78 418 C152 306, 205 278, 260 280 S376 247, 445 126" />
        <path className="signalPath pathTwo" d="M68 168 C148 210, 160 340, 266 336 S398 405, 462 330" />
        <path className="signalPath pathThree" d="M116 92 C174 168, 318 112, 396 206 S415 420, 298 468" />
      </svg>
      <div className="dataCard cardOne">
        <span>Automation Readiness</span>
        <strong>87%</strong>
      </div>
      <div className="dataCard cardTwo">
        <span>Qualified Lead Flow</span>
        <strong>3.2x</strong>
      </div>
      <div className="dataCard cardThree">
        <span>Support Coverage</span>
        <strong>24/7</strong>
      </div>
      <div className="neural">
        {Array.from({ length: 18 }).map((_, index) => (
          <i key={index} />
        ))}
      </div>
    </div>
  );
}
