import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewFullGame = () => {
  const { id } = useParams();
  const [game, setGame] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGames() {
      try {
        const { data } = await axios.get('https://6516b50209e3260018ca2dff.mockapi.io/items/' + id);
        setGame(data);
      } catch (error) {
        alert('Ошибка при получении игр!');
        navigate('/');
      }
    }
    fetchGames();
  }, []);

  if (!game) {
    return 'Загрузка..';
  }

  return (
    <div>
      <h2>{game.title}</h2>
      <h3> Тут мой id через params{id}</h3>
      <h4>{game.price} </h4>
    </div>
  );
};

export default NewFullGame;
