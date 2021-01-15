import "./Person.css";

export default function Person(contact) {
	return (
		<div className="contact-container">
			<img src={contact.picture.medium} />
			<div className="text-info">
				<h2>
					{contact.name.first} {contact.name.last}
				</h2>
				<p>
					<b>Home Phone:</b> {contact.phone}
				</p>
				<p>
					<b>Mobile Phone:</b> {contact.cell}
				</p>
			</div>
		</div>
	);
}