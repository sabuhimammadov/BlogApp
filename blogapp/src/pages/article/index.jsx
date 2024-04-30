import { SimpleGrid, Box, Spinner } from "@chakra-ui/react"
import { Header } from "../../components"
import { BlogCard } from "../../components/BlogCard"
import { getBlogs } from "../../services/articles"
import { useNavigate } from "react-router-dom"
import { UseFetchData } from "../../hooks/useFetchData"
import { SearchBox } from "../../components/SearchBox"
import { useEffect, useState } from "react"

function Article() {
  const naviqate = useNavigate()
  const { loading, data } = UseFetchData({ requestFn: () => getBlogs() })

  const [searchdata, setSearchdata] = useState()
  useEffect(() => {
    setSearchdata(data)
  }, [data])
  // const [data, setData] = useState()
  // const [loading, setLoading] = useState()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)

  //     try {
  //       const allData = await getBlogs()
  //       console.log("allData", allData)
  //       setData(allData.data)
  //     } catch (err) {
  //       console.log("err", err)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])
  const handleSearch = (text) => {
    if(!text.trim()){
      setSearchdata(data)
      return
    }
    console.log("text", text)
    const newFilterData = searchdata.filter((item)=>item.title.toLowerCase().includes (text.toLowerCase()))
    console.log("new",newFilterData)
    setSearchdata(newFilterData)
  }
  return (
    <>
      <Header />
      <Box px={50}  >
        <SearchBox handleSearch={handleSearch} />

      </Box>
      <SimpleGrid columns={2} spacing={10} p="40px">
        {loading &&
          <Box display="flex" justifyContent="center" p="50px">
            <Spinner size="lg" />

          </Box>}

    {searchdata && searchdata?.filter((item, index) => item.id > 100)?.map((item, index) => <BlogCard {...item} key={`item${index}`} onReadMore={() => naviqate("/articles/" + item.id)} />)} 
    {!searchdata && <p>Not Found</p>}
        {/* <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard /> */}

      </SimpleGrid>
    </>

  )
}

export default Article



