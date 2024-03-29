import { Box, Button, Flex, Grid, GridItem, Img, Input, Text, Image, Divider } from "@chakra-ui/react"
import { FaRegCheckCircle } from "react-icons/fa";
import Features from "./Feature";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
   return (
      <Box>
         <Navbar />
         <Text fontSize={80} marginTop="100px">Market better. Sell faster.</Text>
         <Text fontSize={80} marginTop="-20px">Support smarter</Text>
         <Text fontSize={30} >One platform for all your Marketing, Sales, and Support teams</Text>

         <Box maxW="600px" mx="auto" marginTop="20px">
            <Flex>
               <Input bgColor="white" justifySelf="center" type="text" w="500px" padding='8px' h="50px" placeholder="Your email address" borderRadius={30} />
               <Button colorScheme='teal' size="lg" borderRadius={30}>Get Started</Button>
            </Flex>
         </Box>
         <Box margin="auto" width="80%" marginTop="20px">
            <Img src="https://cdn5.engagebay.com/assets/img/banner-image.svg" size="xl" />
         </Box>
         <Box backgroundImage="https://cdn5.engagebay.com/assets/img/patterns/bg-with-dotted.svg" margin="auto" width="90%"
            height="100px" marginTop="50px">
            <Flex>
               <Box padding="10px">
                  <Img src="https://cdn5.engagebay.com/assets/img/p-logos/neilpatel.png" />
               </Box>
               <Box padding="10px">
                  <Img src="https://cdn5.engagebay.com/assets/img/p-logos/forbs.png" />
               </Box>
               <Box padding="10px">
                  <Img src="https://cdn5.engagebay.com/assets/img/p-logos/inc.png" />
               </Box>
               <Box padding="10px">
                  <Img src="https://cdn5.engagebay.com/assets/img/p-logos/enterpreneur.png" />
               </Box>
               <Box padding="10px">
                  <Img src="https://cdn5.engagebay.com/assets/img/p-logos/techcrunch.png" />
               </Box>
               <Box padding="10px">
                  <Img src="https://cdn5.engagebay.com/assets/img/p-logos/jeffbullas.png" />
               </Box>
               <Box padding="10px">
                  <Img src="https://cdn5.engagebay.com/assets/img/p-logos/business.png" />
               </Box>
            </Flex>

         </Box>

         <Text fontSize={40} marginTop="30px" fontWeight="bold">Single Solution for All Your Activities</Text>
         <Text fontSize={18} color="#677294">Identify new opportunities, convert visitors, deliver customer happiness, and more!</Text>




         <Box margin="auto" w="80%" marginTop="40px">
            <Grid templateColumns='repeat(2, 1fr)' padding="10px">
               <GridItem w='95%' h='500' border="1px solid lightgrey" borderRadius="10px" padding="30px">
                  <Flex>
                     <Box width="60%" marginRight="30px">
                        <Text textAlign="left" marginBottom="20px" fontSize={"18px"} fontWeight={600}>CRM Software</Text>
                        <Text textAlign="left" >Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place</Text>
                     </Box>
                     <Box>
                        <Image boxSize='100px' src="https://cdn5.engagebay.com/assets/img/icons/crm.svg" />

                     </Box>
                  </Flex>
                  <Box>
                     <Divider marginTop="40px" marginBottom="20px" borderColor={"lightgrey"} />
                  </Box>
                  <Text textAlign="left" marginBottom="20px" fontWeight={600} fontSize={"14px"}>POPULAR FEATURES</Text>
                  <Flex>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box><Text marginRight={50} marginBottom="20px">Contact Management</Text>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box>    <Text>Deal Management</Text>

                  </Flex>
                  <Flex>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box> <Text marginRight={50} textAlign="left">Sales Automation</Text>
                     <Box marginRight={"8px"} marginLeft={"28px"}><FaRegCheckCircle color="blue" /></Box>     <Text textAlign="left">Appointment Scheduling</Text>
                  </Flex>
                  <Flex>
                     <Button backgroundColor="#6639B3" color="white" width="35%" _hover="none" marginTop="20px" >Get Started</Button>
                  </Flex>
               </GridItem>
               <GridItem w='95%' h='500' border="1px solid lightgrey" borderRadius="10px" padding="30px" >
                  <Flex>
                     <Box width="60%" marginRight="30px">
                        <Text textAlign="left" marginBottom="20px" fontWeight={600} fontSize={"18px"} >Marketing Automation</Text>
                        <Text textAlign="left" >Save time by automating your marketing processes and sending personalized messages to target audiences</Text>
                     </Box>
                     <Box>
                        <Image boxSize='100px' src="https://cdn5.engagebay.com/assets/img/icons/marketing-automation.svg" />

                     </Box>
                  </Flex>
                  <Box>
                     <Divider marginTop="40px" marginBottom="20px" borderColor={"lightgrey"} />
                  </Box>
                  <Text textAlign="left" marginBottom="20px" fontWeight={600} fontSize={"14px"}>POPULAR FEATURES</Text>
                  <Flex>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box>   <Text marginRight={50} marginBottom="20px">Forms & Landing Pages</Text>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box>    <Text>Email Sequence</Text>

                  </Flex>
                  <Flex>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box>  <Text marginRight={50} textAlign="left">Marketing Automation</Text>
                     <Box marginRight={"8px"} marginLeft={"16px"}><FaRegCheckCircle color="blue" /> </Box>  <Text textAlign="left">Email Template Builder</Text>
                  </Flex>
                  <Flex>
                     <Button backgroundColor="#6639B3" color="white" width="35%" _hover="none" marginTop="20px" >Get Started</Button>
                  </Flex>
               </GridItem>
            </Grid>
         </Box>

         <Box margin="auto" w="80%" marginTop="40px">
            <Grid templateColumns='repeat(2, 1fr)' padding="10px">
               <GridItem w='95%' h='500' border="1px solid lightgrey" borderRadius="10px" padding="30px">
                  <Flex>
                     <Box width="60%" marginRight="30px">
                        <Text textAlign="left" marginBottom="20px" fontWeight={600} fontSize={"18px"} >HelpDesk Software</Text>
                        <Text textAlign="left" >Resolve queries faster and deliver exceptional support to delight your customers</Text>
                     </Box>
                     <Box>
                        <Image boxSize='100px' src="https://cdn5.engagebay.com/assets/img/icons/helpdesk.svg" />

                     </Box>
                  </Flex>
                  <Box>
                     <Divider marginTop="40px" marginBottom="20px" borderColor={"lightgrey"} />
                  </Box>
                  <Text textAlign="left" marginBottom="20px" fontWeight={600} fontSize={"14px"}>POPULAR FEATURES</Text>
                  <Flex>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box>  <Text marginRight={50} marginBottom="20px">Ticket Management</Text>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box>   <Text>Views</Text>

                  </Flex>
                  <Flex>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box>  <Text marginRight={50} textAlign="left">Macro</Text>
                     <Box marginRight={"8px"} marginLeft={"93px"}><FaRegCheckCircle color="blue" />  </Box>   <Text textAlign="left">Tickt Automation</Text>
                  </Flex>
                  <Flex>
                     <Button backgroundColor="#6639B3" color="white" width="35%" _hover="none" marginTop="20px" >Get Started</Button>
                  </Flex>
               </GridItem>
               <GridItem w='95%' h='500' border="1px solid lightgrey" borderRadius="10px" padding="30px" >
                  <Flex>
                     <Box width="60%" marginRight="30px">
                        <Text textAlign="left" marginBottom="20px" fontWeight={600} fontSize={"18px"} >Live Chart Software</Text>
                        <Text textAlign="left" > Boost customer happiness and increase conversions by offering instant help when your customers need it</Text>
                     </Box>
                     <Box>
                        <Image boxSize='100px' src="https://cdn5.engagebay.com/assets/img/icons/livechat.svg" />

                     </Box>
                  </Flex>
                  <Box>
                     <Divider marginTop="40px" marginBottom="20px" borderColor={"lightgrey"} />
                  </Box>
                  <Text textAlign="left" marginBottom="20px" fontWeight={600} fontSize={"14px"}>POPULAR FEATURES</Text>
                  <Flex>
                     <Box marginRight={"8px"}> <FaRegCheckCircle color="blue" /></Box>  <Text marginRight={50} marginBottom="20px">Instant Support</Text>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box>    <Text>Chat Form Customisation</Text>

                  </Flex>
                  <Flex>
                     <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box>  <Text marginRight={50} textAlign="left">Shortcuts</Text>
                     <Box marginRight={"8px"} marginLeft={"40px"}><FaRegCheckCircle color="blue" /> </Box>    <Text textAlign="left">Notifications</Text>
                  </Flex>
                  <Flex>
                     <Button backgroundColor="#6639B3" color="white" width="35%" _hover="none" marginTop="20px" >Get Started</Button>
                  </Flex>
               </GridItem>
            </Grid>
         </Box>
         {/* ///////////////////////////////////////////////////////////////////////////////////// */}
         <Box background="#2C4FBF" marginTop="20px" height="350px" padding="40px">
            <Text marginTop="20px" fontSize={20} color="white">HAPPY CUSTOMERS SHARE GREAT REVIEWS ON G2</Text>
            <Box width="80%" margin="auto" height="150px" marginTop="30px">
               <Flex >
                  <Image height={128} width={99} src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_AsiaPacific_HighPerformer.svg" />

                  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Europe_HighPerformer.svg' alt='Dan Abramov' />
                  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_HighPerformer.svg' />
                  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Small-Business_HighPerformer.svg' />
                  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_MomentumLeader_Leader.svg' />
                  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_HighPerformer.svg' />
                  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Mid-Market_HighPerformer.svg' />
                  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Small-Business_HighPerformer.svg' />
                  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/HelpDesk_EasiestAdmin_EaseOfAdmin.svg' />
                  <Image height={128} width={99} src='https://cdn5.engagebay.com/new/assets/img/Awards-2022/OnlineFormBuilder_FastestImplementation_Small-Business_GoLiveTime.svg' />
               </Flex>
            </Box>
         </Box>
         <Text fontSize={40} fontWeight="bold" marginTop="30px" >Create Your Own Views</Text>
         <Text fontSize={18} color="#677294">From identifying new opportunities to delivering customer happiness</Text>
         <Features />
         <Text fontSize={40} fontWeight="bold" marginTop="30px" >Do It All With EngageBay</Text>
         <Text fontSize={18} color="#677294">Stop paying thousands of dollars to dozens of marketing, sales, and support software. Experience the world's most affordable, unified software. EngageBay's all-in-one CRM software is the most comprehensive solution for your business.</Text>
         <Box margin="auto" w="80%" marginTop="40px">
            <Grid templateColumns='repeat(6, 1fr)' padding="10px" gap="5px">
               <GridItem >
                  <Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%" >
                     <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/automation.svg" />
                     <Text marginTop="10px" >Automations</Text>
                  </Box>
               </GridItem>

               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/calling.svg" />
                  <Text marginTop="10px">Calling</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%" >
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/company-management.svg" />
                  <Text marginTop="10px">Company Management</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/contact-management.svg" />
                  <Text marginTop="10px">Contact Management</Text>

               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%" >
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/deal-management.svg" />
                  <Text marginTop="10px">Deal Management</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%" >
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-broadcast.svg" />
                  <Text marginTop="10px">Email Broadcaste</Text>
               </Box>
               </GridItem>
            </Grid>
         </Box>

         <Box margin="auto" w="80%" marginTop="40px">
            <Grid templateColumns='repeat(6, 1fr)' padding="10px" gap="5px" >
               <GridItem >
                  <Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%" >
                     <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-sequences.svg" />
                     <Text marginTop="10px">Email Sequence</Text>
                  </Box>
               </GridItem>

               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-template-builder.svg" />
                  <Text marginTop="10px">Email Template Builder</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/forms.svg" />
                  <Text marginTop="10px">Forms</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/help-desk.svg" />
                  <Text marginTop="10px">HelpDesk</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/landing-pages.svg" />
                  <Text marginTop="10px"  >Landing Pages</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/live-chat.svg" />
                  <Text marginTop="10px">Live Chat</Text>
               </Box>
               </GridItem>
            </Grid>
         </Box>
         <Box margin="auto" w="80%" marginTop="40px">
            <Grid templateColumns='repeat(6, 1fr)' padding="10px" gap="5px" >
               <GridItem >
                  <Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%" >
                     <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/milestone-tracking.svg" />
                     <Text marginTop="10px">Milestone Tracking</Text>
                  </Box>
               </GridItem>

               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/calendar.svg" />
                  <Text marginTop="10px">Calender</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/products.svg" />
                  <Text marginTop="10px">Products</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/proposal.svg" />
                  <Text marginTop="10px">Proposal</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/push-notifications.svg" />
                  <Text marginTop="10px"  >Push Notification</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/segmentation.svg" />
                  <Text marginTop="10px">Segmentation</Text>
               </Box>
               </GridItem>
            </Grid>
         </Box>
         <Box margin="auto" w="80%" marginTop="40px">
            <Grid templateColumns='repeat(6, 1fr)' padding="10px" gap="5px" >
               <GridItem >
                  <Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%" >
                     <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/site-messaging.svg" />
                     <Text marginTop="10px">Site Messenging</Text>
                  </Box>
               </GridItem>

               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/sms-broadcast.svg" />
                  <Text marginTop="10px">SMS Broadcasting</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/social-posts-scheduling.svg" />
                  <Text marginTop="10px">Social Post Scheduling</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/social-suite.svg" />
                  <Text marginTop="10px">Social Suit </Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/landing-pages.svg" />
                  <Text marginTop="10px"  >Sticky Bars</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/task-management.svg" />
                  <Text marginTop="10px">Task Management</Text>
               </Box>
               </GridItem>
            </Grid>
         </Box>
         <Box margin="auto" w="80%" marginTop="40px">
            <Grid templateColumns='repeat(6, 1fr)' padding="10px" gap="5px" >
               <GridItem >
                  <Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%" >
                     <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/team-management.svg" />
                     <Text marginTop="10px">Team Management</Text>
                  </Box>
               </GridItem>

               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/video-templates.svg" />
                  <Text marginTop="10px">Video Templates </Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/web-analytics.svg" />
                  <Text marginTop="10px">Web Analytics</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/ab-landing-pages.svg" />
                  <Text marginTop="10px">A/B Landing Pages</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/custom-reporting.svg" />
                  <Text marginTop="10px"  >Custome Reporting</Text>
               </Box>
               </GridItem>
               <GridItem><Box border="2px solid transparent" borderRadius="10px" backgroundColor="#f5f7fb" h='190px' alignItems="center" padding="40px" width="95%">
                  <Image boxSize='70px' src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/workflows.svg" />
                  <Text marginTop="10px">Workflows</Text>
               </Box>
               </GridItem>
            </Grid>
         </Box>
         <Box height="420px" backgroundColor=" #f8f9fa !important" padding="120px" marginTop="50px">
            <Text fontSize={30} fontWeight="bold">Simplify Marketing, Sales, & Support with the best free</Text>
            <Text fontSize={28} fontWeight="bold" color="blue">All-In-One CRM software</Text>
            <Box maxW="600px" mx="auto" marginTop="20px">
               <Flex>
                  <Input bgColor="white" justifySelf="center" type="text" w="500px" padding='8px' h="50px" placeholder="Your email address" borderRadius={30} />
                  <Button colorScheme='orange' size="lg" borderRadius={30}>Get Started</Button>
               </Flex>
               <Box margin="auto" width="80%" marginTop="20px">
                  <Flex>
                     <FaRegCheckCircle color="blue" />     <Text marginRight={20} fontWeight="bold">Free for 15 users</Text>
                     <FaRegCheckCircle color="blue" />   <Text fontWeight="bold">No credit card required</Text>
                  </Flex>
               </Box>

            </Box>
         </Box>
         {/* <Footer/> */}
        
      </Box>


   )
}
export default Home