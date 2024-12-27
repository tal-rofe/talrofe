terraform {
  required_version = ">= 1.3.9"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.82.1"
    }

    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.35.1"
    }

    helm = {
      source  = "hashicorp/helm"
      version = "2.17.0"
    }
  }
}