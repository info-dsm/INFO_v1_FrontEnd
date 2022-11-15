import styled, { keyframes } from "styled-components";

const Error = (props) => {
  const arr = Array.from({ length: 3 }, () => {
    return "404";
  });

  return (
    <>
      <Title>
        {arr.map((t, i) => (
          <Text color={props.color} index={i}>
            {t}
          </Text>
        ))}
      </Title>
      <Description color={props.color}>PAGE NOT FOUND</Description>
      <Button
        onClick={() => {
          window.history.back();
        }}
      >
        GO BACK
      </Button>
    </>
  );
};

export default Error;

const ErrorFadeIn = keyframes`
  0% {
    opacity: 0;
    font-family: Arial;
  };
  60% {
    opacity: 0.5;
    font-style: oblique;
  }
  80% {
    transform: none;
    opacity: 0.7;
  }
  100% {
    opacity: 0.8;
    text-shadow: none;
  }`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Text = styled.span`
  position: absolute;
  top: 223px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 150px;
  opacity: 0;
  animation: ${ErrorFadeIn} 0.8s calc(${(props) => props.index} * 150ms + 0.5s)
    forwards;
  color: ${(props) => props.color || "#7243ff"};
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Description = styled.div`
  font-size: 30px;
  position: absolute;
  top: 439px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: ${FadeIn} 0.8s forwards linear;
  animation-delay: 1.8s;
  color: ${(props) => props.color || "#7243ff"};
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: none;
  width: 330px;
  height: 65px;
  color: #7243ff;
  border-radius: 12px;
  font-size: 22px;
  font-weight: 700;
  position: absolute;
  top: 536px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: ${FadeIn} 0.8s forwards linear;
  animation-delay: 2.3s;
`;
