import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import womanBasic from "../../../../../assets/images/woman-basic.svg";
import womanColored from "../../../../../assets/images/woman-colored.png";
import manBasic from "../../../../../assets/images/man-basic.svg";
import manColored from "../../../../../assets/images/man-colored.png";

const rotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const StyledImage = styled.img`
  ${({ isRotating }) =>
    isRotating &&
    css`
      animation: ${rotateAnimation} 1s linear;
      transform-style: preserve-3d;
    `};
`;

export default function RadioButtonImage({ value, isChecked }) {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setIsRotating(true);

      setTimeout(() => {
        setIsRotating(false);
      }, 1000); // Duration of the animation in milliseconds
    }
  }, [isChecked]);

  const images = {
    Frau: {
      checked: womanColored,
      not: womanBasic,
    },
    Mann: {
      checked: manColored,
      not: manBasic,
    },
  };

  return (
    <StyledImage
      src={isChecked ? images[value].checked : images[value].not}
      alt={value}
      width={30}
      height={35}
      isRotating={isRotating}
      onAnimationEnd={() => setIsRotating(false)}
    />
  );
}
