import axios from 'axios';
import React, { useState } from 'react';

const FormMovies = () => {
  const initialState = { title: '', poster: '', comment: '' };
  const [data, setData] = useState(initialState);
  const [isPost, setIsPost] = useState(false);

  const url = 'https://post-a-form.herokuapp.com/api/movies/';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('done');
    setData(initialState);
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setIsPost(true);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  };

  const handleForm = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Titre : </label>
        <input
          type='text'
          id='title'
          name='title'
          onChange={handleForm}
          value={data.title}
        />

        <label htmlFor='poster'> Lien de l'affiche : </label>
        <input
          type='url'
          id='poster'
          name='poster'
          onChange={handleForm}
          value={data.poster}
        />

        <label htmlFor='comment'> Commentaire : </label>
        <textarea
          type='textarea'
          id='comment'
          name='comment'
          onChange={handleForm}
          value={data.comment}
        />

        <div>
          <input type='submit' value='Envoyer' />
        </div>
      </form>
      {isPost && <p>Votre film a bien été enregistré</p>}
    </div>
  );
};

export default FormMovies;
