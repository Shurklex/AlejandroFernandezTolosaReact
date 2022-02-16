import {test} from "@testing-library/react";
import Button from "react-bootstrap/esm/Button";

test("Pruebas unitarias botón", () =>{

  const funcion = function hola() {console.log("Hola, han hecho click")};

  const boton = <Button text="Hola :)" onClickButton={funcion}/> 

  render(boton)
});