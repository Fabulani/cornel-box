// Animate the cornel box
function animateCornelBox() {}

// Create a frame piece (metallic lengthy component with fringes)
function createFramePiece(length) {
  // Create the frame piece group.
  const framePiece = new THREE.Object3D();

  // Create the materials
  const material = new THREE.MeshLambertMaterial({ color: "#AAAFBA" });

  // Create the corners (perspective: top-view).
  const cornerWidth = 0.21875; // Calculated to sum-up with centers and fringes to 1
  const cornerGeometry = new THREE.BoxGeometry(cornerWidth, length, cornerWidth);
  const bLeftCorner = new THREE.Mesh(cornerGeometry, material);
  const bRightCorner = bLeftCorner.clone();
  const tLeftCorner = bLeftCorner.clone();
  const tRightCorner = bLeftCorner.clone();

  // Create the centers
  const centerWidth = cornerWidth * 2;
  const centerGeometry = new THREE.BoxGeometry(cornerWidth * 2, length, 1);
  const frontCenter = new THREE.Mesh(centerGeometry, material);
  const sideCenter = new THREE.Mesh(centerGeometry, material);

  // Create the filler
  const fillerWidth = 1 - cornerWidth;
  const fillerGeometry = new THREE.BoxGeometry(fillerWidth, length - 0.001, fillerWidth);
  const filler = new THREE.Mesh(fillerGeometry, material);

  // Position the corners
  const cornerPos = 0.5 - cornerWidth / 2;
  bLeftCorner.position.set(-cornerPos, length / 2, cornerPos);
  bRightCorner.position.set(cornerPos, length / 2, cornerPos);
  tLeftCorner.position.set(-cornerPos, length / 2, -cornerPos);
  tRightCorner.position.set(cornerPos, length / 2, -cornerPos);

  // Position the centers
  frontCenter.position.y = length / 2;
  sideCenter.position.y = length / 2;
  sideCenter.rotation.y = Math.PI / 2;

  // Position the filler
  filler.position.y = length / 2;

  // Add corners, centers, and filler to the frame piece
  framePiece.add(bLeftCorner);
  framePiece.add(bRightCorner);
  framePiece.add(tLeftCorner);
  framePiece.add(tRightCorner);
  framePiece.add(frontCenter);
  framePiece.add(sideCenter);
  framePiece.add(filler);
  return framePiece;
}

// Create a panel (yellow front face, white back face)
function createPanel(name = "panel") {
  // Create the panel group
  const panel = new THREE.Object3D();

  // Cornel box measurements
  const fringeLength = 0.0625;
  const cornerWidth = 0.21875;

  // Create the front and back faces according to the cornel box measurements
  const panelGeometry = new THREE.BoxGeometry(28, 3, fringeLength / 2);
  const panelMaterials = [
    // Front and Back
    new THREE.MeshLambertMaterial({ color: "#909B21" }),
    new THREE.MeshLambertMaterial({ color: "#ffffff" }),
  ];
  const panelFront = new THREE.Mesh(panelGeometry, panelMaterials[0]);
  const panelBack = new THREE.Mesh(panelGeometry, panelMaterials[1]);
  const panelLight = new THREE.RectAreaLight(0xffffff, 0.25, 28, 3);

  // Naming
  panelBack.name = name + "_back";
  panelLight.name = name + "_light";

  // Distance the front and back faces
  panelFront.position.z = fringeLength / 2;
  panelBack.position.z = -fringeLength / 2;
  panelLight.position.z = -fringeLength;
  panelLight.lookAt(0, 0, 0);

  // Add front and back to the panel group
  panel.add(panelFront);
  panel.add(panelBack);
  panel.add(panelLight);

  return panel;
}

// Create a screen lowerer
function createScreenLowerer(name) {
  // Create the screen lowerer group
  const screenLowerer = new THREE.Object3D();
  screenLowerer.name = name;

  // Cornel box measurements
  const fringeLength = 0.0625;
  const cornerWidth = 0.21875;

  // Create the material
  const material = new THREE.MeshLambertMaterial({ color: "#5F6062" });
  const screenMaterial = new THREE.MeshLambertMaterial({ color: "#ffffff" });

  // Create the top frame
  // TODO: gap for side frame and screen, hole detail in the back face
  const tFrameGeometry = new THREE.BoxGeometry(28, 1, 1);
  const tFrame = new THREE.Mesh(tFrameGeometry, material);

  // Create the side frames of the screen lowerer
  // TODO: side frames have a gap for the screen, with the gap filled with brush hair, and a offset detail
  const sFrameGeometry = new THREE.BoxGeometry(0.5, 24, fringeLength + cornerWidth);
  const lFrame = new THREE.Mesh(sFrameGeometry, material);
  const rFrame = new THREE.Mesh(sFrameGeometry, material);

  // Create the screen
  // TODO: bottom part of the screen is bigger than the screen panel + check calculations
  // TODO: frontface of the panel is black / dark gray, back face is white
  const screen = new THREE.Object3D();
  const screenPanelGeometry = new THREE.BoxGeometry(28 - 2 * cornerWidth, 24 - 2 * cornerWidth, fringeLength / 2);
  const screenBottomGeometry = new THREE.BoxGeometry(28 - 2 * cornerWidth, 2 * cornerWidth, fringeLength);
  const screenPanel = new THREE.Mesh(screenPanelGeometry, screenMaterial);
  const screenPanelLight = new THREE.RectAreaLight(0xffffff, 0.25, 28 - 2 * cornerWidth, 24 - 2 * cornerWidth);
  const screenBottom = new THREE.Mesh(screenBottomGeometry, material);

  // Naming
  screen.name = name + "_screen";
  screenPanel.name = name + "_screenPanel";
  screenPanelLight.name = name + "_screenPanelLight";
  screenBottom.name = name + "_screenBottom";

  // Position the screen parts
  screenBottom.position.y = cornerWidth;
  screenPanel.position.y = 12 + cornerWidth;
  screenPanelLight.position.set(0, 12 + cornerWidth, -fringeLength);
  screenPanelLight.lookAt(0, 0, 0);
  // Add screen parts to the screen group
  screen.add(screenPanel);
  screen.add(screenPanelLight);
  screen.add(screenBottom);

  // Position the frames
  const innerFringePosition = -(cornerWidth + fringeLength / 2);
  tFrame.position.y = 24.5;
  lFrame.position.set(-14, 12, innerFringePosition);
  rFrame.position.set(14, 12, innerFringePosition);

  // Add all to the same group
  screenLowerer.add(tFrame);
  screenLowerer.add(lFrame);
  screenLowerer.add(rFrame);
  screenLowerer.add(screenBottom);
  screenLowerer.add(screen);

  return screenLowerer;
}

// Create one face of the cornel box
function createCornelFace(name = "cornelFace") {
  // Create the face group
  const face = new THREE.Object3D();
  face.name = name;

  // Create the frames
  const lFramePiece = createFramePiece(29.5);
  const rFramePiece = createFramePiece(29.5);
  const tFramePiece = createFramePiece(28);
  const bFramePiece = createFramePiece(28);

  // Create the panel
  const panel = createPanel(name + "_panel");

  // Create the screen lowerer
  const screenLowerer = createScreenLowerer(name + "_screenLowerer");

  // Position the frames
  lFramePiece.position.set(-14.5, 0.5, 0);
  rFramePiece.position.set(14.5, 0.5, 0);
  tFramePiece.position.set(-14, 29.5, 0);
  tFramePiece.rotation.z = -Math.PI / 2;
  bFramePiece.position.set(-14, 25.5, 0); // Check the y position calculations
  bFramePiece.rotation.z = -Math.PI / 2;

  // Position the panel on the outermost fringe CHECK CALCULATIONS
  const fringeLength = 0.0625;
  const cornerWidth = 0.21875;
  panel.position.set(0, 27.5, cornerWidth + fringeLength / 2);

  // Add components to the face
  face.add(lFramePiece);
  face.add(rFramePiece);
  face.add(tFramePiece);
  face.add(bFramePiece);
  face.add(panel);
  face.add(screenLowerer);

  return face;
}

// Create the roof lamp
// TODO: make the lamp model
function createLamp(name = "lamp") {
  // Create the lamp group
  const lamp = new THREE.Object3D();
  lamp.name = name;

  // Create a light target so they point down
  const lightTarget = new THREE.Object3D();
  lightTarget.position.y = -5;

  // Directional Light
  const directionalColor = 0xffffff;
  const directionalIntensity = 0.25;
  const directionalLight = new THREE.DirectionalLight(directionalColor, directionalIntensity);
  directionalLight.name = name + "_directionalLight";
  directionalLight.target = lightTarget;
  directionalLight.visible = false;
  directionalLight.castShadow = true;

  // Point light
  const pointColor = 0xffffff;
  const pointIntensity = 0.25;
  const pointDistance = 100;
  const pointDecay = 2;
  const pointLight = new THREE.PointLight(pointColor, pointIntensity, pointDistance, pointDecay);
  pointLight.name = name + "_pointLight";
  pointLight.castShadow = true;

  // Spotlight
  const spotLight = new THREE.SpotLight(0xffffff, 0.25);
  spotLight.name = name + "_spotLight";
  spotLight.target = lightTarget;
  spotLight.visible = false;
  spotLight.castShadow = true;

  // Hemisphere light
  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2);
  hemisphereLight.name = name + "_hemisphereLight";

  // Position the lights so they're not inside the roof
  directionalLight.position.y = -2;
  pointLight.position.y = -2;
  spotLight.position.y = -2;

  // Add to the lamp group
  lamp.add(lightTarget);
  lamp.add(directionalLight);
  lamp.add(pointLight);
  lamp.add(spotLight);
  lamp.add(hemisphereLight);

  return lamp;
}

// Create the roof for the cornel box
function createCornelRoof(name = "roof") {
  // Create the roof group
  const roof = new THREE.Object3D();

  // Create the upper panel
  const panelGeometry = new THREE.BoxGeometry(28, 0.5, 28);
  const panelMaterial = new THREE.MeshLambertMaterial({ color: "#ffffff" });
  const upperPanel = new THREE.Mesh(panelGeometry, panelMaterial);
  upperPanel.name = name + "_upperPanel";

  // Create the roof frames (h=horizontal, v=vertical, c=center)
  const hLength = 28;
  const vLength = 28 / 3;
  const hFrame1 = createFramePiece(hLength);
  const hFrame2 = createFramePiece(hLength);
  const vFrame1 = createFramePiece(vLength);
  const vFrame2 = createFramePiece(vLength);
  const cFrame1 = createFramePiece(vLength);
  const cFrame2 = createFramePiece(vLength);

  // Create the lamp
  const lamp = createLamp(name + "_lamp");

  // Position the upper panel
  upperPanel.position.y = 0.25;

  // Position the roof frames (y=-0.01 to avoid flickering with panel)
  // TODO: check the calculations. Lengths are too big
  const offset = 0.25; // Offset = half the width of the frame (1)
  hFrame1.rotation.z = Math.PI / 2;
  hFrame1.position.set(hLength / 2, -0.01, vLength / 2 - offset);
  hFrame2.rotation.z = Math.PI / 2;
  hFrame2.position.set(hLength / 2, -0.01, -vLength / 2 + offset);
  vFrame1.rotation.x = Math.PI / 2;
  vFrame1.position.set(-hLength / 4, -0.01, -vLength / 2);
  vFrame2.rotation.x = Math.PI / 2;
  vFrame2.position.set(hLength / 4, -0.01, -vLength / 2);
  cFrame1.rotation.x = Math.PI / 2;
  cFrame1.position.set(0, -0.01, vLength / 2 + offset);
  cFrame2.rotation.x = -Math.PI / 2;
  cFrame2.position.set(0, -0.01, -vLength / 2 - offset);

  // Add to the roof group
  roof.add(upperPanel);
  roof.add(hFrame1);
  roof.add(hFrame2);
  roof.add(vFrame1);
  roof.add(vFrame2);
  roof.add(cFrame1);
  roof.add(cFrame2);
  roof.add(lamp);
  return roof;
}

// Create a cornel box based on the Telelumen lighting system in the IXR platform in UJM
function createCornelBox(name = "cornelBox") {
  // Create the cornel box group
  const cornelBox = new THREE.Object3D();
  cornelBox.name = name;

  // Create the cornel box faces
  const frontFace = createCornelFace(name + "_frontCornelFace");
  const leftFace = createCornelFace(name + "_leftCornelFace");
  const rightFace = createCornelFace(name + "_rightCornelFace");
  const backFace = createCornelFace(name + "_backCornelFace");

  // Create the cornel box roof
  const roof = createCornelRoof(name + "_roof");

  // Position the cornel box elements
  frontFace.position.z = 14.5;
  leftFace.position.x = -14.5;
  rightFace.position.x = 14.5;
  backFace.position.z = -14.5;
  roof.position.y = 29.5;

  // Rotate cornel box elements
  leftFace.rotation.y = -Math.PI / 2;
  rightFace.rotation.y = Math.PI / 2;
  backFace.rotation.y = -Math.PI;

  //TODO: fix references to get obj
  //TODO: create table and objs here
  // Hide front screen lowerer of the Cornel Box
  scene.getObjectByName("cornelBox_frontCornelFace_screenLowerer").visible = false;

  // Setup panel colors according to a Cornel Box
  const red = new THREE.Color("rgb(255, 0, 0)");
  const green = new THREE.Color("rgb(0, 255, 0)");
  scene.getObjectByName("cornelBox_leftCornelFace_screenLowerer_screenPanel").material.color = red;
  scene.getObjectByName("cornelBox_leftCornelFace_panel_back").material.color = red;
  scene.getObjectByName("cornelBox_leftCornelFace_screenLowerer_screenPanelLight").color = red;
  scene.getObjectByName("cornelBox_leftCornelFace_panel_light").color = red;

  scene.getObjectByName("cornelBox_rightCornelFace_screenLowerer_screenPanel").material.color = green;
  scene.getObjectByName("cornelBox_rightCornelFace_panel_back").material.color = green;
  scene.getObjectByName("cornelBox_rightCornelFace_screenLowerer_screenPanelLight").color = green;
  scene.getObjectByName("cornelBox_rightCornelFace_panel_light").color = green;

  // Scene graph: build the scene here
  cornelBox.add(frontFace);
  cornelBox.add(leftFace);
  cornelBox.add(rightFace);
  cornelBox.add(backFace);
  cornelBox.add(roof);

  return cornelBox;
}

// Create a table
function createTable() {
  // Create the table group
  const table = new THREE.Object3D();
  table.name = "name";

  // Create the material
  const material = new THREE.MeshLambertMaterial({ color: "#808080" });

  // Create the top
  const topGeometry = new THREE.BoxGeometry(10, 0.5, 5);
  const top = new THREE.Mesh(topGeometry, material);

  // Create the legs
  const legGeometry = new THREE.BoxGeometry(0.5, 5, 0.5);
  const lLeg1 = new THREE.Mesh(legGeometry, material);
  const lLeg2 = new THREE.Mesh(legGeometry, material);
  const rLeg1 = new THREE.Mesh(legGeometry, material);
  const rLeg2 = new THREE.Mesh(legGeometry, material);

  // Position the table elements
  top.position.y = 5;
  lLeg1.position.set(-4.5, 2.5, -2);
  lLeg2.position.set(-4.5, 2.5, 2);
  rLeg1.position.set(4.5, 2.5, -2);
  rLeg2.position.set(4.5, 2.5, 2);

  // Fix legs to the table
  table.add(top);
  table.add(lLeg1);
  table.add(lLeg2);
  table.add(rLeg1);
  table.add(rLeg2);

  return table;
}
