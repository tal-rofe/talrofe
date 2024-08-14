module "acm_for_website_alb" {
  source  = "terraform-aws-modules/acm/aws"
  version = "5.0.0"

  domain_name         = var.website_domain_name
  zone_id             = aws_route53_zone.route53_zone_website.zone_id
  wait_for_validation = true

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project}-ACM-For-Website-ALB"
    }
  )
}