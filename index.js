export class TagSet {
  constructor(awsTagSet = []) {
    awsTagSet.forEach(awsTag => {
      this[awsTag.Key] = awsTag.Value;
    })
  }

  static fromAws(awsTagSet) {
    return new TagSet(awsTagSet);
  }

  toAws() {
    const awsTagSet = [];
    Object.entries(this).forEach(([key, value]) => {
      awsTagSet.push({ Key: key, Value: value });
    })
    return awsTagSet;
  }
}
