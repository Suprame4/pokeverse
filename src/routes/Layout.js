import React from 'react';
import {useState, useEffect} from 'react';
import { Navigation } from '../components/Navigation';
import { PokemonCard } from '../components/PokemonCard';
import { InputGroup, Form, Col, Container, Row} from 'react-bootstrap';
import "../styles.css"
import { Outlet } from 'react-router-dom'

const Layout = ({ pokeFiltered, handleChange}) => {
    
    return (
        <div data-testid="app">
            <Navigation />
            <Outlet />

            <Container>
        <Row className='mb-4'>
          <Col sm='8' md='6' className='mx-auto'>
            <InputGroup>
              <InputGroup.Text id="search-id">Search</InputGroup.Text>
              <Form.Control 
              placeholder="Name"
              aria-label="Name"
              aria-describedby="search-id"
              onChange={handleChange}
          //alternative onChange
          // onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>


      <h1>Pokemon should appear here</h1>
      <div class="container">
        {pokeFiltered.map(poke => {
          return (
            <PokemonCard name={poke.name} url={poke.url} list={pokeFiltered}/>
          )
        })}
      </div>
      </Container>
        </div>
    )
}

export { Layout }