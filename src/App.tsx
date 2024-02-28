import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Index from "./pages";

const queryClient = new QueryClient();

function App() {
  return <>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>
    </ChakraProvider>
  </>
}

export default App
