import { Box } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";



const App = () => {
  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      </Routes>
      
    </Box>
  )
}

export default App 






// npm i @chakra-ui/react@v2.10.3 @emotion/react @emotion/styled framer-motion
// npm i @chakra-ui/icons@v2.1.1