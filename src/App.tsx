"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Homepage from "./pages/Homepage";
import Navbar from "./components/custom/Navbar";
import Post from "./types/Post";
import { Flex } from "@chakra-ui/react";

const DummyPosts: Post[] = [
  {
    title: "My Long Test post!",
    text: "Im a yapping yapper who yaps!",
    timestamp: 1235,
    author: 123,
    likes: [123, 514, 541],
  },
  {
    title: "My Second Test post!",
    text: "Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!Im a yappity yapping yapper who triple yaps who triple yaps who triple yaps!",
    timestamp: 6542,
    author: 5123,
    likes: [613, 623, 311],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1734543932716-431337d9c3c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
];

const App = () => {
  return (
    <Flex direction="column" height="100vh">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Homepage Posts={DummyPosts} />} />
          <Route path="/chakra" element={<>hi chakra</>} />

          <Route path="*" element={<>hi 404</>} />
        </Routes>
      </Router>
    </Flex>
  );
};

export default App;
