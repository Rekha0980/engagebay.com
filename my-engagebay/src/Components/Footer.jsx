import { Button,Box,Image,Flex,Text,Input, Divider } from "@chakra-ui/react"
import styles from "./Footer.module.css"
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
          <h3>SUPPORT</h3>
          <p>Contact us</p>
          <p>Shipping</p>
          <p>Return and exchange</p>
        </div>
        <div className={styles.box}>
          <h3>SHOP</h3>
          <p>Mazama</p>
          <p>Best dealer</p>
          <p>Travel</p>
        </div>
        <div className={styles.box}>
          <h3>STAY IN THE LOOP</h3>
          <p>
            Subscribe to the Tanner Goods | Mazama newsletter and save 10% on
            your first order! Plus, receive first access to our very popular
            sample sales.
          </p>
        </div>
      </Box>
      <div className={styles.pay}>
        <img
          src="https://i.ebayimg.com/images/g/TuwAAOSwzppZ6YuT/s-l400.jpg"
          alt="pay"
        />
      </div>
    </Box>
          
          
        
    </Box>
    )
}
export default Footer