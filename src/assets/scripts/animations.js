import { objectToString } from "@vue/shared";
import gsap from "gsap";

const nearAnimation = (el = {}, threshold = 100, callback) => {
    const elPosition = el.getBoundingClientRect();

    el.position = {
        top: elPosition.y - threshold,
        bottom: elPosition.y + elPosition.height + threshold,
        left: elPosition.x - threshold,
        right: elPosition.x + elPosition.width + threshold,
    };

    document.addEventListener("mousemove", (event) => {
        if (
            e.clientY > el.position.top &&
            e.clientY < el.position.bottom &&
            e.clientX > el.position.left &&
            e.clientX < el.position.right
        ) {
            callback(e.position);
        }
    });
};

export default { nearAnimation };
