import { toggleRunner } from "./physicsInitialize.js";

export function addPhysicsStartScreen() {
    let start = document.getElementById("physics_start");
    const container = document.getElementById("physics_container");
    start.addEventListener("click", startSim);
    function startSim() {
        toggleRunner();
        start.remove();
        container.style.opacity = "100%";
    };
};