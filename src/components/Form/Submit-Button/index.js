import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function SubmittButton({ disabled, onSubmitForm }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleClick() {
    setIsSubmitting(true);
    setTimeout(onSubmitForm, 1500);
  }

  return (
    <StyledButton disabled={disabled} onClick={handleClick}>
      {isSubmitting ? <Spinner /> : "Abschicken"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: var(--white);
  background-color: ${({ disabled }) =>
    disabled ? "var(--border-gray)" : "var(--blue)"};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  font-family: inherit;
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "var(--border-gray)" : "#006be6"};
  }
  &:disabled {
    cursor: default;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: auto;
  width: 24px;
  height: 24px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-left-color: var(--white);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
