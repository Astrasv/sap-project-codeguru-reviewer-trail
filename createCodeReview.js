const AWS = require('aws-sdk');


AWS.config.update({
    region: 'REGION',
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
  });

const codeguruReviewer = new AWS.CodeGuruReviewer();

async function createCodeReview(bucketName, objectKey) {
    try {

        const params = {
            RepositoryAssociationArn: `arn:aws:codeguru-reviewer:ap-southeast-1:339713166497:association:92cd2c5d-baf3-4869-bc98-ab1a35f71238`,
            Type: 'RepositoryAnalysis',
            SourceCodeType: {
                CommitDiff: {
                    SourceCommit: {

                        CommitId: 'COMMIT_ID',
                        RepositoryName: bucketName
                    }
                }
            }
        };

        const response = await codeguruReviewer.createCodeReview(params).promise();
        console.log('Code review created successfully:');
        console.log(response);
    } catch (error) {
        console.error('Error creating code review:', error);
    }
}


const bucketName = 'codeguru-reviewer-sap-project';
const objectKey = 'check.py';
createCodeReview(bucketName, objectKey);
