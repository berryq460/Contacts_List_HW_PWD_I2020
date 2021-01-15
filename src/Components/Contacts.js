import { results } from "../data/contacts.json";
import Person from "./Individual"

export default function Contacts() {
	console.log(results);
	return (
		<div className="container">
            {
            results.map((person) => {
                return <Person {...person} />
            })
            }
		</div>
	);
}