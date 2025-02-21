terraform {
  # Required: "region", "bucket", "dynamodb_table" - will be configured in GitHub action
  backend "s3" {
    key     = "terraform-talrofe-website.tfstate"
    encrypt = true
  }
}
