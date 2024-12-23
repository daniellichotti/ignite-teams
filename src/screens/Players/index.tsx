import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import React from "react";
import { Container, Form } from "./styles";

export function Players(){
  return(
    <Container>
      <Header showBackButton/>

      <Highlight
        title="Nome da turma"
        subtitle="adiciona a galera e separe os times"
      />

      <Form>
        <Input
        placeholder="Nome da pessoa"
        autoCorrect={false}
        />
        <ButtonIcon
          icon="add"
        />
      </Form>
      
    </Container>
  )
}