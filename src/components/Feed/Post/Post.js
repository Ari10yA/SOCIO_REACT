import React from 'react';

import Button from '../../Button/Button';
import './Post.css';
import Image from '../../Image/Image';

const post = props => {

  return(
    <article className="post">
    <header className="post__header">
      <h1 className="post__title">{props.title}</h1>

    </header>
    <div className="single-post__image">
          <Image contain imageUrl={'https://socio-rest.onrender.com/' + props.image} />
              </div>
    <div className="post__content">{props.content}</div>
    <h5 className="post__meta">
        by {props.author} on {props.date}
          </h5>
    <div className="post__actions">
      <Button mode="flat" link={props.id}>
        View
      </Button>
      <Button mode="flat" onClick={props.onStartEdit}>
        Edit
      </Button>
      <Button mode="flat" design="danger" onClick={props.onDelete}>
        Delete
      </Button>
    </div>
  </article>
  );
}


  


export default post;
