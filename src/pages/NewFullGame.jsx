import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const NewFullGame = () => {
	const {id} = useParams();

	// useEffect(() => {
	// 	axios.get('https://6516b50209e3260018ca2dff.mockapi.io/items' + id)
	// }, [])

	return ( 
		<div>
			<h2>Game 1</h2>
			<h3> Тут мой id через params{id}</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam fuga, quod porro placeat iste delectus sunt doloribus quis? Quisquam delectus est culpa. Maiores, adipisci dignissimos. Nobis corporis nemo doloribus?</p>
		</div>
	 );
}
 
export default NewFullGame;