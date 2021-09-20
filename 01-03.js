// create a scene, that will hold all our elements such as objects, cameras and lights.
var scene = new THREE.Scene();

function cubo(x, y, z, colorCubo, material, estilo){
   // create a cube
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material){
        case 'Basic':cubeMaterial = new THREE.MeshBasicMaterial({color: colorCubo, wireframe: estilo});
            break;
        case 'Standard':cubeMaterial = new THREE.MeshStandardMaterial({color: colorCubo, wireframe: estilo});
            break;
        case 'Physical':cubeMaterial = new THREE.MeshPhysicalMaterial({color: colorCubo, wireframe: estilo});
            break;
        case 'Phong':cubeMaterial = new THREE.MeshPhongMaterial({color: colorCubo, wireframe: estilo});
            break;
        case 'Lambert':cubeMaterial = new THREE.MeshLambertMaterial({color: colorCubo, wireframe: estilo});
            break;
    }

    var cubito = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // add the cube to the scene
    scene.add(cubito);
    return cubito;
}

function init() {
    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, -5, -8);

    // add the plane to the scene
    scene.add(plane);

    // create cube
    cube = cubo(4,4,4, 0xFF0000, 'Basic', false);
    //position the cube
    cube.position.set(-4, 3, 0);

    // create cube
    cube2 = cubo(4,4,4, 0xFF0000, 'Standard', false);
    //position the cube
    cube2.position.set(-4, 9, 0);

    // create a sphere
    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x7777FF,
        wireframe: true
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    sphere.position.set(0, 0, 0);

    // add the sphere to the scene
    scene.add(sphere);

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}