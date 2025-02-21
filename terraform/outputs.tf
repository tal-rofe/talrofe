output "app_cloudfront_distribution_id" {
  description = "The distribution ID of the deployed app Cloudfront resource"
  value       = module.acm_cloudfront.cloudfront_distribution_id
}