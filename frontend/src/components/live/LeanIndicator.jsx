import bikeRider from "../../assets/bike-rider.png";

export default function LeanIndicator({ leanAngle }) {
  return (
    <div className="lean-box">
      <div className="lean-center-line" />
      <div className="floor-grid" />
      <div className="lean-road" />
      <div className="road-shadow" />
      <div
        className="bike-icon"
        style={{ "--lean-rot": `${leanAngle}deg` }}
        aria-label="Motorcycle rider lean illustration"
      >
        <img src={bikeRider} alt="Front view motorcycle rider silhouette used as the live lean angle indicator" />
      </div>
      <div className="lean-scale"><span>Left lean</span><span>Center</span><span>Right lean</span></div>
    </div>
  );
}
