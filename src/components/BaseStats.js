const BaseStats = ({pokemon}) => {

        return (
            <div className="BaseStats">
                {Object.entries(pokemon.BaseStats).map(([stat, value]) => (
                    <div key={stat} className="d-flex mb-2">
                        <div className="text-secondary w-35">{stat}</div>
                        <div className="mx-3 text-center">{value}</div>
                        <div className="bg-light my-2 rounded-pill w-100"></div>
                    </div>
                ))}
            </div>
        )
}

export default BaseStats;

// PROBLEME IF VALUE IS MORE THAN 99