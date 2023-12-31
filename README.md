# aws-tag-set
Simple wrapper for AWS resource Tags

# How to install 
```
npm i aws-tag-set
```

# How to use
```JavaScript
// Sample: get existing tags from an S3 bucket 
const client = new S3Client({ region });
const command = new GetBucketTaggingCommand({ Bucket: 'your-bucket-name' });
const response = await client.send(command);

// initialize wrapper with existing TagSet 
const tagSet = TagSet.fromAws(response.TagSet);

// add or override any tag as a regular object property
tagSet['yourTagKey1'] = 'Some value';
tagSet.yourTagKey2 = 'Some other value';

const params =
{
  Bucket: bucket.Name,
  Tagging: {
    TagSet: tagSet.toAws() // convert object to AWS TagSet structure
  }
}

// update bucket with new tags
const command2 = new PutBucketTaggingCommand(params);
const response2 = await client.send(command2);

return tagSet.toAws();
```
Alternatively you can just initialize empty `TagSet` object
```JavaScript
const tagSet = new TagSet();
tagSet.Name = 'My Name';
tagSet.toAws();
```