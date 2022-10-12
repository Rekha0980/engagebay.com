import { Button,Box,Image,Flex,Text,Input, Divider } from "@chakra-ui/react"
import styles from "./Footer.module.css"
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import {TiSocialTwitter} from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
function Footer(){
    return(
    
        <Box className={styles.main}>
            <Flex>
            <Box marginLeft="180px">
                <Image width="90%" height="400px"src="https://cdn5.engagebay.com/new/assets/img/cta-img.svg" />
            </Box>
            <Box  >
            <Text fontSize="30px" textAlign="left" color="white" marginTop="30px" marginLeft="10px">Get Started</Text>
            <Flex>
                <Box>
                <Input placeholder='Name' width="90%" marginTop="80px" marginBottom="30px"/>
            <Input placeholder='Website URL' width="90%" />
                </Box>
               
                
           <Box>
           <Input placeholder='Username' width="80%" marginTop="80px" marginBottom="30px"/>
            <Input placeholder='Password' width="80%"/>
           
           </Box>
           </Flex>
           <Flex>
           <Button backgroundColor="#FF7242" marginRight="10px" marginTop="40px" color="white" marginLeft="20px">SIGNUP FOR FREE</Button>
           <Button marginTop="40px">SCHEDULE A CALL</Button>
           </Flex>
          
            </Box>
            </Flex>
            <Box>
      <Box className={styles.cont}>
        <div className={styles.box}>
          <h3>Attract Web Visitors</h3>
          <p>Email Marketing</p>
          <p>Email Templates</p>
          <p>Email Broadcast</p>
          <p>Double Opt-In Email</p>
          <p>Autoresponder Email</p>
          <p>Email A/B Testing</p>
          <p>RSS-to-Email</p>
        </div>
        <div className={styles.box}>
          <h3>Integrations</h3>
          <p>Zapier Integration</p>
          <p>Xero Integration</p>
          <p>Mailgun Integration</p>
          <p>Mandrill Integration</p>
          <p>Postmark Integration</p>
          <p>Sendgrid Integration</p>
          <p>PieSync Integration</p>
        </div>
        <div className={styles.box}>
          <h3>Alternatives</h3>
          <p> Comparisons </p>
          <p>Infusionsoft Alternative</p>
          <p>Drip Alternative</p>
          <p>ActiveCampaign Alternative</p>
          <p>Insightly Alternative</p>
          <p>Aweber Alternative</p>
          <p>HubSpot Alternative</p>
        </div>
        <div className={styles.box}>
          <h3>Solutions</h3>
          <p>Wordpress Plugin</p>
          <p>Email Tracker</p>
          <p>Real Estate CRM</p>
          <p>CRM for Non-profits</p>
          <p>Call Center CRM</p>
          <p>Cloud CRM</p>
          <p>Developers</p>
        </div>
        <div className={styles.box}>
          <h3>Sales & Engage Prospects</h3>
          <p>Email Sequences</p>
          <p>Web Forms</p>
          <p>Landing Pages</p>
          <p>Marketing Automation</p>
          <p>Push Notification</p>
          <p>Video Marketing Templates</p>
          <p>Influncers</p>
        </div>
      </Box>
     </Box>
    
        <Box className={styles.last}>
          <Flex>
            <Box className={styles.box1}>
              <Image  boxSize='100px' width="40%"src="https://cdn5.engagebay.com/new/assets/img/engagebay-logo-white.svg"/>
              <Text textAlign="left" marginTop="-24px" color="white" marginBottom="16px">One platform for all your Marketing, Sales, and Support teams.</Text>
              <Flex>
                <Box marginRight="20px"> <FaFacebookSquare  color="white" width="30%"/></Box>
                <Box marginRight="20px">  <FaYoutube color="white"/></Box>
                <Box marginRight="20px">  <TiSocialTwitter color="white"/></Box>
                <Box marginRight="20px"><IoLogoLinkedin color="white"/></Box>
                <Box><Text color="white" fontSize="xs">Legal | Terms of Service | Privacy Policy</Text></Box>
          </Flex>
            </Box>
            <Box className={styles.box1}>
              <Text textAlign="left"  fontSize='xs' color="white" marginTop="30px">EngageBay Inc.,1007 North Orange Street 4th Floor #180 Wilmington, DE 19801</Text>
              <Text textAlign="left" fontSize='xs'color="white">support@engagebay.com , +1.(877).509.3570</Text>
              <Text textAlign="left" fontSize='xs'color="white">© EngageBay 2022. All Rights Reserved.</Text>
            
            </Box>
          </Flex>
        </Box>
           </Box>
    )
}
export default Footer