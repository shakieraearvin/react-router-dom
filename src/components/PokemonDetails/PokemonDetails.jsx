import { useParams } from 'react-router';

const PokemonDetails = (props) => {

    const { pokemonId } = useParams();


    const singlePokemon = props.pokemon.find((poke) => (
        poke._id === Number(pokemonId)
    ));



    return (
        <>
            <h2>{singlePokemon.name}</h2>
            <dl>
                <dt>Weight:</dt>
                <dd>{singlePokemon.weight}</dd>
                <dt>Height:</dt>
                <dd>{singlePokemon.height}</dd>
                <dd></dd>
            </dl>
        </>
    );
};

export default PokemonDetails;
