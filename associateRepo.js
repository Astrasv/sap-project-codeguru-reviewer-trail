const AWS = require('aws-sdk');

AWS.config.update({
  region: 'REGION',
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
});


const codeguruReviewer = new AWS.CodeGuruReviewer();

async function associateRepository(bucketName) {
  try {

    if (!bucketName.startsWith('codeguru-reviewer-')) {
      throw new Error('S3 bucket name must start with "codeguru-reviewer-"');
    }


    const params = {
        "Repository": { 
            "S3Bucket": { 
               "BucketName": "codeguru-reviewer-sap-project",
               "Name": "check.py"
            }
         }
    };

    const response = await codeguruReviewer.associateRepository(params).promise();

    console.log('Response:', response);
    console.log(`Repository "${bucketName}" successfully associated with CodeGuru Reviewer.`);
  } catch (error) {
    console.error('Error associating repository:', error);
  }
}

const bucketName = 'codeguru-reviewer-aws-py-bucket';
associateRepository(bucketName);
