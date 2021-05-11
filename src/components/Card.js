import React from "react";

const Card = ({ itemData, imageSrc, index, handleOpenOverlay }) => {
	return (
		<div className="col card" onClick={() => handleOpenOverlay(index)}>
			<img src={imageSrc} alt="Avatar" style={{ width: "100%" }} />

			<div className="card__content">
				<p className="card__content--name">
					<b>{itemData.name}</b>
				</p>
				<p>{itemData.company.name}</p>
			</div>
		</div>
	);
};

export default Card;
