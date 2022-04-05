import { FormularioContacto } from "../Formulario/FormularioContacto";
import { useModal } from "../Hooks/useModal";
import { Modal } from "./Modal";

export const ModalApp = () => {
	const [isOpenModal1, openModal1, closeModal1] = useModal(false);
	const [isOpenForm, openForm, closeForm] = useModal(false);

	return (
		<div>
			<button onClick={openModal1}>Abrir</button>
			<Modal isOpen={isOpenModal1} closeModal={closeModal1}>
				<h3>Titulo</h3>
				<p>Este Es el contendido del modal</p>
				<img
					id="image"
					src="https://placeimg.com/200/200/animals"
					alt="imagen"
				/>
			</Modal>

			<hr />

			<button onClick={openForm}>Abrir</button>
			<Modal isOpen={isOpenForm} closeModal={closeForm}>
				<FormularioContacto />
			</Modal>
		</div>
	);
};
