/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../style/detailThreads.css';
import CardThreads from '../components/cardThreads';
import { asyncReceiveThreadDetail } from '../states/threadsDetail/action';
import postedAt from '../utils/postAt';

function detailThreads() {
  const { id } = useParams();
  const {
    threadDetail = null,
    // eslint-disable-next-line no-unused-vars
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  // const onLikeTalk = () => {
  //   // @TODO: dispatch async action to toggle like talk detail
  //   dispatch(asyncToogleLikeTalkDetail());
  // };

  // const onReplyTalk = (text) => {
  //   // @TODO: dispatch async action to add reply talk
  //   dispatch(asyncAddTalk({ text, replyTo: id }));
  // };

  if (!threadDetail) {
    return null;
  }
  const {
    category, createdAt, body, comments, owner,
  } = threadDetail;
  const changeNameOwnerToUser = comments.map((data) => ({
    ...data,
    user: data.owner,
    body: data.content,
  }));
  return (
    <div className="container__detail">
      <div className="detail__post">
        <div className="post__header">
          <div className="header__photo">
            <img src={owner.avatar} alt={owner.name} />
          </div>
          <div className="header__name">
            <h2>{owner.name}</h2>
            <small>{postedAt(createdAt)}</small>
          </div>
          <div className="header__tag">
            <h3>{`#${category}`}</h3>
          </div>
        </div>
        <div className="post__body">
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
      <div className="detail__comment">
        <h3>{`Koments ${comments.length}`}</h3>
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
          {
            changeNameOwnerToUser.map((data) => (
              <CardThreads key={data.id} {...data} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default detailThreads;
