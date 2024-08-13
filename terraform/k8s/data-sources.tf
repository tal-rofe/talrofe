data "aws_eks_cluster" "website" {
  name = "${var.project}-EKS-Cluster-Website"
}

data "aws_eks_cluster_auth" "website" {
  name = data.aws_eks_cluster.website.name
}

data "aws_iam_openid_connect_provider" "website" {
  url = data.aws_eks_cluster.website.identity[0].oidc[0].issuer
}

data "aws_region" "current" {}

data "aws_ecr_repository" "website" {
  name = var.website_ecr_repository
}
