package com.dev.anma.sbreacteirslett

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class Controllers() {

    @GetMapping("/")
    fun getHomePage():String {
        return "home"
    }

    @GetMapping("/cats")
    fun getCatsPage():String {
        return "forward:/cats-app/index.html"
    }
}