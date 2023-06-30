import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

export default function MaleStickFigure({
  size,
  colorActive,
  colorInactive,
  trigger,
}) {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [color, setColor] = useState(trigger);

  useEffect(() => {
    if (trigger === true) {
      setColor(colorActive);
      setPlayAnimation(true);

      setTimeout(() => {
        setPlayAnimation(false);
      }, 3000);
    } else if (trigger === false) {
      setPlayAnimation(false);
      setColor(colorInactive);
    }
  }, [trigger]);

  return (
    <StickFigureFrame size={size}>
      <StickFigureBody color={color} size={size} playAnimation={playAnimation}>
        <StickFigureHead color={color} size={size} />
        <StickFigureLeftArm
          color={color}
          size={size}
          playAnimation={playAnimation}
        >
          <StickFigureLeftUpperArm color={color} size={size} />
          <StickFigureLeftLowerArm
            color={color}
            size={size}
            playAnimation={playAnimation}
          />
        </StickFigureLeftArm>
        <StickFigureRightArm color={color} size={size} />
      </StickFigureBody>
      <StickFigureLeftLeg color={color} size={size} />
      <StickFigureRightLeg color={color} size={size} />
    </StickFigureFrame>
  );
}

const StickFigureFrame = styled.div`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const StickFigureHead = styled.div`
  height: calc(${({ size }) => size * 0.15}px);
  width: calc(${({ size }) => size * 0.15}px);
  background-color: ${({ color }) => color};

  position: absolute;
  top: calc(${({ size }) => -(size * 0.15 * 1.2)}px);
  border-radius: 50%;
`;

const bodyAnimation = keyframes`
0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(5deg);
  }
  90% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const StickFigureBody = styled.div`
  position: absolute;
  background-color: ${({ color }) => color};
  left: calc(${({ size }) => size / 2 - (size * 0.15) / 2}px);
  top: calc(${({ size }) => size - size * 0.72}px);
  width: calc(${({ size }) => size * 0.15}px);
  height: calc(${({ size }) => size * 0.35}px);
  border-top-right-radius: calc(${({ size }) => size} * 0.02px);
  border-top-left-radius: calc(${({ size }) => size} * 0.02px);

  ${({ playAnimation }) =>
    playAnimation &&
    css`
      animation-name: ${bodyAnimation};
      transform-origin: bottom;
      animation-duration: 3s;
    `}
`;

const waveAnimationArm = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(80deg);
  }
  80% {
    transform: rotate(80deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const StickFigureLeftArm = styled.div`
  position: absolute;
  left: calc(${({ size }) => size - (size + size * 0.07)}px);
  width: 33%;
  height: calc(${({ size }) => size * 0.35}px);
  border-radius: calc(${({ size }) => size} * 0.02px);

  ${({ playAnimation }) =>
    playAnimation &&
    css`
      animation-name: ${waveAnimationArm};
      transform-origin: top;
      animation-duration: 3s;
    `}
`;

const StickFigureLeftUpperArm = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 55%;
  border-radius: calc(${({ size }) => size} * 0.02px);
  position: absolute;
`;

const waveAnimationUpperArm = keyframes`
20% {
    transform: rotate(0deg);
}
35% {
    transform: rotate(120deg);
}
50% {
    transform: rotate(0deg);
}
65% {
    transform: rotate(120deg);
}
80% {
    transform: rotate(0deg);
}
`;

const StickFigureLeftLowerArm = styled.div`
  background-color: ${({ color }) => color};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55%;
  border-bottom-right-radius: calc(${({ size }) => size} * 0.02px);
  border-bottom-left-radius: calc(${({ size }) => size} * 0.02px);

  ${({ playAnimation }) =>
    playAnimation &&
    css`
      animation-name: ${waveAnimationUpperArm};
      transform-origin: 35% 3%;
      animation-duration: 3s;
    `}
`;

const StickFigureRightArm = styled.div`
  position: absolute;
  background-color: ${({ color }) => color};
  right: calc(${({ size }) => size - (size + size * 0.07)}px);
  width: 33%;
  height: calc(${({ size }) => size * 0.35}px);
  border-radius: calc(${({ size }) => size} * 0.02px);
`;

const StickFigureRightLeg = styled.div`
  position: absolute;
  background-color: ${({ color }) => color};
  left: calc(
    ${({ size }) => size / 2 + (size * 0.15) / 2 - size * 0.15 * 0.35}px
  );
  top: calc(${({ size }) => size - size * 0.72 + size * 0.32}px);
  width: calc(${({ size }) => size * 0.15 * 0.35}px);
  height: calc(${({ size }) => size * 0.35 * 0.9}px);
  border-bottom-right-radius: calc(${({ size }) => size} * 0.02px);
  border-bottom-left-radius: calc(${({ size }) => size} * 0.02px);
`;

const StickFigureLeftLeg = styled.div`
  position: absolute;
  background-color: ${({ color }) => color};
  left: calc(${({ size }) => size / 2 - (size * 0.15) / 2}px);
  top: calc(${({ size }) => size - size * 0.72 + size * 0.32}px);
  width: calc(${({ size }) => size * 0.15 * 0.35}px);
  height: calc(${({ size }) => size * 0.35 * 0.9}px);
  border-bottom-right-radius: calc(${({ size }) => size} * 0.02px);
  border-bottom-left-radius: calc(${({ size }) => size} * 0.02px);
  border-top-left-radius: calc(${({ size }) => size} * 0.02px);
`;
