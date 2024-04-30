import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react"
import { Header } from "../../../components"
import { useParams } from "react-router-dom"
import { UseFetchData } from "../../../hooks/useFetchData"
import { getBlogId } from "../../../services/articles"
import { shortText } from "../../../utils/shortText"
import { CalcDay } from "../../../utils/CalcDay"

function Details() {
  const { id } = useParams()
  const { data, loading } = UseFetchData({ requestFn: () => getBlogId(id), dependecy: [id] })
  console.log("data", data)
  return (
    <>
      <Header />

      <SimpleGrid columns={2} spacing={10} p="60px">

        <Box width="700px" ms="80px">
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={data?.cover_url}
            alt='Caffe Latte'
            me="20px"
          />
        </Box>
        <Box width="500px" color="black">
          <Text py='2'>
          {CalcDay(Number(data?.created))} 

          </Text>
          <Text py='2' >
            {data?.title}
          </Text>
          <Text py='2'>
            {shortText(data?.desc, 60)}

          </Text>
        </Box>


      </SimpleGrid>
    </>

  )
}

export default Details



