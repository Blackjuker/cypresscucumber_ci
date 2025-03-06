pipeline {
    agent {
        docker {
            image 'cypress/browsers'
            args '--entrypoint=""'
        }
    }
    parameters {
        string(name: 'TAG', defaultValue: '@', description: 'TAG du test')
    }
    stages {
        stage("Vérifier la version de Cypress") {
            steps {
                sh 'npx cypress --version'
            }
        }

        stage("Installer les dépendances") {
            steps {
                sh 'npm install'
            }
        }

        stage("Vérifier que npm fonctionne") {
            steps {
                sh 'npm --version'
            }
        }

        stage("Installation de Cypress") {
            steps {
                sh 'npx cypress install'
            }
        }

        stage("Exécuter les tests") {
            steps {
                script {
                    def testCommand = "npx cypress run"
                    if (params.TAG?.trim()) {
                        testCommand += " --env TAGS='${params.TAG}'"
                    }
                    sh testCommand
                }
            }
        }
    }

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
                    fileIncludePattern: '*/.cucumber.json',
                    sortingMethod: 'ALPHABETICAL',
                    trendsLimit: 100
        }
    }
}