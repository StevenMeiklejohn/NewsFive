import React from 'react';

const Article1 = (props) => {
  if (!props.article) return null;
  return (
    <h3>{props.country.name}</h3>
  );
}

export default Article1;
