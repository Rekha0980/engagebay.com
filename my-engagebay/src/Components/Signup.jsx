import { Box, Flex, Image, Text, Form, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import { useState } from "react"
import { NavLink } from "react-router-dom"


function Signup() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
const [data,setData]=useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const {name,email,password}=user;
        if(name===""){
            alert("name field is required")
        }
        else if(email===""){
            alert("email field is required")
        }
        else if(!email.includes("@")===""){
            alert("enter valid email")
        }
        else if(password===""){
            alert("password field is required")
        }
        else if(password.length<6){
            alert("password length greater than six")
        }
        else{
            console.log("data")
            localStorage.setItem("userdata",JSON.stringify([...data,user]))
        }
    }
    //console.log(user)
    return (
        <Box>
            <Flex>
                <Box width="40%" height="700px" >
                    <Box margin="auto" width="50%" marginTop="60px">
                        <Image width="220px" height="28px" alignItems="center" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png" />
                    </Box>
                    <Text fontSize="20px" marginTop="20px">Get started for FREE</Text>
                    <form onSubmit={handleSubmit}> 
                        <FormControl>
                            <FormLabel marginLeft="50px" marginTop="40px">Name</FormLabel>
                            <Input type='text' placeholder="Name" id="name" value={user.name} name="name" onChange={handleChange} width="80%" padding="25px" />
                            <FormLabel marginLeft="50px" marginTop="30px">Email</FormLabel>
                            <Input type='text' placeholder="Work email" id="email"value={user.email} name="email" onChange={handleChange} width="80%" padding="25px" />
                            <FormLabel marginTop="20px" marginLeft="50px">Password</FormLabel>
                            <Input type='password' placeholder="Password" id="password" value={user.password} name="password" onChange={handleChange} width="80%" padding="25px" />
                        </FormControl>
                    
                    <Button marginTop="30px" width="80%" background="#f2603e" color="white" type="submit" fontWeight={"10px"} padding="25px">SIGN IN</Button>
                    </form>
                    <Button  marginTop="20px" width="80%" background="#007bff" padding="25px" color="white" fontWeight={"10px"}>SIGN UP WITH G SUITS</Button>
                    <Text marginTop="25px" fontSize="14px">Forgot Paasword?</Text>
                    <Text fontSize="14px">Already have an account .<NavLink to={"/login"}>Sign In</NavLink></Text>
                    <Text fontSize="14px">Privacy Policy</Text>
                </Box>
                <Box width="80%" height="700px" backgroundImage="linear-gradient(135deg, #130CB7 10%, #52E5E7 100%)">
                    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" marginLeft="150px" marginTop="20px" width="80%" padding="20px">
                        <Flex>
                            <Box>
                                <Image width="4rem" height="4rem" src="https://cdn5.engagebay.com/img/testimonials/paul.jpeg" borderRadius="50%"></Image>
                            </Box>
                            <Box width="87%" marginLeft="10px">
                                <Text color="white" textAlign="left" fontSize="13px">I like how they give you access to all these marketing and CRM/sales features in one dashboard. It could easily replace a number of other tools you are using right now.</Text>
                                <Text color="white" fontSize="13px" textAlign="right" mt="3px">- Paul T, eMarketing Strategist, Paul Therond Consulting</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box width="78%" margin="auto" >
                        <Image marginTop="50px" height="480px" width="100%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/login-image.svg"></Image>
                    </Box>

                </Box>
            </Flex>
        </Box>
    )
}
export default Signup