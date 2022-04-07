import styled from "styled-components";
import useWidth from "../hooks/useWidth";
import colors from "../styles/constants/colors";
import opacity from "../styles/constants/opacity";
import responsive, { breakpoint } from "../styles/constants/responsive";
import fontStyle from "../styles/function/fontStyle";
import transitionStyle from "../styles/function/transition";

const Item = styled.li`
  padding: 10px 0;
  margin: 10px 0;
  transition: ${transitionStyle("all")};

  &:hover,
  &:active {
    opacity: ${opacity.base};
  }

  color: ${colors.black};
  ${fontStyle(13)}

  ${responsive.mediaQuery.tablet} {
    font-size: 16px;
  }
`;

const MetaData = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Publisher = styled.p`
  display: block;
  color: ${colors.blue};
  font-weight: 700;
  font-size: 14px;
  margin-right: 20px;

  ${responsive.mediaQuery.tablet} {
    font-size: 18px;
  }
`;

const Date = styled.p`
  color: ${colors.darkGray};
`;

const Title = styled.p`
  font-weight: 700;
`;

const NewsItem = ({ news }) => {
  const { width } = useWidth();

  return (
    <Item>
      <a href={news.url} target="_blank">
        <MetaData>
          <Publisher>{news.publisher}</Publisher>
          <Date>{news.date}</Date>
        </MetaData>

        <Title>
          {news.title.length < 30
            ? news.title
            : `${news.title.slice(0, 30)}...`}
        </Title>
      </a>
    </Item>
  );
};

export default NewsItem;
