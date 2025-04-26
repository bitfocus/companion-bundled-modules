# AWS EC2 module

1. Create a new User in the AWS IAM only for Companion.
2. Add an access key for the user - under use case select 'Other' and write down the Access key and the secret.
3. Add the required privileges to the user so that the EC2 state can be watched and controlled.
4. Enter the credentials into the Companion module and select the correct region in which you've deployed your EC2 instances (if you use multiple regions, just add the Companion Module multiple times)

Example AWS policy for the Companion user:

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "VisualEditor0",
			"Effect": "Allow",
			"Action": [
				"ec2:RebootInstances",
				"ec2:DescribeInstances",
				"ec2:StartInstances",
				"ec2:DescribeTags",
				"ec2:DescribeRegions",
				"ec2:StopInstances",
				"ec2:DescribeInstanceStatus"
			],
			"Resource": "*"
		}
	]
}
```
