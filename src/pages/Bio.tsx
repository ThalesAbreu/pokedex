import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});


export function Bio() {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState({} as {
    name:string, 
    order: number, 
    types:{slot: number, type:{name:string,url: string}}[],
    sprites:{front_default:string}
  })
  useEffect(()=>{ 
    const fetchData = async (route: string = '')=>{
      const response = await api.get(route);
      console.log(response)
      setPokemon(response.data)
    }
    fetchData(`/pokemon-form/${id}`).catch(console.error)
  },[])

  // Tentando colocar habilidades
  const [abilitys, setAbilitys] = useState({} as {
    base_experience: number

  })
  useEffect(()=>{ 
    const fetchData = async (route: string = '')=>{
      const response = await api.get(route);
      console.log(response)
      setAbilitys(response.data)
    }
    fetchData(`/pokemon/${id}`).catch(console.error)
  },[])


return(
  <div className='flex flex-col p-9 m-9 items-center'>
    <div className='border-2 w-96 items-center flex flex-col gap-1 p-3 bg-white rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
    <div className='capitalize'>
      <p>{pokemon.name}</p>
    </div>

    <div className='justify-center'>
      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
    </div>

    <div className='justify-center'>
      <span>Experiencia base {abilitys.base_experience}</span>
      {/* Tentando colocar habilidades */}
      {/* <ul>
        {abilitys?.abilities?.map(y=> (
          <div>
            <li>{abilitys.abilities.ability.name}</li>
          </div>
        ))}
      </ul> */}
    </div>

    <div className='justify-center capitalize'>
      <span>Tipagem</span>
        <ul>
          {pokemon?.types?.map(x=>(
            <div key={x.type.name}>
              <li>{x.slot} - {x.type.name}</li>
            </div>
          ))}
        </ul>
    </div>
  </div>
  </div>
  )
}


// {
//   "form_name": "",
//   "form_names": [],
//   "form_order": 1,
//   "id": 1,
//   "is_battle_only": false,
//   "is_default": true,
//   "is_mega": false,
//   "name": "bulbasaur",
//   "names": [],
//   "order": 1,
//   "pokemon": {
//       "name": "bulbasaur",
//       "url": "https://pokeapi.co/api/v2/pokemon/1/"
//   },
//   "sprites": {
//       "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
//       "back_female": null,
//       "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
//       "back_shiny_female": null,
//       "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//       "front_female": null,
//       "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
//       "front_shiny_female": null
//   },
//   "types": [
//       {
//           "slot": 1,
//           "type": {
//               "name": "grass",
//               "url": "https://pokeapi.co/api/v2/type/12/"
//           }
//       },
//       {
//           "slot": 2,
//           "type": {
//               "name": "poison",
//               "url": "https://pokeapi.co/api/v2/type/4/"
//           }
//       }
//   ],
//   "version_group": {
//       "name": "red-blue",
//       "url": "https://pokeapi.co/api/v2/version-group/1/"
//   }
// }