// Setup the GUI
function setupGUI() {
  // Top level controller
  const gui = new GUI({ title: "Cornel Settings" });

  // Get references
  const frontPanel = scene.getObjectByName("cornelBox_frontCornelFace_screenLowerer_screenPanel");
  const leftPanel = scene.getObjectByName("cornelBox_leftCornelFace_screenLowerer_screenPanel");
  const rightPanel = scene.getObjectByName("cornelBox_rightCornelFace_screenLowerer_screenPanel");
  const backPanel = scene.getObjectByName("cornelBox_backCornelFace_screenLowerer_screenPanel");
  const frontScreenLowerer = scene.getObjectByName("cornelBox_frontCornelFace_screenLowerer");
  const leftScreenLowerer = scene.getObjectByName("cornelBox_leftCornelFace_screenLowerer");
  const rightScreenLowerer = scene.getObjectByName("cornelBox_rightCornelFace_screenLowerer");
  const backScreenLowerer = scene.getObjectByName("cornelBox_backCornelFace_screenLowerer");
  const frontTopPanel = scene.getObjectByName("cornelBox_frontCornelFace_panel_back");
  const leftTopPanel = scene.getObjectByName("cornelBox_leftCornelFace_panel_back");
  const rightTopPanel = scene.getObjectByName("cornelBox_rightCornelFace_panel_back");
  const backTopPanel = scene.getObjectByName("cornelBox_backCornelFace_panel_back");
  const roofPanel = scene.getObjectByName("cornelBox_roof_upperPanel");
  const directionalLight = scene.getObjectByName("cornelBox_roof_lamp_directionalLight");
  const pointLight = scene.getObjectByName("cornelBox_roof_lamp_pointLight");
  const spotLight = scene.getObjectByName("cornelBox_roof_lamp_spotLight");
  const hemisphereLight = scene.getObjectByName("cornelBox_roof_lamp_hemisphereLight");
  const coneLambert = scene.getObjectByName("coneLambert");
  const spherePhysical = scene.getObjectByName("spherePhysical");
  const cylinderPhong = scene.getObjectByName("cylinderPhong");
  const frontPanelLight = scene.getObjectByName("cornelBox_frontCornelFace_screenLowerer_screenPanelLight");
  const leftPanelLight = scene.getObjectByName("cornelBox_leftCornelFace_screenLowerer_screenPanelLight");
  const rightPanelLight = scene.getObjectByName("cornelBox_rightCornelFace_screenLowerer_screenPanelLight");
  const backPanelLight = scene.getObjectByName("cornelBox_backCornelFace_screenLowerer_screenPanelLight");
  const frontTopPanelLight = scene.getObjectByName("cornelBox_frontCornelFace_panel_light");
  const leftTopPanelLight = scene.getObjectByName("cornelBox_leftCornelFace_panel_light");
  const rightTopPanelLight = scene.getObjectByName("cornelBox_rightCornelFace_panel_light");
  const backTopPanelLight = scene.getObjectByName("cornelBox_backCornelFace_panel_light");

  // Example textures
  const exampleTexture = new THREE.TextureLoader().load("textures/grenouille.jpg");
  const exampleGrayTexture = new THREE.TextureLoader().load("textures/grenouille-gray.jpg");

  // Settings for the gui
  const settings = {
    // Enable/disable screen lowerers
    enableFrontScreenLowerer: frontScreenLowerer.visible,
    enableLeftScreenLowerer: leftScreenLowerer.visible,
    enableRightScreenLowerer: rightScreenLowerer.visible,
    enableBackScreenLowerer: backScreenLowerer.visible,

    // Panel material
    frontPanelColor: frontPanel.material.color,
    leftPanelColor: leftPanel.material.color,
    rightPanelColor: rightPanel.material.color,
    backPanelColor: backPanel.material.color,
    roofPanel: roofPanel.material.color,

    // Checkboxes for enabling different types of lights
    directionalLightEnable: directionalLight.visible,
    pointLightEnable: pointLight.visible,
    spotLightEnable: spotLight.visible,
    hemisphereLightEnable: hemisphereLight.visible,

    // Light intensities
    directionalLightIntensity: directionalLight.intensity,
    pointLightIntensity: pointLight.intensity,
    spotLightIntensity: spotLight.intensity,
    hemisphereLightIntensity: hemisphereLight.intensity,

    // Light colors
    directionalLightColor: directionalLight.color,
    pointLightColor: pointLight.color,
    spotLightColor: spotLight.color,
    hemisphereLightColor: hemisphereLight.color,

    // Directional light specific settings
    directionalLightCastShadow: directionalLight.castShadow,
    directionalLightTarget: directionalLight.target,

    // Point light specific settings
    pointLightCastShadow: pointLight.castShadow,
    pointLightDecay: pointLight.decay,
    pointLightDistance: pointLight.distance,
    pointLightPower: pointLight.power,

    // Spot light specific settings
    spotLightAngle: spotLight.angle * (180 / Math.PI),
    spotLightCastShadow: spotLight.castShadow,
    spotLightDecay: spotLight.decay,
    spotLightDistance: spotLight.distance,
    spotLightPenumbra: spotLight.penumbra,
    spotLightPower: spotLight.power,
    spotLightTarget: spotLight.target,
    spotLightMap: spotLight.map,

    // Hemisphere light specific settings
    hemisphereLightGroundColor: hemisphereLight.groundColor,

    // THREE.Material properties
    materialsAlphaTest: coneLambert.material.alphaTest,
    materialsAlphaToCoverage: coneLambert.material.alphaToCoverage,
    materialsBlendDst: coneLambert.material.blendDst,
    materialsBlendDstAlpha: 0, // coneLambert.material.blendDstAlpha is null and crashes
    materialsBlendEquation: coneLambert.material.blendEquation,
    materialsBlendEquationAlpha: 0, // coneLambert.material.blendEquationAlpha is null and crashes
    materialsBlending: coneLambert.material.blending,
    materialsBlendSrc: coneLambert.material.blendSrc,
    materialsBlendSrcAlpha: 0, // coneLambert.material.blendSrcAlpha is null and crashes
    materialsClipIntersection: coneLambert.material.clipIntersection,
    materialsClipShadows: coneLambert.material.clipShadows,
    materialsColorWrite: coneLambert.material.colorWrite,
    materialsDepthFunc: coneLambert.material.depthFunc,
    materialsDepthTest: coneLambert.material.depthTest,
    materialsDepthWrite: coneLambert.material.depthWrite,
    materialsStencilWrite: coneLambert.material.stencilWrite,
    materialsStencilWriteMask: coneLambert.material.stencilWriteMask,
    materialsStencilFunc: coneLambert.material.stencilFunc,
    materialsStencilRef: coneLambert.material.stencilRef,
    materialsStencilFuncMask: coneLambert.material.stencilFuncMask,
    materialsStencilFail: coneLambert.material.stencilFail,
    materialsStencilZFail: coneLambert.material.stencilZFail,
    materialsStencilZPass: coneLambert.material.stencilZPass,
    materialsOpacity: coneLambert.material.opacity,
    materialsPolygonOffset: coneLambert.material.polygonOffset,
    materialsPolygonOffsetFactor: coneLambert.material.polygonOffsetFactor,
    materialsPolygonOffsetUnits: coneLambert.material.polygonOffsetUnits,
    materialsPrecision: coneLambert.material.precision,
    materialsPremultipliedAlpha: coneLambert.material.premultipliedAlpha,
    materialsDithering: coneLambert.material.dithering,
    materialsShadowSide: coneLambert.material.shadowSide,
    materialsSide: coneLambert.material.side,
    materialsToneMapped: coneLambert.material.toneMapped,
    materialsTransparent: coneLambert.material.transparent,
    materialsVertexColors: coneLambert.material.vertexColors,

    // Properties common betweeen MeshLambertMaterial, MeshPhongMaterial, and MeshPhysicalMaterial
    materialsAlphaMap: coneLambert.material.alphaMap,
    materialsAoMap: coneLambert.material.aoMap,
    materialsAoMapIntensity: coneLambert.material.aoMapIntensity,
    materialsBumpMap: coneLambert.material.bumpMap,
    materialsBumpScale: coneLambert.material.bumpScale,
    materialsColor: coneLambert.material.color,
    materialsCombine: coneLambert.material.combine,
    materialsDisplacementMap: coneLambert.material.displacementMap,
    materialsDisplacementScale: coneLambert.material.displacementScale,
    materialsDisplacementBias: coneLambert.material.displacementBias,
    materialsEmissive: coneLambert.material.emissive,
    materialsEmissiveMap: coneLambert.material.emissiveMap,
    materialsEmissiveIntensity: coneLambert.material.emissiveIntensity,
    materialsEnvMap: coneLambert.material.envMap,
    materialsFlatShading: coneLambert.material.flatShading,
    materialsFog: coneLambert.material.fog,
    materialsLightMap: coneLambert.material.lightMap,
    materialsLightMapIntensity: coneLambert.material.lightMapIntensity,
    materialsMap: coneLambert.material.map,
    materialsNormalMap: coneLambert.material.normalMap,
    materialsNormalMapType: coneLambert.material.normalMapType,
    materialsNormalScaleX: coneLambert.material.normalScale.x,
    materialsNormalScaleY: coneLambert.material.normalScale.y,
    materialsWireframe: coneLambert.material.wireframe,
    materialsWireframeLinecap: coneLambert.material.wireframeLinecap,
    materialsWireframeLinejoin: coneLambert.material.wireframeLinejoin,
    materialsWireframeLinewidth: coneLambert.material.wireframeLinewidth,

    // Lambert material setting
    lambertCombine: coneLambert.material.combine,
    lambertReflectivity: coneLambert.material.reflectivity,
    lambertRefractionRatio: coneLambert.material.refractionRatio,
    lambertSpecularMap: coneLambert.material.specularMap,

    // Phong
    phongCombine: cylinderPhong.material.combine,
    phongReflectivity: cylinderPhong.material.reflectivity,
    phongRefractionRatio: cylinderPhong.material.refractionRatio,
    phongShininess: cylinderPhong.material.shininess,
    phongSpecular: cylinderPhong.material.specular,
    phongSpecularMap: cylinderPhong.material.specularMap,

    // Physical
    physicalEnvMapIntensity: spherePhysical.material.envMapIntensity,
    physicalMetalness: spherePhysical.material.metalness,
    physicalMetalnessMap: spherePhysical.material.metalnessMap,
    physicalRoughness: spherePhysical.material.roughness,
    physicalRoughnessMap: spherePhysical.material.roughnessMap,
    physicalAttenuationColor: spherePhysical.material.attenuationColor,
    physicalAttenuationDistance: spherePhysical.material.attenuationDistance,
    physicalClearcoat: spherePhysical.material.clearcoat,
    physicalClearcoatMap: spherePhysical.material.clearcoatMap,
    physicalClearcoatNormalMap: spherePhysical.material.clearcoatNormalMap,
    physicalClearcoatNormalScaleX: spherePhysical.material.clearcoatNormalScale.x,
    physicalClearcoatNormalScaleY: spherePhysical.material.clearcoatNormalScale.y,
    physicalClearcoatRoughness: spherePhysical.material.clearcoatRoughness,
    physicalClearcoatRoughnessMap: spherePhysical.material.clearcoatRoughnessMap,
    physicalIor: spherePhysical.material.ior,
    physicalReflectivity: spherePhysical.material.reflectivity,
    physicalSheen: spherePhysical.material.sheen,
    physicalSheenRoughness: spherePhysical.material.sheenRoughness,
    physicalSheenRoughnessMap: spherePhysical.material.sheenRoughnessMap,
    physicalSheenColor: spherePhysical.material.sheenColor,
    physicalSheenColorMap: spherePhysical.material.sheenColorMap,
    physicalSpecularIntensity: spherePhysical.material.specularIntensity,
    physicalSpecularIntensityMap: spherePhysical.material.specularIntensityMap,
    physicalSpecularColor: spherePhysical.material.specularColor,
    physicalSpecularColorMap: spherePhysical.material.specularColorMap,
    physicalThickness: spherePhysical.material.thickness,
    physicalThicknessMap: spherePhysical.material.thicknessMap,
    physicalTransmission: spherePhysical.material.transmission,
    physicalTransmissionMap: spherePhysical.material.transmissionMap,

    // LightShadow properties
    shadowAutoUpdate: directionalLight.shadow.autoUpdate,
    shadowBias: directionalLight.shadow.bias,
    shadowBlurSamples: directionalLight.shadow.blurSamples,
    shadowMapWidth: directionalLight.shadow.mapSize.width,
    shadowMapHeight: directionalLight.shadow.mapSize.height,
    shadowNormalBias: directionalLight.shadow.normalBias,
    shadowRadius: directionalLight.shadow.radius,
  };

  // Top-level folder for structure related folders
  const folderStructure = gui.addFolder("Structure");

  // Screen lowerer settings
  const folderScreenLowerer = folderStructure.addFolder("Screen Lowerers");
  folderScreenLowerer
    .add(settings, "enableFrontScreenLowerer")
    .name("Enable front")
    .onChange((toggle) => {
      frontScreenLowerer.visible = toggle;
    });
  folderScreenLowerer
    .add(settings, "enableLeftScreenLowerer")
    .name("Enable left")
    .onChange((toggle) => {
      leftScreenLowerer.visible = toggle;
    });
  folderScreenLowerer
    .add(settings, "enableRightScreenLowerer")
    .name("Enable right")
    .onChange((toggle) => {
      rightScreenLowerer.visible = toggle;
    });
  folderScreenLowerer
    .add(settings, "enableBackScreenLowerer")
    .name("Enable back")
    .onChange((toggle) => {
      backScreenLowerer.visible = toggle;
    });

  // Panel settings
  const folderPanels = folderStructure.addFolder("Panels");
  folderPanels
    .addColor(settings, "frontPanelColor")
    .name("Front")
    .onChange((color) => {
      frontPanel.material.color.set(color);
      frontTopPanel.material.color.set(color);
      frontPanelLight.color = color;
      frontTopPanelLight.color = color;
    });
  folderPanels
    .addColor(settings, "leftPanelColor")
    .name("Left")
    .onChange((color) => {
      leftPanel.material.color.set(color);
      leftTopPanel.material.color.set(color);
      leftPanelLight.color = color;
      leftTopPanelLight.color = color;
    });
  folderPanels
    .addColor(settings, "rightPanelColor")
    .name("Right")
    .onChange((color) => {
      rightPanel.material.color.set(color);
      rightTopPanel.material.color.set(color);
      rightPanelLight.color = color;
      rightTopPanelLight.color = color;
    });
  folderPanels
    .addColor(settings, "backPanelColor")
    .name("Back")
    .onChange((color) => {
      backPanel.material.color.set(color);
      backTopPanel.material.color.set(color);
      backPanelLight.color = color;
      backTopPanelLight.color = color;
    });
  folderPanels
    .addColor(settings, "roofPanel")
    .name("Roof")
    .onChange((color) => {
      roofPanel.material.color.set(color);
    });

  // Lights folders
  const folderLights = gui.addFolder("Lights");
  folderLights.close();
  const folderDirectionalLight = folderLights.addFolder("Directional Light");
  const folderPointLight = folderLights.addFolder("Point Light");
  const folderSpotLight = folderLights.addFolder("Spot Light");
  const folderHemisphereLight = folderLights.addFolder("Hemisphere Light");

  // Helper object to add common light settings
  // TODO: add ambient light
  const lights = [
    {
      folder: folderDirectionalLight,
      ref: directionalLight,
      prefix: "directionalLight",
    },
    {
      folder: folderPointLight,
      ref: pointLight,
      prefix: "pointLight",
    },
    {
      folder: folderSpotLight,
      ref: spotLight,
      prefix: "spotLight",
    },
    {
      folder: folderHemisphereLight,
      ref: hemisphereLight,
      prefix: "hemisphereLight",
    },
  ];

  function addCommonLightSettings(light) {
    // Add light settings to the gui
    const folder = light["folder"];
    const ref = light["ref"];
    const prefix = light["prefix"];
    folder
      .add(settings, prefix + "Enable")
      .name("Enable")
      .onChange((toggle) => {
        ref.visible = toggle;
      });
    folder
      .add(settings, prefix + "Intensity")
      .min(0)
      .max(1)
      .name("Intensity")
      .onChange((intensity) => {
        ref.intensity = intensity;
      });
    folder
      .addColor(settings, prefix + "Color")
      .name("Color")
      .onChange((color) => {
        ref.color = color;
      });
  }

  // Add common settings for each light
  lights.forEach((light) => {
    addCommonLightSettings(light);
  });

  // Add other directional light settings
  folderDirectionalLight
    .add(settings, "directionalLightCastShadow")
    .name("Cast shadows")
    .onChange((toggle) => {
      directionalLight.castShadow = toggle;
    });
  folderDirectionalLight
    .add(settings, "directionalLightTarget", {
      Scene: scene,
      Table: table,
      Cone: coneLambert,
      Sphere: spherePhysical,
      Cylinder: cylinderPhong,
    })
    .name("Target")
    .onChange((tgt) => {
      directionalLight.target = tgt;
    });

  // Add other point light settings
  folderPointLight
    .add(settings, "pointLightCastShadow")
    .name("Cast shadows")
    .onChange((toggle) => {
      pointLight.castShadow = toggle;
    });
  // TODO: In context of physically-correct rendering the default value (2) should not be changed.
  folderPointLight
    .add(settings, "pointLightDecay")
    .min(0)
    .max(100)
    .name("Decay")
    .onChange((value) => {
      pointLight.decay = value;
    });
  folderPointLight
    .add(settings, "pointLightDistance")
    .min(0)
    .max(100)
    .name("Distance")
    .onChange((value) => {
      pointLight.distance = value;
    });
  folderPointLight
    .add(settings, "pointLightPower")
    .min(0)
    .max(100)
    .name("Power")
    .onChange((value) => {
      pointLight.power = value;
    });

  // Add other spot light settings
  folderSpotLight
    .add(settings, "spotLightAngle")
    .min(0)
    .max(180)
    .name("Angle (degrees)")
    .onChange((value) => {
      spotLight.angle = value * (Math.PI / 180);
    });
  folderSpotLight
    .add(settings, "spotLightCastShadow")
    .name("Cast shadow")
    .onChange((toggle) => {
      spotLight.castShadow = toggle;
    });
  folderSpotLight
    .add(settings, "spotLightDecay")
    .min(0)
    .max(100)
    .name("Decay")
    .onChange((value) => {
      spotLight.decay = value;
    });
  folderSpotLight
    .add(settings, "spotLightDistance")
    .min(0)
    .max(100)
    .name("Distance")
    .onChange((value) => {
      spotLight.distance = value;
    });
  folderSpotLight
    .add(settings, "spotLightPenumbra")
    .min(0)
    .max(1)
    .name("Penumbra")
    .onChange((value) => {
      spotLight.penumbra = value;
    });
  folderSpotLight
    .add(settings, "spotLightPower")
    .min(0)
    .max(100)
    .name("Power")
    .onChange((value) => {
      spotLight.power = value;
    });
  folderSpotLight
    .add(settings, "spotLightTarget", {
      Scene: scene,
      Table: table,
      Cone: coneLambert,
      Sphere: spherePhysical,
      Cylinder: cylinderPhong,
    })
    .name("Target")
    .onChange((tgt) => {
      spotLight.target = tgt;
    });

  // Add other hemisphere light settings
  folderHemisphereLight
    .addColor(settings, "hemisphereLightGroundColor")
    .name("Ground color")
    .onChange((color) => {
      hemisphereLight.groundColor = color;
    });

  // TODO: add other ambient light settings

  /* --- MATERIALS --- */
  const folderMaterial = gui.addFolder("Materials");
  folderMaterial.close();
  const folderMaterialCommon = folderMaterial.addFolder("Common settings");
  folderMaterialCommon.close();
  const folderMaterialLambert = folderMaterial.addFolder("Lambertian");
  folderMaterialLambert.close();
  const folderMaterialPhong = folderMaterial.addFolder("Phong");
  folderMaterialPhong.close();
  const folderMaterialPhysical = folderMaterial.addFolder("Physical");
  folderMaterialPhysical.close();

  function addCommonMaterialSettings(folder) {
    // Add materials settings to the gui
    const prefix = "materials";

    folder
      .add(settings, prefix + "AlphaTest")
      .name("Alpha test")
      .onChange((value) => {
        coneLambert.material.alphaTest = value;
        cylinderPhong.material.alphaTest = value;
        spherePhysical.material.alphaTest = value;
      });

    folder
      .add(settings, prefix + "AlphaToCoverage")
      .name("Alpha to coverage")
      .onChange((value) => {
        coneLambert.material.alphaToCoverage = value;
        cylinderPhong.material.alphaToCoverage = value;
        spherePhysical.material.alphaToCoverage = value;
      });

    folder
      .add(settings, prefix + "Blending", {
        None: THREE.NoBlending,
        Normal: THREE.NormalBlending,
        Additive: THREE.AdditiveBlending,
        Subtractive: THREE.SubtractiveBlending,
        Multiply: THREE.MultiplyBlending,
        Custom: THREE.CustomBlending,
      })
      .name("Blending")
      .onChange((value) => {
        coneLambert.material.blending = value;
        cylinderPhong.material.blending = value;
        spherePhysical.material.blending = value;
      });

    folder
      .add(settings, prefix + "BlendDst", {
        "One factor": THREE.OneFactor,
        "Zero factor": THREE.ZeroFactor,
        "Src color factor": THREE.SrcColorFactor,
        "One minus src color factor": THREE.OneMinusSrcColorFactor,
        "Src alpha factor": THREE.SrcAlphaFactor,
        "One minus src alpha factor": THREE.OneMinusSrcAlphaFactor,
        "Dst alpha factor": THREE.DstAlphaFactor,
        "One minus dst alpha factor": THREE.OneMinusDstAlphaFactor,
        "Dst color factor": THREE.DstColorFactor,
        "One minus dst color factor": THREE.OneMinusDstColorFactor,
      })
      .name("Blending destination")
      .onChange((value) => {
        coneLambert.material.blendDst = value;
        cylinderPhong.material.blendDst = value;
        spherePhysical.material.blendDst = value;
      });

    folder
      .add(settings, prefix + "BlendDstAlpha")
      .name("Blending destination transparency")
      .onChange((value) => {
        coneLambert.material.blendDstAlpha = value;
        cylinderPhong.material.blendDstAlpha = value;
        spherePhysical.material.blendDstAlpha = value;
      });

    folder
      .add(settings, prefix + "BlendEquation", {
        "One factor": THREE.AddEquation,
        "Zero factor": THREE.SubtractEquation,
        "Src color factor": THREE.ReverseSubtractEquation,
        "One minus src color factor": THREE.MinEquation,
        "Src alpha factor": THREE.MaxEquation,
      })
      .name("Blending equation")
      .onChange((value) => {
        coneLambert.material.blendEquation = value;
        cylinderPhong.material.blendEquation = value;
        spherePhysical.material.blendEquation = value;
      });

    folder
      .add(settings, prefix + "BlendEquationAlpha")
      .min(0)
      .max(1)
      .name("Blending equation transparency")
      .onChange((value) => {
        coneLambert.material.blendEquationAlpha = value;
        cylinderPhong.material.blendEquationAlpha = value;
        spherePhysical.material.blendEquationAlpha = value;
      });

    folder
      .add(settings, prefix + "BlendSrc", {
        "One factor": THREE.OneFactor,
        "Zero factor": THREE.ZeroFactor,
        "Src color factor": THREE.SrcColorFactor,
        "One minus src color factor": THREE.OneMinusSrcColorFactor,
        "Src alpha factor": THREE.SrcAlphaFactor,
        "One minus src alpha factor": THREE.OneMinusSrcAlphaFactor,
        "Dst alpha factor": THREE.DstAlphaFactor,
        "One minus dst alpha factor": THREE.OneMinusDstAlphaFactor,
        "Dst color factor": THREE.DstColorFactor,
        "One minus dst color factor": THREE.OneMinusDstColorFactor,
        "Src alpha saturate factor": THREE.SrcAlphaSaturateFactor,
      })
      .name("Blending source")
      .onChange((value) => {
        coneLambert.material.blendSrc = value;
        cylinderPhong.material.blendSrc = value;
        spherePhysical.material.blendSrc = value;
      });

    folder
      .add(settings, prefix + "BlendSrcAlpha")
      .min(0)
      .max(1)
      .name("Blending source transparency")
      .onChange((value) => {
        coneLambert.material.blendSrcAlpha = value;
        cylinderPhong.material.blendSrcAlpha = value;
        spherePhysical.material.blendSrcAlpha = value;
      });

    folder
      .add(settings, prefix + "ClipIntersection")
      .name("Clip intersection")
      .onChange((toggle) => {
        coneLambert.material.clipIntersection = toggle;
        cylinderPhong.material.clipIntersection = toggle;
        spherePhysical.material.clipIntersection = toggle;
      });

    folder
      .add(settings, prefix + "ClipShadows")
      .name("Clip shadows")
      .onChange((toggle) => {
        coneLambert.material.clipShadows = toggle;
        cylinderPhong.material.clipShadows = toggle;
        spherePhysical.material.clipShadows = toggle;
      });

    folder
      .add(settings, prefix + "ColorWrite")
      .name("Color write")
      .onChange((toggle) => {
        coneLambert.material.colorWrite = toggle;
        cylinderPhong.material.colorWrite = toggle;
        spherePhysical.material.colorWrite = toggle;
      });

    folder
      .add(settings, prefix + "DepthFunc", {
        Never: THREE.NeverDepth,
        Always: THREE.AlwaysDepth,
        Equal: THREE.EqualDepth,
        Less: THREE.LessDepth,
        "Less equal": THREE.LessEqualDepth,
        "Greater equal": THREE.GreaterEqualDepth,
        Greater: THREE.GreaterDepth,
        "Not equal": THREE.NotEqualDepth,
      })
      .name("Depth function")
      .onChange((value) => {
        coneLambert.material.depthFunc = value;
        cylinderPhong.material.depthFunc = value;
        spherePhysical.material.depthFunc = value;
      });

    folder
      .add(settings, prefix + "DepthTest")
      .name("Enable depth test")
      .onChange((value) => {
        coneLambert.material.depthTest = value;
        cylinderPhong.material.depthTest = value;
        spherePhysical.material.depthTest = value;
      });

    folder
      .add(settings, prefix + "DepthWrite")
      .name("Enable depth write")
      .onChange((value) => {
        coneLambert.material.depthWrite = value;
        cylinderPhong.material.depthWrite = value;
        spherePhysical.material.depthWrite = value;
      });

    folder
      .add(settings, prefix + "StencilWrite")
      .name("Enable stencil write")
      .onChange((value) => {
        coneLambert.material.stencilWrite = value;
        cylinderPhong.material.stencilWrite = value;
        spherePhysical.material.stencilWrite = value;
      });

    folder
      .add(settings, prefix + "StencilWriteMask")
      .name("Stencil write mask")
      .onChange((value) => {
        coneLambert.material.stencilWriteMast = value;
        cylinderPhong.material.stencilWriteMast = value;
        spherePhysical.material.stencilWriteMast = value;
      });

    folder
      .add(settings, prefix + "StencilFunc", {
        Never: THREE.NeverStencilFunc,
        Less: THREE.LessStencilFunc,
        Equal: THREE.EqualStencilFunc,
        "Less equal": THREE.LessEqualStencilFunc,
        "Greater equal": THREE.GreaterStencilFunc,
        "Not equal": THREE.NotEqualStencilFunc,
        "Greater equal": THREE.GreaterEqualStencilFunc,
        Always: THREE.AlwaysStencilFunc,
      })
      .name("Depth function")
      .onChange((value) => {
        coneLambert.material.stencilFunc = value;
        cylinderPhong.material.stencilFunc = value;
        spherePhysical.material.stencilFunc = value;
      });

    folder
      .add(settings, prefix + "StencilRef")
      .name("Stencil ref")
      .onChange((value) => {
        coneLambert.material.stencilRef = value;
        cylinderPhong.material.stencilRef = value;
        spherePhysical.material.stencilRef = value;
      });

    folder
      .add(settings, prefix + "StencilFuncMask")
      .name("Stencil function mask")
      .onChange((value) => {
        coneLambert.material.stencilFuncMask = value;
        cylinderPhong.material.stencilFuncMask = value;
        spherePhysical.material.stencilFuncMask = value;
      });

    folder
      .add(settings, prefix + "StencilFail", {
        Zero: THREE.ZeroStencilOp,
        Keep: THREE.KeepStencilOp,
        Replace: THREE.ReplaceStencilOp,
        Increment: THREE.IncrementStencilOp,
        Decrement: THREE.DecrementStencilOp,
        "Increment wrap": THREE.IncrementWrapStencilOp,
        "Decrement wrap": THREE.DecrementWrapStencilOp,
        Invert: THREE.InvertStencilOp,
      })
      .name("Stencil fail operation")
      .onChange((value) => {
        coneLambert.material.stencilFail = value;
        cylinderPhong.material.stencilFail = value;
        spherePhysical.material.stencilFail = value;
      });

    folder
      .add(settings, prefix + "StencilZFail", {
        Zero: THREE.ZeroStencilOp,
        Keep: THREE.KeepStencilOp,
        Replace: THREE.ReplaceStencilOp,
        Increment: THREE.IncrementStencilOp,
        Decrement: THREE.DecrementStencilOp,
        "Increment wrap": THREE.IncrementWrapStencilOp,
        "Decrement wrap": THREE.DecrementWrapStencilOp,
        Invert: THREE.InvertStencilOp,
      })
      .name("Stencil Z fail operation")
      .onChange((value) => {
        coneLambert.material.stencilZFail = value;
        cylinderPhong.material.stencilZFail = value;
        spherePhysical.material.stencilZFail = value;
      });

    folder
      .add(settings, prefix + "StencilZPass", {
        Zero: THREE.ZeroStencilOp,
        Keep: THREE.KeepStencilOp,
        Replace: THREE.ReplaceStencilOp,
        Increment: THREE.IncrementStencilOp,
        Decrement: THREE.DecrementStencilOp,
        "Increment wrap": THREE.IncrementWrapStencilOp,
        "Decrement wrap": THREE.DecrementWrapStencilOp,
        Invert: THREE.InvertStencilOp,
      })
      .name("Stencil Z pass operation")
      .onChange((value) => {
        coneLambert.material.stencilZPass = value;
        cylinderPhong.material.stencilZPass = value;
        spherePhysical.material.stencilZPass = value;
      });

    folder
      .add(settings, prefix + "Transparent")
      .name("Enable transparency")
      .onChange((value) => {
        coneLambert.material.transparent = value;
        cylinderPhong.material.transparent = value;
        spherePhysical.material.transparent = value;
      });

    folder
      .add(settings, prefix + "Opacity")
      .min(0)
      .max(1)
      .name("Opacity")
      .onChange((value) => {
        coneLambert.material.opacity = value;
        cylinderPhong.material.opacity = value;
        spherePhysical.material.opacity = value;
      });

    folder
      .add(settings, prefix + "PolygonOffset")
      .name("Polygon Offset")
      .onChange((value) => {
        coneLambert.material.polygonOffset = value;
        cylinderPhong.material.polygonOffset = value;
        spherePhysical.material.polygonOffset = value;
      });

    folder
      .add(settings, prefix + "PolygonOffsetFactor")
      .name("Polygon offset factor")
      .onChange((value) => {
        coneLambert.material.polygonOffsetFactor = value;
        cylinderPhong.material.polygonOffsetFactor = value;
        spherePhysical.material.polygonOffsetFactor = value;
      });

    folder
      .add(settings, prefix + "PolygonOffsetUnits")
      .name("Polygon offset units")
      .onChange((value) => {
        coneLambert.material.polygonOffsetUnits = value;
        cylinderPhong.material.polygonOffsetUnits = value;
        spherePhysical.material.polygonOffsetUnits = value;
      });

    folder
      .add(settings, prefix + "Precision", {
        High: "highp",
        Medium: "mediump",
        Low: "lowp",
        Null: null,
      })
      .name("Precision")
      .onChange((value) => {
        coneLambert.material.precision = value;
        cylinderPhong.material.precision = value;
        spherePhysical.material.precision = value;
      });

    folder
      .add(settings, prefix + "PremultipliedAlpha")
      .name("Premultiplied alpha")
      .onChange((value) => {
        coneLambert.material.premultipliedAlpha = value;
        cylinderPhong.material.premultipliedAlpha = value;
        spherePhysical.material.premultipliedAlpha = value;
      });

    folder
      .add(settings, prefix + "Dithering")
      .name("Dithering")
      .onChange((value) => {
        coneLambert.material.dithering = value;
        cylinderPhong.material.dithering = value;
        spherePhysical.material.dithering = value;
      });

    folder
      .add(settings, prefix + "ShadowSide", {
        Front: THREE.FrontSide,
        Back: THREE.BackSide,
        Double: THREE.DoubleSide,
        Null: null,
      })
      .name("Shadow side")
      .onChange((value) => {
        coneLambert.material.shadowSide = value;
        cylinderPhong.material.shadowSide = value;
        spherePhysical.material.shadowSide = value;
      });

    folder
      .add(settings, prefix + "Side", {
        Front: THREE.FrontSide,
        Back: THREE.BackSide,
        Double: THREE.DoubleSide,
      })
      .name("Side")
      .onChange((value) => {
        coneLambert.material.side = value;
        cylinderPhong.material.side = value;
        spherePhysical.material.side = value;
      });

    folder
      .add(settings, prefix + "ToneMapped")
      .name("Tone mapped")
      .onChange((value) => {
        coneLambert.material.toneMapped = value;
        cylinderPhong.material.toneMapped = value;
        spherePhysical.material.toneMapped = value;
      });

    folder
      .add(settings, prefix + "VertexColors")
      .name("Enable vertex colors")
      .onChange((value) => {
        coneLambert.material.vertexColors = value;
        cylinderPhong.material.vertexColors = value;
        spherePhysical.material.vertexColors = value;
      });

    folder
      .add(settings, prefix + "AlphaMap", { Null: null, "Grenouille-gray": exampleGrayTexture })
      .name("Alpha map")
      .onChange((value) => {
        coneLambert.material.alphaMap = value;
        cylinderPhong.material.alphaMap = value;
        spherePhysical.material.alphaMap = value;
      });

    folder
      .add(settings, prefix + "AoMap", {
        Null: null,
        Grenouille: exampleTexture,
        "Grenouille-gray": exampleGrayTexture,
      })
      .name("Ambient occlusion map")
      .onChange((value) => {
        coneLambert.material.aoMap = value;
        cylinderPhong.material.aoMap = value;
        spherePhysical.material.aoMap = value;
      });

    folder
      .add(settings, prefix + "AoMapIntensity")
      .min(0)
      .name("Ambient occlusion intensity")
      .onChange((value) => {
        coneLambert.material.aoMapIntensity = value;
        cylinderPhong.material.aoMapIntensity = value;
        spherePhysical.material.aoMapIntensity = value;
      });

    folder
      .add(settings, prefix + "BumpMap", {
        Null: null,
        Grenouille: exampleTexture,
        "Grenouille-gray": exampleGrayTexture,
      })
      .name("Bump map")
      .onChange((value) => {
        coneLambert.material.bumpMap = value;
        cylinderPhong.material.bumpMap = value;
        spherePhysical.material.bumpMap = value;
      });

    folder
      .add(settings, prefix + "BumpScale")
      .min(0)
      .name("Bump map scale")
      .onChange((value) => {
        coneLambert.material.bumpScale = value;
        cylinderPhong.material.bumpScale = value;
        spherePhysical.material.bumpScale = value;
      });

    folder
      .addColor(settings, prefix + "Color")
      .name("Color")
      .onChange((value) => {
        coneLambert.material.color = value;
        cylinderPhong.material.color = value;
        spherePhysical.material.color = value;
      });

    folder
      .add(settings, prefix + "DisplacementMap", {
        Null: null,
        Grenouille: exampleTexture,
        "Grenouille-gray": exampleGrayTexture,
      })
      .name("Displacement map")
      .onChange((value) => {
        coneLambert.material.displacementMap = value;
        cylinderPhong.material.displacementMap = value;
        spherePhysical.material.displacementMap = value;
      });

    folder
      .add(settings, prefix + "DisplacementScale")
      .name("Displacement scale")
      .onChange((value) => {
        coneLambert.material.displacementScale = value;
        cylinderPhong.material.displacementScale = value;
        spherePhysical.material.displacementScale = value;
      });

    folder
      .add(settings, prefix + "DisplacementBias")
      .name("Displacement bias")
      .onChange((value) => {
        coneLambert.material.displacementBias = value;
        cylinderPhong.material.displacementBias = value;
        spherePhysical.material.displacementBias = value;
      });

    folder
      .addColor(settings, prefix + "Emissive")
      .name("Emissive (light) color")
      .onChange((value) => {
        coneLambert.material.emissive = value;
        cylinderPhong.material.emissive = value;
        spherePhysical.material.emissive = value;
      });

    folder
      .add(settings, prefix + "EmissiveMap", {
        Null: null,
        Grenouille: exampleTexture,
        "Grenouille-gray": exampleGrayTexture,
      })
      .name("Emissive (glow) map")
      .onChange((value) => {
        coneLambert.material.emissiveMap = value;
        cylinderPhong.material.emissiveMap = value;
        spherePhysical.material.emissiveMap = value;
      });

    folder
      .add(settings, prefix + "EmissiveIntensity")
      .name("Emissive intensity")
      .onChange((value) => {
        coneLambert.material.emissiveIntensity = value;
        cylinderPhong.material.emissiveIntensity = value;
        spherePhysical.material.emissiveIntensity = value;
      });

    folder
      .add(settings, prefix + "EnvMap", {
        Null: null,
        Grenouille: exampleTexture,
        "Grenouille-gray": exampleGrayTexture,
      })
      .name("Environment map")
      .onChange((value) => {
        coneLambert.material.envMap = value;
        cylinderPhong.material.envMap = value;
        spherePhysical.material.envMap = value;
      });

    folder
      .add(settings, prefix + "FlatShading")
      .name("Enable flat shading")
      .onChange((value) => {
        coneLambert.material.flatShading = value;
        cylinderPhong.material.flatShading = value;
        spherePhysical.material.flatShading = value;
      });

    folder
      .add(settings, prefix + "Fog")
      .name("Affected by fog")
      .onChange((value) => {
        coneLambert.material.fog = value;
        cylinderPhong.material.fog = value;
        spherePhysical.material.fog = value;
      });

    folder
      .add(settings, prefix + "LightMap", {
        Null: null,
        Grenouille: exampleTexture,
        "Grenouille-gray": exampleGrayTexture,
      })
      .name("Light map")
      .onChange((value) => {
        coneLambert.material.lightMap = value;
        cylinderPhong.material.lightMap = value;
        spherePhysical.material.lightMap = value;
      });

    folder
      .add(settings, prefix + "LightMapIntensity")
      .name("Light map intensity")
      .onChange((value) => {
        coneLambert.material.lightMapIntensity = value;
        cylinderPhong.material.lightMapIntensity = value;
        spherePhysical.material.lightMapIntensity = value;
      });

    folder
      .add(settings, prefix + "Map", {
        Null: null,
        Grenouille: exampleTexture,
        "Grenouille-gray": exampleGrayTexture,
      })
      .name("Color map")
      .onChange((value) => {
        coneLambert.material.map = value;
        cylinderPhong.material.map = value;
        spherePhysical.material.map = value;
      });

    folder
      .add(settings, prefix + "NormalMap", {
        Null: null,
        Grenouille: exampleTexture,
        "Grenouille-gray": exampleGrayTexture,
      })
      .name("Normal map")
      .onChange((value) => {
        coneLambert.material.normalMap = value;
        cylinderPhong.material.normalMap = value;
        spherePhysical.material.normalMap = value;
      });

    folder
      .add(settings, prefix + "NormalMapType", {
        "Tangent space": THREE.TangentSpaceNormalMap,
        "Object space": THREE.ObjectSpaceNormalMap,
      })
      .name("Normal map type")
      .onChange((value) => {
        coneLambert.material.normalMapType = value;
        cylinderPhong.material.normalMapType = value;
        spherePhysical.material.normalMapType = value;
      });

    folder
      .add(settings, prefix + "NormalScaleX")
      .name("Normal scale X")
      .onChange((value) => {
        coneLambert.material.normalScale.x = value;
        cylinderPhong.material.normalScale.x = value;
        spherePhysical.material.normalScale.x = value;
      });

    folder
      .add(settings, prefix + "NormalScaleY")
      .name("Normal scale Y")
      .onChange((value) => {
        coneLambert.material.normalScale.y = value;
        cylinderPhong.material.normalScale.y = value;
        spherePhysical.material.normalScale.y = value;
      });

    folder
      .add(settings, prefix + "Wireframe")
      .name("Wireframe")
      .onChange((value) => {
        coneLambert.material.wireframe = value;
        cylinderPhong.material.wireframe = value;
        spherePhysical.material.wireframe = value;
      });

    folder
      .add(settings, prefix + "WireframeLinecap", { Round: "round", Butt: "butt", Square: "square" })
      .name("Wireframe linecap")
      .onChange((value) => {
        coneLambert.material.wireframeLinecap = value;
        cylinderPhong.material.wireframeLinecap = value;
        spherePhysical.material.wireframeLinecap = value;
      });

    folder
      .add(settings, prefix + "WireframeLinejoin", { Round: "round", Bevel: "bevel", Miter: "miter" })
      .name("Wireframe linejoin")
      .onChange((value) => {
        coneLambert.material.wireframeLinejoin = value;
        cylinderPhong.material.wireframeLinejoin = value;
        spherePhysical.material.wireframeLinejoin = value;
      });
  }

  addCommonMaterialSettings(folderMaterialCommon);

  /* --- LAMBERT --- */
  folderMaterialLambert
    .add(settings, "lambertCombine", {
      Multiply: THREE.MultiplyOperation,
      Mix: THREE.MixOperation,
      Add: THREE.AddOperation,
    })
    .name("Combine")
    .onChange((value) => {
      coneLambert.material.combine = value;
    });

  folderMaterialLambert
    .add(settings, "lambertReflectivity")
    .name("Reflectivity")
    .onChange((value) => {
      coneLambert.material.reflectivity = value;
    });

  folderMaterialLambert
    .add(settings, "lambertRefractionRatio")
    .name("Refraction")
    .onChange((value) => {
      coneLambert.material.refractionRatio = value;
    });

  folderMaterialLambert
    .add(settings, "lambertSpecularMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Specular map")
    .onChange((value) => {
      coneLambert.material.specularMap = value;
    });

  /* --- PHONG --- */
  folderMaterialPhong
    .add(settings, "phongCombine", {
      Multiply: THREE.MultiplyOperation,
      Mix: THREE.MixOperation,
      Add: THREE.AddOperation,
    })
    .name("Combine")
    .onChange((value) => {
      cylinderPhong.material.combine = value;
    });

  folderMaterialPhong
    .add(settings, "phongReflectivity")
    .name("Reflectivity")
    .onChange((value) => {
      cylinderPhong.material.reflectivity = value;
    });

  folderMaterialPhong
    .add(settings, "phongRefractionRatio")
    .name("Refraction")
    .onChange((value) => {
      cylinderPhong.material.refractionRatio = value;
    });

  folderMaterialPhong
    .add(settings, "phongShininess")
    .name("Shininess")
    .onChange((value) => {
      cylinderPhong.material.shininess = value;
    });

  folderMaterialPhong
    .addColor(settings, "phongSpecular")
    .name("Specular color")
    .onChange((value) => {
      cylinderPhong.material.specularColor = value;
    });

  folderMaterialPhong
    .add(settings, "phongSpecularMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Specular map")
    .onChange((value) => {
      cylinderPhong.material.specularMap = value;
    });

  /* --- PHYSICAL --- */
  // MeshStandardMaterial properties
  folderMaterialPhysical
    .add(settings, "physicalEnvMapIntensity")
    .name("Environment map intensity")
    .onChange((value) => {
      spherePhysical.material.envMapIntensity = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalMetalness")
    .name("Metalness")
    .onChange((value) => {
      spherePhysical.material.metalness = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalMetalnessMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Metalness map")
    .onChange((value) => {
      spherePhysical.material.metalnessMap = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalRoughness")
    .name("Roughness")
    .onChange((value) => {
      spherePhysical.material.roughness = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalRoughnessMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Roughness map")
    .onChange((value) => {
      spherePhysical.material.roughnessMap = value;
    });

  // Physical material properties
  folderMaterialPhysical
    .addColor(settings, "physicalAttenuationColor")
    .name("Attenuation color")
    .onChange((value) => {
      spherePhysical.material.attenuationColor = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalAttenuationDistance")
    .min(0)
    .name("Attenuation distance")
    .onChange((value) => {
      spherePhysical.material.attenuationDistance = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalClearcoat")
    .min(0)
    .max(1)
    .name("Clear coat layer intensity")
    .onChange((value) => {
      spherePhysical.material.clearcoat = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalClearcoatMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Clearcoat map")
    .onChange((value) => {
      spherePhysical.material.clearcoatMap = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalClearcoatNormalMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Clearcoat normal map")
    .onChange((value) => {
      spherePhysical.material.clearcoatNormalMap = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalClearcoatNormalScaleX")
    .min(0)
    .max(1)
    .name("Clearcoat normal scale X")
    .onChange((value) => {
      spherePhysical.material.clearcoatNormalScale.x = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalClearcoatNormalScaleY")
    .min(0)
    .max(1)
    .name("Clearcoat normal scale y")
    .onChange((value) => {
      spherePhysical.material.clearcoatNormalScale.y = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalClearcoatRoughness")
    .min(0)
    .max(1)
    .name("Clearcoat roughness")
    .onChange((value) => {
      spherePhysical.material.clearcoatRoughness = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalClearcoatRoughnessMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Clearcoat roughness map")
    .onChange((value) => {
      spherePhysical.material.clearcoatRoughnessMap = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalIor")
    .min(1)
    .max(2.333)
    .name("Index of refraction (ior)")
    .onChange((value) => {
      spherePhysical.material.ior = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalReflectivity")
    .min(0)
    .max(1)
    .name("Reflectivity")
    .onChange((value) => {
      spherePhysical.material.reflectivity = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalSheen")
    .min(0)
    .max(1)
    .name("Sheen layer intensity")
    .onChange((value) => {
      spherePhysical.material.sheen = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalSheenRoughness")
    .min(0)
    .max(1)
    .name("Sheen layer roughness")
    .onChange((value) => {
      spherePhysical.material.sheen = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalSheenRoughnessMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Sheen roughness map")
    .onChange((value) => {
      spherePhysical.material.sheenRoughnessMap = value;
    });

  folderMaterialPhysical
    .addColor(settings, "physicalSheenColor")
    .name("Sheen color")
    .onChange((value) => {
      spherePhysical.material.sheenColor = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalSheenColorMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Sheen color map")
    .onChange((value) => {
      spherePhysical.material.sheenColorMap = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalSpecularIntensity")
    .min(0)
    .max(1)
    .name("Specular intensity")
    .onChange((value) => {
      spherePhysical.material.specularIntensity = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalSpecularIntensityMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Specular intensity map")
    .onChange((value) => {
      spherePhysical.material.specularIntensityMap = value;
    });

  folderMaterialPhysical
    .addColor(settings, "physicalSpecularColor")
    .name("Specular color")
    .onChange((value) => {
      spherePhysical.material.specularColor = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalSpecularColorMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Specular color map")
    .onChange((value) => {
      spherePhysical.material.specularColorMap = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalThickness")
    .name("Thickness")
    .onChange((value) => {
      spherePhysical.material.thickness = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalThicknessMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Thickness map")
    .onChange((value) => {
      spherePhysical.material.thicknessMap = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalTransmission")
    .min(0)
    .max(1)
    .name("Transmission")
    .onChange((value) => {
      spherePhysical.material.thickness = value;
    });

  folderMaterialPhysical
    .add(settings, "physicalTransmissionMap", {
      Null: null,
      Grenouille: exampleTexture,
      "Grenouille-gray": exampleGrayTexture,
    })
    .name("Transmission map")
    .onChange((value) => {
      spherePhysical.material.transmissionMap = value;
    });

  /* --- SHADOWS --- */
  const folderShadow = gui.addFolder("Shadows");
  folderShadow
    .add(settings, "shadowAutoUpdate")
    .name("Auto update")
    .onChange((value) => {
      directionalLight.shadow.autoUpdate = value;
      pointLight.shadow.autoUpdate = value;
      spotLight.shadow.autoUpdate = value;
    });

  folderShadow
    .add(settings, "shadowBias")
    .name("Bias")
    .onChange((value) => {
      directionalLight.shadow.bias = value;
      pointLight.shadow.bias = value;
      spotLight.shadow.bias = value;
    });

  folderShadow
    .add(settings, "shadowBlurSamples")
    .name("Blur samples")
    .onChange((value) => {
      directionalLight.shadow.blurSamples = value;
      pointLight.shadow.blurSamples = value;
      spotLight.shadow.blurSamples = value;
    });

  folderShadow
    .add(settings, "shadowMapWidth")
    .name("Map width")
    .onChange((value) => {
      directionalLight.shadow.mapSize.width = value;
      directionalLight.shadow.map.dispose();
      directionalLight.shadow.map = null;

      pointLight.shadow.mapSize.width = value;
      pointLight.shadow.map.dispose();
      pointLight.shadow.map = null;

      spotLight.shadow.mapSize.width = value;
      spotLight.shadow.map.dispose();
      spotLight.shadow.map = null;
    });

  folderShadow
    .add(settings, "shadowMapHeight")
    .name("Map height")
    .onChange((value) => {
      directionalLight.shadow.mapSize.height = value;
      directionalLight.shadow.map.dispose();
      directionalLight.shadow.map = null;

      pointLight.shadow.mapSize.height = value;
      pointLight.shadow.map.dispose();
      pointLight.shadow.map = null;

      spotLight.shadow.mapSize.height = value;
      spotLight.shadow.map.dispose();
      spotLight.shadow.map = null;
    });

  folderShadow
    .add(settings, "shadowNormalBias")
    .name("Normal bias")
    .onChange((value) => {
      directionalLight.shadow.normalBias = value;
      pointLight.shadow.normalBias = value;
      spotLight.shadow.normalBias = value;
    });

  folderShadow
    .add(settings, "shadowRadius")
    .name("Radius")
    .onChange((value) => {
      directionalLight.shadow.radius = value;
      pointLight.shadow.radius = value;
      spotLight.shadow.radius = value;
    });
  // Add gui to VR
  const group = new InteractiveGroup(renderer, camera);
  scene.add(group);

  const mesh = new HTMLMesh(gui.domElement);
  mesh.position.x = -1;
  mesh.position.y = 2;
  mesh.position.z = -0.5;
  mesh.rotation.y = Math.PI / 4;
  mesh.scale.setScalar(2);
  group.add(mesh);
  // TODO: for VR, place the gui as an object with listeners for sessionStart and sessionEnd so it only shows up in VR
}
