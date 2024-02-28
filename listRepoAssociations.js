const AWS = require('aws-sdk');

AWS.config.update({
    region: 'REGION',
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
  });

const codeguruReviewer = new AWS.CodeGuruReviewer();

async function listRepositoryAssociations() {
    try {

        const params = {};

        const response = await codeguruReviewer.listRepositoryAssociations(params).promise();
        const repositoryAssociations = response.RepositoryAssociationSummaries;

        if (repositoryAssociations.length === 0) {
            console.log('No repository associations found.');
        } else {
            console.log('Repository associations:');
            repositoryAssociations.forEach((association, index) => {
                console.log(`Repository ${index + 1}:`);
                console.log(`- Name: ${association.RepositoryName}`);
                console.log(`- Association ARN: ${association.AssociationArn}`);
                console.log(`- State: ${association.State}`);
                console.log('---');
            });
        }
    } catch (error) {
        console.error('Error listing repository associations:', error);
    }
}

listRepositoryAssociations();
