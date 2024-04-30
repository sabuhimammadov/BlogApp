import { useEffect, useState } from "react"
import { getBlogs } from "../services/articles"

export const UseFetchData = ({
    requestFn,
    dependecy = []
}) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState()
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const allData = await requestFn()
                console.log("allData", allData)
                setData(allData.data)
            } catch (err) {
                console.log("err", err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [...dependecy])

    return { data, loading }
}