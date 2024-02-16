import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Navbar(props: { getJoke: Function }) {
  const { getJoke } = props;
  return (
    <Box className="nav">
      <Button
        onClick={() => {
          getJoke();
        }}
        size="large"
        className="joke-button"
      >
        Get A Random Joke
      </Button>
      <Link
        target="_blank"
        href="https://mwks-joke-service.azurewebsites.net/swagger/index.html"
      >
        View API Docs
      </Link>
    </Box>
  );
}
