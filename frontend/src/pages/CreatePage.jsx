import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useProductStore } from '../store/product';


const CreatePage = () => {

  const [newProduct, setnewProduct] = useState({
    name:"",
    price:"",
    image:""
   });

   const {createProduct} = useProductStore()

  const handleAddProduct = async()=>{
    const {success,message} = await createProduct(newProduct)
    console.log("Success:",success);
    console.log("Message:",message);
   };
   

  return (
     <Container maxW={"container.sm"}>
      <VStack
      spacing={8}
      >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create new Product
        </Heading>
        <Box 
         w={"full"} bg={useColorModeValue("white","gray.800")}
         p={8} rounded={"lg"} shadow={"md"}
         >
          <VStack sapcing={4}>
            <Input 
            placeholder='Product name'
            name='name'
            value={newProduct.name}
            onChange={(e) => setnewProduct({
              ...newProduct,name:e.target.value
            })}
            /> 
              <Input 
            placeholder='Price'
            name='price'
            type='number'
            value={newProduct.price}
            onChange={(e) => setnewProduct({
              ...newProduct,price: e.target.value
            })}
            /> 
              <Input 
            placeholder='Image URL'
            name='image'
            value={newProduct.image}
            onChange={(e) => setnewProduct({
              ...newProduct,image:e.target.value
            })}
            /> 
            <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>
              Add Product
            </Button>
          </VStack>
         </Box>
      </VStack>
     </Container>
  )
}

export default CreatePage;