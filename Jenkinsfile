pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cloning Git') {
            steps {
          git 'https://github.com/alejon13/cypress-uitests-dou.git'
             }
        }

        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }

        stage('e2e Tests') {
            steps {
                sh 'npm run cypress:run'
            }
        }
    }
}