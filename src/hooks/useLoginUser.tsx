import React, { useEffect, useState } from "react"
import UserApi from "../networking/apis/User";
export default () => {
    const [user, setUser] = useState<any>();
    const [isLoading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const login = async (data: { username: string, password: string }) => {
        setLoading(true)
        const res = await UserApi.login(data);
        if (res) {
            setLoading(false)
            setUser(res)
        }
    }

    const getPosts = async () => {
        //  setLoading(true)
        const res = await UserApi.posts(null);
        setPosts(res)
    }
    return {
        user,
        setUser,
        isLoading,
        login,
        posts,
        getPosts
    }
}