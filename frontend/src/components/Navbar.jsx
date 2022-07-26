import {
  Button,
  Center,
  Flex,
  Icon,
  Input,
  useToast,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex
      p={"10px"}
      minH={"70px"}
      bg={"#549fef"}
      justifyContent={"space-between"}
      flexDirection={["row"]}
      gap={["10px", "0px"]}
    >
      <Box ml={"300px"}>
        {" "}
        <Link to={"/"}>
          <Heading>Home</Heading>
        </Link>
      </Box>
      <Box mr={"300px"}>
        <Link to={"/admin"}>
          <Heading>Admin</Heading>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
