import React from 'react'
import Content from '../components/content'
import MainLayout from '../components/MainLayout'
import Hero from '../components/hero'

export default function Home () {
  return (
    <MainLayout>
      <Hero />
      <Content />
    </MainLayout>
  )
}
