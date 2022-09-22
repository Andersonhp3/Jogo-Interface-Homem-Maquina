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
  PhysicsImpostor,
  CannonJSPlugin,
  AbstractMesh,
  Animation,
  Mesh,
} from "@babylonjs/core";
import "@babylonjs/loaders";
import * as CANNON from "cannon";

export class FaseUm {
  scene: Scene;
  engine: Engine;
  character: AbstractMesh;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreateScene();
    this.CreateFaseUm();
    this.CreateCharacter();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    const camera = new FreeCamera(
      "camera",
      new Vector3(0, 1, -5),
      this.scene
    );
    camera.attachControl();
    camera.speed = 0.25;

    // const camera = new ArcRotateCamera("Camera", 0, 0, 5, new Vector3(0, 0.25, 0), scene);

    // camera.setPosition(new Vector3(-2, 3, 2.5));
    // camera.attachControl();
    // camera.speed = 0.18;

    const hemiLight = new HemisphericLight(
      "hemiLight",
      new Vector3(0, 1, 0),
      this.scene
    );

    hemiLight.intensity = 3;

    scene.enablePhysics(
      new Vector3(0, -9.81, 0),
      new CannonJSPlugin(true, 10, CANNON)
    );

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
      "character.glb",
      this.scene
    );

    // meshes[0].rotate(Vector3.Up(), Math.PI);
    meshes[0].scaling.x = 0.45;
    meshes[0].scaling.y = 0.45;
    meshes[0].scaling.z = 0.45;

    meshes[0].position = new Vector3(1.2,0,-0.15);
    meshes[0].position.y = 0.20
    meshes[0].rotation = new Vector3(0, 4.70, 0);

    animationGroups[3].play(true);
    this.character =  meshes[0];
  }

  CreateAnimations(): void {
    const moveFrames = [];
    const fps = 60;

    const moveAnim = new Animation(
      'moveAnim', 
      'position.x', 
      fps, 
      Animation.ANIMATIONTYPE_FLOAT, 
      Animation.ANIMATIONLOOPMODE_CONSTANT
      );

      moveFrames.push({frame:0, value:0});
      moveFrames.push({frame:180, value: 0.4});

      moveAnim.setKeys(moveFrames);

      this.character.animations.push(moveAnim);

      this.scene.beginAnimation(this.character, 0, 180)
  }


  // CreateFloorImpostor(): void {
  //   const ground = MeshBuilder.CreateGround('ground', { width: 2.5, height: 3 })
  //   ground.position.y = 0.2;
  //   ground.position.x = 0.35;
  //   ground.isVisible = false;
  //   ground.physicsImpostor = new PhysicsImpostor(
  //     ground,
  //     PhysicsImpostor.BoxImpostor,
  //     { mass: 0, restitution: 0 }
  //   );
  // }
}