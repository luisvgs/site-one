import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations, Html, Sphere } from "@react-three/drei";
import axios from "axios";
import Monitor from "../../../models/WideMonitor.glb";
import { useSnapshot } from "valtio";
import { state } from "../../../store/state";
import { Touch } from "../../Touch";

const MonitorWideTexture = (props) => {
  useSnapshot(state);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Monitor);
  const name = null;
  const phone = null;
  const email = null;
  const message = null;

  const api_key = "874e22a5-cbf8-4da7-bd96-8547289d5343";
  axios.defaults.headers.common = {
    tm_api_key: api_key,
  };

  const axios_promise = async () => {
    await axios
      .post(`https://api-techminds-qqyvwq2paa-uc.a.run.app/api/v1/email`, {
        to: "luis.vegas@sitiouno.com",
        from: "noreply@siteone.com",
        subject: "Testsito",
        text: "Test",
        html: `<h1>Site One received a new message</h1>
        <br>
        <ul>
          <li>
          name: ${document.getElementById("name").value}
          </li>
          <li>
            Email: ${document.getElementById("email").value}
          </li>
          <li>
            Phone: ${document.getElementById("message").value}
          </li>
          <li>
            Message: ${document.getElementById("message").value}
          </li>
        </ul>
        `,
      })
      .then((res) => {
        console.log("Message was send");
        console.log(res);
      })
      .catch((err) => {
        console.log("OH SHIT OH FUCK");
        console.log(err);
      });
  };

  const TransparentButton = (props) => {
    const [hovered, setHover] = useState(false);
    useEffect(
      () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
      [hovered]
    );
    return (
      <mesh
        {...props}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHover(false);
        }}
        // onClick={() => axios_promise()}
      >
        <boxGeometry />
        <meshPhongMaterial color="#ff0000" opacity={0.01} transparent />
      </mesh>
    );
  };

  return (
    <group
      onDoubleClick={() => (state.zoom = false)}
      onClick={() => (state.zoom = true)}
      ref={group}
      scale={[0.2, 0.2, 0.14]}
      {...props}
      dispose={null}
    >
      <TransparentButton
        position={[-0.66, 1.3, 0.3]}
        scale={[0.3, 0.17, 0.1]}
      />
      {state.zoom ? <> </> : <Touch position={[-4.0, 2.6, 0.3]} scale={0.08} />}
      <group name="Scene">
        <mesh
          name="Plane011"
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.Material}
          position={[-1.22, 1.9, -0.48]}
        />
        <mesh
          name="Stand001"
          castShadow
          receiveShadow
          geometry={nodes.Stand001.geometry}
          material={materials["Material.101"]}
          position={[-1.32, 1.29, -0.77]}
        />
        <mesh
          name="pantalla_wide"
          castShadow
          receiveShadow
          geometry={nodes.pantalla_wide.geometry}
          material={materials["pantalla_wide "]}
          position={[-1.25, 1.9, -0.36]}
        >
          {state.zoom ? (
            <>
              <Html
                scale={0.3}
                position={[-2.4, 0.44, -0.98]}
                style={{
                  background: "transparent",
                }}
                transform
              >
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                  }}
                />
              </Html>
              <Html
                scale={0.3}
                position={[-2.4, -0.18, -0.98]}
                style={{
                  background: "transparent",
                }}
                transform
              >
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                  }}
                />
              </Html>
              <Html
                scale={0.3}
                position={[-2.4, -0.89, -0.98]}
                rotateX={6}
                style={{
                  background: "transparent",
                }}
                transform
              >
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                  }}
                />
              </Html>
              <Html
                scale={0.3}
                position={[0.7, -0.1, -0.98]}
                rotation={[0, 0.1, 0]}
                style={{
                  background: "transparent",
                }}
                transform
              >
                <textarea
                  rows="10"
                  cols="13"
                  type="text"
                  id="message"
                  placeholder="Message"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                    resize: "none",
                  }}
                />
              </Html>
            </>
          ) : (
            ""
          )}
        </mesh>
      </group>
    </group>
  );
};

export default MonitorWideTexture;
useGLTF.preload(Monitor);
