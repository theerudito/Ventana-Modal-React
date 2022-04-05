import "./style.css";

export const Modal = ({ children, isOpen, closeModal }) => {
	const handleModalClick = (e) => {
		e.stopPropagation();
	};
	return (
		<article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
			<div className="modal-container" onClick={handleModalClick}>
				<button onClick={closeModal} className="modal-close">
					X
				</button>
				{children}
			</div>
		</article>
	);
};
