import { Button, Flex, useToast } from "@chakra-ui/react";
import { useMutation } from '@tanstack/react-query'

const Index = () => {
  const toast = useToast()
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("/api/parse/products/csv").then(res => {
        return res.blob();
      }).then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'products.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
    }
  });

  return (
    <Flex flexDir="column" h="100%" minH="500px" w="100%" justify="center" alignItems="center">
      <Button colorScheme="blue" isLoading={mutation.isPending} onClick={() => {
        toast({
          title: 'Парсинг сайта начался',
          status: 'success',
          isClosable: true,
        });
        mutation.mutateAsync?.();
      }
      }>Download CSV Products</Button>
    </Flex>
  );
};

export default Index;