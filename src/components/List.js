import React, { useState, useMemo, useEffect } from "react";
import { fakeAPI_Users, placeHolderList } from "../utils/constants";
import getRandomInt from "../utils/getRandomInt";

import Card from "./Card";

const List = () => {
	const [showOverlay, setShowOverlay] = useState(false);
	const [data, setData] = useState([]);
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const imagesList = useMemo(
		() => Array.from(Array(12), () => placeHolderList[getRandomInt(2)]),
		[]
	);
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(fakeAPI_Users);
			const data = await result.json();
			setData([...data, ...data]);
		};

		fetchData();
	}, []);

	const handleOpenOverlay = (index) => {
		setShowOverlay(true);
		setSelectedImageIndex(index);
	};
	const handleCloseOverlay = () => {
		setShowOverlay(false);
	};
	return (
		<div className="flex-grid-container" data-cy="List">
			{data?.length > 0 &&
				imagesList.map((imageSrc, index) => {
					return (
						<Card
							handleOpenOverlay={handleOpenOverlay}
							itemData={data[index]}
							imageSrc={imageSrc}
							index={index}
						/>
					);
				})}

			{showOverlay && selectedImageIndex !== null && (
				<div className="overlay" onClick={handleCloseOverlay}>
					{
						<div
							className={`card ${
								selectedImageIndex !== null ? "selected" : ""
							}`}
						>
							<img src={imagesList[selectedImageIndex]} alt="Avatar" />

							<div className="card__content">
								<p className="card__content--name">
									<b>{data[selectedImageIndex].name}</b>
								</p>
								<p>{data[selectedImageIndex].company.name}</p>
							</div>
						</div>
					}
				</div>
			)}
		</div>
	);
};

export default List;
