import React from 'react';
import '../style/cardThreads.css';
// import { useNavigate } from 'react-router-dom';
import likeImg from '../asset/icons/upvote.png';
import unLikeImg from '../asset/icons/downvote.png';

function cardThreads({ tag }) {
  // const navigate = useNavigate();
  return (
    <div className="card__container">
      <div className="card_threads">
        <div className="card__header">
          <div className="header__img">
            <img
              src="https://ui-avatars.com/api/?background=random&name=reza&rounded=true"
              alt=""
            />
            <p>Feizal Reza</p>
          </div>
          <div className="header__time">
            <p>10 menit yang lalu</p>
          </div>
        </div>
        <div className="card__body">
          <div className="body__title">
            <h2>
              <a href="/detailthreads/1">Saya Judul</a>
            </h2>
          </div>
          <div className="body__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              necessitatibus!
            </p>
          </div>
        </div>
        <div className="card__footer">
          <div className="footer__button">
            <div className="likeBtn">
              <img src={likeImg} alt="like" />
              <p>0</p>
            </div>
            <div className="unlikeBtn">
              <img src={unLikeImg} alt="unlike" />
              <p>0</p>
            </div>
          </div>
          <div className={`footer__tag ${tag}`}>
            <p>#populer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cardThreads;
