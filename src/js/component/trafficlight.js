import React, { useState } from "react";
import "../../styles/index.scss";

//include images into your bundle

//create your first component
export function TrafficLight() {
	const [glowRed, setGlowRed] = useState(" glow");
	const [glowYellow, setGlowYellow] = useState("");
	const [glowGreen, setGlowGreen] = useState("");

	//asi ------> const glow = "" ------- inicializamos (glow y useState(""))
	//setGlow(otraVariable): seria igual a ---- glow = otraVariable, es una asignación
	function shineRed() {
		if (glowRed == "") {
			return setGlowRed(" glow"), setGlowYellow(""), setGlowGreen("");
		}
	}
	function shineYellow() {
		if (glowYellow == "") {
			return setGlowRed(""), setGlowYellow(" glow"), setGlowGreen("");
		}
	}

	function shineGreen() {
		if (glowGreen == "") {
			return setGlowRed(""), setGlowYellow(""), setGlowGreen(" glow");
		}
	}

	return (
		<div>
			<div className="stem mx-auto" />
			<div className="thebox mx-auto">
				<div
					className={"circle stop mx-auto" + glowRed}
					onClick={() => {
						shineRed();
					}}
				/>
				<div
					className={"circle warning mx-auto" + glowYellow}
					onClick={() => {
						shineYellow();
					}}
				/>
				<div
					className={"circle go mx-auto" + glowGreen}
					onClick={() => {
						shineGreen();
					}}
				/>
			</div>
		</div>
	);
}
