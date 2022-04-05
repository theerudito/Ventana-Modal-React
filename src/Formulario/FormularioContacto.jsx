export const FormularioContacto = () => {
	return (
		<div className="container">
			<h2>Contactos</h2>
			<input className="form-control mt-5" type="text" placeholder="Nombbre" />
			<input className="form-control mt-1" type="email" placeholder="Email" />
			<input
				className="form-control mt-1"
				type="number"
				placeholder="Telefono"
			/>
			<textarea
				className="form-control mt-1"
				type="text"
				placeholder="Mensaje"
			/>
			<button className="btn btn-primary mt-2" type="submit">
				Enviar
			</button>
		</div>
	);
};
