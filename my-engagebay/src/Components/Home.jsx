import { Box, Button, Flex, Grid, GridItem,Img,Input,Text  } from "@chakra-ui/react"

function Home(){
    return(
<Box>
 <Text fontSize={80} marginTop="120px">Market better. Sell faster.</Text>
 <Text fontSize={80} marginTop="-20px">Support smarter</Text>
 <Text fontSize={30} >One platform for all your Marketing, Sales, and Support teams</Text>

 <Box maxW="600px" mx="auto" marginTop="20px">
        <Flex>
<Input bgColor="white" justifySelf="center" type="text" w="500px"padding='8px' h="50px"placeholder="Your email address" borderRadius={30} />
            <Button  colorScheme='teal' size="lg">Get Started</Button>
                </Flex>
               </Box>
               <Box  margin="auto"border="1px solid red" width="80%" marginTop="20px">
                    <Img src="https://cdn5.engagebay.com/new/assets/img/banner-image.svg" size="xl" />
                </Box>
                <Box backgroundImage="https://cdn5.engagebay.com/new/assets/img/patterns/bg-with-dotted.svg" margin="auto" width="90%" 
                height="100px" marginTop="50px">
                    <Flex>
                        <Box padding="10px">
                            <Img src="https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png"/>
                        </Box>
                        <Box  padding="10px">
                            <Img src="https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png"/>
                        </Box>
                        <Box  padding="10px">
                            <Img src="https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png"/>
                        </Box>
                        <Box  padding="10px">
                            <Img src="https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png"/>
                        </Box>
                        <Box  padding="10px">
                            <Img src="https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png"/>
                        </Box>
                        <Box  padding="10px">
                            <Img src="https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png"/>
                        </Box>
                        <Box  padding="10px">
                            <Img src="https://cdn5.engagebay.com/new/assets/img/p-logos/business.png"/>
                        </Box>
                    </Flex>

                </Box>

                <Text fontSize={40} marginTop="30px" >Single Solution for All Your Activities</Text>
 <Text fontSize={20}>Identify new opportunities, convert visitors, deliver customer happiness, and more!</Text>
 <Box margin="auto" border="1px solid red"w="80%" marginTop="40px">
 <Grid templateColumns='repeat(2, 1fr)'   padding="10px">
  <GridItem w='95%' h='500'  border="1px solid red" >
    <Flex>
    <Box>
        <Text>CRM Software</Text>
        <Text>Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place</Text>
    </Box>
    <Box>
    <Img src="https://cdn5.engagebay.com/new/assets/img/icons/crm.svg"/>
    </Box>
    </Flex>
    
  </GridItem>
  <GridItem w='95%' h='500' bg='blue' />
 
</Grid>
 </Box>
</Box>
        
    
    )
}
export default Home