/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../style/cardThreads.css';
// import { useNavigate } from 'react-router-dom';
import likeImg from '../asset/icons/upvote.png';
import unLikeImg from '../asset/icons/downvote.png';
import postedAt from '../utils/postAt';

function cardThreads({
  id, title, category, user, upVotesBy, downVotesBy, createdAt, body,
}) {
  function cutTextWithDots(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    const cutText = text.slice(0, maxLength - 3);
    return `${cutText}...`;
  }

  return (
    <div className="card__container">
      <div className="card_threads">
        <div className="card__header">
          <div className="header__img">
            <img
              src={user.avatar}
              alt={user.name}
            />
            <p>{user.name}</p>
          </div>
          <div className="header__time">
            <p>{postedAt(createdAt)}</p>
          </div>
        </div>
        <div className="card__body">
          <div className="body__title">
            <h2>
              <a href={`/detailthreads/${id}`}>{title}</a>
            </h2>
          </div>
          <div className="body__content">
            <div dangerouslySetInnerHTML={{ __html: cutTextWithDots(body, 350) }} />
          </div>
        </div>
        <div className="card__footer">
          <div className="footer__button">
            <div className="likeBtn">
              <img src={likeImg} alt="like" />
              <p>{upVotesBy.length}</p>
            </div>
            <div className="unlikeBtn">
              <img src={unLikeImg} alt="unlike" />
              <p>{downVotesBy.length}</p>
            </div>
          </div>
          <div className={`footer__tag ${category}`}>
            <p>{category === undefined ? '' : `#${category}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cardThreads;
