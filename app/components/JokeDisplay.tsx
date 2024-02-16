import { Data } from "../types/Data";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";

export default function JokeDisplay(props: {
  response: Data;
  setShow: Function;
  show: boolean;
}) {
  const { setShow, show } = props;
  const { loading, error, data } = props.response;
  return (
    <Box component="section">
      {loading ? (
        <Box className="loading-error-display">
          <Zoom in>
            <Typography variant="h6">LOADING YOUR JOKE...</Typography>
          </Zoom>
        </Box>
      ) : error ? (
        <Box className="loading-error-display">
          <Zoom in>
            <Typography className="error-text" variant="h6">
              THERE WAS AN ERROR LOADING YOUR JOKE.
            </Typography>
          </Zoom>
        </Box>
      ) : (
        <Box className="joke-display-col">
          <Box className="joke-text-row">
            <Zoom in>
              <FormatQuoteSharpIcon
                className="left-quote-icon"
                style={{
                  transform: "scale(1.8) translateX(5%) rotate(180deg)",
                }}
              />
            </Zoom>
            <Zoom in={true} style={{ transitionDelay: "500ms" }}>
              <Typography variant="h6" style={{ zIndex: "10" }}>
                {data.joke}
              </Typography>
            </Zoom>
          </Box>
          <Box className="punchline-button-row">
            <Button onClick={() => setShow(!show)} className="punchline-button">
              {show ? "Hide Punchline" : "Show Punchline"}
            </Button>
          </Box>
          {show ? (
            <Box className="punchline-row">
              <Zoom in={true} style={{ transitionDelay: "500ms" }}>
                <Typography variant="h6" style={{ zIndex: "10" }}>
                  {data.punchLine}
                </Typography>
              </Zoom>
              <Zoom in>
                <FormatQuoteSharpIcon
                  className="right-quote-icon"
                  style={{ transform: "scale(1.8) translateX(-5%)" }}
                />
              </Zoom>
            </Box>
          ) : (
            <></>
          )}
        </Box>
      )}
    </Box>
  );
}
