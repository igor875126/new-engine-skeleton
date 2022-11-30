import CircleCollider from "new-engine/build/Engine/CircleCollider";
import Color from "new-engine/build/Engine/Color";
import RectCollider from "new-engine/build/Engine/RectCollider";
import Vector2 from "new-engine/build/Engine/Vector2";
import TextObject from "new-engine/build/Objects/TextObject";

export default class Text extends TextObject {
    public name: string = 'MyCustomTextObject';
    public text: string = '';
    public font: string = '20px UpheavalPro';
    public color: Color = new Color(255, 128, 75, 0);
    public position: Vector2 = new Vector2(this.core.canvas.width / 2 - 25, this.core.canvas.height / 2 - 50);
    public collider: RectCollider | CircleCollider | null = null;

    /**
     * Set text by using Locale class
     */
    public start(): void {
        this.text = this.core.locale.get('locale-1', 'greetings');
    }

    /**
     * Show
     */
    public show(): void {
        this.color.a = 1;
    }

    /**
     * Hide
     */
    public hide(): void {
        this.color.a = 0;
    }
}