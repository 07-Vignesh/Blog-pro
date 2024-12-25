"use client"
import * as React from "react"
import { useEffect, useState } from "react";

export default function Post({params}) {
    const {id} = React.use(params);
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/post/'+id)
        .then(res => res.json())
        .then(res => setPost(res))
    },[])


    return <>
            {post && <main className="container mx-auto px-4 py-6">
                <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-500">Published on {post.created_at_formatted}</p>
                <img width={300} height={200} src={post.Image} alt="Post Image" className="my-4" />
                <p>{post.description}</p>
            </main>
            }
    </>
    
            
}