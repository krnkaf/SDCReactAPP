import React, { useEffect, useState } from "react";

function PostComponent(props) {

    const [post,setPost]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            setPost(json);
        })
    },[])

    return (
        <>
            <div className="card">
                {post.map(p=>(
                    <div className="card-body" key={p.id}>
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.body}</p>
                    
                    </div>
                ))}

            </div>
        </>
    );
}

export default PostComponent;