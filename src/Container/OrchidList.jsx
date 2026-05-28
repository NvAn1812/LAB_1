import { Button} from 'react-bootstrap';

export default function OrchidList({ showList, onToggleList, orchids, onShowModal }) {
    return (
        <> 
            <div className="button-list">
                <button onClick={onToggleList} className="button">
                    {showList ? "Hide List" : "Show List"}
                </button>
            </div>

            {showList && (
                <div className="list">
                    <h2>Orchid List</h2>
                    <div className="palette">
                        {orchids.map((orchid) => (
                            <div className="color" key={orchid.id}>
                                <div className="orchid-card">
                                    <img src={orchid.image} alt={orchid.name} />
                                    <Button variant = "info" onClick = {() => onShowModal(orchid)} className="Button">
                                        Details
                                    </Button>
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
            )
            }
        </>
    )
}