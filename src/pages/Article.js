import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

//Components
import Articles from '../components/Articles';

//Pages
import NotFound from "./NotFound";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if(!article) return <NotFound/>
  const otherAtricles = articleContent.filter(article=>article.name!==name);
  return (
    <>
      <h1 className="sm:text-4xl text-xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxedtext-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}

      <h1 className="sm:text-2xl text-xl font-bold my-4 text-color-gray-900">Other Articles</h1>

      <div className="flex flex-wrap -m-4">
            <Articles articles={otherAtricles}/>
      </div>
    </>
  );
};

export default Article;
