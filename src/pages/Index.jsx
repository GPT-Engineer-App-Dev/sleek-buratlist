import { Container, VStack, Heading, Input, Button, List, ListItem, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <Container maxW="container.md" p={4} bg="white" color="black" height="100vh" display="flex" flexDirection="column">
      <Box as="header" mb={4}>
        <Heading as="h1" size="2xl" textAlign="center" fontWeight="bold" mb={4}>
          Todo App
        </Heading>
      </Box>
      <VStack spacing={4} flex="1">
        <Box as="section" width="100%">
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            mb={2}
            borderColor="black"
            _placeholder={{ color: "black" }}
            _focus={{ borderColor: "black" }}
          />
          <Button onClick={addTodo} width="100%" bg="black" color="white" _hover={{ bg: "gray.800" }}>
            Add Todo
          </Button>
        </Box>
        <Box as="section" width="100%" flex="1" overflowY="auto">
          <List spacing={3}>
            {todos.map((todo, index) => (
              <ListItem key={index} p={2} border="1px solid black" bg="gray.100">
                <Text>{todo}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
      <Box as="footer" mt={4} textAlign="center">
        <Text fontSize="sm">© 2023 Brutalist Todo App</Text>
      </Box>
    </Container>
  );
};

export default Index;