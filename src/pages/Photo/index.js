import React from "react";

import CameraInterface from "../../components/CameraInterface";

const Photo = () => (
  <CameraInterface only="photo" style={{ position: "absolute" }} />
);

export default Photo;
