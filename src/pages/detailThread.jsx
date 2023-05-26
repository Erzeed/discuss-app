import React from 'react';
import '../style/detailThreads.css';
import CardThreads from '../components/cardThreads';

function detailThreads() {
  return (
    <div className="container__detail">
      <div className="detail__post">
        <div className="post__header">
          <div className="header__photo">
            <img src="https://ui-avatars.com/api/?background=random&name=reza&rounded=true" alt="" />
          </div>
          <div className="header__name">
            <h2>Feizal Reza</h2>
            <small>1 jam yang lalu</small>
          </div>
          <div className="header__tag">
            <h3>Populer</h3>
          </div>
        </div>
        <div className="post__body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti odio debitis
            alias nobis! Dolorum culpa obcaecati doloremque aliquam, earum cupiditate maxime
            accusamus. Dolores vel eligendi tempora harum quod alias.
          </p>
        </div>
      </div>
      <div className="detail__comment">
        <h3>Komentar 10</h3>
        <div className="input__comment">
          <form action="">
            <textarea name="comment" id="commment" placeholder="Berikan Komentar" />
          </form>
          <div className="btn__input">
            <button className="cancel" type="submit">Batal</button>
            <button className="post" type="submit">Komentar</button>
          </div>
        </div>
        <div className="comment__container">
          <CardThreads tag={false} />
          <CardThreads tag={false} />
        </div>
      </div>
    </div>
  );
}

export default detailThreads;
