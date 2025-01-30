import type { NextConfig } from "next"
import { Header } from "next/dist/lib/load-custom-routes"

const nextConfig: NextConfig = {
  async headers() {
    const corsAccessControl = [
      { key: "Access-Control-Allow-Credentials", value: "true" },
      { key: "Access-Control-Allow-Origin", value: "*" },
      {
        key: "Access-Control-Allow-Methods",
        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      },
      {
        key: "Access-Control-Allow-Headers",
        value:
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
      },
    ]

    return [
      {
        source: "/api/:path*",
        headers: corsAccessControl,
      },
    ] as Header[]
  },
}

export default nextConfig
