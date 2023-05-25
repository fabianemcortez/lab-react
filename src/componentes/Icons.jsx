import iconone from "../assets/icon1.png";
import icondois from "../assets/icon2.png";
import icontres from "../assets/icon3.png";
import iconquatro from "../assets/icon4.png";

export default function Icons() {
  return (
    <div className="flex">
      <div>
        <img src={iconone} alt="" width={140} />
        <p>Declarative</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, iure?
        </p>
      </div>

      <div>
        <img src={icondois} alt="" width={140}/>
        <p>Declarative</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, iure?
        </p>
      </div>

      <div>
        <img src={icontres} alt="" width={140}/>
        <p>Declarative</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, iure?
        </p>
      </div>

      <div>
        <img src={iconquatro} alt="" width={140} />
        <p>Declarative</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, iure?
        </p>
      </div>
    </div>
  );
}
