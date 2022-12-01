import CircleCollider from "new-engine/build/Engine/CircleCollider";
import RectCollider from "new-engine/build/Engine/RectCollider";
import Time from "new-engine/build/Engine/Time";
import Vector2 from "new-engine/build/Engine/Vector2";
import EmptyObject from "new-engine/build/Objects/EmptyObject";

export default class Test extends EmptyObject {

    public position: Vector2 = new Vector2(0, 0);
    public collider: RectCollider | CircleCollider | null = null;
    private eventSent: boolean = false;

    /**
     * Update
     */
    public update(): void {
        if (Time.timestamp > 4000 && !this.eventSent) {
            this.core.eventManager.dispatchEvent('hello-from-test', 'IGOR');
            this.eventSent = true;
        }
    }
}