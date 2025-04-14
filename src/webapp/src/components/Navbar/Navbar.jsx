// import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import SideBar from "../dashboard/SideBar/SideBar";

// import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css";

// export default function Navbar({
//   title = "Férias Hub",
//   iconUser = true,
//   onToggleSidebar,
// }) {
//   const user = <FontAwesomeIcon icon={faUser} />;
//   const formatDirection = () => {
//     return iconUser
//       ? "container-fluid justify-content-between"
//       : "container-fluid justify-content-center";
//   };

//   return (
//     <header className={styles.header}>
//       <nav className="navbar navbar-dark">
//         <div className={formatDirection()}>
//           <div>
//             <button
//               className="btn btn-light me-2"
//               type="button"
//               onClick={onToggleSidebar}
//             >
//               <FontAwesomeIcon icon={faBars} />
//             </button>
//           </div>
//           <div>
//             <Link
//               to={iconUser && "/dashboard"}
//               className="navbar-brand h2 mb-0 ms-2"
//             >
//               {title}
//             </Link>
//           </div>
//           {iconUser && (
//             <div className={`${styles.user}`}>
//               <button
//                 className="btn btn-light justify-content-center shadow-none"
//                 type="button"
//               >
//                 {user}
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({
  title = "Férias Hub",
  iconUser = true,
  onToggleSidebar,
}) {
  const user = <FontAwesomeIcon icon={faUser} />;

  const formatDirection = () => {
    return iconUser
      ? "container-fluid justify-content-between"
      : "container-fluid justify-content-center";
  };

  return (
    <header className={styles.header}>
      <nav className="navbar navbar-dark">
        <div className={formatDirection()}>
          <div>
            <button
              className="btn btn-light me-2"
              type="button"
              onClick={onToggleSidebar}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div>
            <Link
              to={iconUser && "/dashboard"}
              className="navbar-brand h2 mb-0 ms-2"
            >
              {title}
            </Link>
          </div>
          {iconUser && (
            <div className={`${styles.user}`}>
              <button
                className="btn btn-light justify-content-center shadow-none"
                type="button"
              >
                {user}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
