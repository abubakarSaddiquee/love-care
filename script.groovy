#!/usr/bin/env groovy

def deployImg(){

          withCredentials([
            usernamePassword(credentialsId: 'bitbucket_dev-team-workspace', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')
          ]) {
            sshagent(['235250937587-SaleSites']) {
              sh """
                ssh -o StrictHostKeyChecking=no -tt ubuntu@3.10.118.164 '
                  git config --global credential.helper "store --file=/home/ubuntu/.git-credentials"
                  echo -e "https://$USERNAME:$PASSWORD@bitbucket.org/dev-team-workspace/legalhelpsquad_salesite.git" > /home/ubuntu/.git-credentials
                  cd legalhelpsquad_salesite
                  git pull origin master
                  docker compose up -d --build
                  docker system prune -a -f
                '
              """
            }
          }

}
return this
