import { Box, Flex, Image, Text, Form, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"


function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const getUserdata = localStorage.getItem("userdata")
        console.log(getUserdata)
        const { email, password } = user;
        if (email === "") {
            alert("email field is required")
        }
        else if (!email.includes("@") === "") {
            alert("enter valid email")
        }
        else if (password === "") {
            alert("password field is required")
        }
        else if (password.length < 6) {
            alert("password length greater than six")
        }
        else {
            if (getUserdata && getUserdata.length) {
                const userdata = JSON.parse(getUserdata)
                const userlogin = userdata.filter((el, i) => {
                    return el.email === email && el.password === password
                })
                if (userlogin.length === 0) {
                    alert("detail not vaild")
                }
                else {
                    navigate("/")
                }

            }
        }
    }
    return (
        <Box>
            <Flex>
                <Box width="40%" height="700px" >
                    <Box margin="auto" width="50%" marginTop="80px">
                        <Image width="220px" height="28px" alignItems="center" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png" />
                    </Box>
                    <Text fontSize="40px" marginTop="20px">Login</Text>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel marginLeft="50px" marginTop="40px">Email</FormLabel>
                            <Input type='text' placeholder="Work email" id="email" value={user.email} name="email" onChange={handleChange} width="80%" padding="25px" />
                            <FormLabel marginTop="20px" marginLeft="50px">Password</FormLabel>
                            <Input type='password' placeholder="Password" id="password" value={user.password} name="password" onChange={handleChange} width="80%" padding="25px" />
                        </FormControl>
                        <Button hover="none" marginTop="30px" width="80%" background="#f2603e" color="white" type="submit" padding="25px">LOGIN</Button>
                    </form>
                    <Button hover="none" marginTop="20px" width="80%" background="#007bff" padding="25px" color="white" type="submit">SIGNIN WITH G SUITS</Button>
                    <Text marginTop="25px" fontSize="14px">Forgot Paasword?</Text>
                    <Text fontSize="14px">Don't have an account? <NavLink to={"/signup"}>Sign Up</NavLink> </Text>
                    <Text fontSize="14px">Privacy Policy</Text>
                </Box>
                <Box width="80%" height="700px" backgroundImage="linear-gradient(135deg, #130CB7 10%, #52E5E7 100%)">
                    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" marginLeft="150px" marginTop="20px" width="80%" padding="20px">
                        <Flex>
                            <Box>
                                <Image width="4rem" height="4rem" src="https://cdn5.engagebay.com/img/testimonials/leonard.jpeg" borderRadius="50%"></Image>
                            </Box>
                            <Box width="87%" marginLeft="10px">
                                <Text color="white" textAlign="left" fontSize="13px">I was using ActiveCampaign but the costs were adding up quite quickly. I tried other platforms but the automation sequence offered by ActiveCampaign is not easy to find, until I got Engagebay.</Text>
                                <Text color="white" fontSize="13px" textAlign="right" mt="3px">- Leonardo W, Founder, Wolff Consultoria</Text>
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
export default Login