import ModuleList from "../Modules/list";
import { FaBan } from "react-icons/fa";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ModuleList />
      <h2>Status</h2>
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{"width": "250px"}}>
              <h4>Course Status</h4>
                <div className="cs-options">
                  <a href="#"><i className="fa fa-file-import"></i> Import Existing Content</a>
                  <a href="#"><i className="fa fa-solid fa-arrow-right-from-bracket"></i> Import from Commons</a>
                  <a href="#"><i className="fa-solid fa-bullseye"></i> Choose Home Page</a>
                  <a href="#"><i className="fa-solid fa-chart-simple"></i> View Course Stream</a>
                  <a href="#"><i className="fa-solid fa-bullhorn"></i> New Announcement</a>
                  <a href="#"><i className="fa-solid fa-chart-simple"></i> New Analytics</a>
                  <a href="#"><i className="fa-regular fa-bell"></i> View Course Notifications</a>
                  <div className="clear"></div>
                </div>

                <h6>To Do</h6><hr />
                <div className="td">
                  <a href="#"><i className="fa-solid fa-1"></i>
                  Grade A1 - ENV + HTML</a>
                  {/* </br> */}
                  100 points ・ Sep 19 at 11:59pm
                </div>
                {/* </br> */}

                {/* // <h6>Coming Up</h6><hr />
                // <div className="cu-le">
                //   <a href="#"><i className="fa-regular fa-calendar"></i>
                //   Lecture</a></br>
                //   CS54550.12631.202410</br>
                //   Sep 11 at 11:45am
                // </div> */}
                <div className="cu-23le">
                <a href="#"><i className="fa-regular fa-calendar"></i>
                CS5610 06 SP23 Lecture</a>
                CS54550.12631.202410
                Sep 11 at 6pm
                </div>
            </div>
    </div>
  );
}
export default Home;