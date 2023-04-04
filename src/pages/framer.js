import "../style.css";
import FramerBox from "../components/framer_box.js";
import FramerDropdown from "../components/framer_dropdown.js";
import FramerReorder from "../components/framer_reorder.js";

export default function Framer() {
  return (
    <div>
      <h1>
        Animated Content
      </h1>

      <p>
        Framer Motion seems to be the go-to framework for animations.<br></br>
        Seems like most types of motions can be made with it.
      </ p>

      <div className='animationContainer'>
        <FramerBox />
      </div>

      <p>
        Framer also has a lot of tools for layouts.<br></br>
        Reordering elements, drag and drop thingies...
      </ p>

      <div className='animationContainer'>
        <FramerReorder />
      </div>

      <p>
        The animated content seems to blend rather seemless from .ts to .js.<br></br>
        As most examples are in .ts, framer should preform the best in .ts projects.
      </p>

      <div className='animationContainer'>
        <FramerDropdown />
      </div>
    </div >
  );
}
