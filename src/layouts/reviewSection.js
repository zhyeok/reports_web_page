import styled from "styled-components";
import Carousel from "../components/carousel/carousel";
import Preface from "../components/preface";
import review from "../data/review";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import flexbox from "../styles/function/flexbox";

const CustomSection = styled.section`
  width: 100%;
  padding: 50px 10px;
  background-image: linear-gradient(125deg, ${colors.violet}, ${colors.red});
  ${flexbox()}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${responsive.maxWidth.lg + 210}px;
`;

const ReviewSection = () => {
  return (
    <CustomSection>
      <Wrapper>
        <Preface
          title={["SEMOS REVIEW"]}
          subtitle={["세모스를 만난 유저들의 솔직 담백한 이야기"]}
          color={colors.white}
          alignCenter={true}
          titleFont="point"
        />

        <Carousel reviews={review} />
      </Wrapper>
    </CustomSection>
  );
};

export default ReviewSection;
