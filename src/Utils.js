// Traverse all children nodes of a parent node
function traverse(node, f) {
  f(node);
  node.children.forEach((nextNode) => {
    traverse(nextNode, f);
  });
}

// Enable shadows for object
function enableShadows(obj) {
  // Warning: very computationally costly
  if (obj.isMesh === true) {
    obj.castShadow = true;
    obj.receiveShadow = true;
  }
}

// Enable transparency for object meshes
function enableTransparency(obj) {
  if (obj.isMesh === true) {
    obj.material.transparent = true;
    obj.material.opacity = 0.5;
  }
}

// Setup VR
function setupVR() {
  // Enable XR
  renderer.xr.enabled = true;

  // Add XR button
  document.body.appendChild(VRButton.createButton(renderer));

  // Controller setup
  const geometry = new THREE.BufferGeometry();
  geometry.setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -5)]);

  const controller1 = renderer.xr.getController(0);
  controller1.add(new THREE.Line(geometry));
  scene.add(controller1);

  const controller2 = renderer.xr.getController(1);
  controller2.add(new THREE.Line(geometry));
  scene.add(controller2);

  const controllerModelFactory = new XRControllerModelFactory();
  const controllerGrip1 = renderer.xr.getControllerGrip(0);
  controllerGrip1.add(controllerModelFactory.createControllerModel(controllerGrip1));
  scene.add(controllerGrip1);
  const controllerGrip2 = renderer.xr.getControllerGrip(1);
  controllerGrip2.add(controllerModelFactory.createControllerModel(controllerGrip2));
  scene.add(controllerGrip2);
}

// Fix window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
