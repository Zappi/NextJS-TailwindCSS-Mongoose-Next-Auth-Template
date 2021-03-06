import Link from "next/link"

const AuthenticatedHome = ({ pets }) => {

    return (
        <>
            {PageTitle}
            {/* Create a card for each pet */}
            {pets.map((pet) => (
                <div key={pet._id}>
                    {/* <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6"> */}

                    <div className="card">
                        <img src={pet.image_url} />
                        <h5 className="pet-name">{pet.name}</h5>
                        <div className="main-content">
                            <p className="pet-name">{pet.name}</p>
                            <p className="owner">Owner: {pet.owner_name}</p>

                            {/* Extra Pet Info: Likes and Dislikes */}
                            <div className="likes info">
                                <p className="label">Likes</p>
                                <ul>
                                    {pet.likes.map((data, index) => (
                                        <li key={index}>{data} </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="dislikes info">
                                <p className="label">Dislikes</p>
                                <ul>
                                    {pet.dislikes.map((data, index) => (
                                        <li key={index}>{data} </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="btn-container">
                                <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
                                    <button className="btn edit">Edit</button>
                                </Link>
                                <Link href="/[id]" as={`/${pet._id}`}>
                                    <button className="btn view">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

const PageTitle = <div>
    <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">Pet Management</h1>
    </div>
</div>

export default AuthenticatedHome