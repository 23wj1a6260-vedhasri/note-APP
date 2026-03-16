pipeline {
 agent any

 stages {

  stage('Clone Code'){
   steps{
    git 'https://github.com/23wj1a6260-vedhasri/note-APP.git'
   }
  }

  stage('Install Dependencies'){
   steps{
    sh 'npm install'
   }
  }

  stage('Build Docker Image'){
   steps{
    sh 'docker build -t note-app .'
   }
  }

  stage('Run Container'){
   steps{
    sh 'docker run -d -p 3000:3000 note-app'
   }
  }

 }

}