import React from 'react';

import LogoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="Github Explorer" />
      <Title>Exeplore repositórios no github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/23103214?s=460&u=70f0eac4c84c228369146a01642ed529314ab0a8&v=4"
            alt="Leonardo Vales"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Projeto de desenvolvimento de software com Nodejs e Reactjs</p>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
