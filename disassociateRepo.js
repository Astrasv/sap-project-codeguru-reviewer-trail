const AWS = require('aws-sdk');


AWS.config.update({
    region: 'REGION',
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
  });

const codeguruReviewer = new AWS.CodeGuruReviewer();

async function disassociateRepository() {
    try {

        const params = {
            AssociationArn: 'YOUR_ASSOCIATIONARN',
        };

        await codeguruReviewer.disassociateRepository(params).promise();

        console.log('Repository successfully disassociated from CodeGuru Reviewer.');
    } catch (error) {
        console.error('Error disassociating repository:', error);
    }
}


disassociateRepository();
