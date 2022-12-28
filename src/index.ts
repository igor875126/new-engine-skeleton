import Core from 'new-engine/build/Engine/Core';
import Scene1 from './Scenes/Scene1';

// Get canvas element
const canvas = document.getElementById('canvas') as any;

// Instantiate engine
const core = new Core(canvas, {
    language: 'en',
    environment: 'development',
    debug: {
        toggleFpsRenderingAtStart: true,
        toggleDebugColliderRenderingAtStart: false,
    },
    rendererOptions: {
        imageSmoothingEnabled: true
    },
});

// Instantiate scenes
const scene1 = new Scene1(['Assets/Images/box-1.png', 'Assets/Images/information-button.png'], ['Assets/Fonts/UpheavalPro.ttf'], ['Assets/Sounds/crack-1.mp3'], ['Assets/Locales/locale-1.json']);

// Add scenes to game engine
core.addScene('Scene1', scene1);

// Load and run scene
core.loadSceneAndRun('Scene1');