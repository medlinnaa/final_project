import React from 'react'
import { useState,useEffect } from 'react';
import "../assets/CSS/Novosti.css"
import news from '../news.json'
import Button from './Button';

const Novosti = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [postPerPage, setPostPerPage] = useState(6);
  const idOfLastPost = postPerPage * currentPage;
  const idOfFirstPost = idOfLastPost - postPerPage;
  const nextPage =(number) => setCurrentPage(number);

  useEffect(() => {
    setPost(news);
  }, []);

  let a = post.slice(idOfFirstPost, idOfLastPost);


  return (
    <div className='news-container'>
      <p className='naming'>Главная / <span>Новости</span></p>
      <h2>НОВОСТИ</h2>
      <div className="news-cards">
       {a.map((p) => (
        <div key={p.id} className="card">
          <div className="news-image-part">
            <img src={p.src} alt="" />
            <p>{p.about}</p>
            <div className="date-part">
              <span>{p.date}</span>
            </div>
          </div>
          <div className="news-text">
            <p>{p.info}</p>
             <a href="#">Читать больше<i class="fa-solid fa-chevron-right"></i></a>
          </div>
        </div>
      ))}
      </div>

      <Button postPerPage={postPerPage} allPosts={post.length} nextPage={nextPage}/>
    </div>
  )
}

export default Novosti