import styled from "./BubleBackground.module.css";

export default function BubleBackground() {
  return (
    <div className={styled["gradient-bg"]}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={styled["gradients-container"]}>
        <div className={styled.g1} />
        <div className={styled.g2} />
        <div className={styled.g3} />
        <div className={styled.g4} />
        <div className={styled.g5} />
        <div className={styled.interactive} />
      </div>
    </div>
  );
}
