import {useState} from 'react'
import FilmList from '../components/FilmList/FilmList'
function Library() {
const [films, setFilms] = useState(()=> JSON.parse(localStorage.getItem('films')) ?? [])
    return(
        <>
        {films ? <FilmList list={films}/> : <h2>You are don*t have a films</h2>}
        </>
    
}