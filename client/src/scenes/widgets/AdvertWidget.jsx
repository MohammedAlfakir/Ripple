import { Link, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <Link
        href="https://www.mohammedalfakir.site/"
        style={{ textDecoration: "none" }}
      >
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="http://localhost:3001/assets/info4.jpeg"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
      </Link>
      <FlexBetween>
        <Typography color={main}>Mohammed Alfakir</Typography>
        <Link
          href="https://www.mohammedalfakir.site/"
          style={{ textDecoration: "none" }}
        >
          <Typography color={medium}>MohammedAlfakir.site</Typography>
        </Link>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Dedicated and skilled Developer with 3 years of experience in building
        responsive and user-friendly web applications. Proficient in React.js,
        Next.js, Typescript and Tailwind CSS. Passionate about creating dynamic
        and innovative digital experiences. Strong problem-solving abilities and
        a commitment to delivering high-quality code.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
