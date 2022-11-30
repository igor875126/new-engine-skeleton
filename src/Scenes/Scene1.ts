import Scene from "new-engine/build/Engine/Scene";
import Box from "../Objects/Box";
import Text from "../Objects/Text";

export default class Scene1 extends Scene {
    /**
     * Load scene
     */
    public load(): void {
        this.gameObjectsManager.instantiate(new Box());
        this.gameObjectsManager.instantiate(new Text());
    }
}