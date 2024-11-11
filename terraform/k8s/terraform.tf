terraform {
  required_version = ">= 1.3.9"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.75.0"
    }

    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.33.0"
    }

    helm = {
      source  = "hashicorp/helm"
      version = "2.16.1"
    }
  }
}