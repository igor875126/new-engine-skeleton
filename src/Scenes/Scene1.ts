import Scene from "new-engine/build/Engine/Scene";
import Box from "../Objects/Box";
import CameraController from "../Objects/CameraController";
import Test from "../Objects/Test";
import Text from "../Objects/Text";

export default class Scene1 extends Scene {
    /**
     * Load scene
     */
    public load(): void {
        this.core.gameObjectsManager.instantiate(new Box());
        this.core.gameObjectsManager.instantiate(new Text());
        this.core.gameObjectsManager.instantiate(new Test());
        this.core.gameObjectsManager.instantiate(new CameraController());
    }
}