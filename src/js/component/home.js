//Importar
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//create your first component
export class Home extends React.Component {
	//Creación de un constructor
	constructor() {
		super();
		this.state = {
			seleccionar: null
		};
	}

	//Retorna
	render() {
		//Declaración de variables
		let varRoja = "";
		let varAmarilla = "";
		let varVerde = "";

		//Agregar la luz cuando seleccionamos
		if (this.state.seleccionar == "roja") {
			varAmarilla = "seleccionar";
			varVerde = "seleccionar";
		}
		if (this.state.seleccionar == "amarilla") {
			varRoja = "seleccionar";
			varVerde = "seleccionar";
		}
		if (this.state.seleccionar == "verde") {
			varAmarilla = "seleccionar";
			varRoja = "seleccionar";
		}

		return (
			<div className="container">
				<div
					className={"luz roja" + varRoja}
					onClick={() =>
						this.setState({ seleccionar: "roja" })
					}></div>
				<div
					className={"luz amarilla" + varAmarilla}
					onClick={() =>
						this.setState({ seleccionar: "amarilla" })
					}></div>
				<div
					className={"luz verde" + varVerde}
					onClick={() =>
						this.setState({ seleccionar: "verde" })
					}></div>
			</div>
		);
	}
}
