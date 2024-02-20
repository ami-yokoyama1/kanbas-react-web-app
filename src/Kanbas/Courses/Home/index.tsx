import ModuleList from "../Modules/list";
import { FaBan, FaFileImport, FaBullseye, FaBullhorn, FaBell, FaCalendar } from "react-icons/fa";
import { FaArrowRightFromBracket, FaChartSimple, FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="d-flex">
      <div className="flex-fill">
      <ModuleList />
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{"width": "250px"}}>
              <h4>Course Status</h4>
                <div className="cs-options">
                  <Link to="#"><FaFileImport/> Import Existing Content</Link>
                  <Link to="#"><FaArrowRightFromBracket/> Import from Commons</Link>
                  <Link to="#"><FaBullseye/> Choose Home Page</Link>
                  <Link to="#"><FaChartSimple/> View Course Stream</Link>
                  <Link to="#"><FaBullhorn /> New Announcement</Link>
                  <Link to="#"><FaChartSimple /> New Analytics</Link>
                  <Link to="#"><FaBell /> View Course Notifications</Link>
                  <div className="clear"></div>
                </div>
                <h2></h2>

                <h6>To Do</h6><hr />
                <div className="td">
                  <Link to="#"><FaPencil />
                   Grade A1 - ENV + HTML</Link> <br />
                  100 points ・ Sep 19 at 11:59pm
                </div>
                <br />
                <h6>Coming Up</h6><hr />
                <div className="cu-le">
                  <Link to="#"><FaCalendar />Lecture</Link> <br />
                  CS54550.12631.202410 <br />
                  Sep 11 at 11:45am
                </div>
                <div className="cu-23le">
                <Link to="#"><FaCalendar />
                CS5610 06 SP23 Lecture</Link> <br />
                CS54550.12631.202410 <br />
                Sep 11 at 6pm
                </div>
            </div>


      </div>
      
    </div>
  );
}
export default Home;