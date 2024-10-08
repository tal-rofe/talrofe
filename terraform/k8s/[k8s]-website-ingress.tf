resource "kubernetes_ingress_v1" "website" {
  metadata {
    labels = {
      "app.kubernetes.io/component"          = "api"
      "helm-release-name-aws-alb-controller" = helm_release.ingress.name      # Implicit dependency on aws alb controller
      "helm-release-external-dns"            = helm_release.external_dns.name # Implicit dependency on external-dns
    }

    name      = "website-ingress"
    namespace = "default"

    annotations = {
      "alb.ingress.kubernetes.io/listen-ports" : "[{\"HTTP\": 80}, {\"HTTPS\": 443}]"
      "alb.ingress.kubernetes.io/target-type" : "ip"
      "alb.ingress.kubernetes.io/scheme"       = "internet-facing"
      "alb.ingress.kubernetes.io/ssl-redirect" = "443"
      # No need to declare certificate: https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/guide/ingress/cert_discovery/
    }
  }

  spec {
    ingress_class_name = "alb"

    rule {
      host = var.website_host

      http {
        path {
          path      = "/"
          path_type = "Prefix"

          backend {
            service {
              name = kubernetes_service_v1.website.metadata.0.name

              port {
                number = kubernetes_service_v1.website.spec.0.port.0.port
              }
            }
          }
        }
      }
    }
  }

  depends_on = [
    helm_release.ingress,
    helm_release.external_dns,
  ]
}
