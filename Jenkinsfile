pipeline {
    agent {
        docker {
            image 'cypress/browsers'
        }
     }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }


        stage('Run Cypress Tests') {
            steps {

                sh "npx cypress run"
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
                fileIncludePattern: '**/*.cucumber.json',
                sortingMethod: 'ALPHABETICAL',
                trendsLimit: 100
         }
    }
 
}