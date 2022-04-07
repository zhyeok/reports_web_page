import { useEffect, useState } from "react";
import styled from "styled-components";
import useWidth from "../../hooks/useWidth";
import colors from "../../styles/constants/colors";
import responsive, { breakpoint } from "../../styles/constants/responsive";
import flexbox from "../../styles/function/flexbox";
import transitionStyle from "../../styles/function/transition";
import Slide from "./slide";

const Container = styled.div`
  width: 100%;
  ${flexbox()}
  position: relative;
  margin-top: 30px;
`;

const SlideContainer = styled.div`
  width: 260px;
  display: flex;
  overflow: hidden;

  ${responsive.mediaQuery.tablet} {
    width: 640px;
  }

  ${responsive.mediaQuery.desktop} {
    width: 960px;
  }
`;

const Cards = styled.ul`
  width: 90%;
  display: flex;
  transform: ${({ idx }) => `translateX(-${idx * 260}px)`};
  transition: ${transitionStyle("transform")};

  ${responsive.mediaQuery.tablet} {
    transform: ${({ idx }) => `translateX(-${idx * 320}px)`};
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  ${flexbox("space-between")}
`;

const Button = styled.button`
  width: 44px;
  height: 44px;
  background-color: ${colors.white};
  border-radius: 15px;
  color: ${colors.violet};
  font-size: 24px;
  transition: ${transitionStyle("opacity")};

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

const Carousel = ({ reviews }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { width } = useWidth();

  const TOTAL_SLIDES = reviews.length - 1;

  const observerSlide = () => {
    if (width >= breakpoint.md && currentSlide >= TOTAL_SLIDES - 2) {
      setCurrentSlide(TOTAL_SLIDES - 1);
    }

    if (width >= breakpoint.lg && currentSlide >= TOTAL_SLIDES - 3) {
      setCurrentSlide(TOTAL_SLIDES - 2);
    }
  };

  useEffect(() => {
    observerSlide();
  }, [width]);

  const nextSlideHandler = () => {
    if (width < breakpoint.md) {
      if (currentSlide < TOTAL_SLIDES) {
        setCurrentSlide(currentSlide + 1);
      }
    } else if (width < breakpoint.lg) {
      if (currentSlide < TOTAL_SLIDES - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    } else {
      if (currentSlide < TOTAL_SLIDES - 2) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    // if (currentSlide < TOTAL_SLIDES) {
    //   setCurrentSlide(currentSlide + 1);
    // }
  };

  const prevSlideHandler = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Container>
      <SlideContainer>
        <Cards idx={currentSlide}>
          {reviews.map((review, idx) => (
            <Slide
              key={idx}
              img={review.img}
              comment={review.comment}
              name={review.name}
            />
          ))}
        </Cards>
      </SlideContainer>

      <ButtonBox>
        <Button
          type="button"
          onClick={prevSlideHandler}
          isDisabled={currentSlide === 0 ? true : false}
        >
          &lt;
        </Button>
        <Button
          type="button"
          onClick={nextSlideHandler}
          isDisabled={currentSlide === TOTAL_SLIDES ? true : false}
        >
          &gt;
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default Carousel;
