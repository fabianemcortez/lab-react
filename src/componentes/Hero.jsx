import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="imgs">
        <img src={logo} alt="" height={68}/>
        <img src={menu} alt="" height={22}/>
      </div>

      <div className="txt">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how use the most popular frontrnd library, and become a
          super Ninja developer.
        </p>
      </div>

      <div>
        <button className="botão">Awesome!</button>
      </div>
    </div>
  );
}
