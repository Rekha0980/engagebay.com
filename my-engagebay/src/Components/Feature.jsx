
import { TabList, TabPanel, TabPanels, Tabs, Tab, Heading, Box, Text, Flex, Button ,Image} from '@chakra-ui/react';
import React, { useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import "./Features.css"
const Features = () => {

    return (
        <div className='tabs'>
            <Tabs>
                <TabList>
                    <Tab>Marketing Software</Tab>
                    <Tab>Free CRM Features</Tab>
                    <Tab>Sales Software</Tab>
                    <Tab>Help Desk Software</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "64%" }} >
                                <Box width="75%">  <Heading style={{ display: "flex", textAlign: "justify", lineHeight: "50px" }}>Market Your Business Like the World’s Best Companies</Heading>
                                </Box>

                                <p style={{ display: "flex", textAlign: "justify", marginTop: "30px" }}>With our comprehensive set of Marketing tools, including Email Marketing, Marketing Automation, Email Template Builder, Landing Page Builder,
                                    Lead Generation tools, Social Suite & more, your marketing team can take things to the next level.</p>
                                <Text textAlign="left" marginBottom="20px" marginTop={"20px"} fontWeight={600} fontSize={"14px"}>POPULAR MARKETING FEATURES</Text>
                                <Flex>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box><Text marginRight={50} marginBottom="20px">Contact Management</Text>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box>    <Text>Deal Management</Text>

                                </Flex>
                                <Flex>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box> <Text marginRight={50} textAlign="left">Sales Automation</Text>
                                    <Box marginRight={"8px"} marginLeft={"28px"}><FaRegCheckCircle color="blue" /></Box>     <Text textAlign="left">Appointment Scheduling</Text>
                                </Flex>
                                <Flex>
                                    <Button backgroundColor="white" color="#6639B3" borderRadius={"0px"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" width="50%"  _hover="none" marginTop="20px">Explore Marketing Features</Button>
                                </Flex>
                            </div>
                            <div>
                                <Image src="https://cdn5.engagebay.com/assets/img/tabs/home/marketing_software.png" />
                            </div>
                        </div>


                    </TabPanel>
                    <TabPanel>
                    <div style={{ display: "flex" }}>
                            <div style={{ width: "64%" }} >
                                <Box width="90%">  <Heading style={{textAlign: "justify", lineHeight: "50px" }}>Build Lasting Customer Relationships</Heading>
                                </Box>

                                <p style={{ display: "flex", textAlign: "justify", marginTop: "30px" }}>Along with a full stack of software for marketing, sales, and customer service, EngageBay also offers a completely free CRM at its core. While they’re powerful when used individually, they are at their best when used together.</p>
                                <Text textAlign="left" marginBottom="20px" marginTop={"20px"} fontWeight={600} fontSize={"14px"}>POPULAR MARKETING FEATURES</Text>
                                <Flex>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box><Text marginRight={50} marginBottom="20px">Contact Management</Text>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box>    <Text>Deal Management</Text>

                                </Flex>
                                <Flex>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box> <Text marginRight={50} textAlign="left">Sales Automation</Text>
                                    <Box marginRight={"8px"} marginLeft={"28px"}><FaRegCheckCircle color="blue" /></Box>     <Text textAlign="left">Appointment Scheduling</Text>
                                </Flex>
                                <Flex>
                                    <Button backgroundColor="white" color="#6639B3" borderRadius={"0px"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" width="50%"  _hover="none" marginTop="20px">Explore Marketing Features</Button>
                                </Flex>
                            </div>
                            <div>
                                <Image src="https://cdn5.engagebay.com/assets/img/tabs/home/free_crm_features.png" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div style={{ display: "flex" }}>
                            <div style={{ width: "64%" }} >
                                <Box width="75%">  <Heading style={{textAlign: "justify", lineHeight: "50px" }}>Sell Like the Pros</Heading>
                                </Box>

                                <p style={{ display: "flex", textAlign: "justify", marginTop: "30px" }}>With our exhaustive set of Sales tools such as Contact Management, Email Tracking, Telephony, Appointment Scheduling, Project Management, Gamification..</p>
                                <Text textAlign="left" marginBottom="20px" marginTop={"20px"} fontWeight={600} fontSize={"14px"}>POPULAR MARKETING FEATURES</Text>
                                <Flex>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box><Text marginRight={50} marginBottom="20px">Contact Management</Text>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box>    <Text>Deal Management</Text>

                                </Flex>
                                <Flex>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box> <Text marginRight={50} textAlign="left">Sales Automation</Text>
                                    <Box marginRight={"8px"} marginLeft={"28px"}><FaRegCheckCircle color="blue" /></Box>     <Text textAlign="left">Appointment Scheduling</Text>
                                </Flex>
                                <Flex>
                                    <Button backgroundColor="white" color="#6639B3" borderRadius={"0px"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" width="50%"  _hover="none" marginTop="20px">Explore Marketing Features</Button>
                                </Flex>
                            </div>
                            <div>
                                <Image src="https://cdn5.engagebay.com/assets/img/tabs/home/sales_software.png" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div style={{ display: "flex" }}>
                            <div style={{ width: "64%" }} >
                                <Box width="95%">  <Heading style={{textAlign: "justify", lineHeight: "50px" }}>Provide Awesome Support to Your Customers</Heading>
                                </Box>

                                <p style={{ display: "flex", textAlign: "justify", marginTop: "30px" }}>With our seamless stack of Service tools such as Ticketing, Helpdesk, Customer Feedback Forms, Knowledge Base, Canned Responses and your support team can now connect better, resolve faster, and retain your customers for a lifetime.</p>
                                <Text textAlign="left" marginBottom="20px" marginTop={"20px"} fontWeight={600} fontSize={"14px"}>POPULAR MARKETING FEATURES</Text>
                                <Flex>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box><Text marginRight={50} marginBottom="20px">Contact Management</Text>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /> </Box>    <Text>Deal Management</Text>

                                </Flex>
                                <Flex>
                                    <Box marginRight={"8px"}><FaRegCheckCircle color="blue" /></Box> <Text marginRight={50} textAlign="left">Sales Automation</Text>
                                    <Box marginRight={"8px"} marginLeft={"28px"}><FaRegCheckCircle color="blue" /></Box>     <Text textAlign="left">Appointment Scheduling</Text>
                                </Flex>
                                <Flex>
                                    <Button backgroundColor="white" color="#6639B3" borderRadius={"0px"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" width="50%"  _hover="none" marginTop="20px">Explore Marketing Features</Button>
                                </Flex>
                            </div>
                            <div>
                                <Image src="https://cdn5.engagebay.com/assets/img/tabs/home/helpdesk_software.png" />
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>


    )
}


export default Features;