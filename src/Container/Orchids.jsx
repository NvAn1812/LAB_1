import React, { useState } from 'react';
import { orchids } from '../ListOfOrchids/ListOfOrchids';
import './Orchid.css';
import { toast } from 'react-hot-toast';

export default function Orchids() {

    const [orchidProfile, setOrchidProfile] = useState({
        id: "",
        name: "",
        rating: "",
        image: "",
    })
    // update new orchid
    const [updateOrchid, setUpdateOrchid] = useState({
        id: "",
        name: "",
        rating: "",
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
            <div className="profile-wrapper">
                <div className="Profile">
                    <h1>Orchid Profile</h1>
                    <div className="input-field">

                        <input id="id" required type="text" value={orchidProfile.id} onChange={(e) => setOrchidProfile({
                            ...orchidProfile,
                            id: e.target.value
                        })} />
                        <label htmlFor="id">Enter ID</label>
                    </div>

                    <div className="input-field">

                        <input id="name" required type="text" value={orchidProfile.name} onChange={(e) => setOrchidProfile({
                            ...orchidProfile,
                            name: e.target.value
                        })} />
                        <label htmlFor="name">Enter Name</label>
                    </div>

                    <div className="input-field">

                        <input id="rating" required type="text" value={orchidProfile.rating} onChange={(e) => setOrchidProfile({
                            ...orchidProfile,
                            rating: e.target.value
                        })} />
                        <label htmlFor="rating">Rating</label>
                    </div>
                    <button onClick={handleSearch} className="button">Search Orchid </button>
                </div>

                {orchidProfile.image && (
                    <div className="img-profile">
                        <img src={orchidProfile.image} alt={orchidProfile.name} className="image" />
                    </div>
                )}
            </div>

            <div className="Update-wrapper">
                <div className="Update">
                    <h1>Update Orchid</h1>


                    <div className="input-field">

                        <input id="update-id" required type="text" value={updateOrchid.id} onChange={(e) => setUpdateOrchid({
                            ...updateOrchid,
                            id: e.target.value
                        })} />
                        <label htmlFor="update-id">Enter ID</label>
                    </div>

                    <div className="input-field">

                        <input id="update-name" required type="text" value={updateOrchid.name} onChange={(e) => setUpdateOrchid({
                            ...updateOrchid,
                            name: e.target.value
                        })} />
                        <label htmlFor="update-name">Enter Name</label>
                    </div>

                    <div className="input-field">

                        <input id="update-rating" required type="text" value={updateOrchid.rating} onChange={(e) => setUpdateOrchid({
                            ...updateOrchid,
                            rating: e.target.value
                        })} />
                        <label htmlFor="update-rating">Enter Rating</label>
                    </div>

                    <button onClick={() => setOrchidProfile(updateOrchid)} className="button">Update new Orchid</button>


                </div>
            </div>




            <div className="button-list">
                <button onClick={() => setShowList(!showList)} className="button">{showList ? "Hide List" : "Show List"}</button>
            </div>

            {showList && (
                <div className="list">
                    <h2>Danh sách hoa lan có sẵn</h2>
                    <div className="palette">
                        {orchids.map((orchid) => (
                            <div className="color" key={orchid.id}>
                                <div className="orchid-card">
                                    <img src={orchid.image} alt={orchid.name} />
                                    <span>ID: {orchid.id}</span>
                                    <span>{orchid.name}</span>
                                    <span>{orchid.rating}⭐</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="stats">
                        <span>{orchids.length} orchids</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z"></path>
                        </svg>
                    </div>
                </div>
            )}

        </>
    )
}
