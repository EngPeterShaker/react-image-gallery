import React from "react";

const Card = (props) => {
	const { itemData={}, imageSrc="", index=1, handleOpenOverlay=()=>{} } = props;
	console.log(`itemData`, itemData);
	return (
		<div
			data-cy="Card"
			className="col card"
			onClick={() => handleOpenOverlay(index)}
		>
			<img src={imageSrc} alt="Avatar" style={{ width: "100%" }} />

			<div className="card__content">
				<p className="card__content--name">
					<b>{itemData.name}</b>
				</p>
				<p className="card__content--company">{itemData.company.name}</p>
			</div>
		</div>
	);
};

export default Card;
