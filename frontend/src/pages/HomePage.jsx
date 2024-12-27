import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProductStore } from '../store/product';
 
const HomePage = () => {
    const {fetchProducts , products} = useProductStore();

    //For reoload after new product insertion
    useEffect(() =>{
      fetchProducts();
    },[fetchProducts]);
    console.log("products",products);


  return (
     <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🛍️
        </Text>

        {/* For Respnsive */}
        <SimpleGrid
          columns={{
            base:1,
            md:2,
            lg:3
          }}
          spacing={10}
          w={'full'}
           
           >
            
            {products.map((product)=>(
              <ProductCard key={product._id} product={product}/>

            ))}
          </SimpleGrid>
            {products.length===0 && (
                     <Text
                     fontSize='xl' textAlign={"center"} fontWeight='bold' color='grap.500'>
                       NO product found 😥{""}
                      <Link to={"/create"}>
                        <Text as='span' color='blue.500' _hover={{textDecoration:"underline"}}>
                         Create a Product
                        </Text>
                       </Link>
                     </Text>  
            )}
              
      </VStack>
      
     </Container>
  )
}
export default HomePage;