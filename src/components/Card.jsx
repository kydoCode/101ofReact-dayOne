function Card(props) { {/* Props est un objet qu'on lui envoie */}
    return(
        <article>
            <h2>{props.title}</h2> {/* On créé un Props pour Card Title*/}
        </article>
    )
}

export default Card