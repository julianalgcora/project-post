import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon='home' title='Início' subtitle='Apresentação do projeto'>
        <div className="display-4">
            Bem vindo!
        </div>
        <hr />
        <p className="mb-0">
            Aplicação permite postar textos de forma livre e, estes textos possam ter <b>upvote</b>.            
            A ordenação dos textos na tabela esta sendo feito através da quantidade de upvote, 
            quanto mais upvote seu texto receber, melhor posição na tabela terá. 
        </p>
    </Main>