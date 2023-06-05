/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../style/detailThreads.css';
import CardThreads from '../components/cardThreads';
import { asyncAddComments, asyncReceiveThreadDetail } from '../states/threadsDetail/action';
import postedAt from '../utils/postAt';
import AddComment from '../components/add-comment';

function detailThreads() {
  const { id } = useParams();
  const {
    threadDetail = null,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onHandleSubmit = ({ content }) => {
    dispatch(asyncAddComments({ content, id }));
  };

  if (!threadDetail) {
    return null;
  }
  const {
    category, createdAt, body, comments, owner, title,
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
          <div className="body__title">
            <h2>{title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
      <div className="detail__comment">
        <h3>{`Koments ${comments.length}`}</h3>
        <AddComment addKoment={onHandleSubmit} />
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
