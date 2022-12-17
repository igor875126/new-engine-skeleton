import CircleCollider from "new-engine/build/Engine/CircleCollider";
import RectCollider from "new-engine/build/Engine/RectCollider";
import Time from "new-engine/build/Engine/Time";
import Vector2 from "new-engine/build/Engine/Vector2";
import EmptyObject from "new-engine/build/Objects/EmptyObject";

export default class CameraController extends EmptyObject {

    public renderingLayer: number = 1;
    public position: Vector2 = new Vector2(0, 0);
    public collider: RectCollider | CircleCollider | null = null;
    public unaffectedByCamera: boolean = true;
    public counter = 0;

    /**
     * Start
     */
    public start(): void {
        this.core.camera.position = new Vector2(this.core.canvas.width / 2, this.core.canvas.height / 2);
    }

    /**
     * Update
     */
    public update(): void {
        const x = Math.sin(this.counter) * 50;
        const y = Math.cos(this.counter) * 50;
        this.core.camera.position = new Vector2(this.core.canvas.width / 2 + x, this.core.canvas.height / 2 + y);
        this.counter += 1 * Time.deltaTime;
    }
}