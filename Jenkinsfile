pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('checkout') {
                  checkout([$class: 'GitSCM',
                      branches: [[name: '*/master']],
                      doGenerateSubmoduleConfigurations: false,
                      userRemoteConfigs: [[
                          credentialsId: 'd72d9266-ca86-4501-8f9c-43b8b7fc5913',
                          url: 'ssh://git@github.com:alejon13/cypress-uitests-dou.git'
                      ]],
                  ])
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