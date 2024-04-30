import { Box, Text, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../constant/router";

export function Header() {
    const naviqate = useNavigate()
    return (

        <Box height="100px" padding="12px" background="teal"
            alignItems="center" display="flex" justifyContent="space-around">

            <Text as="h1" fontSize="4xl" color="white">
                Blog
            </Text>
            <Stack spacing={4} direction='row' align='center'as="ul">
                <Button color='white' size='sm' variant="ghost" onClick={()=>naviqate(ROUTER.HOME)} as="li">
                    Home
                </Button>
                <Button color='white' size='sm' variant="ghost" onClick={()=>naviqate(ROUTER.ARTICLES)}as="li">
                    Articles
                </Button>
                {/* <Button color='white' size='sm' variant="ghost" onClick={()=>naviqate(ROUTER.ABOUT)} as="li">
                    About
                </Button> */}
                <Button color='white' size='sm' variant="ghost" onClick={()=>naviqate(ROUTER.FAQ)}as="li">
                    Faq
                </Button>
                <Button color='white' size='sm' variant="ghost" onClick={()=>naviqate(ROUTER.FAVORITE)}as="li">
                    Favorites
                </Button>
              
            </Stack>
            <Stack spacing={2} direction='row' align='center'as="ul">
            <Button size='md'>
                    Settings
                </Button>
                <Button size='md' onClick={()=>naviqate(ROUTER.CREATE)}>
                    Create
                </Button>
            </Stack>
        </Box>
    )
}