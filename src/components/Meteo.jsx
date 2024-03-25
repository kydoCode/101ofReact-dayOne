import { useEffect, useState } from "react"

function Meteo(){
    const [datas, setDatas] = useState([])

    useEffect(() => {
        const fetchMeteo = async () => {
            try {
                const req = await fetch("https://www.prevision-meteo.ch/services/json/brignoles")
                const response = await req.json()
                setDatas([response])
                console.log(datas)
            
            } catch(err) {
                console.error(err)
            }
        }
        fetchMeteo()
    }, [])

    return(
        <>
        {datas.length > 0 ? (
            <>
            <h3>Ville de {datas[0].city_info.name}</h3>
            <p>Conditions météorologiques: {datas[0].current_condition.condition}</p>
            <img src={datas[0].current_condition.icon_big} alt={datas[0].current_condition.condition} />
            </>
            ) : (
                <>
                <p>Loading...</p>
                <p>Les données sont en cours de chargement</p>
                </>
            )
        }
        </>
        // const req = await fetch()
    )
}

export default Meteo