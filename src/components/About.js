import React from 'react';
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Tag,
    Image,
    useColorMode,
    Avatar,
    Grid,
    Skeleton,
    AspectRatio
} from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { MdAssignment } from "react-icons/md";
// import mbn_img from '../assets/images/Projects/MedBaseNet.png'
import mbn_img from '../assets/images/Projects/MedBaseNet02.png'
// import ledger_img from '../assets/images/Projects/ledger.png'
import ledger_img from '../assets/images/Projects/ledger02.png'
import VGD from '../assets/images/vgd.png';
import LDRP from '../assets/images/ldrp.png'
import TCS from '../assets/images/tcs.jpg'
import cache from '../assets/images/cache.png'
import btb from '../assets/images/btb.png'


function Company({
    title,
    role,
    skills,
    period,
    logo,
    colorMode,
    alt,
    isEducation = false
}) {
    return (
        <Box
            paddingX={4}
            paddingY={5}
            _hover={{ shadow: 'md' }}
            borderColor={`mode.${colorMode}.border`}
            backgroundColor={`mode.${colorMode}.cardBG`}
            position="relative"
            rounded="md"
        >
            <Flex justifyContent="space-between">
                <Flex>
                    <Image
                        rounded="full"
                        width={{
                            sm: '4rem',
                            md: '14'
                        }}
                        height={{
                            sm: isEducation ? '4rem' : 'auto',
                            md: 'auto'
                        }}
                        objectFit="cover"
                        src={logo}
                        alt={alt}
                    />
                    <Stack spacing={2} pl={3}>
                        <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
                            {title}
                        </Heading>
                        <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
                            {role}
                            <Text
                                display={['block', 'none', 'none', 'none']}
                                fontSize={14}
                                color={`mode.${colorMode}.career.subtext`}
                            >
                                {period}
                            </Text>
                        </Heading>
                    </Stack>
                </Flex>
                <Stack display={['none', 'flex', 'flex', 'flex']}>
                    <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
                        {period}
                    </Text>
                </Stack>
            </Flex>
            <Stack spacing={2} mt={3} isInline alignItems="center">
                {skills.split(',').map(skill => (
                    <Tag
                        size="sm"
                        padding="0 3px"
                        key={skill}
                        color="#4299E1"
                        fontWeight="bold"
                        // color={`mode.${colorMode}.career.subtext`}
                        bgColor={`mode.${colorMode}.career.tagBG`}
                    >
                        {skill}
                    </Tag>
                ))}
            </Stack>
        </Box>
    );
}


function Project({ title, desc, tech, colorMode, image_url }) {
    return (
        <Stack marginBottom={3}>
            <Heading as="h4" size="md" color={`mode.${colorMode}.career.text`}>
                <Flex alignItems="center">
                    <Text as="span" color={`mode.${colorMode}.career.text`}>
                        {title}
                    </Text>
                </Flex>
            </Heading>
            <Grid
                // templateColumns="repeat(2, 1fr)"
                gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
                gap={2}
                p={5}
                _hover={{ shadow: 'md' }}
                // borderWidth="1px"
                // borderColor={`mode.${colorMode}.border`}
                backgroundColor={`mode.${colorMode}.cardBG`}
                position="relative"
                rounded="md"
            >
                <Flex w="100%" h="100%" alignItems="center">
                    <AspectRatio ratio={1.85 / 1} w="100%">
                        <Image
                            rounded="md"
                            src={image_url ? image_url : 'https://bit.ly/2k1H1t6'}
                            fallback={<Skeleton />}
                            objectFit="cover"
                        />
                    </AspectRatio>
                </Flex>
                <Box w="100%">
                    <Stack mt={2} pl={[0, 4, 4, 4]}>
                        <Text
                            // fontSize=""
                            fontWeight="semibold"
                            lineHeight="short"
                            color={`mode.${colorMode}.subtext`}
                        >
                            {desc}
                        </Text>
                        <Stack isInline>
                            {tech.split(',').map(tag => (
                                <Tag
                                    size="sm"
                                    padding="0 3px"
                                    key={tag}
                                    color="#4299E1"
                                    fontWeight="bold"
                                    // color={`mode.${colorMode}.career.subtext`}
                                    bgColor={`mode.${colorMode}.career.tagBG`}
                                >
                                    {tag}
                                </Tag>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            </Grid>
        </Stack>
    );
}
const About = () => {
    const { colorMode } = useColorMode();
    const companies = [
        {
            title: 'Tata Consultancy Services',
            alt: 'TCS image',
            role: 'Campus Ambassador',
            skills: 'Community Management, Teamwork, Public Speaking',
            period: 'April 2021 - April 2022',
            logo: TCS
        },
        {
            title: 'VGD Technologies',
            alt: 'VGD image',
            role: 'Intern',
            skills: 'Javascript, ReactJS, Python, Docker, Hyperledger Fabric',
            period: 'January 2022 - March 2022',
            logo: VGD
        },
    ];
    const projects = [
        {
            title: 'LedgerX - Provenance for anything',
            desc: `LedgerX is a multi-application network that holds the digital provenance of the tangible and non-tangible assets on the secure, scalable blockchain layer.`,
            tech: `React JS, Node JS, JavaScript, Hyperledger Fabric`,
            image_url: ledger_img
        },
        {
            title: 'MedBaseNet - Streamlining Health Data',
            desc: `MedBaseNet is a platform that focuses on a solution to manage, exchange and scale patient health data while preserving privacy and transparency.`,
            tech: 'Python, Flask, JavaScript, Hyperledger Fabric',
            image_url: mbn_img
        },
    ];
    return (
        <Stack
            as="main"
            padding="1.5rem"
            color="#2D3748"
            backgroundColor={`mode.${colorMode}.background`}
            marginLeft="auto"
            marginRight="auto"
            maxWidth="48rem"
            paddingTop="3rem"
        >
            <Stack spacing={2} marginBottom={8}>
                <Heading color={`mode.${colorMode}.text`} display="flex">
                    Hello, I'm Ashutosh{' '}
                </Heading>
                <Stack as="flex" flexDirection="row" alignItems="center">
                    <Box>
                        <Text color={`mode.${colorMode}.subtext`}>
                            I am a Software developer from INDIA
                        </Text>
                    </Box>
                    <Box mb="4">
                        <Avatar
                            ml="2"
                            size="sm"
                            borderRadius="0"
                            backgroundColor="transparent"
                            name="India Flag"
                        // src="https://www.flaticon.com/premium-icon/icons/svg/1863/1863138.svg"
                        // src="https://thumbs.dreamstime.com/b/stock-vector-india-flag-icon-png-128934207.jpg" 
                        />
                    </Box>
                </Stack>
                <Text color={`mode.${colorMode}.subtext`}>
                    You have found my digital space. I am passionate about solving complex real-world problems.
                </Text>
            </Stack>
            <Stack spacing={4} marginBottom={8}>
                <Heading color={`mode.${colorMode}.text`}>Skills</Heading>
                <Stack
                    padding={4}
                    borderLeft="4px solid"
                    borderColor={`mode.${colorMode}.skills.border`}
                    color={`mode.${colorMode}.career.subtext`}
                    _hover={{ shadow: 'md' }}
                    backgroundColor={`mode.${colorMode}.cardBG`}
                    rounded="md"
                    fontWeight="bold"
                >
                    <Text>JavaScript, Python, Git, MySQL, C, HTML/CSS</Text>
                    <Text>React.js, Node.js, Flask, Hyperledger, Docker, AWS</Text>
                    <Text>VS Code, Discord, Linux</Text>
                    {/* <Text>Community management, Cross-functional communication, Collaborative</Text> */}
                </Stack>
            </Stack>
            <Stack spacing={4} marginBottom={8}>
                <Heading color={`mode.${colorMode}.career.text`}>
                    <Flex alignItems="center">
                        <Text as="span" color={`mode.${colorMode}.career.text`}>
                            Career
                        </Text>
                        <Stack pl={3}>
                            <Box
                                as={BsFillBriefcaseFill}
                                size="25px"
                                color={`mode.${colorMode}.career.subtext`}
                            />
                        </Stack>
                    </Flex>
                </Heading>
                {companies.map((company, index) => (
                    <Company
                        key={index}
                        title={company.title}
                        role={company.role}
                        skills={company.skills}
                        period={company.period}
                        logo={company.logo}
                        colorMode={colorMode}
                    />
                ))}
            </Stack>
            <Stack spacing={4} marginBottom={8}>
                <Heading color={`mode.${colorMode}.career.text`}>
                    <Flex alignItems="center">
                        <Text as="span" color={`mode.${colorMode}.career.text`}>
                            Projects
                        </Text>
                        <Stack pl={3}>
                            <Box
                                as={MdAssignment}
                                size="25px"
                                color={`mode.${colorMode}.career.subtext`}
                            />
                        </Stack>
                    </Flex>
                </Heading>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        desc={project.desc}
                        tech={project.tech}
                        image_url={project.image_url}
                        colorMode={colorMode}
                    />
                ))}
            </Stack>
            <Stack spacing={4} marginBottom={8}>
                <Heading color={`mode.${colorMode}.career.text`}>
                    <Flex alignItems="center">
                        <Text as="span" color={`mode.${colorMode}.career.text`}>
                            Position of Responsibility
                        </Text>
                        {/* <Stack pl={3}>
                            <Box
                                as={MdAssignment}
                                size="25px"
                                color={`mode.${colorMode}.career.subtext`}
                            />
                        </Stack> */}
                    </Flex>
                </Heading>
                <Company
                    title="Break The Barrier - Hackathon"
                    alt="LDRP image"
                    role="Team Logistic"
                    skills="Communication, Teamwork , Community Building"
                    period="January 2022 - August 2022"
                    logo={btb}
                    colorMode={colorMode}
                    isEducation={true}
                />
                <Company
                    title="Student Council"
                    alt="LDRP image"
                    role="Logistic Head"
                    skills="Communication, Teamwork, Community Building"
                    period="September 2019 - April 2022"
                    logo={cache}
                    colorMode={colorMode}
                    isEducation={true}
                />
            </Stack>
            <Stack spacing={4}>
                <Heading>
                    <Flex alignItems="center">
                        <Text as="span" color={`mode.${colorMode}.career.text`}>
                            Education
                        </Text>
                        <Stack pl={3}>
                            <Box
                                as={FaGraduationCap}
                                // size="25px"
                                color={`mode.${colorMode}.career.subtext`}
                            />
                        </Stack>
                    </Flex>
                </Heading>
                <Company
                    title="LDRP Institute of Technology and Research"
                    alt="LDRP image"
                    role="Bachelor's Degree in Computer Science"
                    skills="Student Council - Logistic head, Community Building"
                    period="August 2018 - April 2022"
                    logo={LDRP}
                    colorMode={colorMode}
                    isEducation={true}
                />
            </Stack>
        </Stack>
    );
};

export default About;