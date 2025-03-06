pipeline {
    agent {
        docker {
            image "cypress/browsers:latest"
            args '--entrypoint=""'  
        }
    }
// parameters {
//         string(name: 'String_TAG', defaultValue: '', description: 'Tag de test')
//         choice(name: 'CHOICE_TAG', choices: ['@TC-002', '@TC-003', '@TC-003'], description: 'Sélectionne un tag de test')
//     }

    stages {
        stage('Vérifier la version de Cypress') {
            steps {
                sh "npm --version"
                sh "npm ci"
            }
        }
          stage('exécuter') {
            steps {
                sh 'npx cypress run'
                // sh 'npx cypress run --reporter junit'
            }
        }
    }
// post{
//         always {
//             // archiveArtifacts artifacts: 'cypress/reports/**/*.*', followSymlinks: false
//             junit 'results/**/*.xml'
//             // junit '**/test-output-*.xml'  // Spécifie où trouver les rapports JUnit


//         }
    post {
            always {
            cucumber buildStatus: 'UNSTABLE',
                    failedFeaturesNumber: 1,
                    failedScenariosNumber: 1,
                    skippedStepsNumber: 1,
                    failedStepsNumber: 1,
                    classifications: [
                            [key: 'Commit', value: '<a href="${GERRIT_CHANGE_URL}">${GERRIT_PATCHSET_REVISION}</a>'],
                            [key: 'Submitter', value: '${GERRIT_PATCHSET_UPLOADER_NAME}']
                    ],
                    reportTitle: 'My report',
                    fileIncludePattern: '**/*.cucumber.json',
                    sortingMethod: 'ALPHABETICAL',
                    trendsLimit: 100
            }
        }
}
