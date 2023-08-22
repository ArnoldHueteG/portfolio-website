import React from 'react'
import './Services.css'
import sqlServerImage from '../../assets/sql-server.png'
import pythonImage from '../../assets/Python.svg.png'
import gcpImage from '../../assets/gcp.png'
import azureImage from '../../assets/azure.png'
import awsImage from '../../assets/aws.jpg'
import proofOfConceptImage from '../../assets/proof-of-concept.png'
import architectureImage from '../../assets/cloud.png'
import soshelpImage from '../../assets/sos.png'

const servicesData = [
  { image: sqlServerImage, name: 'SQL Server', description: 'I give training in Business Intelligence tools and provide advice for database implementation projects, Data Lakes and Data Warehouses.' },
  { image: pythonImage, name: 'Python', description: 'I train experts in engineering fundamentals, API development, machine learning and data engineering. I provide advice on the implementation of data pipelines, ML and services.' },
  { image: gcpImage, name: 'Google Cloud Platform' , description: 'GCP training on BigQuery, Cloud SQL, Cloud Functions, Cloud Run, Dataproc, Dataflow and more. I provide advice for the implementation of Data Lakes, analytical solutions and machine learning.'},
  { image: azureImage, name: 'Microsoft Azure', description: 'Azure training on Synapse, Data Factory, Databricks, Cosmos DB, Analysis Services and more. I provide advice for the implementation of Data Lakes, analytical solutions and machine learning.' },
  { image: awsImage, name: 'Amazon Web Services', description: 'AWS training on Redshift, RDS, Lambda, Athena, DynamoDB, Glue, SageMaker and more. I provide advice for the implementation of Data Lakes, analytical solutions and machine learning.' },
  { image: proofOfConceptImage, name: 'Proof of Concept', description: 'Are you looking for expert support for your proof of concept? I have made dozens. Let\'s work together!' },
  { image: architectureImage, name: 'Cloud Diagnostic', description: '¿Quieres que evalúe el diseño de la arquitectura o del código de tu aplicativo? Puedo proponerte un rediseño para optimizar costos y tiempos.' },
  { image: soshelpImage, name: 'SOS Help', description: '¿Estás estancado con algún desarrollo? ¿No logras encontrar el error o no tienes idea de cómo implementar alguna solución? ¡Resolvámoslo juntos!' }
]

const Services = () => {
  return (
    <div className="wrapper">
      <h1 className="title">What can I do for you?</h1>
      <div className="services">
        {servicesData.map(service => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </div>
  )
}

type Service = {
  image: string;
  name: string;
  description: string;
};

type ServiceCardProps = {
  service: Service;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} className="service-image" />
      <div className="service-info">
        <p className="service-name">{service.name}</p>
        <p className="service-description">{service.description}</p>
      </div>
    </div>
  );
}

export default Services