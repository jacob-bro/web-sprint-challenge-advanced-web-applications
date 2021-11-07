import React, { useEffect, useState } from "react";
import { fetcharticles } from "./fetch";

const articleService = ()=> {
    const {articles, setArticles} = useState([])

    useEffect(() => {
      fetcharticles()
      .then((res) => {
         setArticles(res.data);
      })
      .catch((err) => console.log(err));
    }, [])

    return(articles);
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.