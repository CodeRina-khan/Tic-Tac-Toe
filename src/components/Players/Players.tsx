import { useState } from "react"
import "./Players.css"

export default function Player(props) {

    const [name, setName] = useState(props.initialname);
    const [editing, setEditig] = useState(false);
    let palyerContent = <div className="name">
        {name}
    </div>;

    function handleEditing() {
        setEditig((editing) => !editing);
        if (editing) {
            props.handlePlayerNameChange(props.symbol, name);
        }
    }
    
    function handleChange(event) {
        setName(event.target.value);
    }

    if (editing) {
        palyerContent = <input className="player-input" required value={name} onChange={handleChange}></input>;
    }

    return (
		<div className={`player ${props.isActive ? 'active' : ''}`}>
			{palyerContent}
			<div className="symbol">{props.symbol}</div>
			<button className="player-btn" onClick={handleEditing}>
				{editing ? 'Save' : 'Edit'}
			</button>
		</div>
	);
}