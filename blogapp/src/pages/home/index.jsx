import { Box, Button, Text,Image } from "@chakra-ui/react"
import { Header } from "../../components"
import { useNavigate } from "react-router-dom"
import { ROUTER } from "../../constant/router"

function Home(){
    const naviqate = useNavigate()
return (
    <>
    <Header/>
    <Box display="flex" justifyContent="space-around" p="40px" alignItems="center">
        <Box width="600px">
            <Text bgClip="text" fontSize="5xl"fontWeight="extrabold" color="black" mb="16px">
                Welcome To Blog App
            </Text>
            <Text bgClip="text" fontSize="2xl" fontWeight="medium" color="black" mb="16px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque unde exercitationem assumenda itaque? Rerum sed, iste accusantium qui magni cum fuga obcaecati minima doloremque eveniet voluptatibus non est. Aut.
            </Text>
            <Button colorScheme='teal' variant='solid' onClick={()=>naviqate(ROUTER.ARTICLES)}>Get started</Button>
        </Box>
        <Box>
            <Image src="https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-working-on-article-5691583-4759515.png"/>
        </Box>
    </Box>
</>

)
}

export default Home



