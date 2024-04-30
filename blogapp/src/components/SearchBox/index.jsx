import { Box,Button,Input } from "@chakra-ui/react";
import { useState } from "react";

 export function SearchBox({handleSearch}){
    const [search,setSearch] = useState("")
    const handleChange = ()=>{
        console.log("handle",search)
        handleSearch(search)
    }
    return (
        <Box display="flex" alignItems="center" gap={4} mt={10} mb={10} width="800px">
        <Input value={search} placeholder='Search' ps="8px" width="600px" p={2} onChange={(e)=>setSearch(e.target.value)}/>
        <Button colorScheme='teal' onClick={handleChange}>
          Search
        </Button>
        </Box>
    )
}