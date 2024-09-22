import { ShaderPlane } from "../components/webgl/shader_scene";

/** View for dither blogpost */
export function ditherView() {
    const shader = new ShaderPlane();

    return `<div> 
                Testing dither
                ${shader.canvas}
            </div>`
}