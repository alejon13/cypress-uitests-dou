
node('test-tools') {

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

          load './Jenkinsfile.build'
}
