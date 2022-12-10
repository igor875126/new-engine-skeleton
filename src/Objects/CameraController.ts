import CircleCollider from "new-engine/build/Engine/CircleCollider";
import RectCollider from "new-engine/build/Engine/RectCollider";
import Vector2 from "new-engine/build/Engine/Vector2";
import EmptyObject from "new-engine/build/Objects/EmptyObject";

export default class CameraController extends EmptyObject {

    public renderingLayer: number = 1;
    public position: Vector2 = new Vector2(0, 0);
    public collider: RectCollider | CircleCollider | null = null;
    public unaffectedByCamera: boolean = true;

    /**
     * Start
     */
    public start(): void {
        this.core.camera.position = new Vector2(this.core.canvas.width / 2, this.core.canvas.height / 2);
    }
}