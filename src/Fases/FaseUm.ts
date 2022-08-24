import {
  Scene,
  Engine,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  SceneLoader,
  CubeTexture,
  ArcRotateCamera,
} from "@babylonjs/core";
import "@babylonjs/loaders";

export class FaseUm {
  scene: Scene;
  engine: Engine;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreateScene();
    //this.CreateGround();
    //this.CreateBarrel();
    this.CreateFaseUm();
    this.CreateCharacter();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    // const camera = new FreeCamera(
    //   "camera",
    //   new Vector3(0, 1, -5),
    //   this.scene
    // );
    // camera.attachControl();
    // camera.speed = 0.25;

    const camera = new ArcRotateCamera("Camera", 0, 0, 5, new Vector3(0, 0.25, 0), scene);

    camera.setPosition(new Vector3(-2, 3, 2.5));
    camera.attachControl();
    camera.speed = 0.18;

    const hemiLight = new HemisphericLight(
      "hemiLight",
      new Vector3(0, 1, 0),
      this.scene
    );

    hemiLight.intensity = 3;

    return scene;
  }

  async CreateFaseUm(): Promise<void> {
    const models = await SceneLoader.ImportMeshAsync(
      "",
      "./models/",
      "FaseUm.glb"
    );
  }


  async CreateCharacter(): Promise<void> {
    const { meshes, animationGroups } = await SceneLoader.ImportMeshAsync(
      "",
      "./models/",
      "character.glb"
    );

    // meshes[0].rotate(Vector3.Up(), Math.PI);
    meshes[0].scaling.x = 0.45;
    meshes[0].scaling.y = 0.45;
    meshes[0].scaling.z = 0.45;

    meshes[0].position = new Vector3(1.2,0.20,-0.1);
    meshes[0].rotation = new Vector3(0,5,0);

    console.log("animation groups", animationGroups);

    animationGroups[0].stop();

    animationGroups[2].play(true);
  }
}