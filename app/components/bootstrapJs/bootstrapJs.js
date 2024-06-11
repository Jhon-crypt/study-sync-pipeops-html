"use client"

import { useEffect } from "react"

export default function BootstrapClientJs() {

    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.js')
    }, [])

    return null

}