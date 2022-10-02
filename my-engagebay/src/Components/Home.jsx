import { Box, Button, Flex, Grid, GridItem,Img,Input,Text,Image ,Divider } from "@chakra-ui/react"
import { FaRegCheckCircle } from "react-icons/fa";

function Home(){
    return(
<Box>
 <Text fontSize={80} marginTop="120px">Market better. Sell faster.</Text>
 <Text fontSize={80} marginTop="-20px">Support smarter</Text>
 <Text fontSize={30} >One platform for all your Marketing, Sales, and Support teams</Text>

 <Box maxW="600px" mx="auto" marginTop="20px">
        <Flex>
<Input bgColor="white" justifySelf="center" type="text" w="500px"padding='8px' h="50px"placeholder="Your email address" borderRadius={30} />
            <Button  colorScheme='teal' size="lg" borderRadius={30}>Get Started</Button>
                </Flex>
               </Box>
               <Box  margin="auto"width="80%" marginTop="20px">
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

                <Text fontSize={40} marginTop="30px" fontWeight="bold">Single Solution for All Your Activities</Text>
 <Text fontSize={20}>Identify new opportunities, convert visitors, deliver customer happiness, and more!</Text>



 
 <Box margin="auto" w="80%" marginTop="40px">
 <Grid templateColumns='repeat(2, 1fr)'   padding="10px">
  <GridItem w='95%' h='500'  border="1px solid grey" borderRadius="10px" padding="30px">
    <Flex>
    <Box width="60%"  marginRight="30px">
        <Text textAlign="left"  marginBottom="20px">CRM Software</Text>
        <Text  textAlign="left" >Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place</Text>
    </Box>
    <Box>
    <Image boxSize='100px'  src="https://cdn5.engagebay.com/new/assets/img/icons/crm.svg" />
   
    </Box>
    </Flex>
    <Box>
    <Divider marginTop="40px" marginBottom="20px" />
    </Box>
    <Text textAlign="left" marginBottom="20px">Popular Feature</Text>
    <Flex>
    <FaRegCheckCircle color="blue"/> <Text marginRight={50} marginBottom="20px">Contact Management</Text>
    <FaRegCheckCircle color="blue"/>     <Text>Deal Management</Text>
        
    </Flex>
    <Flex>
    <FaRegCheckCircle color="blue"/> <Text marginRight={50} textAlign="left">Sales Automation</Text>
    <FaRegCheckCircle color="blue"/>    <Text textAlign="left">Appointment Scheduling</Text>
    </Flex>
   <Flex>
   <Button backgroundColor="#6639B3" color="white" width="35%" _hover="none" marginTop="20px" >Get Started</Button>
   </Flex>
</GridItem>
  <GridItem w='95%' h='500' border="1px solid grey" borderRadius="10px" padding="30px" >
  <Flex>
    <Box width="60%"  marginRight="30px">
        <Text textAlign="left"  marginBottom="20px">Marketing Automation</Text>
        <Text  textAlign="left" >Save time by automating your marketing processes and sending personalized messages to target audiences</Text>
    </Box>
    <Box>
    <Image boxSize='100px'  src="https://cdn5.engagebay.com/new/assets/img/icons/marketing-automation.svg" />
   
    </Box>
    </Flex>
    <Box>
    <Divider marginTop="40px" marginBottom="20px" />
    </Box>
    <Text textAlign="left" marginBottom="20px">Popular Feature</Text>
    <Flex>
    <FaRegCheckCircle color="blue"/>   <Text marginRight={50} marginBottom="20px">Forms & Landing Pages</Text>
    <FaRegCheckCircle color="blue"/>    <Text>Email Sequence</Text>
        
    </Flex>
    <Flex>
    <FaRegCheckCircle color="blue"/>  <Text marginRight={50} textAlign="left">Marketing Automation</Text>
    <FaRegCheckCircle color="blue"/>   <Text textAlign="left">Email Template Builder</Text>
    </Flex>
   <Flex>
   <Button backgroundColor="#6639B3" color="white" width="35%" _hover="none" marginTop="20px" >Get Started</Button>
   </Flex>
</GridItem>
 </Grid>
 </Box>

 <Box margin="auto" w="80%" marginTop="40px">
 <Grid templateColumns='repeat(2, 1fr)'   padding="10px">
  <GridItem w='95%' h='500'  border="1px solid grey" borderRadius="10px" padding="30px">
    <Flex>
    <Box width="60%"  marginRight="30px">
        <Text textAlign="left"  marginBottom="20px">HelpDesk Software</Text>
        <Text  textAlign="left" >Resolve queries faster and deliver exceptional support to delight your customers</Text>
    </Box>
    <Box>
    <Image boxSize='100px'  src="https://cdn5.engagebay.com/new/assets/img/icons/helpdesk.svg" />
   
    </Box>
    </Flex>
    <Box>
    <Divider marginTop="40px" marginBottom="20px" />
    </Box>
    <Text textAlign="left" marginBottom="20px">Popular Feature</Text>
    <Flex>
    <FaRegCheckCircle color="blue"/>  <Text marginRight={50} marginBottom="20px">Ticket Management</Text>
    <FaRegCheckCircle color="blue"/>    <Text>Views</Text>
        
    </Flex>
    <Flex>
    <FaRegCheckCircle color="blue"/>  <Text marginRight={50} textAlign="left">Macro</Text>
    <FaRegCheckCircle color="blue"/>     <Text textAlign="left">Tickt Automation</Text>
    </Flex>
   <Flex>
   <Button backgroundColor="#6639B3" color="white" width="35%" _hover="none" marginTop="20px" >Get Started</Button>
   </Flex>
</GridItem>
  <GridItem w='95%' h='500' border="1px solid grey" borderRadius="10px" padding="30px" >
  <Flex>
    <Box width="60%"  marginRight="30px">
        <Text textAlign="left"  marginBottom="20px">Live Chart Software</Text>
        <Text  textAlign="left" > Boost customer happiness and increase conversions by offering instant help when your customers need it</Text>
    </Box>
    <Box>
    <Image boxSize='100px'  src="https://cdn5.engagebay.com/new/assets/img/icons/livechat.svg" />
   
    </Box>
    </Flex>
    <Box>
    <Divider marginTop="40px" marginBottom="20px" />
    </Box>
    <Text textAlign="left" marginBottom="20px">Popular Feature</Text>
    <Flex>
    <FaRegCheckCircle color="blue"/>  <Text marginRight={50} marginBottom="20px">Instant Support</Text>
    <FaRegCheckCircle color="blue"/>    <Text>Chat Form Customisation</Text>
        
    </Flex>
    <Flex>
    <FaRegCheckCircle color="blue"/>  <Text marginRight={50} textAlign="left">Shortcuts</Text>
    <FaRegCheckCircle color="blue"/>    <Text textAlign="left">Notifications</Text>
    </Flex>
   <Flex>
   <Button backgroundColor="#6639B3" color="white" width="35%" _hover="none" marginTop="20px" >Get Started</Button>
   </Flex>
</GridItem>
 </Grid>
 </Box>
 {/* ///////////////////////////////////////////////////////////////////////////////////// */}
 <Box  background="#2C4FBF" marginTop="20px" height="350px" padding="40px">
    <Text marginTop="20px" fontSize={25} color="white">HAPPY CUSTOMERS SHARE GREAT REVIEWS ON G2</Text>
 <Box width="80%" margin="auto"  height="150px"   marginTop="30px">
 <Flex >
 <Image height={128} width={99} src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_AsiaPacific_HighPerformer.svg" />

  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Europe_HighPerformer.svg' alt='Dan Abramov'/>
  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_HighPerformer.svg' />
  <Image height={128} width={99}  src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Small-Business_HighPerformer.svg' />
  <Image height={128} width={99}  src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_MomentumLeader_Leader.svg'/>
  <Image height={128} width={99}   src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_HighPerformer.svg'  />
  <Image height={128} width={99}  src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Mid-Market_HighPerformer.svg' />
  <Image height={128} width={99}   src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Small-Business_HighPerformer.svg' />
  <Image height={128} width={99}   src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/HelpDesk_EasiestAdmin_EaseOfAdmin.svg' />
  <Image height={128} width={99}  src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/OnlineFormBuilder_FastestImplementation_Small-Business_GoLiveTime.svg' />
</Flex>
 </Box>
 </Box>
 <Text fontSize={40} fontWeight="bold" marginTop="30px" >Create Your Own Views</Text>
 <Text fontSize={20}>From identifying new opportunities to delivering customer happiness</Text>

 <Text fontSize={40} fontWeight="bold" marginTop="30px" >Do It All With EngageBay</Text>
 <Text fontSize={20}>Stop paying thousands of dollars to dozens of marketing, sales, and support software. Experience the world's most affordable, unified software. EngageBay's all-in-one CRM software is the most comprehensive solution for your business.</Text>
<Box margin="auto" w="80%" marginTop="40px">
    <Grid templateColumns='repeat(6, 1fr)'   padding="10px" gap="5px">
        <GridItem >
           <Box border="2px solid transparent" borderRadius="10px"backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%" >
           <Image boxSize='70px'    src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/automation.svg"/>
            <Text marginTop="10px" >Automations</Text>
           </Box>
            </GridItem>
           
        <GridItem><Box  border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/calling.svg"/>
        <Text marginTop="10px">Calling</Text>
        </Box>
           </GridItem>
           <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb"  h='190px' alignItems="center" padding="40px" width="95%" >
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/company-management.svg"/>
        <Text marginTop="10px">Company Management</Text>
        </Box>
           </GridItem>
           <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb"  h='190px' alignItems="center" padding="40px" width="95%">
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/contact-management.svg"/>
        <Text marginTop="10px">Contact Management</Text>
        
        </Box>
           </GridItem>
           <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb"  h='190px' alignItems="center" padding="40px" width="95%" >
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/deal-management.svg"/>
        <Text marginTop="10px">Deal Management</Text>
        </Box>
           </GridItem>
           <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb"  h='190px' alignItems="center" padding="40px" width="95%" >
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-broadcast.svg"/>
        <Text marginTop="10px">Email Broadcaste</Text>
        </Box>
           </GridItem>
           </Grid>
</Box>

<Box margin="auto" w="80%" marginTop="40px">
    <Grid templateColumns='repeat(6, 1fr)'   padding="10px" gap="5px" >
        <GridItem >
           <Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb"  h='190px' alignItems="center" padding="40px" width="95%" >
           <Image boxSize='70px'  border="1px solid orange"  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-sequences.svg"/>
            <Text marginTop="10px">Email Sequence</Text>
           </Box>
            </GridItem>
           
        <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-template-builder.svg"/>
        <Text marginTop="10px">Email Template Builder</Text>
        </Box>
           </GridItem>
           <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb"  h='190px' alignItems="center" padding="40px" width="95%">
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/forms.svg"/>
        <Text marginTop="10px">Forms</Text>
        </Box>
           </GridItem>
           <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb"  h='190px' alignItems="center" padding="40px" width="95%">
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/help-desk.svg"/>
        <Text marginTop="10px">HelpDesk</Text>
        </Box>
           </GridItem>
           <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb"  h='190px' alignItems="center" padding="40px" width="95%">
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/landing-pages.svg"/>
        <Text marginTop="10px"  >Landing Pages</Text>
        </Box>
           </GridItem>
           <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb"  h='190px' alignItems="center" padding="40px" width="95%">
        <Image  boxSize='70px'  src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/live-chat.svg"/>
        <Text marginTop="10px">Live Chat</Text>
        </Box>
           </GridItem>
           </Grid>
</Box>
<Box height="420px" backgroundColor=" #f8f9fa !important" padding="120px" marginTop="50px">
    <Text fontSize={30} fontWeight="bold">Simplify Marketing, Sales, & Support with the best free</Text>
    <Text fontSize={28} fontWeight="bold" color="blue">All-In-One CRM software</Text>
    <Box maxW="600px" mx="auto" marginTop="20px">
        <Flex>
<Input bgColor="white" justifySelf="center" type="text" w="500px"padding='8px' h="50px"placeholder="Your email address" borderRadius={30} />
            <Button  colorScheme='orange' size="lg" borderRadius={30}>Get Started</Button>
                </Flex>
                <Box margin="auto" width="80%"  marginTop="20px">
                <Flex>
                <FaRegCheckCircle color="blue"/>     <Text marginRight={20} fontWeight="bold">Free for 15 users</Text>
                <FaRegCheckCircle color="blue"/>   <Text fontWeight="bold">No credit card required</Text>
                </Flex>
                </Box>
              
               </Box>
</Box>
 
</Box>
        
    
    )
}
export default Home