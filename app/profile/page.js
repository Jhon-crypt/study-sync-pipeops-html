import ProfileSection from "../components/section/profileSection";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      
      <div
  className="container-fluid"
  style={{
    backgroundColor: "#EBDEEA",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    height: "230px", 
  }}
>
  <nav className="navbar mt-2" style={{ backgroundColor: "transparent" }}>
    <div className="container">
      <span
        className="navbar-brand mb-0 h1"
        style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "600" }}
      >
        <Link
          href="/dashboard"
          className="text-decoration-none text-dark bi-chevron-left me-2"
          style={{ "-webkit-text-stroke": "1.3px", textStroke: "5px" }}
        ></Link>
        Profile
      </span>
    </div>
  </nav>
  
  <div>
   
  </div>
</div>
<ProfileSection />

      
    </>
  );
}
