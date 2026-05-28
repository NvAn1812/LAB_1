import React, { useState } from 'react';
import { orchids } from '../ListOfOrchids/ListOfOrchids';
import './orchid.css';
import { toast } from 'react-hot-toast';
import { Modal, Button } from 'react-bootstrap';
import OrchidList from './OrchidList';
import bgImage from '../assets/bgImage.png';

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

    const [showModal, setShowModal] = useState(false)
    const [selectedOrchid, setSelectedOrchid] = useState(null)

    const handleShowModal = (orchid) => {
        setSelectedOrchid(orchid);
        setShowModal(true);
    }


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
            <div className="background-image">
                <img src={bgImage} alt="Background" />
            </div>

            {/* //Orchid profile */}
            <div className="main-wrapper">
                <div className="left-wrapper">
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
                    {/* Update orchid profile */}
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
                </div>


                {/* Presentation of orchidList */}
                <div className="right-wrapper">
                    <OrchidList
                        showList={showList}
                        onToggleList={() => setShowList(!showList)}
                        orchids={orchids}
                        onShowModal={handleShowModal}
                    />
                </div>
            </div>
            {/* // Modal for orchid details */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>{selectedOrchid?.name}</Modal.Title>
                </Modal.Header> */}

                <Modal.Body className="modal-body">
                    <img src={selectedOrchid?.image} alt={selectedOrchid?.name} className="modal-image" />
                    <p>ID: {selectedOrchid?.id}</p>
                    <p>Name: {selectedOrchid?.name}</p>
                    <p>Rating: {selectedOrchid?.rating}</p>
                    <p>Color: {selectedOrchid?.color}</p>
                    <p>Origin: {selectedOrchid?.origin}</p>
                    <p>Category: {selectedOrchid?.category}</p>
                </Modal.Body>

                <Modal.Footer className="modal-footer">
                    <Button variant="secondary" onClick={() => setShowModal(false)} >
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}
