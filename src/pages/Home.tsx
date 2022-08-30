// import api from "../services/api";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});
export function Home() {
  const [Offset, SetOffset] = useState(0)
  const [pokemons, setPokemon] = useState([])
  useEffect(()=>{ 
    const fetchData = async (route: string = '')=>{
      const response = await api.get(route)
      console.log(response.data)
      setPokemon(response.data.results)
    }
    fetchData(`/pokemon-form/?limit=151&offset=${Offset}`).catch(console.error)
  },[Offset])
  function Next() {
    let newValue = Offset+20
    //if maior que zero e menor que maximo
      SetOffset(newValue)

  }
  return (
    <div className='flex-1 bg-blur min-h-screen bg-cover bg-no-repeat flex-col items-center'>
      
        <div className=' flex items-center justify-center'>
          <h1 className='text-2xl'>
            Pokemons primeira geração
          </h1>
        </div>
      <div className='flex p-9 m-9 '>
        <div className='justify-between flex flex-wrap'>
          {pokemons.map((pokemon: {name: string, url: string},index) => (
            <div className="items-center flex-1 justify-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 capitalize" 
            key={pokemon.name}>
              <Link to={`/Bio/${index+1}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {pokemon.name}
                  </h5>
              </Link>
              <img 
                className=''
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} 
                alt={pokemon.name} 
              />
            </div>
          ))}
          </div>
        </div>
        <div>
          <button onClick={Next}>Proximo</button>
        </div>
        
    </div>
  )
}
// https://flowbite.com/docs/components/card/