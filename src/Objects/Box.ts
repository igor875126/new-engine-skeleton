import CircleCollider from "new-engine/build/Engine/CircleCollider";
import Color from "new-engine/build/Engine/Color";
import RectCollider from "new-engine/build/Engine/RectCollider";
import Sprite from "new-engine/build/Engine/Sprite";
import Vector2 from "new-engine/build/Engine/Vector2";
import SpriteObject from "new-engine/build/Objects/SpriteObject";
import Time from "new-engine/build/Engine/Time";
import Text from "./Text";

export default class Box extends SpriteObject {
    public width: number = 64;
    public height: number = 64;
    public angle: number = 0;
    public sprite: Sprite | null = new Sprite('box-1', 0, 0, 64, 64);
    public color: Color = new Color(255, 255, 255, 1);
    public position: Vector2 = new Vector2(this.core.canvas.width / 2, this.core.canvas.height / 2);
    public collider: RectCollider | CircleCollider | null = new RectCollider(new Vector2(64, 64), new Vector2(-32, -32));
    private sinusCounter = 0;
    private linkToTextObject: Text;

    /**
     * Start
     */
    public start(): void {
        this.linkToTextObject = this.core.gameObjectsManager.getByName('MyCustomTextObject') as unknown as Text;
        this.core.eventManager.listenForEvent(this, 'hello-from-test', (name) => this.onHelloFromTest(name));
    }

    /**
     * On hello from test
     */
    public onHelloFromTest(name: string): void {
        console.log('Box says: hello-from-test event just happened with data:' + name);
        this.onMouseClick();
    }

    /**
     * Update
     */
    public update(): void {
        this.angle = Math.sin(this.sinusCounter) * 20;
        this.sinusCounter += 2 * Time.deltaTime;
    }

    /**
     * On mouse click
     */
    public onMouseClick(): void {
        this.disappearAndAppear();
        this.playSound();
    }

    /**
     * On mouse over
     */
    public onMouseOver(): void {
        this.linkToTextObject.show();
    }

    /**
     * On mouse out
     */
    public onMouseOut(): void {
        this.linkToTextObject.hide();
    }

    /**
     * Make object disappear and appear again
     */
    private async disappearAndAppear(): Promise<void> {
        while (this.color.a > 0) {
            this.color.a -= 1 * Time.deltaTime;
            await new Promise(resolve => setTimeout(resolve, 5));
        }
        while (this.color.a < 1) {
            this.color.a += 1 * Time.deltaTime;
            await new Promise(resolve => setTimeout(resolve, 5));
        }
    }

    /**
     * Play sound
     */
    private playSound(): void {
        this.core.soundManager.play('crack-1', false, 0.2);
    }
}