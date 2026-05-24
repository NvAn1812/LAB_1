import React, { useState } from 'react';
import { orchids } from '../ListOfOrchids/ListOfOrchids';
import './Orchid.css';
import { toast } from 'react-hot-toast';

export default function Orchids() {

    const [orchidProfile, setOrchidProfile] = useState({
        id: 0,
        name: "",
        rating: 0,
        image: "",
    })
    // update new orchid
    const [updateOrchid, setUpdateOrchid] = useState({
        id: 0,
        name: "",
        rating: 0
    })

    const [showList, setShowList] = useState(false)

    const handleSearch = () => {
        const found = orchids.find((orchid) => orchid ? orchid.id == orchidProfile.id : orchid.name == orchidProfile.name);
        if (found) {
            setOrchidProfile(found);
            toast.success('Orchid found');
        } else {
            toast.error('Orchid not found!');
        }
    }

    return (
        <>
        <div className="container">
            <div className="Profile">
                <h1>Orchid Profile</h1>
                <p>
                    Orchid ID:
                    <input value={orchidProfile.id} onChange={(e) => setOrchidProfile({
                        ...orchidProfile,
                        id: e.target.value
                    })} />
                </p>

                <p>
                    Orchid Name:
                    <input value={orchidProfile.name} onChange={(e) => setOrchidProfile({
                        ...orchidProfile,
                        name: e.target.value
                    })} />
                </p>

                <p>
                    Orchid Rating:
                    <input value={orchidProfile.rating} onChange={(e) => setOrchidProfile({
                        ...orchidProfile,
                        rating: e.target.value
                    })} />
                </p>
                {orchidProfile.image && (
                    <p>
                        <img src={orchidProfile.image} alt={orchidProfile.name} className="image" />
                    </p>
                )}


                <button onClick={handleSearch} className="search-button">Search Orchid </button>
            </div>

            <div className="container-update">
                <h1>Update Orchid</h1>


                <p>
                    Orchid ID:
                    <input value={updateOrchid.id} onChange={(e) => setUpdateOrchid({
                        ...updateOrchid,
                        id: e.target.value
                    })} />
                </p>

                <p>
                    Orchid Name:
                    <input value={updateOrchid.name} onChange={(e) => setUpdateOrchid({
                        ...updateOrchid,
                        name: e.target.value
                    })} />
                </p>

                <p>
                    Orchid Rating:
                    <input value={updateOrchid.rating} onChange={(e) => setUpdateOrchid({
                        ...updateOrchid,
                        rating: e.target.value
                    })} />
                </p>

                <button onClick={() => setOrchidProfile(updateOrchid)}>Update new Orchid</button>


            </div>

            
        </div>
        <button onClick={() => setShowList(!showList)} className="list-button">{showList ? "Hide List" : "Show List"}</button>

            {showList && (
                <div className="list">
                    <h2>Danh sách hoa lan có sẵn</h2>
                    <ul>
                        {orchids.map((orchid) => (
                            <li key={orchid.id}>
                                ID: {orchid.id} - {orchid.name} - ⭐  {orchid.rating} -
                                {orchid.image && (
                                    <img src={orchid.image} alt={orchid.name} className="image" />
                                )}

                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </>
    )
}
