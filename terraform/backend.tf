terraform {
  # Required: "region", "bucket" - will be configured in GitHub action
  backend "s3" {
    key          = "terraform-talrofe-website.tfstate"
    encrypt      = true
    use_lockfile = true
  }
}
